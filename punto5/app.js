'use strict'

class Vehiculo {
    constructor(color, ruedas) {
        this.color = color;
        this.ruedas = ruedas;

    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getRuedas() {
        return this.ruedas;
    }
    setRuedas(ruedas) {
        this.ruedas = ruedas;
    }
}

class Coche extends Vehiculo {
    constructor(color, ruedas, velocidad, cilindrada) {
        super(color, ruedas);
        this.velocidad = velocidad;
        this.cilindrada = cilindrada;
    }
    getVelocidad() {
        return this.velocidad;
    }
    setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }
    getCilindrada() {
        return this.cilindrada;
    }
    setCilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }

}

class Camioneta extends Coche {
    constructor(color, ruedas, velocidad, cilindrada, carga) {
        super(color, ruedas, velocidad, cilindrada);
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    setCarga(carga) {
        this.carga = carga;
    }
}

class Bicicleta extends Vehiculo {
    constructor(color, ruedas, tipo) {
        super(color, ruedas);
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }

}

class Motocicleta extends Bicicleta {
    constructor(color, ruedas, tipo, velocidad, cilindrada) {
        super(color, ruedas, tipo);
        this.velocidad = velocidad;
        this.cilindrada = cilindrada;

    }
    getVelocidad() {
        return this.velocidad;
    }
    setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }
    getCilindrada() {
        return this.cilindrada;
    }
    setCilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }
}

function catalogar(objeto) {
    console.log(objeto);
}
let objetoTest = new Motocicleta('rojo', 2, 'urbana', 34.5, 3000);
catalogar(objetoTest);