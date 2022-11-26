// * VALIDAR LOGIN

let loginForm = document.querySelector('.login-form')
let btnForm = document.querySelector('.btn-form')

let pStatus = document.querySelector('.error')
let mensajeStatus = document.querySelector('.mensaje-status')

function crearMensaje (mensaje){
    pStatus.innerHTML = mensaje
}

btnForm.addEventListener('click', (e)=>{
    let correoLogin = document.querySelector('.correo-login').value
    let contraseñaLogin = document.querySelector('.contraseña-login').value

    e.preventDefault()
    if(correoLogin === "" && contraseñaLogin === ""){
        crearMensaje('Rellena Los campos')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);
    }else if(correoLogin === ""){
        crearMensaje('Ingresa tu correo')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);
    }else if(contraseñaLogin === ""){
        crearMensaje('Ingresa tu contreseña')
        mensajeStatus.classList.add('mensaje-visible')
        setTimeout(() => {
            mensajeStatus.classList.remove('mensaje-visible')
        }, 4000);
    }else{
        loginForm.submit()
    }
});