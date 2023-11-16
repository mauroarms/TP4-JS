const productos = ["Coca Cola", "Pan", "Huevos", "Sprite"];
const precProductos = [800, 600, 200, 700];

function agregarProducto(producto, prec) {
  productos.push(producto);
  precProductos.push(prec);
}

function eliminarProducto(producto) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i] === producto) {
      productos.splice(i, 1);
      precProductos.splice(i, 1);
    }
  }
}

function calcularInventario() {
  let total = 0;
  precProductos.map((precio) => (total += precio));
  return total;
}

function mostrarProductos(cadena) {
  if (cadena === undefined) {
    document.write(`<h2>Lista de Productos:</h2>`);
  } else {
    document.write(`<h2>Lista de Productos (${cadena}):</h2>`);
  }
  document.write(`<ul>`);
  for (let i = 0; i < productos.length; i++) {
    document.write(
      `<li>Producto: <b>'${productos[i]}'</b> y Precio: $<b>${precProductos[i]}</b></li>`
    );
  }
  document.write(`</ul>`);
}

mostrarProductos("original");

agregarProducto("Queso", 700);

mostrarProductos("Lista con producto agregado Queso");

eliminarProducto("Coca Cola");

mostrarProductos("Lista sin el producto Coca Cola");