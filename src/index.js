import cipher from './cipher.js';

//Cambio de pagina de bienvenida
const welcomePage = document.getElementById ("Start")
if (welcomePage) {
welcomePage.addEventListener("click", changePage) }

function changePage () {
location.href = "pagina.html";
}

//Funciones de cifrado y descifrar 
const selectPassword = document.getElementById("password1")
selectPassword.addEventListener("click", fnSelect)
function fnSelect(event) {
    event.preventDefault()

}

const btCifrar = document.getElementById("btCifrar")
btCifrar.addEventListener("click", fnCifrar)
function fnCifrar(event) {
    event.preventDefault()
    const clueString = document.getElementById("Clue").value
    const clueOffset = parseInt(selectPassword.value)

    document.getElementById("result").value = cipher.encode(clueOffset, clueString);
}

const passwordDecode = document.getElementById("password2")
passwordDecode.addEventListener("click", fnSelect2)
function fnSelect2(event) {
    event.preventDefault()
   
}

const btDescifrar = document.getElementById("btDescifrar")
btDescifrar.addEventListener("click", fnDescifrar)
function fnDescifrar(event) {
    event.preventDefault()
    const decodeString = document.getElementById("Clue2").value
    const decodeOffset = parseInt(passwordDecode.value)

    document.getElementById("result2").value= cipher.decode(decodeOffset, decodeString);
}