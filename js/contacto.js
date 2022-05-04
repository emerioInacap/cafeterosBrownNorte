
// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#formulario');

//Variables para inputs

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const personas = document.querySelector('#personas');
const hora = document.querySelector('#hora');
const fecha = document.querySelector('#fecha');




eventListeners()
function eventListeners(){
    //cuando la app inicia
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //validar campos del formulario
    nombre.addEventListener('blur', validarFormulario); // Blur es un evento que se ejecuta cuando yo este dentro del input y me salga.
    email.addEventListener('blur', validarFormulario);
    hora.addEventListener('blur', validarFormulario);
    fecha.addEventListener('blur', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);


    
}


//-------FUNCIONES --------

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('no-permitido', 'opacidad-media')
}

// validar formulario

function validarFormulario(e){

    if(e.target.value.length > 0) {

        //eliminar los errores

        const error = document.querySelector('p.error');
        error.remove();
        e.target.style.borderBottomColor = 'green';
        
    }else{
        e.target.style.borderBottomColor = 'red';

        mostrarError('Todos los campos son obligatorios');
    }

    //Expresion regular para email -> https://emailregex.com/

    if(e.target.type === 'email'){
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(er.test( e.target.value )){
            console.log('email valido')
        }else{
            mostrarError('Email no Valido')
            e.target.style.borderBottomColor = 'red';
        }
    }

}

function mostrarError(mensaje){
   
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.insertBefore(mensajeError, document.querySelector('.campo'));
    }

    
}



