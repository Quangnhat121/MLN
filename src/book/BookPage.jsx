import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { IntroScreen } from "./IntroScreen";

export const BookPage = ({ skipIntro = false }) => {
  const [isStarted, setIsStarted] = useState(skipIntro);

  return (
    <>
      {!isStarted && <IntroScreen onEnter={() => setIsStarted(true)} />}

      <div style={{ opacity: isStarted ? 1 : 0, transition: 'opacity 1s ease', width: '100%', height: '100vh', overflow: 'hidden', pointerEvents: isStarted ? 'auto' : 'none' }}>
        <UI />
        <Loader />
        <Canvas
          shadows={false}
          dpr={[1, 1.5]}
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 45,
          }}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
          }}
          performance={{ min: 0.5 }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </>
  );
};
