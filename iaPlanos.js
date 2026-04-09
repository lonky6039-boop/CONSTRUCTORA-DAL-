export function generarPlanoIA(input) {
  // Interpretación básica (expandible con IA real)
  return [
    { tipo: "muro", p1: { x: 0, y: 0 }, p2: { x: 7, y: 0 } },
    { tipo: "muro", p1: { x: 7, y: 0 }, p2: { x: 7, y: 5 } },
    { tipo: "muro", p1: { x: 7, y: 5 }, p2: { x: 0, y: 5 } },
    { tipo: "muro", p1: { x: 0, y: 5 }, p2: { x: 0, y: 0 } },
  ];
}
const grid = new THREE.GridHelper(50, 50, 0x1E3A8A, 0x1E3A8A);
scene.add(grid);
