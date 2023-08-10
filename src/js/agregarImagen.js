import { Dropzone } from "dropzone";

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
let cantidadImagenes = 2;

Dropzone.options.imagen = {
    dictDefaultMessage: 'Sube tus imagenes aquí',
    acceptedFile:'.png,.jpg,.jpeg',
    maxFilesize:5, //5mb
    maxFiles:cantidadImagenes, 
    parallelUploads:cantidadImagenes, //tiene que ser igual a maxFiles;
    autoProcessQueue:true,
    addRemoveLinks:true,
    dictRemoveFile: 'Remover Archivo',
    dictMaxFilesExceeded: `El límite es ${cantidadImagenes} ${cantidadImagenes!=1?'Imagenes':'imagen'}`,
    headers:{
        'CSRF-Token':token,
    },
    paramName: 'imagen'
}