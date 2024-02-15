const productos = {
    A: 270,
    B: 340,
    C: 390
  };
  
  function calcularVuelto(precio, montoIngresado) {
    let vuelto = montoIngresado - precio;
    const monedas = [100, 50, 10];
    const vueltoEnMonedas = [];
  
    for (const moneda of monedas) {
      while (vuelto >= moneda) {
        vuelto -= moneda;
        vueltoEnMonedas.push(moneda);
      }
    }
  
    return vueltoEnMonedas;
  }
  
  function comprarProducto() {
    const producto = prompt("Elija producto (A: 270, B: 340, C: 390)").toUpperCase();
  
    if (productos.hasOwnProperty(producto)) {
      const precioProducto = productos[producto];
      let montoIngresado = 0;
  
      while (montoIngresado < precioProducto) {
        const monedaIngresada = parseInt(prompt(`Ingrese moneda 10 = (${montoIngresado + 10}) 50 = (${montoIngresado + 50}) 100 = (${montoIngresado + 100}) Cantidad total a pagar: (${precioProducto})`));
  
        if (![10, 50, 100].includes(monedaIngresada)) {
          alert("Moneda no válida. Ingrese 10, 50 o 100.");
          continue;
        }
  
        montoIngresado += monedaIngresada;
      }
  
      const vueltoEnMonedas = calcularVuelto(precioProducto, montoIngresado);
      alert(`Su vuelto: ${vueltoEnMonedas.join(' ')}`);
    } else {
      alert("Producto no válido. Elija entre A, B o C.");
    }
  }
  
  comprarProducto();
  