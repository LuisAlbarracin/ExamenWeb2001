function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function cargarNoticias() {
  const url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      llenarNoticias(data);
    })
    .catch((err) => console.log(err));
}

function llenarNoticias(data) {
  const noticias = document.getElementById("noticia");
  let noticia = getParameterByName("id");

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == noticia) {
      noticias.innerHTML += `
          <h1 class="noticia">${data[i].titulo} - Colegio - ${data[i].fecha}</h1>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${data[i].img}" class="d-block w-100" alt="..." id="imagenCarusel">
                        </div>
            </div>
          </div>
            <div class="seccion">
                <p>${data[i].descripcion}.</p>
                <p >${data[i].detalle}</p>
            </div>
            <p id="mas-noticias">Todas las Noticas </p>
    `;

      img.src = data[i].img;
    }
  }
}

function llenarDeportes(data) {

  const depor = document.getElementById("deportes")
  depor.innerHTML += `
  <p ><a href="deportes.html?id=${data[0].id}" class="text-dark text-decoration-none">${data[0].titulo}</p><hr>
  <p ><a href="deportes.html?id=${data[1].id}" class="text-dark text-decoration-none">${data[1].titulo}</p><hr>
  <p ><a href="deportes.html?id=${data[2].id}" class="text-dark text-decoration-none">${data[2].titulo}</p>
  `


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
  tecnologia.innerHTML += `
  <p> <a href="tecnologia.html?id=${data[0].id}" class="text-dark text-decoration-none"> ${data[0].titulo}</a></p><hr/>
  <p> <a href="tecnologia.html?id=${data[1].id}" class="text-dark text-decoration-none"> ${data[1].titulo}</a></p><hr/>
  <p> <a href="tecnologia.html?id=${data[2].id}" class="text-dark text-decoration-none"> ${data[2].titulo}</a></p>
  `

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

function cargarFecha() {
  const fecha = document.getElementById('fecha')
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  const hoy = new Date();
  fecha.innerHTML = hoy.getDate() + " de " + meses[hoy.getMonth()] + " del " + hoy.getFullYear() + " Cúcuta"
}

cargarFecha();
cargarDeportes();
cargarTecnologia();
cargarNoticias();
