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


//Nodos de texto del textarea
let textNewComment = document.createTextNode(comments);

//
const contenedorElemento = document.createElement("p");
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);

})