const estudiantes = ["Mauro Armas", "Juan Jose Ali", "Juan Mercado", "Maxi Gomez", "Igna Sanchez"]
const notasEstudiantes = [5,6,7,8,8]

function calcPromedioNotas(notas){
    let sum = 0;
    for(let i = 0 ; i< notas.length ; i++){
        sum += notas[i]
    }
    let prom = sum/notas.length
    return prom
}

function calcAprobados(estudiantes,notas){
    let aprobados = ''
    for(let i = 0 ; i< notas.length ; i++){
        if(notas[i]>=6){
            aprobados += "<li>" +estudiantes[i]+ "</li> \n" 
        }
    }
    return aprobados
}

document.write(`<p> El promedio de notas es: 
                ${calcPromedioNotas(notasEstudiantes)}
                </p>
                <h2>Los estudiantes aprobados son:</h2>
                <ol>\n
                ${calcAprobados(estudiantes,notasEstudiantes)}
                </ol>` )
