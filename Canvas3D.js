function crearColumna(x, y, scene) {
  const geo = new THREE.BoxGeometry(0.2, 0.2, 3);

  const mat = new THREE.MeshStandardMaterial({
    color: 0x374151
  });

  const col = new THREE.Mesh(geo, mat);
  col.position.set(x, y, 1.5);

  scene.add(col);
}
<Canvas3D tool={tool} material={material} />
export default function Canvas3D({ tool, material }) {
const loader = new THREE.TextureLoader();

function obtenerMaterial(tipo) {
  let textura;

  switch (tipo) {
    case "ladrillo_macizo":
      textura = loader.load("/textures/ladrillo.jpg");
      break;
    case "ladrillo_ceramico":
      textura = loader.load("/textures/ceramico.jpg");
      break;
    case "bloque":
    case "hormigon":
      textura = loader.load("/textures/hormigon.jpg");
      break;
  }

  textura.wrapS = textura.wrapT = THREE.RepeatWrapping;
  textura.repeat.set(2, 2);

  return new THREE.MeshStandardMaterial({
    map: textura,
    roughness: 0.8,
    metalness: 0.1
  });
}
