DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    genres TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO movies(title, genres)VALUES
("test", "test"),
("The matrix", "Action, Scifi"),
("Avengers", "Action, Scifi"),
("Fast and Furious", "Action, Scifi");

UPDATE movies
SET title = "pelicula", genres = "generos"
WHERE id = 1;

DELETE FROM movies
WHERE id = 1;

/*CRUD :
C = Create
R = Read
U = Update
D = Delete
*/

/*MVC = Modelo vista controlador */


