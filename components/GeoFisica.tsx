'use client'
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon';
 function Plane(props: any): React.ReactElement {
  const ref = useRef<THREE.Mesh>();
  const [planeRef] = usePlane(() => ({ ...props, ref }));
  return (
    <mesh ref={planeRef} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" />
    </mesh>
  );
}
 function Sphere(props: any): React.ReactElement {
  const ref = useRef<THREE.Mesh>();
  const [sphereRef] = useSphere(() => ({ mass: 1, ...props, ref }));
  return (
    <mesh ref={sphereRef} castShadow receiveShadow>
      <sphereGeometry />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}
 function Cube(props: any): React.ReactElement {
  const ref = useRef<THREE.Mesh>();
  const [cubeRef] = useBox(() => ({ mass: 1, ...props, ref }));
  return (
    <mesh ref={cubeRef} castShadow receiveShadow>
      <boxGeometry />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}
 function AppFisica(): React.ReactElement {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} castShadow />
      <Physics gravity={[0, -20, 0]}>
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
        <Cube position={[1, 50, 0]} scale={[2, 2, 2]} />
        <Cube position={[3, 6, -3]} scale={[3, 3, 3]} />
        <Cube position={[0, 10, -2]} scale={[10, 10, 10]} />
        <Sphere position={[0, 20, -2]} />
      </Physics>
    </Canvas>
  );
}
 export default AppFisica;