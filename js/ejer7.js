class Contacto {
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
};

let mauro = new Contacto("Mauro Armas", "365828232")

let agenda = {
    contactos : [mauro],

    aniadirContacto: function(Contacto){
        this.contactos.push(Contacto)
    }, 
    existeContacto: function(Contacto){
        let encontrado = false
        for(let i=0; i<this.contactos.length;i++){           
            if(Contacto.nombre===this.contactos[i].nombre){
                alert("El contacto existe")
                encontrado = true
            }
        }
        if(!encontrado){
            alert("El contacto no existe")
        }
    }, 
    listarContactos: function() {
        let lista = ''
        document.write()

        for(let i=0; i<this.contactos.length;i++){
            lista += `-${this.contactos[i].nombre} -> ${this.contactos[i].telefono}\n`
        }
        return (lista)
    },
    buscarContacto: function(nomContacto){
        let encontrado = false
        for(let i=0; i<this.contactos.length;i++){
            if(nomContacto===this.contactos[i].nombre){
                alert(`El telefono de ${this.contactos[i].nombre} es ${this.contactos[i].telefono} `)
                encontrado=true
            }
        }
        if(!encontrado){
            alert("No se encontro a "+ nomContacto)
        }
    }, 
    eliminarContacto: function(Contacto){
        let encontrado = false
        for(let i=0; i<this.contactos.length;i++){
            if(Contacto.nombre==this.contactos[i].nombre){
                this.contactos.splice(i,1)
                alert("Contacto borrado")
                encontrado=true
            }
        }
        if(!encontrado){
            alert("El contacto NO existe")
        }
    },
    agendaLlena: function() {
        if(this.contactos.length===10){
            alert("Agenda llena")
        }else{
            alert("La agenda no está llena")
        }
    },
    huecosLibres: function() {
        alert("Se pueden agregar "+ (10-this.contactos.length)+ " más en la agenda")
    }
};

do{
    let nomContacto, numContacto
    var opcion = parseInt(prompt(`
    ============= MENU =============
    Ingrese el numero de la opción que desea realizar:
    1-Añadir Contacto
    2- Comprobar si existe Contacto
    3- Listar Contactos
    4- Buscar Contacto
    5- Eliminar Contacto
    6- Comprobar si la agenda se encuentra llena
    7- Cantidad de contactos restantes
    0- Finalizar Programa`))
    switch(opcion){
        case 1:
            if(agenda.contactos.length<10){
                nomContacto = prompt(`Ingrese el Nombre del contacto:`)
                numContacto = prompt(`Ingrese el Numero del contacto:`)
                let a = new Contacto(nomContacto,numContacto)
                agenda.aniadirContacto(a)
            }
            else{
                alert("La agenda está llena")
            }
            break
        case 2:
            nomContacto = prompt(`Ingrese el Nombre del contacto:`)
            let b = new Contacto(nomContacto,null) 
            agenda.existeContacto(b)
            break
        case 3:
            alert(agenda.listarContactos());
            break
        case 4:
            nomContacto = prompt(`Ingrese el Nombre del contacto a buscar:`)
            agenda.buscarContacto(nomContacto)
            break
        case 5:
            nomContacto = prompt(`Ingrese el Nombre del contacto a eliminar:`)
            let c = new Contacto(nomContacto,null) 
            agenda.eliminarContacto(c)
            break
        case 6:
            agenda.agendaLlena()
            break
        case 7:
            agenda.huecosLibres()
            break
        case 0:
            document.write("Ejecución Finalizada")
            break
        default:
            alert("Ingrese una opción válida")
    }

}while(opcion != 0);
