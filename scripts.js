/*
1. Examina la desestructuración en objetos 
anidados con un enfoque en propiedades que podrían no existir
*/
const info = {

    personal: {

        nombre: 'Carlos',

        apellido: 'Vega',

        detalles: {

            edad: 30,

            ocupacion: 'Ingeniero'

        }

    }

};

const { personal: { detalles: { edad, salario } } } = info;

console.log(edad);// Esperaba que diera como resultado 30

console.log(salario);// Salario no esta definida en la estructura de datos

/*
2. Evalúa el uso del operador spread para fusionar objetos con propiedades repetidas
 */

const objetoA = { a: 1, b: 2, c: 3 };

const objetoB = { b: 4, c: 5, d: 6 };

const resultado = { ...objetoA, ...objetoB };

console.log(resultado);
//  Las propiedades se reemplazan en la fusion con el objetoB

//3. Analiza el alcance de las variables dentro de bloques y funciones.

function verificar() {

    if (true) {

        const a = 2;

        let b = 3;

        var c = 4;

    }

    console.log(c);

    console.log(a);

    console.log(b);

}

verificar();

// Esperaba que todas las variables se ejecuten porque estan dentro de la funcion
// Las variables a y b no estan definidas, solo var se ejecuta porque es una variable global

//4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });

datos.edad = 30;

console.log(datos.edad);

// Const no puede ser manipulado porque tiene propiedad Object.freeze 
// La variable no arroja error al ejecutar el codigo apesar de que se trató de cambiar su valor inicial

//5. Comprende la manipulación de arrays con métodos que no modifican el array original.

const original = [1, 2, 3];

const nuevo = original.concat(4);

console.log(original);

console.log(nuevo);
// Esperaba que const no pudiera ser modificado
// Se le agregó a la const el valor de 4 con la funcion concat que fusiona arrays

//6. ¿Por qué el código produjo esa salida? ¿Cómo obtendrías el valor del tercer índice?

const frutas = ['manzana', 'naranja', 'pera', 'mango'];

const [primera, segunda] = frutas;

console.log(primera);

console.log(segunda);
// En los arrays cuando se desestructura el primer nombre obtiene el primer valor del array que 
//serian manzana y al segundo pena

//7. Examina el comportamiento del ámbito de `let` en bucles, especialmente en bucles anidados.

for (let i = 0; i < 3; i++) {

    for (let i = 0; i < 2; i++) {

        console.log(i);

    }

}
// Me esperaba que imprimiera todos los let
// Console.log imprime solo el LET del segundo bucle ignorando el primer let

//8. Operador Spread en Objetos ¿Por qué el código produjo esa salida? ¿Cómo solucionarías un problema si quisieras evitar sobrescribir la propiedad ‘b’?

const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const combinado = {...objeto1, ...objeto2};

console.log(combinado);

// La copia del Objeto1 fue reempalaza por los valores repetidos del Objeto2
//  Para evitar sobreescribir los valores fue usar un ciclo for y la condicional para convertir en arrays los valores repetidos
/**
const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const   R = { ...objeto1 };

for (let key in objeto2){
    if(key in R){
        R[key] = [R[key], objeto2[key]]
    }else {
        R[key] = objeto2[key]
    }
}
console.log(R);
 */
//

//9. Uso del operador Spread para combinar arrays. Analiza cómo se combinan los arrays y qué sucede con los elementos duplicados.

const numeros1 = [1, 2, 3];

const numeros2 = [3, 4, 5];

const combinados = [...numeros1, ...numeros2];

console.log(combinados);

//  Los elementos dublicados no se sobreescriben como en los valores de los objetos 

//10. Alcance y captura de variables en una función. Explora el ámbito de las variables dentro de una función y cómo esto afecta su visibilidad.

function demostracion() {

    var nombre = 'Ana';

    let edad = 25;

    if (true) {

        var nombre = 'Luis';

        let edad = 30;

    }

    console.log(nombre);

    console.log(edad);

}

demostracion();

// Los let no tienen el alcance que tienen los var en las funciones, let no se modifica porque solo existe en la condicional if
// var es global y esta presente incluso fuera de la condicional