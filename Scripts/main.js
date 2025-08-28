

//import {mostrarResultados} from './funciones';

import { mostrarResultados } from "./Funciones";

const btnVotar = document.getElementById("votar");
const btnResultados = document.getElementById("mostrar");

btnEjecutar.addEventListener('click',ingresarVoto)
btnRecordar.addEventListener('click',verResultados)

let historial = [];

let info = ''

let tARespuesta = document.getElementById("laRespuesta");

function ingresarVoto(){
    let nombre = document.getElementById("elNombre").value;   
    let lenguaje = document.getElementById("elLenguaje").value;
    let res

    if (nombre.length==0 || isNaN(lenguaje)) {
        res = 'El nombre o el lenguaje, no fueron ingresados o tienen valores de entrada errados'

        document.getElementById("error").innerHTML = res;
        console.log(res);

    }else{
        document.getElementById("error").innerHTML = "";
        res = mostrarResultados(nombre, lenguaje)
        info +=  res +'\n'; 
        tARespuesta.textContent = res   
    }

    
}

function verResultados()
{
    tARespuesta.textContent = info;
}