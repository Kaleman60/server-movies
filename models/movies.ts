import { Database } from "bun:sqlite";

export function getMovies(db: Database, filters: {title: string | undefined, genres: string | undefined}){
    const {title,genres} = filters;
    let movies
    if (title && genres) movies = getMoviesByTitleAndGenre(db, title, genres)
    else if (title) movies = getMoviesByTitle(db, title)
    else if (genres) movies = getMoviesByGenre(db, genres)
    else movies = getAllMovies(db)
    return movies
}


export function getAllMovies(db : Database){
    const query = db.query("SELECT * FROM movies")
    return query.all()

}

export function getMovieById(db : Database, id: number){
    const query = db.query("SELECT * FROM movies WHERE id = ?")
    return query.get(id)
}

export function getMoviesByTitle(db : Database, title: string){
    const query = db.query("SELECT * FROM movies WHERE title LIKE ?")
    return query.all(`%${title}%`)
}

export function getMoviesByGenre(db : Database, genre: string){
    const query = db.query("SELECT * FROM movies WHERE genre = ?")
    return query.all(genre)
}

export function getMoviesByTitleAndGenre(db : Database, title: string, genre: string){
    const query = db.query("SELECT * FROM movies WHERE title LIKE ? AND genre = ?")
    return query.all(`%${title}%`, genre)
}