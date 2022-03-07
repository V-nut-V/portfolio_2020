import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";

import { useSpring, a } from "react-spring/three";

softShadows();

const Box = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
      onClick={() => setExpand((pre) => !pre)}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

const Sphere = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
      onClick={() => setExpand((pre) => !pre)}
    >
      <sphereBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

const Tetrahedron = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
      onClick={() => setExpand((pre) => !pre)}
    >
      <tetrahedronBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

const ThreeD = () => {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 2, 14], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <Box
          position={[0, 1, 2.6]}
          args={[3, 3, 3]}
          color="lightblue"
          speed={1}
        />
        <Tetrahedron
          position={[-4, 1, -2]}
          args={[2, 0]}
          color="red"
          speed={4}
        />
        <Sphere
          position={[4, 1, -2]}
          args={[1.5, 32, 32]}
          color="#1890FF"
          speed={0}
        />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeD;
