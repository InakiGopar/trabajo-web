"use strict"

document.addEventListener("DOMContentLoaded", main);
function main(){
    //pasos para generar captcha//
    let longitud = 6;
    let parrafoCaptcha = document.getElementById("generador-captcha");
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'; //caracteres posibles del captcha
    let captcha = '';
    


    //generar captcha
    for(let i = 0; i < longitud; i++){
        //Elige un caracter random en base al Math.random()//
        let caracterRandom = Math.floor(Math.random()* caracteres.length);
        captcha += caracteres.charAt(caracterRandom);
    }
    parrafoCaptcha.innerHTML = captcha;    

    //validar captcha

    let form = document.getElementById("form");
    form.addEventListener("submit", validarCaptcha);

    function validarCaptcha(eventoFormulario){
        eventoFormulario.preventDefault();
        // Evita el envío del formulario 
        let captchaUsuario = document.getElementById("captcha-usuario");
        let mensaje = document.getElementById("mensaje-validacion");
        let nombre = document.getElementById("nombre");
        let email = document.getElementById("email");
        let contraseña = document.getElementById("contraseña");
        let mensajeTextArea = document.getElementById("mensaje");
    
        if(captchaUsuario.value === captcha){
            mensaje.innerHTML = "Registrado correctamente";
            nombre.value = "";
            email.value = "";
            contraseña.value = "";
            mensajeTextArea.value = "";
        }
        else{
            mensaje.innerHTML = "Tú no puedes pasar aquí, ¡eres un orco!";
        }
    }
    

}
