import { initDB } from "./db/init";
import {Database} from "bun:sqlite";
import {getMoviesByGenre, getMoviesByTitleAndGenre, insertMovie} from "./models/movies";

const db: Database = await initDB();
insertMovie(db, "Prueba de pelicula", "Drama");
const movies = getMoviesByTitleAndGenre(db, "Prueba", "Drama");
console.log(movies);