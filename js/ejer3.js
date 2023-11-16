/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
        this.area = ancho*alto;
        this.perimetro = 2*(ancho+alto);
    }
    mostrar = function () {
        document.write("<p>El ancho del rectangulo es: ",this.ancho,", y su alto es: ",this.alto,"<p>");
    }
    modificar = function (ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

}

const r1 = new Rectangulo(5, 9)
r1.mostrar();
r1.modificar(4,3);
document.write("Rectangulo con datos modificados:")
r1.mostrar();