/*fetch('url')
.then(response => response.json())
.then(data => {
    console.log(data);
})*/


const respuesta = await fetch("/movies")
const movies = await respuesta.json()
console.log(movies)