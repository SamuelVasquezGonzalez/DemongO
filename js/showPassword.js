let mostrarOcultar = document.querySelector('.verContraseña')
mostrarOcultar.addEventListener('click', mostrar);

let ver = document.querySelector('.uno');
let ocultar = document.querySelector('.dos');


preventDefault();
function mostrar () {
    let contraseña = document.querySelector('.contraseña');
    
    if(contraseña.getAttribute('type') == 'password'){
        contraseña.setAttribute('type', 'text');
    }else{
        contraseña.setAttribute('type', 'password');
    }
    
    ver.classList.toggle('eyeinvisible')
    ocultar.classList.toggle('eyeinvisible')
}