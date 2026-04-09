import React from "react";
import Editor from "./pages/Editor";

function App() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default App;
import React from "react";
import Canvas3D from "../components/Canvas3D";

export default function Editor() {
  return (
    <div>
      <h1>CONSTRUCTORA DAL</h1>
      <Canvas3D />
    </div>
  );
    }
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Canvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cubo de prueba (base futura de casa)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={mountRef}></div>;
    }
