//LLamo a la memoria para acceder a los datos guardados:
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio