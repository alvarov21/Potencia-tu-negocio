import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeLogoInstanced() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const wrap = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/logo-cristal.png", (texture) => {
      texture.minFilter = THREE.LinearFilter;
      
      const aspect = texture.image.width / texture.image.height;
      const height = 4.2;
      const width = height * aspect;
      const geo = new THREE.PlaneGeometry(width, height);

      const capMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
      const innerMat = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true, 
        opacity: 0.1, 
        color: new THREE.Color(0x888888),
        depthWrite: false,
        side: THREE.DoubleSide
      });

      const layersCount = 300;
      const gap = 0.004; 
      
      group.position.z = (layersCount * gap) / 2;

      const front = new THREE.Mesh(geo, capMat);
      front.position.z = 0;
      group.add(front);

      const back = new THREE.Mesh(geo, capMat);
      back.position.z = -layersCount * gap;
      back.rotation.y = Math.PI; 
      group.add(back);

      const instanced = new THREE.InstancedMesh(geo, innerMat, layersCount - 2);
      const dummy = new THREE.Object3D();
      for (let i = 1; i < layersCount - 1; i++) {
        dummy.position.set(0, 0, -i * gap);
        dummy.updateMatrix();
        instanced.setMatrixAt(i - 1, dummy.matrix);
      }
      group.add(instanced);
    });

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = performance.now() / 1000;
      group.rotation.y = (time / 14) * Math.PI * 2;
      group.position.y = Math.sin(time * (Math.PI * 2 / 6)) * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!wrap) return;
      camera.aspect = wrap.clientWidth / wrap.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      wrap.innerHTML = "";
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.4))' }} 
    />
  );
}
