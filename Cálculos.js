export function calcularMateriales(objetos) {
  let metrosMuro = 0;

  objetos.forEach(o => {
    const dx = o.p2.x - o.p1.x;
    const dy = o.p2.y - o.p1.y;

    metrosMuro += Math.sqrt(dx * dx + dy * dy);
  });

  return {
    ladrillos: metrosMuro * 50,
    cemento: metrosMuro * 0.2,
    arena: metrosMuro * 0.3,
  };
}
