const numeros = [1, 2, 3, 4, 5];
const otrosNumeros = numeros.concat([6, 7, 8, 9, 10]);
console.log(otrosNumeros);

// Puedo hacer lo mismo con el spread operator
const otrosNumerosSpread = [...numeros, 6, 7, 8, 9, 10];
console.log(otrosNumerosSpread);


const masNumeros = [11, 12, 13, 14, 15];
const todosLosNumeros = [...otrosNumerosSpread, ...masNumeros];
console.log(todosLosNumeros);

// También puedo usar el spread operator para clonar objetos
const persona = {
    nombre: "Alexis",
    edad: 30,
    ciudad: "Medellín"
};
const personaClonada = {...persona};
console.log(personaClonada);

// Puedo destructurar Arrays
const [primero, segundo, ...resto] = todosLosNumeros;
console.log(primero, segundo, resto);


// Puedo destructurar Objetos
const {nombre, edad, ciudad} = persona;
console.log(`Soy ${nombre}, de ${ciudad} y tengo ${edad} años.`);

// Operador ternario
const esMayorDeEdad = edad >= 18 ? "Sí, es mayor de edad" : "No, es menor de edad";
console.log(esMayorDeEdad);

const descripcionAnios = edad === 1 ? "año" : "años";
console.log(`Tengo ${edad} ${descripcionAnios}.`);

//Funciones tradicionales
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(5, 10));

// Funciones flecha
const sumar = (a, b) => a + b;
console.log(sumar(5, 10));

// Si la función flecha tiene más de una línea de código, usamos llaves y return
const restar = (a, b) => {
    const resultado = a - b;
    return resultado;
}
console.log(restar(10, 5));

// Si la función flecha tiene un solo parámetro, podemos omitir los paréntesis
const cuadrado = x => x * x;
console.log(cuadrado(5));

