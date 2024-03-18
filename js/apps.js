
const titulob = document.getElementById("titulo");
const directorb = document.getElementById("director");
const aniob = document.getElementById("anio");
const categoriab = document.getElementById("categoria");
const descripcionb = document.getElementById("descripcion");
const publicadob = document.getElementById("publicado");
const buttonguardar=document.getElementById("guardarpelicula")

let pelicula= new Object;

let titulo="";
let director="";
let anio="";
let categoria="";
let descripcion="";
let publicado="";
let codigo = 1 ;


titulob.addEventListener("change",(e)=>{titulo=e.target.value});
directorb.addEventListener("change",(e)=>{director=e.target.value});
aniob.addEventListener("change",(e)=>{anio=e.target.value});
categoriab.addEventListener("change",(e)=>{categoria=e.target.value});
descripcionb.addEventListener("change",(e)=>{descripcion=e.target.value});
publicadob.addEventListener("change",(e)=>{publicado=e.target.value});
buttonguardar.addEventListener("click",(e)=>{

    e.preventDefault();
    e.stopPropagation();

    pelicula.titulo=titulo;
    pelicula.director=director;
    pelicula.anio=anio;
    pelicula.categoria=categoria;
    pelicula.descripcion=descripcion;
    pelicula.publicado=publicado;
    pelicula.codigo=1;

    let peliculas=JSON.parse(localStorage.getItem("peliculas"))
   

    if(peliculas===null){
        localStorage.setItem("peliculas",JSON.stringify([pelicula]))
    }else{
        let nombrepelicula=peliculas.find((peli)=>peli.nombre===pelicula.nombre)
        if(nombrepelicula===undefined){
            alert("Ya existe la pelicula")
        }else{
        let ultimapelicula=peliculas[peliculas.length-1];
        console.log(ultimapelicula)
        let ultimocodigo=ultimapelicula.codigo +1;
        pelicula.codigo=ultimocodigo;
        peliculas.push(pelicula);
        localStorage.setItem("peliculas",JSON.stringify(peliculas))
        alert("Se agrego la pelicula")}
        window.reload()
    }
})
let peliculas=JSON.parse(localStorage.getItem("peliculas"))
let htmltablaproducto=""

let tabla = peliculas.map(function(pelicula){
  htmltablaproducto += `<tr>
              <td>${pelicula.codigo}</td>
              <td>${pelicula.titulo}</td>
              <td>${pelicula.categoria}</td>
              <td>${pelicula.descripcion}</td>
              <td>${pelicula.publicado}</td>
              <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" id="m-${pelicula.codigo}">Editar</button>
              <button type="button"  class="btn btn-danger" onclick="window.location.reload()" id="${pelicula.codigo}">Eliminar</button>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">MODIFICANDO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form class="m-3">
                  <div class="row">
                    <div class="mb-3 col-6">
                        <label for="Rubro" class="form-label">Rubro</label>
                        <h3 id="mRubro">${pelicula.nombre}</h3>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="NombreArt" class="form-label">Nombre del Articulo</label>
                        <h3 id="mNombreArt">${pelicula.categoria}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="mb-3 col-9">
                        <label for="Url-img" class="form-label">Url's de imagenes</label>
                        <input type="text" class="form-control" id="mUrlimg">
                        <input type="text" class="form-control" id="mUrlimg2">
                        <input type="text" class="form-control" id="mUrlimg3">
                    </div>
                    <div class="mb-3 col-3">
                        <label for="Talle" class="form-label">Talle:</label>
                        <input type="text" class="form-control" id="mTalle">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="Descripcion" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="mDescripcion"></textarea>
                </div>
                <div class="row">
                    <div class="mb-3 col-6">
                        <label for="Precio" class="form-label">Precio</label>
                        <input type="number" class="form-control" id="mPrecio">
                    </div>
                    <div class="mb-3 col-6">
                        <label for="Stock" class="form-label">Stock</label>
                        <input type="number" class="form-control" id="mStock">
                    </div>
      
            </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" onclick="window.location.reload()"   data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" onclick="window.location.reload()"  id="Guardar" >Guardar</button>
                </div>
              </div>
            </div>
          </div>     
              </td>
          </tr>`       
})

const tbody=document.getElementById("tablaPeliculas")

tbody.innerHTML=htmltablaproducto
    
    





