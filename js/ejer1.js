/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

let auto = {
    //propiedades -> clave:valor
    color:'rojo',
    marca: 'audi',
    modelo: 'a3',
    encender: function (){
        console.log(this);
        document.write(`<p>Bruumm... Auto encendido </p>`)
    },
    apagar: function (){
        console.log(this);
        document.write(`<p>...Auto apagado</p>`)
    },
};

document.write(`<h2>Color: ${auto.color}</h2>`)
document.write(`<p>Marca: ${auto.marca}</p>`)
document.write(`Modelo: ${auto.modelo}</p>`)
auto.encender()
auto.apagar()