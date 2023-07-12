'use client'
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useBox, useSphere } from "@react-three/cannon";
 function Plane(props) {
  // Usa React.RefObject<THREE.Mesh> para indicar que el ref es de tipo THREE.Mesh
  const ref1 = useRef(null);
  const [planeRef] = usePlane(() => ({ ...props, ref1 }));
  return (
    <mesh ref={planeRef} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" />
    </mesh>
  );
}
 function Sphere(props) {
  const ref = useRef(null);
  const [sphereRef] = useSphere(() => ({ mass: 1, ...props, ref }));
  return (
    <mesh ref={sphereRef} castShadow receiveShadow>
      <sphereGeometry />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}
 function Cube(props) {
  const ref = useRef(null);
  const [cubeRef] = useBox(() => ({ mass: 1, ...props, ref }));
  return (
    <mesh ref={cubeRef} castShadow receiveShadow>
      <boxGeometry />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}
 function AppFisica() {
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
        <Cube position={[1, 70, 0]} scale={[2, 2, 2]} />
        <Cube position={[3, 8, -3]} scale={[3, 3, 3]} />
        <Cube position={[0, 50, -2]} scale={[10, 10, 10]} />
        <Sphere position={[0, 20, -2]} />
      </Physics>
    </Canvas>
  );
}
 export default AppFisica;
