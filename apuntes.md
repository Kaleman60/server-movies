# Apuntes
## Traer el csv e iniciar el archivo

## Pasos a seguir para importar un archivo csv a sqlite3 y despues manejarlo con bun

1. Copiar el archivo en la carpeta donde se esta trabajando
```bash
cp /ruta/del/archivo/movies.csv .
```

2. Eliminar el archivo de la base de datos antes creada
```bash
rm movies.db
```
3. Despues con sqlite3 se crea una base de datos y despues se inicializa
```bash
sqlite3 movies.db
```
4. Entrar al sqlite3 movies.db que es la base de datos y colocamos el comando
```bash
.mode csv
```
Que hace que se importe el archivo en formato csv
Despues se ingresa .mode csv y luego se importa el archivo con el comando

```bash
.import movies.csv movies
```
que hace que se importe el archivo csv a la tabla movies

5. Si se quiere verificar que se haya importado correctamente se puede hacer con el comando
```sql
SELECT * FROM movies LIMIT 5;
```
6. Si se quiere insertar los datos en otra tabla se puede hacer con el comando
```bash
INSERT INTO movies (title, genres) SELECT title, genres FROM temp;
```


Despues no salimos de sqlite3 y despues en la terminal colocamos el comando
```bash
sqlite3 movies.db .dump > schema.sql
```
que hace que se cree el archivo schema.sql con la estructura de la base de datos.
7. Ahora se crea un archivo dump.sql para insertar datos de prueba en la base de datos.
8. Finalmente se crea el archivo modelMovies.ts para manejar la base de datos desde bun.

## modelMovies.ts
```typescript
import { Database } from "bun:sqlite"
async function initDB(): Promise<Database>{
    const db = new Database("movies.db")
    const schema: string = await Bun.file("./schema.sql").text()
    db.run(schema)
    return db
}
function getAllMovies(db : Database){
    const query = db.query("SELECT * FROM movies")
    return query.all()
}
const db = await initDB()
const movies = getAllMovies(db)
console.log(movies)
```
## schema.sql
```sql
CREATE TABLE IF NOT EXISTS movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    genres TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);
```
## dummy.sql
```sql
INSERT INTO movies(title, genres)VALUES
("test", "test"),
("The matrix", "Action, Scifi"),
("Avengers", "Action, Scifi"),
("Fast and Furious", "Action, Scifi");

``` 
Y ya despues se puede correr el archivo modelMovies.ts con bun
```bash
bun modelMovies.ts
```



## Notas adicionales
MVC: Modelo Vista Controlador
- Modelo: Maneja la logica de datos y la base de datos en ese caso seria el archivo modelMovies.ts
- Vista: Maneja la interfaz de usuario, en este caso no se tiene una vista ya que es un proyecto de consola que seria el archivo apuntes.md
- Controlador: Maneja la logica de la aplicacion que seria el index.ts

CRUD: Crear, Leer, Actualizar, Eliminar
- Crear: INSERT
- Leer: SELECT
- Actualizar: UPDATE
- Eliminar: DELETE



