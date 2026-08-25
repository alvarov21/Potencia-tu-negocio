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

    const camera = new THREE.PerspectiveCamera(38, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
    camera.position.set(0, 0.3, 9);

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

    // Geometry: Ribbon
    const curvePts = [
      new THREE.Vector3(-1.7, -2.1, 0.0),
      new THREE.Vector3(-1.55, -1.0, 0.35),
      new THREE.Vector3(-1.15, -0.15, 0.55),
      new THREE.Vector3(-0.35, 0.25, -0.15),
      new THREE.Vector3(0.35, 0.15, -0.55),
      new THREE.Vector3(1.05, 0.55, -0.15),
      new THREE.Vector3(1.55, 1.25, 0.15),
      new THREE.Vector3(1.95, 2.05, 0.0),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePts, false, 'catmullrom', 0.5);

    const ribbonShape = new THREE.Shape();
    const rw = 0.42, rh = 0.16;
    ribbonShape.moveTo(-rw, -rh);
    ribbonShape.lineTo(rw, -rh);
    ribbonShape.lineTo(rw, rh);
    ribbonShape.lineTo(-rw, rh);
    ribbonShape.closePath();

    const extrudeSettings = {
      steps: 220,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelSegments: 4,
      extrudePath: curve,
    };
    const ribbonGeo = new THREE.ExtrudeGeometry(ribbonShape, extrudeSettings);

    // Glass Material
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.02,
      transmission: 1.0,
      thickness: 1.4,
      ior: 1.5,
      reflectivity: 0.6,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      attenuationColor: new THREE.Color(0xffffff),
      attenuationDistance: 2.2,
      envMapIntensity: 1.6,
      transparent: true,
    });

    const ribbon = new THREE.Mesh(ribbonGeo, glassMat);

    // Geometry: Arrow Head
    function arrowHeadGeo(scale: number) {
      const s = new THREE.Shape();
      s.moveTo(0, 0.55 * scale);
      s.lineTo(0.5 * scale, -0.4 * scale);
      s.lineTo(0.12 * scale, -0.18 * scale);
      s.lineTo(-0.12 * scale, -0.4 * scale);
      s.lineTo(-0.5 * scale, -0.4 * scale);
      s.closePath();
      return new THREE.ExtrudeGeometry(s, { 
        depth: 0.3 * scale, 
        bevelEnabled: true, 
        bevelThickness: 0.03, 
        bevelSize: 0.03, 
        bevelSegments: 3, 
        curveSegments: 24 
      });
    }
    const head = new THREE.Mesh(arrowHeadGeo(1.15), glassMat);
    head.position.set(2.35, 2.75, -0.12);
    head.rotation.z = -0.55;
    head.rotation.y = 0.25;

    // Grouping
    const group = new THREE.Group();
    group.add(ribbon);
    group.add(head);
    group.scale.setScalar(1.0);
    group.position.set(-0.15, -0.2, 0);
    scene.add(group);

    // Lighting
    const l1 = new THREE.PointLight(0xff7de0, 8, 12); l1.position.set(-4, 3, 4); scene.add(l1);
    const l2 = new THREE.PointLight(0x5ad1ff, 8, 12); l2.position.set(4, -2, 4); scene.add(l2);
    const l3 = new THREE.PointLight(0xffffff, 5, 14); l3.position.set(0, 4, 6); scene.add(l3);
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));

    // Interaction & Animation state
    let isDragging = false, prevX = 0, prevY = 0;
    let targetRotY = 0.6, targetRotX = -0.15;
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
