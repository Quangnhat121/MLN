import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Box3, Vector3 } from "three";
import { useAtom } from "jotai";
import { pageAtom } from "./UI";
import { a, useSpring } from "@react-spring/three";

// ╔══════════════════════════════════════════════╗
// ║  PRELOAD TẤT CẢ MODEL NGAY KHI APP KHỞI ĐỘNG  ║
// ║  => Không bao giờ hiện loading khi lật trang    ║
// ╚══════════════════════════════════════════════╝
// TODO: Thêm preload khi có model mới
// useGLTF.preload("/models/socrates.glb");
// useGLTF.preload("/models/globe.glb");
// useGLTF.preload("/models/relief.glb");
// useGLTF.preload("/models/astrolabe.glb");
// useGLTF.preload("/models/lenin.glb");

/** Generic GLB Loader — auto-scales and auto-centers the 3D model */
const GenericGLBPopup = ({
  url,
  targetSize = 0.8,
  positionOffset = [0, 0, 0],
}) => {
  const { scene } = useGLTF(url);

  const { clonedScene, normalizedScale, offset } = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z);

    if (maxDim === 0)
      return { clonedScene: cloned, normalizedScale: 1, offset: [0, 0, 0] };

    const s = targetSize / maxDim;

    // Tối ưu: tắt shadow trên mesh, dùng ContactShadows thay thế
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

  return (
    <primitive object={clonedScene} scale={normalizedScale} position={offset} />
  );
};

/* ══════════════════════════════════════════════
   PopupWrapper — spring animation for pop-up book effect
   ══════════════════════════════════════════════ */
const PopupWrapper = ({ children, visible, riseHeight = 0.3, delay = 0 }) => {
  const { position, scale } = useSpring({
    position: visible ? [0, 0, 0] : [0, -riseHeight, 0],
    scale: visible ? 1 : 0.01,
    delay: visible ? delay : 0,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <a.group position={position} scale={scale}>
      {children}
    </a.group>
  );
};

/* ══════════════════════════════════════════════
   PopupElements — TẤT CẢ model luôn mounted (đã preload)
   Chỉ hiện/ẩn bằng PopupWrapper spring animation
   => KHÔNG BAO GIỜ hiện loading khi lật trang
   ══════════════════════════════════════════════ */
export const PopupElements = () => {
  const [page] = useAtom(pageAtom);

  return (
    <group position={[0, 0.1, 0]} rotation={[Math.PI / 4, 0, 0]}>
      {/* Cặp 1 - Nền tảng (Trường học Athens): socrates.glb */}
      <PopupWrapper visible={page === 1} riseHeight={0.3}>
        {page === 1 && <GenericGLBPopup url="/models/bust_of_the_ancient_greek_philosopher_socrates.glb" />}
      </PopupWrapper>

      {/* Cặp 2 - Tồn tại XH (Hoàn cảnh địa lý): globe.glb */}
      <PopupWrapper visible={page === 2} riseHeight={0.25}>
        {page === 2 && <GenericGLBPopup url="/models/globe.glb" />}
      </PopupWrapper>

      {/* Cặp 3 - Ý thức XH (Đám đông giương cờ): Marx.glb */}
      <PopupWrapper visible={page === 3} riseHeight={0.3}>
        {page === 3 && <GenericGLBPopup url="/models/Marx.glb" targetSize={1.4} positionOffset={[0, -0.2, 0]} />}
      </PopupWrapper>

      {/* Cặp 4 - Biện chứng (La bàn / Astrolabe): astrolabe.glb */}
      <PopupWrapper visible={page === 4} riseHeight={0.35}>
        {page === 4 && <GenericGLBPopup url="/models/astrolabe_-_medieval_-_reconstruction.glb" />}
      </PopupWrapper>

      {/* Cặp 5 - Tổng kết (Lenin diễn thuyết): lenin.glb */}
      <PopupWrapper visible={page === 5} riseHeight={0.3}>
        {page === 5 && <GenericGLBPopup url="/models/vladimir_lenin_portrait_monument.glb" />}
      </PopupWrapper>
    </group>
  );
};
