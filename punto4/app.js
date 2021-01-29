// Frigoríficos la 'Granja' es una empresa agropecuaria, que requiere implementar un aplicativo
// para su gestión empresarial.
// La empresa trabaja con tres tipos de productos: productos frescos, productos refrigerados y
// productos congelados.

// Todos los productos llevan esta información común: fecha de caducidad, numero de lote. A
// su vez cada tipo de producto lleva alguna información especifica.
// Los productos frescos deben llevar la fecha de envasado y el país de origen. Los productos
// refrigerados deben llevar el código del organismo de supervisión alimentaria. Los productos
// congelados deben llevar la temperatura de congelación recomendada.

// Desarrolle las clases JavaScript implementando una relación de herencia desde la
// superclase Producto hasta las subclases ProductoFresco, ProductoRefrigerado y
// ProductoCongelado. Cada clase debe disponer de su constructor y permitir establecer (set)
// y recuperar (get) el valor de sus atributos y tener un método que permita mostrar la
// información del objeto. Cree una función llamada testProductos donde se cree un objeto
// de cada tipo y se muestren los datos de cada uno de los objetos creados en la consola.

class Producto {
    constructor(fechaCaducidad, numeroLote) {
        this.fechaCaducidad = fechaCaducidad;
        this.numeroLote = numeroLote;
    }
    getFechaCaducidad() {
        return this.fechaCaducidad;
    }
    setFechaCaducidad(nuevaFecha) {
        this.fechaCaducidad = nuevaFecha;
    }
    getNumeroLote() {
        return this.numeroLote;
    }
    setNumeroLote(numero) {
        this.numeroLote = numero;
    }
}

class ProductoFresco extends Producto {
    constructor(fechaCaducidad, numeroLote, fechaEnvasado, pais) {

        super(fechaCaducidad, numeroLote);
        this.fechaEnvasado = fechaEnvasado;
        this.pais = pais;
    }
    getFechaEnvasado() {
        return this.fechaEnvasado;
    }
    setFechaEnvasado(nuevaFecha) {
        this.fechaEnvasado = nuevaFecha;
    }
    getPais() {
        return this.pais;
    }
    setPais(nuevoPais) {
        this.pais = nuevoPais;
    }
    mostrarInfo() {
        console.log(`fecha de caducidad: ${this.getFechaCaducidad()}\nnumero Lote: ${this.getNumeroLote()}\nfecha de Envasado: ${this.getFechaEnvasado()}\npais: ${this.getPais()}\n`);
    }
}


class ProductoRefrigerado extends Producto {
    constructor(fechaCaducidad, numeroLote, codigo) {

        super(fechaCaducidad, numeroLote);
        this.codigo = codigo;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(nuevoCodigo) {
        this.codigo = nuevoCodigo;
    }
    mostrarInfo() {
        console.log(`fecha de caducidad: ${this.getFechaCaducidad()}\nnumero Lote: ${this.getNumeroLote()}\ncodigo: ${this.getCodigo()}`);
    }
}

class ProductoCongelado extends Producto {
    constructor(fechaCaducidad, numeroLote, temperatura) {

        super(fechaCaducidad, numeroLote);
        this.temperatura = temperatura;
    }
    getTemperatura() {
        return this.temperatura;
    }
    setTemperatura(nuevaTemp) {
        this.temperatura = nuevaTemp;
    }
    mostrarInfo() {
        console.log(`fecha de caducidad: ${this.getFechaCaducidad()}\nnumero Lote: ${this.getNumeroLote()}\ntemperatura: ${this.getTemperatura()}`);
    }
}

function test() {
    let Fresco = new ProductoFresco('20/3/2021', 23, '20/11/2020', 'colombia')
    let Refri = new ProductoRefrigerado('20/3/2021', 23, '23232323');
    let Congelado = new ProductoCongelado('20/3/2021', 23, 34.5);

    Fresco.mostrarInfo();
    Refri.mostrarInfo();
    Congelado.mostrarInfo();
}

test()