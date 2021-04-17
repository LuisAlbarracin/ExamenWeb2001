
//const url4 = "https://carlosreneas.github.io/endpoints/noticia_1.json";
//const url5 = "https://carlosreneas.github.io/endpoints/noticia_6.json";

function llenarDeportes(data){

    const depor = document.getElementById("deportes")
    depor.innerHTML += `<p>${data[0].titulo}</p><hr><p>${data[1].titulo}</p><hr><p>${data[2].titulo}</p>`

    
}

function cargarDeportes() {

  const url2 = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";
  fetch(url2)
  .then((response)=>response.json())
  .then((data)=>{
    llenarDeportes(data)
  })
  .catch((err) => console.log(err))
}

function llenarTecnologia(data){
    const tecnologia = document.getElementById("tecnologia")
    tecnologia.innerHTML += `<p>${data[0].titulo}</p><hr><p>${data[1].titulo}</p><hr><p>${data[2].titulo}</p>`

}

function cargarTecnologia(){

    const url3 = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
    fetch(url3)
    .then((response)=>response.json())
    .then((data)=>{
        llenarTecnologia(data)
    })
    .catch((err) => console.log(err))
}


function llenarNoticias(data){
    const noticias = document.getElementById('noticias')
    noticias.innerHTML += `<h3 class="noticia">${data[0].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion"><span>${data[0].descripcion}. &nbsp<a href="#">Ver Mas</a></span></div>
    <h3 class="noticia">${data[1].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion pt-20"><span>${data[1].descripcion}. &nbsp<a href="#">  Ver Mas</a></span></div>
    <h3 class="noticia">${data[2].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion pt-20"><spanp>${data[2].descripcion} &nbsp<a href="#">  Ver Mas</a></span></div>
    <p id="mas-noticias">Todas las noticias</p>
    `
    const imagen = document.getElementById('imagenCarusel')
    imagen.src= data[0].img
}



function cargarNoticias(){
    const url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url1)
    .then((response)=>response.json())
    .then((data)=>{
        llenarNoticias(data)
    })
    .catch((err) => console.log(err))
}

function cargarFecha(){
    const fecha = document.getElementById('fecha')
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const hoy = new Date();
    fecha.innerHTML = hoy.getDate()+ " de " + meses[hoy.getMonth()] + " del " +hoy.getFullYear() + " Cúcuta" 
}

cargarFecha()
cargarDeportes()
cargarTecnologia()
cargarNoticias()
