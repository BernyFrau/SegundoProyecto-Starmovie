
const titulob = document.getElementById("titulo");
const directorb = document.getElementById("director");
const aniob = document.getElementById("anio");
const buttonguardar=document.getElementById("guardarpelicula")

let pelicula= new Object;

let titulo="";
let director="";
let anio="";



titulob.addEventListener("change",(e)=>{titulo=e.target.value});
directorb.addEventListener("change",(e)=>{director=e.target.value});
aniob.addEventListener("change",(e)=>{anio=e.target.value});

buttonguardar.addEventListener("click",(e)=>{

    e.preventDefault();
    e.stopPropagation();

    pelicula.titulo=titulo;
    pelicula.director=director;
    pelicula.anio=anio;


    let peliculas=JSON.parse(localStorage.getItem("peliculas"))
   

    if(peliculas===null){
        localStorage.setItem("peliculas",JSON.stringify([pelicula]))
    }else{
        peliculas.push(pelicula);
        localStorage.setItem("peliculas",JSON.stringify(peliculas))
    }
})

    
    





