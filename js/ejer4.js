/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados
*/

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos = function () {
        document.write("<p>El producto: ",this.nombre,", con código: ",this.codigo,", posee un precio de: ",this.precio,"<p>");
    }

}

const p1 = new Producto(87965, "Papas Lays", 500);
const p2 = new Producto(45969, "Coca-Cola", 900);
const p3 = new Producto(12978, "Mentoplus", 200);

const productos=[p1,p2,p3]

for(let i=0; i<productos.length;i++){
    productos[i].imprimirDatos();
}
