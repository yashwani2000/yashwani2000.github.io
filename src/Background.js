import {Suspense, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from "three"


function Cube() {

    const mesh = useRef()

    useFrame(() => {
        const time = Date.now() * 0.001;

        mesh.current.rotation.x = time * 0.25;
        mesh.current.rotation.y = time * 0.5;
    })


    const triangles = 1000;

    const geometry = new THREE.BufferGeometry();

    const positions = [];
    const normals = [];
    const colors = [];

    const color = new THREE.Color();

    const n = 800, n2 = n / 2;	// triangles spread in the cube
    const d = 100, d2 = d / 2;	// individual triangle size

    const pA = new THREE.Vector3();
    const pB = new THREE.Vector3();
    const pC = new THREE.Vector3();

    const cb = new THREE.Vector3();
    const ab = new THREE.Vector3();

    for (let i = 0; i < triangles; i++) {

        // positions

        const x = Math.random() * n - n2;
        const y = Math.random() * n - n2;
        const z = Math.random() * n - n2;

        const ax = x + Math.random() * d - d2;
        const ay = y + Math.random() * d - d2;
        const az = z + Math.random() * d - d2;

        const bx = x + Math.random() * d - d2;
        const by = y + Math.random() * d - d2;
        const bz = z + Math.random() * d - d2;

        const cx = x + Math.random() * d - d2;
        const cy = y + Math.random() * d - d2;
        const cz = z + Math.random() * d - d2;

        positions.push(ax, ay, az);
        positions.push(bx, by, bz);
        positions.push(cx, cy, cz);

        // flat face normals

        pA.set(ax, ay, az);
        pB.set(bx, by, bz);
        pC.set(cx, cy, cz);

        cb.subVectors(pC, pB);
        ab.subVectors(pA, pB);
        cb.cross(ab);

        cb.normalize();

        const nx = cb.x;
        const ny = cb.y;
        const nz = cb.z;

        normals.push(nx * 32767, ny * 32767, nz * 32767);
        normals.push(nx * 32767, ny * 32767, nz * 32767);
        normals.push(nx * 32767, ny * 32767, nz * 32767);

        // colors

        const vx = (x / n) + 0.5;
        const vy = (y / n) + 0.5;
        const vz = (z / n) + 0.5;

        color.setRGB(vx, vy, vz);

        colors.push(color.r * 255, color.g * 255, color.b * 255);
        colors.push(color.r * 255, color.g * 255, color.b * 255);
        colors.push(color.r * 255, color.g * 255, color.b * 255);

    }

    const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
    const normalAttribute = new THREE.Int16BufferAttribute(normals, 3);
    const colorAttribute = new THREE.Uint8BufferAttribute(colors, 3);

    normalAttribute.normalized = true;
    colorAttribute.normalized = true;

    geometry.setAttribute('position', positionAttribute);
    geometry.setAttribute('normal', normalAttribute);
    geometry.setAttribute('color', colorAttribute);

    geometry.computeBoundingSphere();

    const material = new THREE.MeshPhongMaterial({
        color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
        side: THREE.DoubleSide, vertexColors: true
    });

    return (
        <>
            <mesh ref={mesh} geometry={geometry} material={material}>
            </mesh>
        </>
    )
}

function Lights() {
    return (
        <>
            {/*<ambientLight args={"#444"}/>*/}
            <directionalLight args={["#fff", 0.5]} position={[1, 1, 1]}/>
            <directionalLight args={["#fff", 1.5]} position={[0, -1, 0]}/>
        </>
    )
}

export default function Background() {
    return (
        <Canvas style={{
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100vh',
            zIndex: "1",
            width: "100vw",
            overflow: "hidden",
            minHeight: "100vh",
            minWidth: "100vw"
        }}
                camera={{args: [27, window.innerWidth / window.innerHeight, 1, 3500], position: [0, 0, 1100]}}>
            < color attach="background" args={["#050505"]}/>
            <fog attach="fog" args={["#050505", 2000, 3500]}/>
            <Lights/>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Cube/>
            </Suspense>
        </Canvas>
    )
}