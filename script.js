
function llenarDeportes(data) {

    const depor = document.getElementById("deportes")
    depor.innerHTML += `<p id="deportes-${data[0].id}">${data[0].titulo}</p><hr><p id="deportes-${data[1].id}">${data[1].titulo}</p><hr><p id="deportes-${data[2].id}">${data[2].titulo}</p>`


}

function cargarDeportes() {

    const url2 = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";
    fetch(url2)
        .then((response) => response.json())
        .then((data) => {
            llenarDeportes(data)
        })
        .catch((err) => console.log(err))
}

function llenarTecnologia(data) {
    const tecnologia = document.getElementById("tecnologia")
    tecnologia.innerHTML += `<p id="tecnologia-${data[0].id}">${data[0].titulo}</p><hr><p id="${data[1].id}">${data[1].titulo}</p><hr><p id="${data[2].id}">${data[2].titulo}</p>`

}

function cargarTecnologia() {

    const url3 = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
    fetch(url3)
        .then((response) => response.json())
        .then((data) => {
            llenarTecnologia(data)
        })
        .catch((err) => console.log(err))
}


function llenarNoticias(data) {
    const noticias = document.getElementById('noticias')
    noticias.innerHTML += `<h3 class="noticia">${data[0].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion"><span>${data[0].descripcion}. &nbsp<a href="#" id='noticias-${data[0].id}'>Ver Mas</a></span></div>
    <h3 class="noticia">${data[1].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion pt-20"><span>${data[1].descripcion}. &nbsp<a href="#" id='noticias-${data[1].id}'>  Ver Mas</a></span></div>
    <h3 class="noticia">${data[2].titulo} - Colegio - ${data[0].fecha}</h3><div class="seccion pt-20"><spanp>${data[2].descripcion} &nbsp<a href="#" id='noticias-${data[2].id}'>  Ver Mas</a></span></div>
    <p id="mas-noticias">Todas las noticias</p>
    `
    const imagen = document.getElementById('imagenCarusel')
    imagen.src = data[0].img
}



function cargarNoticias() {
    const url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url1)
        .then((response) => response.json())
        .then((data) => {
            llenarNoticias(data)
        })
        .catch((err) => console.log(err))
}

function cargarFecha() {
    const fecha = document.getElementById('fecha')
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const hoy = new Date();
    fecha.innerHTML = hoy.getDate() + " de " + meses[hoy.getMonth()] + " del " + hoy.getFullYear() + " Cúcuta"
}

function cargarContenido(id) {
    const url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url1)
        .then((response) => response.json())
        .then((data) => {
            const contenedor = document.getElementById('contenido')
            let datos;
            for (let i = 0; i < data.length; i++) {
                if (datos[i].id === id) {
                    datos = datos[i]
                    break;
                }
            }

            contenedor.innerHTML = `
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${datos.img}" class="d-block w-100" alt="..." id="imagenCarusel">
                </div>
            </div>
        </div>
        <div class="" id="noticias" class="seccion p-3">
        <h3 class="noticia">${datos.titulo} - Colegio - ${datos.fecha}</h3><div class="seccion"><span>${datos.descripcion}</span><p>${datos.detalle}</p></div>
        </div>`
        })
        .catch((err) => console.log(err))
}

    const noticia1 = document.getElementById('noticias-1')
    const noticia2 = document.getElementById('noticias-2')
    const noticia3 = document.getElementById('noticias-3')

    /*
    noticia1.addEventListener('click', function () {
        cargarContenido("1")
    })
    noticia2.addEventListener('click', function () {
        cargarContenido("2")
    })
    noticia3.addEventListener('click', function () {
        cargarContenido("3")
    })
    */

cargarFecha()
cargarDeportes()
cargarTecnologia()
cargarNoticias()

