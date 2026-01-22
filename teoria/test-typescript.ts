const str = "hola mundo"
const n = 123

console.log(str, typeof str)
console.log(n, typeof n)

const str1 : string = "Hola mundo"
const n1 : number = 123
const b1 : boolean = true
console.log(n1, typeof n1)

function suma (a: number, b: number){
    return a + b
}

console.log(suma(1, 1))

function saludo(nombre: string, edad: number, favorita: string){
    return `hola soy ${nombre}, tengo ${edad}, y mi cosa favorita es ${favorita}`
}

type generoTipo = "Masculino" | "Femenino"  | "Otro"

function generarUsuario(){
    const nombre : string = "user" + Math.floor(Math.random() * 999)
    const genero: generoTipo = "Masculino"
    return { nombre, genero}

}



