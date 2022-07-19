import cipher from './cipher.js';

console.log(cipher);

const selectPassword= document.getElementById ("password1")
selectPassword.addEventListener ("click", fnSelect)
function fnSelect (event) {
    event.preventDefault ()
    const clueOffset = selectPassword.value };

    const btCifrar = document.getElementById("btCifrar")
btCifrar.addEventListener ("click", fnCifrar)
function fnCifrar (event) {
    event.preventDefault ()
    const clueString= document.getElementById("Clue").value 

const clueOffset = parseInt(selectPassword.value) 


console.log (clueOffset, clueString)


document.getElementById("result").value = cipher.encode(clueOffset,clueString); 
};

