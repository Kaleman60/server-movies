import { initDB } from "./db/init";
import { getAllMovies, getMovieById, getMoviesByTitle } from "./models/movies";
import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000
const db = await initDB()

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, new Date().toISOString())
    next()
}

app.use(logMiddleware)

app.get("/movies", (req, res) => {
    const peliculas = getAllMovies(db)
    res.json(peliculas)

})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`)
})





