const titulosLibros = ["Padre Rico Padre Pobre", "Los juegos del Hambre", "Alicia en el pais de las maravillas"];
const disponibilidadLibro = ["N", "S", "S"];

function buscarLibro(cadena) {
  const librosEncontrados = titulosLibros.filter((libro) =>
    libro.includes(cadena)
  );
  console.log(librosEncontrados);

  if (librosEncontrados.length > 0) {
    document.write(`<h2>Lista de Libros encontrados:</h2>`);
    document.write(`<ul>`);
    for (let i = 0; i < librosEncontrados.length; i++) {
      document.write(`<li>Libro: <b>'${librosEncontrados[i]}'</b></li>`);
    }
    document.write(`</ul>`);
  } else {
    document.write(
      `<h2>El libro buscado no se encuentra entre nuestro stock de libros.</h2>`
    );
  }
}

function verificarPrestamo(cadena) {
  let b = true;
  for (let i = 0; i < titulosLibros.length; i++) {
    if (cadena === titulosLibros[i]) {
      document.write(
        `<p>La disponibilidad del libro: "${titulosLibros[i]}" es de: <b>${disponibilidadLibro[i]}</b></p>`
      );
      b = false;
    }
  }
  if (b) {
    document.write(
      `<h2>El libro buscado no se encuentra entre nuestro stock de libros.</h2>`
    );
  }
}

function listarDisponibilidad() {
  document.write(`</tbody></table>`);

  document.write(`<h2>Lista de disponibilidad de libros:</h2>`);
  document.write(`<table><thead>`);
  document.write(`<tr>`);
  document.write(`<th>libro</th><th>disponibilidad</th>`);
  document.write(`<tr>`);
  document.write(`<thead><tbody>`);
  for (let i = 0; i < titulosLibros.length; i++) {
    document.write(`<tr>`);
    document.write(`<td>${titulosLibros[i]}</td>`);
    document.write(`<td>${disponibilidadLibro[i]}</td>`);
    document.write(`<tr>`);
  }
  document.write(`</tbody></table>`);
}

const busqueda = prompt("¿Qué libro desea buscar?");

buscarLibro(busqueda);

const verificacion = prompt("¿De qué libro desea conocer su disponibilidad?");

verificarPrestamo(verificacion);

listarDisponibilidad();