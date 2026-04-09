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
