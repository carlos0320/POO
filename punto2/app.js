// Implemente una clase Profesor, considere los siguientes atributos:
// nombre (string), apellido (string), edad (int), casado (boolean),
// especialidad (boolean), esta clase debe permitir mostrar los datos
// de cada profesor.
// El programa debe permitir crear una lista de profesores con sus
// respectivos datos, a su vez también determinar cuantos profesores
// de la lista son casados y cuantos tienen especialidad.

class Persona {
    constructor(nombre, apellido, edad, casado) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.casado = casado;

    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getCasado() {
        return this.casado;
    }
    setCasado(casado) {
        this.casado = casado;
    }

}

class Profesor extends Persona {

    constructor(nombre, apellido, edad, casado, especialidad) {
        super(nombre, apellido, edad, casado)
        this.especialidad = especialidad;
    }
    getEspecialidad() {
        return this.especialidad;
    }
    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }
    mostrarDatos() {
        console.log(`Nombre: ${this.getNombre()} Apellido: ${this.getApellido()} Edad: ${this.getEdad()} casado? : ${this.getCasado()} especialidad?: ${this.getEspecialidad()}`);

    }
}

function numeroCasados(arregloProfes) {

    contadorCasados = 0;


    for (let elemento of arregloProfes) {
        for (const profe in elemento) {

            if ((profe === 'casado') && (elemento[profe] === true)) {
                contadorCasados++;
            }
        }
    }


    return contadorCasados;
}

function numeroConEspecialidad(arregloProfes) {
    debugger;
    contadorEspecialidad = 0;


    for (let elemento of arregloProfes) {
        for (const profe in elemento) {
            if ((profe === 'especialidad') && (elemento[profe] === true)) {

                contadorEspecialidad++;

            }
        }

    }
    return contadorEspecialidad;
}


function principal() {
    debugger;

    let nProf = Number(prompt('por favor ingrese la cantidad total de profesores'));
    let ArrProf = new Array(nProf);

    for (let i = 0; i < nProf; i++) {

        let profesor = new Object();
        let nombre, apellido, edad, casado, especialidad;
        nombre = prompt('ingrese el nombre del profesor');
        apellido = prompt('ingrese el apellido del profesor');
        edad = Number(prompt('ingrese la edad del profesor'));
        casado = prompt('El profesor es casado? (si o no)');
        casado = (casado === 'si') ? true : false;
        especialidad = prompt('El profesor tiene especialidad? (si o no)');
        especialidad = (especialidad === 'si') ? true : false;
        profesor = new Profesor(nombre, apellido, edad, casado, especialidad);
        ArrProf.push(profesor);

    }
    console.log('Los datos son:');
    ArrProf.forEach(profesor => profesor.mostrarDatos());
    console.log(`El numero de profes casados: ${numeroCasados(ArrProf)} y el numero de profes con especialidad ${numeroConEspecialidad(ArrProf)}`);

}

principal();