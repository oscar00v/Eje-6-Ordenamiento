function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
}

const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
console.log(ordenarDescendente(numeros)); // [88, 9, 7, 6, 5, 3, 2, 1, -1]
///////////////////////////////////////////////////////////////////////////////
function ordenarPorAscii(arr) {
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

const caracteres = ['b', 'h', 'w', 'e', 'a'];
console.log(ordenarPorAscii(caracteres)); // ['a', 'b', 'e', 'h', 'w']
/////////////////////////////////////////////////////////////////////////////////
class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const suma = this.calificaciones.reduce((acc, nota) => acc + nota, 0);
        return suma / this.calificaciones.length;
    }
}

class Salon {
    constructor(alumnos) {
        this.alumnos = alumnos;
    }

    ordenarPorPromedio() {
        return this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
}

// Ejemplo de uso:
const alumno1 = new Alumno('Juan', [90, 85, 92, 88, 95]);
const alumno2 = new Alumno('Ana', [78, 85, 82, 80, 89]);
const alumno3 = new Alumno('Luis', [95, 90, 94, 92, 96]);

const salon = new Salon([alumno1, alumno2, alumno3]);
console.log(salon.ordenarPorPromedio());
/////////////////////////////////////////////////////////////////

function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

const palabras = ["adios", "hola", "maximo", "uno", "despedida"];
console.log(ordenarPorLongitud(palabras)); // ["uno", "hola", "adios", "maximo", "despedida"]
///////////////////////////////////////////////////////////////////
function ordenarCoordenadas(arr) {
    return arr.sort((a, b) => {
        const distanciaA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
        const distanciaB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
        return distanciaA - distanciaB;
    });
}

const coordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
console.log(ordenarCoordenadas(coordenadas)); // [[1,0], [2,2], [4,3], [7,3]]
