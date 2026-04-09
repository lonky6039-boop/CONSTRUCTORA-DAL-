export function optimizar(materiales) {
  return {
    ladrillos: Math.ceil(materiales.ladrillos * 0.95),
    cemento: materiales.cemento * 0.9,
    arena: materiales.arena * 0.9,
  };
}
