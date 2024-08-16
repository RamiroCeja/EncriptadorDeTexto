//Creación de variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector("#btnCopiar");

//funcion para activar boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    activarBotonCopiar();
  
}

//funcion para encriptar
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);            
       }
    }
    return stringEncriptada
}

    //funcion para activar boton desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    activarBotonCopiar();
    
}

//funcion para desencriptar
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);            
       }
    }
    return stringDesencriptada
}
// Función para activar el botón de copiar
function activarBotonCopiar() {
    if (mensaje.value !== "") {
        btnCopiar.disabled = false;
    }
}
function copiarTexto() {
    // Selecciona el texto del textarea mensaje
    mensaje.select();
    document.execCommand("copy");

    //Mostrar el mensaje del texto copiado
    const mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.textContent ="Texto copiado al portapapeles";

    //Reiniciar las clases de animación para copias indeterminadas
    mensajeCopiado.classList.remove("show", "hide");
    void mensajeCopiado.offsetWidth; //Forzar un reflow para iniciar la animación
    mensajeCopiado.classList.add("show");

    // Ocultar el mensaje después de 4 segundos
    setTimeout(() => {
        mensajeCopiado.classList.add("hide");
    }, 4000);

    // Eliminar las clases después de que la animación termine
    setTimeout(() => {
        mensajeCopiado.classList.remove("show", "hide");
    }, 4500);
}
