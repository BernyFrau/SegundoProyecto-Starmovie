// Función para abrir el modal
function openModal() {
  $('#myModal').modal('show');
}

  // Función para guardar la película/serie
  function guardarPelicula() {
    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const anio = document.getElementById("anio").value;}

    if (titulo && director && anio) {
        const pelicula = {
            titulo: titulo,
            director: director,
            anio: anio
        };

        // Obtener las películas almacenadas en localStorage
        let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
        peliculas.push(pelicula);

        // Guardar las películas actualizadas en localStorage
        localStorage.setItem('peliculas', JSON.stringify(peliculas));

        // Cerrar el modal después de guardar
        // $('#modalAgregarEditar').modal('hide');

        // Actualizar la lista de películas
        actualizarListaPeliculas();
    } else 
        alert("Por favor, completa todos los campos")

// Función para guardar la película/serie
function guardarPelicula() {
    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const anio = document.getElementById("anio").value;

    if (titulo && director && anio) {
        const pelicula = {
            titulo: titulo,
            director: director,
            anio: anio
        };

        // Obtener las películas almacenadas en localStorage
        let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
        peliculas.push(pelicula);

        // Guardar las películas actualizadas en localStorage
        localStorage.setItem('peliculas', JSON.stringify(peliculas));

        // Cerrar el modal después de guardar
        // $('#modalAgregarEditar').modal('hide');

        // Actualizar la lista de películas
        actualizarListaPeliculas();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para actualizar la lista de películas
function actualizarListaPeliculas() {
    const peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    const listaPeliculas = document.getElementById("peliculas");
    listaPeliculas.innerHTML = "";

    peliculas.forEach((pelicula, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${pelicula.titulo} - Dirigida por ${pelicula.director}, ${pelicula.anio}`;
        listaPeliculas.appendChild(listItem);
    });
}

// Mostrar las películas al cargar la página
window.onload = function() {
    actualizarListaPeliculas();
};