"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Materials ─────────────────────────────────────────────────── */
function useMaterials() {
    const body = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: new THREE.Color("#3b82f6"),
                emissive: new THREE.Color("#1e3a8a"),
                emissiveIntensity: 0.5,
                roughness: 0.35,
                metalness: 0.25,
                transparent: true,
                opacity: 0.82,
            }),
        []
    );
    const spot = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: new THREE.Color("#bfdbfe"),
                emissive: new THREE.Color("#93c5fd"),
                emissiveIntensity: 1.2,
                transparent: true,
                opacity: 0.75,
            }),
        []
    );
    return { body, spot };
}

/* ── Snow Leopard Geometry ──────────────────────────────────────── */
function Leopard() {
    const group = useRef<THREE.Group>(null);
    const tail  = useRef<THREE.Group>(null);
    const { body, spot } = useMaterials();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (group.current) {
            group.current.position.y = Math.sin(t * 0.75) * 0.07;
        }
        if (tail.current) {
            tail.current.rotation.z = -0.35 + Math.sin(t * 1.3) * 0.28;
        }
    });

    // spot positions on body surface
    const spots: [number, number, number][] = [
        [ 0.18,  0.35, 0.70], [-0.18,  0.38, 0.70],
        [ 0.52,  0.10, 0.68], [-0.48,  0.08, 0.68],
        [ 0.15, -0.18, 0.70], [-0.22, -0.22, 0.70],
        [ 0.50,  0.40, 0.62], [ 0.78,  0.20, 0.55],
        [-0.55,  0.32, 0.64],
    ];

    return (
        <group ref={group} rotation={[0, 0.18, 0]}>

            {/* ── Body ── */}
            <mesh material={body} scale={[1.3, 0.78, 0.72]}>
                <sphereGeometry args={[1, 28, 28]} />
            </mesh>

            {/* ── Neck ── */}
            <mesh material={body} position={[0.88, 0.18, 0]} rotation={[0, 0, -0.55]} scale={[1, 1, 0.88]}>
                <cylinderGeometry args={[0.28, 0.34, 0.52, 14]} />
            </mesh>

            {/* ── Head ── */}
            <mesh material={body} position={[1.28, 0.48, 0]} scale={[0.66, 0.62, 0.60]}>
                <sphereGeometry args={[1, 20, 20]} />
            </mesh>

            {/* ── Snout ── */}
            <mesh material={body} position={[1.80, 0.30, 0]} scale={[0.28, 0.22, 0.25]}>
                <sphereGeometry args={[1, 14, 14]} />
            </mesh>

            {/* ── Ear L ── */}
            <mesh material={body} position={[1.16, 0.90, 0.23]} rotation={[0.1, 0, 0.2]}>
                <coneGeometry args={[0.11, 0.22, 7]} />
            </mesh>
            {/* ── Ear R ── */}
            <mesh material={body} position={[1.16, 0.90, -0.23]} rotation={[-0.1, 0, 0.2]}>
                <coneGeometry args={[0.11, 0.22, 7]} />
            </mesh>

            {/* ── Front leg L ── */}
            <mesh material={body} position={[0.58, -0.96, 0.29]} rotation={[0.12, 0, 0]}>
                <cylinderGeometry args={[0.14, 0.11, 0.88, 10]} />
            </mesh>
            {/* ── Front leg R ── */}
            <mesh material={body} position={[0.58, -0.96, -0.29]} rotation={[-0.12, 0, 0]}>
                <cylinderGeometry args={[0.14, 0.11, 0.88, 10]} />
            </mesh>

            {/* ── Back leg L ── */}
            <mesh material={body} position={[-0.58, -0.92, 0.30]} rotation={[0.18, 0, 0.08]}>
                <cylinderGeometry args={[0.17, 0.13, 0.84, 10]} />
            </mesh>
            {/* ── Back leg R ── */}
            <mesh material={body} position={[-0.58, -0.92, -0.30]} rotation={[-0.18, 0, -0.08]}>
                <cylinderGeometry args={[0.17, 0.13, 0.84, 10]} />
            </mesh>

            {/* ── Tail (animated) ── */}
            <group ref={tail} position={[-1.28, 0.08, 0]}>
                {/* lower segment */}
                <mesh material={body} position={[0, 0.52, 0]} rotation={[0, 0, -0.55]}>
                    <cylinderGeometry args={[0.10, 0.08, 1.1, 9]} />
                </mesh>
                {/* upper curve */}
                <mesh material={body} position={[-0.42, 1.0, 0]} rotation={[0, 0, -1.1]}>
                    <cylinderGeometry args={[0.08, 0.06, 0.55, 8]} />
                </mesh>
            </group>

            {/* ── Body spots ── */}
            {spots.map(([x, y, z], i) => (
                <mesh key={i} material={spot} position={[x, y, z]} scale={0.072}>
                    <sphereGeometry args={[1, 8, 8]} />
                </mesh>
            ))}
        </group>
    );
}

/* ── Ambient particles ──────────────────────────────────────────── */
function Particles() {
    const ref = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const count = 90;
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3]     = (Math.random() - 0.5) * 7;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 3 - 0.8;
        }
        return arr;
    }, []);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime();
        ref.current.rotation.y = t * 0.035;
        ref.current.rotation.x = Math.sin(t * 0.18) * 0.06;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.028}
                color="#93c5fd"
                transparent
                opacity={0.45}
                sizeAttenuation
            />
        </points>
    );
}

/* ── Scene ──────────────────────────────────────────────────────── */
function Scene() {
    return (
        <>
            <ambientLight intensity={0.2} color="#1e3a8a" />
            <pointLight position={[4, 5, 4]}  intensity={3}   color="#93c5fd" />
            <pointLight position={[-3, -2, 3]} intensity={1.5} color="#3b82f6" />
            <pointLight position={[0,  6, 1]}  intensity={0.9} color="#e0f2fe" />
            <Suspense fallback={null}>
                <Leopard />
                <Particles />
            </Suspense>
        </>
    );
}

/* ── Export ─────────────────────────────────────────────────────── */
export default function SnowLeopard3D() {
    return (
        <Canvas
            camera={{ position: [0, 0.3, 5.8], fov: 42 }}
            gl={{ alpha: true, antialias: true }}
            style={{ background: "transparent" }}
        >
            <Scene />
        </Canvas>
    );
}
