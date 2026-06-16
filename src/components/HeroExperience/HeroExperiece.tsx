import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { HeroModel } from "./HeroModel";
const HeroExperiece = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [-1, -5, 10], fov: 50 }} style={{ "display": "flex" }}>
      <ambientLight intensity={0.2} color="#1A1A40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={isMobile ? 12.5 : 100.5}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <HeroModel/>
      </group>
    </Canvas>
  );
};

export default HeroExperiece;
