'use strict'

class Adivina {

    //Esta clase se utiliza para caracterizar el juego 'Adivina' o Numero Magico, el cual recibe como parametro
    //El numero magico creado por el pc

    constructor(numeroMagico) {
        this.numeroMagico = numeroMagico;

    }
    getNumeroMagico() {
        return this.numeroMagico;
    }
    comprobarAcierto(valor) {

        if (valor < this.numeroMagico) {
            alert(`El numero ingresado: ${valor} es menor al numero magico, vuelve a intentarlo `);
            return false;

        }
        if (valor > this.numeroMagico) {
            alert(`El numero ingresado: ${valor} es mayor al numero magico, vuelve a intentarlo `);
            return false;

        }
        if (valor === this.numeroMagico) {
            alert(`Felicidades has ganado!`);
            return true;

        }
    }

}



function principal() {

    //Esta es mi funcion principal, la cual se encarga de pedir los datos al usuario y verificar si acertó o no

    let numeroMag = Math.floor(Math.random() * (50 - 1)) + 1;
    let juego = new Adivina(numeroMag);
    let ganar = false;
    let numeroUsuario = 0;

    do {
        try {
            numeroUsuario = Number(prompt('ingrese un numero entre 1 y 50 para adivinar el numero, para salir escribir el numero cero (0)'));
            if (numeroUsuario > 50) {
                throw new Error("El numero debe ser menor o igual a 50");
            }
            if (isNaN(numeroUsuario)) {
                throw new Error('Debes ingresar un numero');
            }
            if (numeroUsuario > 0) {
                ganar = juego.comprobarAcierto(numeroUsuario);
            }

        } catch (error) {
            alert(error);
        }


    } while (!ganar && (numeroUsuario != 0))

    let opcion = prompt('desea continuar un nuevo juego? (si o no)');
    if (opcion === 'si') {
        principal()
    } else {
        return 0;

    }




}

principal()