var textArea = document.querySelector(".textArea");
var mensaje = document.querySelector(".mensaje");

// var text = x;
// text = text.toLowerCase();
// var palabra = Array.from(text);


var vocales = ["a", "e", "i", "o", "u", ","];
var claves = ["ai", "enter", "imes", "ober", "ufat", "coma"];



function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";

}

function btnDesencriptar(){
   
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none"; 
     
}

document.querySelectorAll(".copyLink").forEach(copyLinkContainer => { 
  const inputField = copyLinkContainer.querySelector(".mensaje");
  const copyButton = copyLinkContainer.querySelector(".copiar");
  

  inputField.addEventListener("focus", () => inputField.select());
  copyButton.addEventListener("click", () => {
    const textCopy = inputField.value;

    inputField.select();
    navigator.clipboard.writeText(textCopy);



  })

})



function encriptar(x) {
    var text = x;
    text = text.toLowerCase();
    var palabra = Array.from(text);


    var i = x.length;
    var j = vocales.length;
    var newArr = palabra;
  
    for (var contador = 0; contador < i; contador++) {
      for (var cont = 0; cont < j; cont++) {
        if (newArr[contador] == vocales[cont]) {
          newArr[contador] = claves[cont];
        }
      }
    }
    resultado = newArr.toString();
    resultado= resultado.replace(/,/g, "");
    resultado= resultado.replace(/coma/g, "," );
    
    // document.write("<br>");
    // document.write(resultado);
    return resultado;
}

function desencriptar(x) {
  var i = vocales.length;
  var resultadod = x;
  for (var contador = 0; contador < i; contador++) {
    resultadod = resultadod.replaceAll(claves[contador], vocales[contador]);
  }
//   document.write(resultadod);
//   document.write("<br>");
  return(resultadod);
}



    



// encriptar(palabra);
// document.write("<br>");
// document.write("<br>");
// desencriptar(resultado);
