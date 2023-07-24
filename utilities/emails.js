import nodemailer from 'nodemailer'




const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  const { email,nombre,token} = datos;

  //enviar mail
  await transport.sendMail({
    from: 'BienesRaices',
    to: email, 
    subject: 'Confirma tu cuenta en BienesRaices',
    text: 'Confirma tu cuenta en BienesRaices',
    html:`<p>Hola ${nombre}, comprueba tu cuenta en BienesRaices</p>
      <p>Tu cuenta ya está lista, sólo debes confirmarla  en el siguiente link:
      <a href="${process.env.BACKEND_URL}:${process.env.PORT??3333}/auth/confirmar/${token}">Confirmar Cuenta</a></p>
      <p>Si tu no creaste esta cuenta, pudes ignorar el mensaje</p>
    `
  })
}

export{
    emailRegistro
}