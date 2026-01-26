/*fetch('url')
.then(response => response.json())
.then(data => {
    console.log(data);
})*/


const respuesta = await fetch("/movies")
const movies = await respuesta.json()
console.log(movies)

const tableBody = document.querySelector("#tabla")
console.log(tableBody)

movies.forEach(movie => createMovie(movie))

function createMovie(movie) {
    console.log(movie)
    const tr = document.createElement("tr")
    const tdID = document.createElement("td")
    const tdTitle = document.createElement("td")
    const tdGenres = document.createElement("td")

    tdID.textContent = movie.id
    tdTitle.textContent = movie.title
    tdGenres.textContent = movie.genres.replaceAll("|", ",")

    tr.appendChild(tdID)
    tr.appendChild(tdTitle)
    tr.appendChild(tdGenres)
    tableBody.appendChild(tr)
}

