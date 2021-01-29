//Desarrolle una clase Factura, que herede los atributos y métodos
// de la clase Precio, a su vez que tenga los atributos propios emisor y
// cliente, además de los métodos encapsulados para el emisor y
// cliente, implemente la funcionalidad imprimir factura, la cual debe
// mostrar en pantalla el emisor, cliente y valor de dicha factura.

class Precio {
    constructor(valor) {
        this.valor = valor;

    }
    getValor() {
        return this.valor;
    }
}

class Factura extends Precio {

    constructor(emisor, cliente) {

        super()
        this.emisor = emisor;
        this.cliente = cliente;

    }

    getEmisor() {
        return this.emisor;
    }
    getCliente() {
        return this.cliente;
    }
    setEmisor(nuevoEmisor) {
        this.emisor = nuevoEmisor;
    }
    setCliente(nuevoCliente) {
        this.cliente = nuevoCliente;

    }
    imprimirFactura() {
        console.log(`Emisor: ${this.emisor}, Cliente: ${this.cliente} y el valor: ${this.getValor()}`);
    }

}