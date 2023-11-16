/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona{
    constructor(nombre, edad, dni, sexo, altura, peso, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
        this.nacimiento = parseInt(nacimiento);
    }
    mostrarGen = function () {
        if(1930<=this.nacimiento && this.nacimiento<=1948){
            document.write("<p>",this.nombre," pertenece a Silent Generation, lo que quiere decir que su rasgo caracteristico es la Austeridad 😐")
        }else if(1949<=this.nacimiento && this.nacimiento<=1968){
            document.write("<p>",this.nombre," es un Baby Boomer, lo que quiere decir que su rasgo caracteristico es la Ambicion 🤑")
        }else if(1969<=this.nacimiento && this.nacimiento<=1980){
            document.write("<p>",this.nombre," pertenece a la Generacion X, lo que quiere decir que su rasgo caracteristico es la Obsesión por el éxito 😎")
        }else if(1981<=this.nacimiento && this.nacimiento<=1993){
            document.write("<p>",this.nombre," es un millenial (Generación Y), lo que quiere decir que su rasgo caracteristico es la Frustración 😖")
        }else if(1994<=this.nacimiento && this.nacimiento<=2010){
            document.write("<p>",this.nombre," pertenece a la Generación Z, lo que quiere decir que su rasgo caracteristico es la Irreverencia 😋")
        }else{
            document.write("<p>Edad especificada fuera de rango</p>")
        }
    }
    mayorEdad = function () {
        if(this.edad>=18){
            document.write("<p>",this.nombre," es mayor de edad")            
        }else{
            document.write("<p>",this.nombre," es menor de edad")
        }
    }
    mostrarDatos = function () {
        document.write(`<p>Datos:
                        <br>- Nombre: ${this.nombre}
                        <br>- Edad: ${this.edad}
                        <br>- DNI: ${this.dni}
                        <br>- Sexo: ${this.sexo}
                        <br>- Altura: ${this.altura}
                        <br>- Peso: ${this.peso}
                        <br>- Año de Nacimiento: ${this.nacimiento}
        `)                 
    }
    generarDNI = function(){
        this.dni = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }

}

const persona = new Persona('Mauro Armas', 21, 24239832, 'H',169,70,2002);
persona.mayorEdad()
persona.mostrarDatos()
persona.mostrarGen()
persona.generarDNI()
persona.mostrarDatos()