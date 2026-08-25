import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeLogo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const wrap = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(35, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    renderer.setClearColor(0x000000, 0); // Completely transparent
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    
    wrap.appendChild(renderer.domElement);

    // Environment map to simulate reflections
    function buildEnvMap() {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envScene = new THREE.Scene();
      const geo = new THREE.SphereGeometry(50, 32, 32);

      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, 256);
        grad.addColorStop(0.0, '#ff5da0');
        grad.addColorStop(0.22, '#ffd23f');
        grad.addColorStop(0.42, '#3ddc84');
        grad.addColorStop(0.62, '#38bdf8');
        grad.addColorStop(0.82, '#7c5cff');
        grad.addColorStop(1.0, '#ff5da0');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 256);
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.15) + ')';
          const w = Math.random() * 80 + 10, h = Math.random() * 3 + 1;
          ctx.fillRect(Math.random() * 512, Math.random() * 256, w, h);
        }
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;

      const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide });
      const mesh = new THREE.Mesh(geo, mat);
      envScene.add(mesh);
      const rt = pmrem.fromScene(envScene, 0.04);
      pmrem.dispose();
      return rt.texture;
    }
    
    scene.environment = buildEnvMap();

    // ---- silueta REAL extraida de la imagen (contorno trazado, 53 puntos) ----
    const outline = [
      [0.7891,0.7969], [0.7412,0.7998], [0.5781,0.7158], [0.2549,0.6143], [0.2451,0.5791],
      [0.3242,0.4668], [0.3662,0.4375], [0.3672,0.418], [0.1924,0.2129], [0.1387,0.2109],
      [0.0674,0.2705], [0.0527,0.3018], [0.0117,0.3184], [-0.0918,0.3066], [-0.2324,0.332],
      [-0.335,0.3262], [-0.3584,0.3018], [-0.3496,0.2441], [-0.4062,0.1387], [-0.5186,-0.165],
      [-0.5576,-0.1787], [-0.5723,-0.2139], [-0.623,-0.2412], [-0.7861,-0.4326], [-0.8574,-0.5928],
      [-0.8584,-0.6152], [-0.8369,-0.627], [-0.8408,-0.667], [-0.6904,-0.7227], [-0.4834,-0.7412],
      [-0.3799,-0.7217], [-0.3096,-0.6074], [-0.2451,-0.4639], [-0.2383,-0.415], [-0.209,-0.4121],
      [-0.2041,-0.3818], [-0.0996,-0.3711], [-0.0918,-0.3564], [-0.0078,-0.375], [0.0977,-0.3691],
      [0.2861,-0.2861], [0.3799,-0.1641], [0.4561,0.0098], [0.6006,0.1963], [0.666,0.2021],
      [0.7412,0.1475], [0.7891,0.1318], [0.7939,0.2168], [0.8223,0.2695], [0.8428,0.3613],
      [0.8213,0.5342], [0.7969,0.5713], [0.8105,0.7178]
    ];

    const shape = new THREE.Shape();
    outline.forEach(([x, y], i) => {
      const X = x * 2.6, Y = y * 2.6;
      if (i === 0) shape.moveTo(X, Y); else shape.lineTo(X, Y);
    });
    shape.closePath();

    const extrudeSettings = {
      depth: 0.55,
      bevelEnabled: true,
      bevelThickness: 0.11,
      bevelSize: 0.09,
      bevelSegments: 6,
      curveSegments: 4,
    };
    const logoGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    logoGeo.center();

    // Glass Material
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.02,
      transmission: 1.0,
      thickness: 1.6,
      ior: 1.5,
      reflectivity: 0.6,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      attenuationColor: new THREE.Color(0xffffff),
      attenuationDistance: 2.4,
      envMapIntensity: 1.7,
      transparent: true,
    });

    const logo = new THREE.Mesh(logoGeo, glassMat);

    // Grouping
    const group = new THREE.Group();
    group.add(logo);
    scene.add(group);

    // Lighting
    const l1 = new THREE.PointLight(0xff7de0, 8, 12); l1.position.set(-4, 3, 4); scene.add(l1);
    const l2 = new THREE.PointLight(0x5ad1ff, 8, 12); l2.position.set(4, -2, 4); scene.add(l2);
    const l3 = new THREE.PointLight(0xffffff, 5, 14); l3.position.set(0, 4, 6); scene.add(l3);
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));

    // Interaction & Animation state
    let isDragging = false, prevX = 0, prevY = 0;
    let targetRotY = 0.5, targetRotX = -0.1;
    let rotY = targetRotY, rotX = targetRotX;
    let autoRotate = true;

    const onPointerDown = (e: PointerEvent) => { 
      isDragging = true; 
      autoRotate = false; 
      prevX = e.clientX; 
      prevY = e.clientY; 
    };
    
    const onPointerUp = () => { isDragging = false; };
    
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX, dy = e.clientY - prevY;
      targetRotY += dx * 0.006;
      targetRotX += dy * 0.006;
      targetRotX = Math.max(-1.1, Math.min(1.1, targetRotX));
      prevX = e.clientX; 
      prevY = e.clientY;
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);

    // Resize handler
    const onResize = () => {
      if (!wrap) return;
      camera.aspect = wrap.clientWidth / wrap.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (autoRotate) targetRotY += 0.006;
      rotY += (targetRotY - rotY) * 0.08;
      rotX += (targetRotX - rotX) * 0.08;
      group.rotation.y = rotY;
      group.rotation.x = rotX;
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animationId);
      
      if (wrap.contains(renderer.domElement)) {
        wrap.removeChild(renderer.domElement);
      }
      
      // Dispose Three.js resources
      renderer.dispose();
      ribbonGeo.dispose();
      glassMat.dispose();
      head.geometry.dispose();
      scene.environment?.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }}
    />
  );
}
