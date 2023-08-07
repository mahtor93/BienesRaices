import { Configuration, OpenAIApi  } from 'openai';

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatGPT = async (req,res) =>{
    try{
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt:``
        });
        return res.status(200).json({
            message:'Funciona',
        })
    }catch(error){

    }
}

export { chatGPT };