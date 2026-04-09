export function calcularCargas(area, altura) {
  const cargaMuerta = area * 300; // kg/m² (losa + materiales)
  const cargaViva = area * 200;   // uso humano

  return {
    total: cargaMuerta + cargaViva,
    porColumna: (cargaMuerta + cargaViva) / 4
  };
}
