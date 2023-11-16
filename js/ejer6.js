/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(isbn, titulo, autor, numPag) {
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPag = numPag;
    }

    get isbn() {
        return this._isbn;
    }
    set isbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
    }

    get titulo() {
        return this._titulo;
    }
    set titulo(nuevotitulo) {
        this._titulo = nuevotitulo;
    }

    get autor() {
        return this._autor;
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    get numPag() {
        return this._numPag;
    }
    set numPag(nuevoNumPag) {
        this._numPag = nuevoNumPag;
    }

    mostrarLibro = function () {
        document.write("<p>El libro ", this._titulo, " con ISBN ", this._isbn, " creado por el autor ", this._autor, " tiene páginas ", this._numPag, "<p>");
    }
}

const libro1 = new Libro(9789501298321, "Hábitos Atómicos", "James Clear", 257);
const libro2 = new Libro(9789506446949, "Holly", "Stephen King", 345);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPag > libro2.numPag) {
    document.write("<p>", libro1.titulo, " posee más páginas</p>");
} else if (libro1.numPag < libro2.numPag) {
    document.write("<p>", libro2.titulo, " posee más páginas</p>");
} else if (libro1.numPag === libro2.numPag) {
    document.write("<p>Los libros poseen la misma cantidad de páginas</p>");
}