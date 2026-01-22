import { initDB } from "./db/init";
import { getAllMovies, getMovieById, getMoviesByTitle } from "./models/movies";
import express, { request } from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000
const db = await initDB()

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, new Date().toISOString())
        if (req.method === "GET") {
            console.log(req.query)
        }
    next()
}

app.use(logMiddleware)

app.get("/movies", (req, res) => {
    const title = req.query.title
    const peliculas = getMoviesByTitle(db, title)
    res.json(peliculas)

})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`)
})

