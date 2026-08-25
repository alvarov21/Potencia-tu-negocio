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

    // ---- silueta PRECISA extraida de tu imagen real (169 puntos, vision por computador) ----
    const outline = [
      [0.79199,0.7998], [0.77637,0.79785], [0.7627,0.80859], [0.73633,0.80273], [0.6709,0.77051],
      [0.65039,0.75586], [0.51855,0.69824], [0.40918,0.66309], [0.37402,0.64746], [0.32031,0.63477],
      [0.27148,0.63086], [0.25293,0.61816], [0.24121,0.60254], [0.23438,0.60059], [0.24023,0.59277],
      [0.24023,0.57812], [0.27148,0.54688], [0.27734,0.53027], [0.30273,0.50781], [0.31836,0.46875],
      [0.37109,0.42676], [0.24219,0.26562], [0.21973,0.24512], [0.18262,0.22363], [0.16602,0.23242],
      [0.16211,0.22559], [0.13867,0.2168], [0.0918,0.26074], [0.06152,0.30371], [0.01855,0.3252],
      [-0.02637,0.32617], [-0.09961,0.31445], [-0.18359,0.32812], [-0.19629,0.33496], [-0.23633,0.33887],
      [-0.28418,0.33594], [-0.32129,0.32715], [-0.33691,0.33496], [-0.3418,0.32227], [-0.36816,0.2998],
      [-0.35449,0.2793], [-0.36523,0.22266], [-0.41406,0.13867], [-0.46094,0.00781], [-0.49023,-0.05762],
      [-0.49512,-0.08203], [-0.52539,-0.15039], [-0.54395,-0.16895], [-0.55371,-0.16113], [-0.57129,-0.19629],
      [-0.63379,-0.23438], [-0.6416,-0.24707], [-0.64746,-0.24707], [-0.64746,-0.25195], [-0.65625,-0.25586],
      [-0.66211,-0.26758], [-0.6875,-0.28711], [-0.68848,-0.29395], [-0.7041,-0.30762], [-0.70508,-0.31836],
      [-0.72559,-0.33594], [-0.72656,-0.34473], [-0.74512,-0.35938], [-0.74414,-0.36523], [-0.77637,-0.40234],
      [-0.82715,-0.48633], [-0.87305,-0.60742], [-0.86914,-0.61719], [-0.84473,-0.63281], [-0.84082,-0.64453],
      [-0.84961,-0.67578], [-0.81738,-0.67969], [-0.80469,-0.69727], [-0.77637,-0.70898], [-0.76562,-0.70605],
      [-0.75684,-0.71289], [-0.74219,-0.71582], [-0.73438,-0.71387], [-0.69336,-0.73145], [-0.68555,-0.72852],
      [-0.68262,-0.73242], [-0.64941,-0.73438], [-0.63184,-0.73047], [-0.58105,-0.74121], [-0.56445,-0.73926],
      [-0.51367,-0.74805], [-0.49609,-0.75488], [-0.45801,-0.74316], [-0.43359,-0.74805], [-0.41504,-0.72852],
      [-0.37891,-0.72559], [-0.37207,-0.71191], [-0.36133,-0.70801], [-0.32324,-0.64844], [-0.3125,-0.62109],
      [-0.30273,-0.61035], [-0.30469,-0.60449], [-0.29785,-0.59668], [-0.26465,-0.5127], [-0.24219,-0.46875],
      [-0.23145,-0.4248], [-0.22559,-0.41895], [-0.20605,-0.41406], [-0.20605,-0.39551], [-0.19238,-0.38379],
      [-0.1748,-0.37695], [-0.15723,-0.38574], [-0.14258,-0.37793], [-0.09668,-0.37695], [-0.07422,-0.36816],
      [-0.04785,-0.375], [-0.03809,-0.38477], [0.03516,-0.38379], [0.08496,-0.37793], [0.1709,-0.35352],
      [0.21387,-0.33203], [0.24316,-0.32422], [0.30176,-0.28906], [0.31055,-0.27734], [0.32617,-0.26758],
      [0.35449,-0.22949], [0.4209,-0.09082], [0.45801,-0.03906], [0.47461,-0.00195], [0.46875,0.00195],
      [0.47754,0.00781], [0.47559,0.01758], [0.48047,0.02148], [0.47949,0.02734], [0.4873,0.03027],
      [0.48633,0.03809], [0.49707,0.05566], [0.60254,0.1875], [0.62012,0.19238], [0.62402,0.18652],
      [0.64258,0.19824], [0.65137,0.19727], [0.69336,0.17676], [0.73535,0.13965], [0.75391,0.14355],
      [0.77832,0.125], [0.78906,0.12793], [0.79297,0.13477], [0.7998,0.20508], [0.83594,0.27637],
      [0.84277,0.30762], [0.84082,0.31641], [0.84668,0.32324], [0.85352,0.36523], [0.85449,0.40234],
      [0.84668,0.43066], [0.84766,0.44434], [0.82812,0.50391], [0.81934,0.57812], [0.82324,0.58203],
      [0.82227,0.59766], [0.81641,0.59375], [0.81055,0.59766], [0.81836,0.60547], [0.81152,0.60938],
      [0.81445,0.62598], [0.80762,0.63477], [0.80664,0.66602], [0.81836,0.68945], [0.81152,0.70312],
      [0.81445,0.7168], [0.79492,0.75488], [0.79883,0.77441], [0.79297,0.7832]
    ];

    const shape = new THREE.Shape();
    outline.forEach(([x, y], i) => {
      const X = x * 2.7, Y = y * 2.7;
      if (i === 0) shape.moveTo(X, Y); else shape.lineTo(X, Y);
    });
    shape.closePath();

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.08,
      bevelSegments: 6,
      curveSegments: 1,
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
