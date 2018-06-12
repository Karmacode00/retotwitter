let btn


const boton = document.getElementById("btn");

boton.addEventListener("click", () => {



  //Acá se guarda el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;
  
  
  //Limpiar el textarea
  document.getElementById("comment").value = "";

  //Contenedor donde quedarán los comentarios en html
  const cont = document.getElementById("cont");

  //Crear div contenedor
  const newComments = document.createElement("div");

//Textarea tenga un comentario
/* if(comments.length === 0 || comments === null) {
  alert("Debes ingresar un mensaje");
  return false;
} */


//Nodos de texto del textarea
let textNewComment = document.createTextNode(comments);

//
const contenedorElemento = document.createElement("p");
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);


})

function contar() {
  const max = "140";
  let cadena = document.getElementById("comment").value;
  let longitud = cadena.length;
 
    if(longitud <= max) {
         document.getElementById("contador").value = max-longitud;
    } else {
         document.getElementById("textArea").value = cadena.substr(0, max);
    }
 }

 /* function check() {
  if(document.getElementById("comment").value==="") { 
         document.getElementById('comment').disabled = true; 
     } else { 
         document.getElementById('comment').disabled = false;
     }
 } */