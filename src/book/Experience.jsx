import { useRef, useEffect } from "react";
import { Environment, Float, OrbitControls, ContactShadows } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Vector3 } from "three";
import { Book } from "./Book";
import { ModelShowcase } from "./ModelShowcase";
import { PageParticles } from "./PageParticles";
import { viewModeAtom } from "./UI";

/* ── Camera target positions ── */
const SHOWCASE_POS = new Vector3(0, 1.2, 5);
const READING_POS = new Vector3(0, 0.6, 3);

const CameraAnimator = () => {
  const { camera } = useThree();
  const [viewMode] = useAtom(viewModeAtom);
  const animating = useRef(false);
  const prevMode = useRef(viewMode);

  useEffect(() => {
    if (prevMode.current !== viewMode) {
      animating.current = true;
      prevMode.current = viewMode;
    }
  }, [viewMode]);

  useFrame((_, delta) => {
    if (!animating.current) return;
    const target = viewMode === "reading" ? READING_POS : SHOWCASE_POS;
    camera.position.lerp(target, Math.min(1, delta * 3));

    if (camera.position.distanceTo(target) < 0.05) {
      animating.current = false;
    }
  });

  return null;
};

export const Experience = () => {
  return (
    <>
      <CameraAnimator />

      {/* Book */}
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={1}
        rotationIntensity={0.1}
      >
        <Book />
        <PageParticles />
      </Float>

      {/* Model showcase — preloaded */}
      <ModelShowcase />

      {/* OrbitControls — xoay, zoom, kéo tự do */}
      <OrbitControls
        minDistance={2}
        maxDistance={10}
      />

      {/* Ambient environment — nhẹ hơn studio */}
      <Environment preset="apartment" />

      {/* Key Light — không castShadow (shadows đã tắt ở Canvas) */}
      <directionalLight
        position={[2, 5, 2]}
        intensity={2}
      />

      {/* Fill Light */}
      <directionalLight
        position={[-3, 2, -1]}
        intensity={0.5}
        color="#ffeedd"
      />

      {/* ContactShadows — bóng mềm baked (không cần shadow map) */}
      <ContactShadows
        position={[0, -1.48, 0]}
        opacity={0.2}
        scale={10}
        blur={2.5}
        far={4}
        color="#1a1008"
        frames={1}
      />
    </>
  );
};
