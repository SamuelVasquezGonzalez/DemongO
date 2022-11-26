// * VALIDAR REGISTRO

let registroForm = document.querySelector('.registro-form')
let btnFormDos = document.querySelector('.btn-form2')

let pStatus = document.querySelector('.error')
let mensajeStatus = document.querySelector('.mensaje-status')

function crearMensaje (mensaje){
    pStatus.innerHTML = mensaje
}

btnFormDos.addEventListener('click', (e)=>{
    let nombreRegistro = document.querySelector('.nombre').value
    let correoRegistro = document.querySelector('.correo').value
    let contraseñaRegistro = document.querySelector('.contraseña').value

    e.preventDefault()
    if(correoRegistro === "" && contraseñaRegistro === "" && nombreRegistro){
        crearMensaje('Rellena Los campos')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);

    }else if(correoRegistro === ""){
        crearMensaje('Ingresa tu correo')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);

    }else if(contraseñaRegistro === ""){
        crearMensaje('Ingresa tu contreseña')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);

    }else if(nombreRegistro === ""){
        crearMensaje('Ingresa tu nombre')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);

    }else{
        registroForm.submit()
    }
})