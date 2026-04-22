import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useAtom } from "jotai";
import { Box3, Vector3 } from "three";
import { pageAtom, viewModeAtom } from "./UI";

// PRELOAD
useGLTF.preload("/models/bust_of_the_ancient_greek_philosopher_socrates.glb");
useGLTF.preload("/models/globe.glb");
useGLTF.preload("/models/Marx.glb");
useGLTF.preload("/models/astrolabe_-_medieval_-_reconstruction.glb");
useGLTF.preload("/models/vladimir_lenin_portrait_monument.glb");

/* ══════════════════════════════════════════════
   GenericGLBShowcase — auto-scale + auto-center
   ══════════════════════════════════════════════ */
const GenericGLBShowcase = ({ url, targetSize = 0.8, positionOffset = [0, 0, 0] }) => {
  const { scene } = useGLTF(url);
  const { clonedScene, normalizedScale, offset } = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z);

    if (maxDim === 0) return { clonedScene: cloned, normalizedScale: 1, offset: [0, 0, 0] };

    const s = targetSize / maxDim;

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          child.material.envMapIntensity = 0.6;
        }
        child.frustumCulled = true;
      }
    });

    return {
      clonedScene: cloned,
      normalizedScale: s,
      offset: [
        -center.x * s + positionOffset[0],
        -box.min.y * s + positionOffset[1],
        -center.z * s + positionOffset[2],
      ],
    };
  }, [scene, targetSize, positionOffset]);

  return <primitive object={clonedScene} scale={normalizedScale} position={offset} />;
};

/* ══════════════════════════════════════════════
   ShowcaseWrapper — scale in + auto-rotate
   ══════════════════════════════════════════════ */
const ShowcaseWrapper = ({ visible, children }) => {
  const ref = useRef();
  const prog = useRef(0);

  useFrame((_, delta) => {
    const target = visible ? 1 : 0;
    prog.current += (target - prog.current) * Math.min(1, delta * 3);
    if (Math.abs(prog.current - target) < 0.001) prog.current = target;

    if (ref.current) {
      ref.current.scale.setScalar(prog.current);
      if (prog.current > 0.1) {
        ref.current.rotation.y += delta * 0.25;
      }
    }
  });

  return (
    <group ref={ref} scale={0}>
      {children}
    </group>
  );
};

/* ══════════════════════════════════════════════
   ModelShowcase — Hiện tại chưa có model nào
   Sẽ thêm khi tải model mới về public/models/
   ══════════════════════════════════════════════ */
export const ModelShowcase = () => {
  const [page] = useAtom(pageAtom);
  const [viewMode] = useAtom(viewModeAtom);
  const hasModel = page >= 1 && page <= 5 && viewMode === "showcase";

  const groupRef = useRef();
  const prog = useRef(0);

  useFrame((_, delta) => {
    const target = hasModel ? 1 : 0;
    prog.current += (target - prog.current) * Math.min(1, delta * 2.5);

    if (groupRef.current) {
      const p = prog.current;
      groupRef.current.position.y = 0.3 + p * 0.8;
      groupRef.current.scale.setScalar(p > 0.02 ? p : 0);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.3, 0]}>
      {/* Spotlight */}
      <spotLight
        position={[0, 2.5, 1]}
        angle={0.4}
        penumbra={0.7}
        intensity={hasModel ? 4 : 0}
        color="#fff8f0"
      />

      {/* Sparkles */}
      {hasModel && (
        <Sparkles
          count={20}
          scale={1.5}
          size={2}
          speed={0.3}
          color="#C5272D"
          opacity={0.2}
        />
      )}

      <ShowcaseWrapper visible={page === 1 && viewMode === "showcase"}>
        <GenericGLBShowcase url="/models/bust_of_the_ancient_greek_philosopher_socrates.glb" targetSize={0.8} />
      </ShowcaseWrapper>

      <ShowcaseWrapper visible={page === 2 && viewMode === "showcase"}>
        <GenericGLBShowcase url="/models/globe.glb" targetSize={0.8} />
      </ShowcaseWrapper>

      <ShowcaseWrapper visible={page === 3 && viewMode === "showcase"}>
        <GenericGLBShowcase url="/models/Marx.glb" targetSize={1.2} positionOffset={[0, -0.2, 0]} />
      </ShowcaseWrapper>

      <ShowcaseWrapper visible={page === 4 && viewMode === "showcase"}>
        <GenericGLBShowcase url="/models/astrolabe_-_medieval_-_reconstruction.glb" targetSize={0.8} />
      </ShowcaseWrapper>

      <ShowcaseWrapper visible={page === 5 && viewMode === "showcase"}>
        <GenericGLBShowcase url="/models/vladimir_lenin_portrait_monument.glb" targetSize={0.8} />
      </ShowcaseWrapper>
    </group>
  );
};
