console.log("Fuente de datos: ")
const personajesSimpsons = [
{ nombre: "Homero", edad: 39, rol: "Padre" },
{ nombre: "Marge", edad: 36, rol: "Madre" },
{ nombre: "Bart", edad: 10, rol: "Hijo" },
{ nombre: "Lisa", edad: 8, rol: "Hija" },
{ nombre: "Maggie", edad: 1, rol: "Hija" },
{ nombre: "Ned", edad: 35, rol: "Vecino" },
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
{ nombre: "Milhouse", edad: 10, rol: "Amigo" },
{ nombre: "Nelson", edad: 12, rol: "Bravucón" },
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

// Filtrar personajes menores de edad
const menorEdad = personajesSimpsons.filter(personaje => personaje.edad <= 18)
console.log("Personajes menores de edad: ")
console.log(menorEdad)

// Sumar edades de los personajes
const sumaEdad = personajesSimpsons.reduce((acumulador,personaje) => {
    return acumulador += personaje.edad
},0)
console.log("Sumar la edad de los personajes: ")
console.log(sumaEdad)

// Obtener los nombres de los personajes en un nuevo array
const nombresPersonajes = personajesSimpsons.map(personaje => personaje.nombre)
console.log("Conseguir la edad de los personajes: ")
console.log(nombresPersonajes)

// Cambiar el rol de los personajes
const cambiandoRol = personajesSimpsons.map(personaje => {
    if (personaje.edad < 18 && personaje.edad > 1){
        personaje.rol = "Estudiante"
    }
    return personaje
})
console.log("Si es menor, ponerle como rol Estudiante: ")
console.log(cambiandoRol)

// Agregar personajes con spread
const personajesSimpsons2 = [
    { nombre: "Burns", edad: 99, rol: "Millonario" },
    { nombre: "Smithers", edad: 36, rol: "Mayordomo" },
    { nombre: "Lenny", edad: 38, rol: "Amigo" },
    { nombre: "Carl", edad: 38, rol: "Amigo" },
]
const masPersonajes = [...personajesSimpsons, ...personajesSimpsons2]
console.log("Se agregan mas personajes utilizando Spread: ")
console.log(masPersonajes)