import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js";

(() => {
  "use strict";
  const carIds = ["car", "trafficCar"];
  const colorSets = {
    red: ["#d70d25", "#ff5363", "#650513"],
    blue: ["#087bd4", "#4edcff", "#052a59"],
    yellow: ["#f5a900", "#fff06a", "#8a4300"],
    black: ["#252e38", "#a9bac8", "#080b10"]
  };
  const liveryColors = {
    stock: null, neon: "#13d9e9", stripe: null, carbon: "#242a31", sunset: "#f06a3e",
    ice: "#76e5ff", lime: "#8bdc32", purple: "#9659ed", sakura: "#f58ab6", gold: "#e9b83d",
    ocean: "#007f9e", flame: "#f34a22", desert: "#c69b62", candy: "#ff68b7", stealth: "#333943"
  };
  const wheelColors = { stock:"#20252a", silver:"#c6d0d8", gold:"#e7b52d", ice:"#8ceaff", red:"#f04452", neon:"#5cf4ff", white:"#f6f7f8", carbon:"#15181c", rainbow:"#bd6cf5" };
  const lightColors = { stock:"#ff3449", ice:"#69eaff", amber:"#ffb52e", green:"#65ff92", purple:"#c27aff", gold:"#ffe36c", rainbow:"#ff66df" };
  const auraColors = { blue:"#1cc9ff", flame:"#ff5a24", purple:"#bd4aff", emerald:"#35ff9d", gold:"#ffd34f", rainbow:"#f56dff" };
  const instances = [];

  function mat(color, metalness=0.25, roughness=0.3, extra={}) {
    return new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra });
  }
  function box(parent, size, position, material, bevel=0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function cylinder(parent, radius, depth, position, material, segments=32) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, segments), material);
    mesh.rotation.z = Math.PI / 2;
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function createCar(element) {
    if (!element) return;
    const canvas = document.createElement("canvas");
    canvas.className = "car3d-canvas";
    canvas.setAttribute("aria-hidden", "true");
    element.prepend(canvas);
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true, powerPreference:"low-power" });
    } catch (error) {
      canvas.remove();
      console.warn("3D表示を開始できないため、従来の車表示を使います。", error);
      return;
    }
    Array.from(element.children).forEach(child => {
      if (child !== canvas) child.classList.add("car3d-hidden-part");
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setSize(300, 160, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 300/160, 0.1, 100);
    // Rear chase camera: the car points toward +Z, so the camera sits behind it at -Z.
    camera.position.set(0.55, 2.65, -5.8);
    camera.lookAt(0, 0.48, 0);
    scene.add(new THREE.HemisphereLight(0xe8f6ff, 0x253040, 2.0));
    const key = new THREE.DirectionalLight(0xffffff, 3.2);
    key.position.set(3, 7, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x67cfff, 2.0);
    rim.position.set(-5, 3, -4);
    scene.add(rim);

    const rig = new THREE.Group();
    scene.add(rig);
    const model = new THREE.Group();
    rig.add(model);
    const assetModel = new THREE.Group();
    rig.add(assetModel);
    let loadedAsset = false;
    const bodyMat = mat("#d70d25", 0.58, 0.22);
    const highlightMat = mat("#ff5363", 0.48, 0.2);
    const darkMat = mat("#151c24", 0.45, 0.32);
    const glassMat = mat("#142b40", 0.55, 0.12, { transparent:true, opacity:0.94 });
    const trimMat = mat("#8b9aa5", 0.8, 0.2);
    const tyreMat = mat("#080a0d", 0.05, 0.8);
    const rimMat = mat("#c6d0d8", 0.85, 0.2);
    const lightMat = new THREE.MeshStandardMaterial({ color:"#ff3449", emissive:"#ff3449", emissiveIntensity:2.3, metalness:0.2, roughness:0.18 });
    const paintGroup = new THREE.Group(); model.add(paintGroup);
    const wheels = [];
    const decals = new THREE.Group(); assetModel.add(decals);
    const extras = new THREE.Group(); assetModel.add(extras);

    // A low, wide GT silhouette assembled from actual 3D meshes.
    box(model, [2.08,0.34,3.75], [0,0.48,0], bodyMat);
    box(model, [1.94,0.22,2.75], [0,0.68,0.05], highlightMat);
    box(model, [1.82,0.15,0.82], [0,0.73,1.32], bodyMat);
    box(model, [1.72,0.12,0.7], [0,0.72,-1.48], bodyMat);
    const cabin = new THREE.Group(); model.add(cabin);
    box(cabin,[1.38,0.57,1.58],[0,1.0,-0.12],glassMat);
    box(cabin,[1.48,0.1,1.65],[0,1.29,-0.12],darkMat);
    box(cabin,[1.47,0.1,0.18],[0,1.02,0.72],highlightMat);
    box(cabin,[1.48,0.09,0.15],[0,1.02,-0.94],highlightMat);
    box(model,[1.92,0.16,0.26],[0,0.45,1.86],darkMat);
    box(model,[1.9,0.13,0.26],[0,0.47,-1.88],darkMat);
    box(model,[1.6,0.16,0.18],[0,0.43,2.0],trimMat);
    for (const x of [-0.73,0.73]) {
      const lamp = box(model,[0.42,0.1,0.12],[x,0.66,1.79],lightMat);
      lamp.userData.frontLight = true;
    }
    box(model,[0.45,0.07,0.12],[0,0.7,1.82],mat("#111820",0.1,0.35));
    for (const x of [-1.03,1.03]) {
      for (const z of [-1.18,1.18]) {
        cylinder(model,0.43,0.27,[x,0.4,z],tyreMat,36);
        const rim = cylinder(model,0.25,0.285,[x,0.4,z],rimMat,32);
        cylinder(model,0.105,0.295,[x,0.4,z],darkMat,20);
        for (let i=0;i<5;i++) {
          const spoke = box(model,[0.045,0.045,0.25],[x,0.4,z],rimMat);
          spoke.rotation.y = i*Math.PI*2/5;
          spoke.position.x += Math.cos(i*Math.PI*2/5)*0.11;
          spoke.position.y += Math.sin(i*Math.PI*2/5)*0.11;
        }
        wheels.push({x,z,rim});
      }
    }
    // Side mirrors and a layered rear wing.
    for (const x of [-1.0,1.0]) {
      box(model,[0.28,0.13,0.28],[x,0.86,0.48],darkMat);
      box(model,[0.16,0.06,0.2],[x,0.91,0.49],highlightMat);
    }
    const wing = new THREE.Group(); assetModel.add(wing);
    box(wing,[2.2,0.1,0.34],[0,1.05,-1.78],darkMat);
    box(wing,[2.38,0.1,0.36],[0,1.2,-1.83],highlightMat);
    for (const x of [-0.72,0.72]) box(wing,[0.09,0.35,0.1],[x,0.88,-1.72],trimMat);
    const roofDecoration = new THREE.Group(); assetModel.add(roofDecoration);
    box(roofDecoration,[1.42,0.045,0.1],[0,1.35,-0.1],highlightMat);
    const aura = new THREE.Mesh(new THREE.SphereGeometry(1,20,12), new THREE.MeshBasicMaterial({color:"#1cc9ff",transparent:true,opacity:0.12}));
    aura.scale.set(1.4,0.35,2.25); aura.position.y=0.2; assetModel.add(aura);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.7,32), new THREE.MeshBasicMaterial({color:"#07131d",transparent:true,opacity:0.22,depthWrite:false}));
    shadow.rotation.x=-Math.PI/2; shadow.position.y=0.03; shadow.scale.set(1.0,1.35,1); assetModel.add(shadow);

    function getClass(prefix, fallback) {
      const name = Array.from(element.classList).find(c => c.startsWith(prefix));
      return name ? name.slice(prefix.length) : fallback;
    }
    function applyClasses() {
      const vehicle = getClass("car--","red");
      const base = colorSets[vehicle] || colorSets.red;
      const livery = getClass("livery--","stock");
      const custom = liveryColors[livery];
      const paint = custom || base[0];
      bodyMat.color.set(paint); highlightMat.color.set(custom ? new THREE.Color(custom).lerp(new THREE.Color("#ffffff"),0.35) : base[1]);
      bodyMat.needsUpdate = true; highlightMat.needsUpdate = true;
      if (loadedAsset) {
        const excluded = /wheel|tyre|tire|rubber|glass|window|light|lamp|chrome|rim/i;
        assetModel.traverse(node => {
          if (!node.isMesh || !node.material) return;
          const materials = Array.isArray(node.material) ? node.material : [node.material];
          for (const material of materials) {
            const label = `${node.name || ""} ${material.name || ""}`;
            if (/body|paint|chassis|car[_ -]?main/i.test(label) && !excluded.test(label)) {
              material.color.set(paint);
              material.needsUpdate = true;
            }
          }
        });
      }
      if (livery === "carbon") { bodyMat.roughness=0.52; bodyMat.metalness=0.72; }
      else { bodyMat.roughness=0.22; bodyMat.metalness=0.58; }
      const wheelStyle = getClass("wheels--","stock");
      rimMat.color.set(wheelColors[wheelStyle] || "#c6d0d8");
      const lightStyle = getClass("lights--","stock");
      lightMat.color.set(lightColors[lightStyle] || "#ff3449");
      lightMat.emissive.set(lightColors[lightStyle] || "#ff3449");
      const spoiler = getClass("spoiler--","stock");
      wing.visible = spoiler !== "none";
      wing.scale.x = spoiler === "wide" ? 1.2 : spoiler === "split" ? 0.86 : 1;
      wing.position.y = spoiler === "high" ? 0.32 : spoiler === "double" ? 0.16 : 0;
      const decal = getClass("decal--","none");
      while (decals.children.length) {
        const child = decals.children[0];
        decals.remove(child);
        child.geometry?.dispose();
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material?.dispose();
      }
      if (decal === "stripe" || livery === "stripe") {
        for (const x of [-0.37,0.37]) box(decals,[0.13,0.018,2.95],[x,0.85,0.12],mat("#f4f7f9",0.3,0.28));
      } else if (decal === "checker" || decal === "digital") {
        for (let i=0;i<8;i++) box(decals,[0.22,0.025,0.22],[-0.65+(i%4)*0.43,0.84,0.65-Math.floor(i/4)*0.35],mat(i%2?"#f4f7f9":"#111820",0.2,0.35));
      } else if (decal === "flame") {
        for (const x of [-0.68,0.68]) {
          const flame = box(decals,[0.18,0.035,1.0],[x,0.85,0.35],mat("#ff6b24",0.3,0.25));
          flame.rotation.y = x < 0 ? -0.22 : 0.22;
        }
      } else if (decal !== "none") {
        for (const x of [-0.66,0.66]) box(decals,[0.15,0.03,0.85],[x,0.85,0.2],mat(decal==="lightning"?"#ffe75b":decal==="stars"?"#ffffff":"#30d7ff",0.3,0.28));
      }
      while (roofDecoration.children.length) {
        const child = roofDecoration.children[0];
        roofDecoration.remove(child);
        child.geometry?.dispose();
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material?.dispose();
      }
      const roof = getClass("roof--","none");
      if (roof !== "none") {
        const c = roof === "japan" ? "#ed4050" : roof === "number" ? "#ffd12a" : roof === "digital" ? "#38e6f5" : "#f5f7fa";
        box(roofDecoration,[1.1,0.04,0.12],[0,1.35,-0.12],mat(c,0.2,0.3));
        if (roof === "checker" || roof === "flag") {
          for(let i=0;i<6;i++) box(roofDecoration,[0.16,0.045,0.15],[(-0.4+(i%3)*0.4),1.37,-0.35+Math.floor(i/3)*0.42],mat(i%2?"#fff":"#15191d",0.1,0.5));
        }
      }
      const auraStyle = getClass("aura--","none");
      aura.visible = auraStyle !== "none";
      aura.material.color.set(auraColors[auraStyle] || "#1cc9ff");
      element.classList.toggle("car3d-has-aura", aura.visible);
      element.classList.toggle("car3d-nitro", element.classList.contains("nitro-flash"));
    }
    // Kenney Car Kit race model (CC0-1.0). Keep the procedural model as a fallback if loading fails.
    const assetLoader = new GLTFLoader();
    assetLoader.load(
      "https://raw.githubusercontent.com/Hidencod/tge-assets/main/packs/car-kit/race.glb",
      gltf => {
        const root = gltf.scene;
        root.updateMatrixWorld(true);
        const bounds = new THREE.Box3().setFromObject(root);
        const size = bounds.getSize(new THREE.Vector3());
        const scale = 3.55 / Math.max(size.z, 0.001);
        root.scale.setScalar(scale);
        root.updateMatrixWorld(true);
        const scaledBounds = new THREE.Box3().setFromObject(root);
        root.position.x -= (scaledBounds.min.x + scaledBounds.max.x) / 2;
        root.position.z -= (scaledBounds.min.z + scaledBounds.max.z) / 2;
        root.position.y -= scaledBounds.min.y - 0.03;
        root.traverse(node => {
          if (!node.isMesh) return;
          node.castShadow = true;
          node.receiveShadow = true;
          if (Array.isArray(node.material)) node.material = node.material.map(material => material.clone());
          else if (node.material) node.material = node.material.clone();
        });
        assetModel.add(root);
        loadedAsset = true;
        model.visible = false;
        applyClasses();
      },
      undefined,
      error => console.warn("車の3Dアセットを読み込めないため、簡易モデルを使います。", error)
    );

    const observer = new MutationObserver(applyClasses);
    observer.observe(element,{attributes:true,attributeFilter:["class"]});
    applyClasses();

    function resize() {
      const rect=element.getBoundingClientRect();
      const width=Math.max(1,Math.round(rect.width));
      const height=Math.max(1,Math.round(rect.height));
      renderer.setSize(width,height,false);
      camera.aspect=width/height; camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize); ro.observe(element); resize();
    function render(time) {
      if (!document.hidden && element.isConnected) {
        const active = element.id === "car";
        rig.rotation.y = Math.sin(time*0.00045 + (active?0:1.4))*0.07;
        model.position.y = Math.sin(time*0.003)*0.018;
        wheels.forEach(w => { /* wheel details stay stable in the preview */ });
        renderer.render(scene,camera);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    instances.push({element,renderer,scene,camera,observer,ro});
  }

  function init() {
    carIds.forEach(id => createCar(document.getElementById(id)));
    const garage = document.getElementById("garage3dPreview");
    const mainCar = document.getElementById("car");
    if (garage && mainCar) {
      createCar(garage);
      const syncGarage = () => {
        const keep = ["car", "garage3d-preview"];
        const dynamic = Array.from(mainCar.classList).filter(name =>
          name !== "car" && !["left-turn", "right-turn", "nitro-flash"].includes(name)
        );
        garage.className = [...keep, ...dynamic].join(" ");
      };
      syncGarage();
      new MutationObserver(syncGarage).observe(mainCar, { attributes:true, attributeFilter:["class"] });
    }
    document.documentElement.classList.add("has-3d-cars");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();