export function calcularCargas(area, altura) {
  const cargaMuerta = area * 300; // kg/m² (losa + materiales)
  const cargaViva = area * 200;   // uso humano

  return {
    total: cargaMuerta + cargaViva,
    porColumna: (cargaMuerta + cargaViva) / 4
  };
}
export function optimizarEstructura(datos) {
  let mejoras = [];

  if (datos.deformacion > 0.02) {
    mejoras.push("Aumentar altura de viga");
  }

  if (datos.tension > 150) {
    mejoras.push("Agregar armadura de refuerzo");
  }

  if (datos.momento > 10000) {
    mejoras.push("Reducir luz o agregar columna intermedia");
  }

  return mejoras;
}
