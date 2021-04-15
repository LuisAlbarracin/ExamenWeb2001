
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
    noticias.innerHTML += `<h3>${data[0].titulo} - Colegio - ${data[0].fecha}</h3><div class="section"><p>${data[0].descripcion}</p><a href="#">Ver Mas</a></div>
    <h3>${data[1].titulo} - Colegio - ${data[0].fecha}</h3><div class="section"><p>${data[1].descripcion}</p><a href="#">Ver Mas</a></div>
    <h3>${data[2].titulo} - Colegio - ${data[0].fecha}</h3><div class="section"><p>${data[2].descripcion}</p><a href="#">Ver Mas</a></div>
    <p id="Masnoticias">Todas las noticias</p>
    `
}


function cargarNoticias(){
    const url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url1)
    .then((response)=>{
        console.log(response)
        
        response.json()
        })
    .then((data)=>{
        console.log(data)
        llenarNoticias(data)
    })
    .catch((err) => console.log(err))
}


cargarDeportes()
cargarTecnologia()
llenarNoticias()