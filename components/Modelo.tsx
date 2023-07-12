import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
 function Car() {
  // Cargamos el modelo 3D del carro desde una URL
  const { nodes } = useGLTF('https://assets.codepen.io/4087379/Car.glb');
  // Creamos una referencia al mesh del carro
  const carRef = useRef<any>();
  // Usamos useFrame para actualizar la posición y la rotación del carro
  useFrame((state) => {
    // Movemos el carro hacia adelante
    carRef.current.position.x += 0.01;
    // Rotamos el carro según el ángulo del mouse
    carRef.current.rotation.y = state.mouse.x * Math.PI;
  });
  // Devolvemos el mesh del carro con sus materiales
  return (
    <group ref={carRef}>
      <mesh geometry={nodes.Car.geometry} material={nodes.Car.material} />
      <mesh geometry={nodes.Wheel.geometry} material={nodes.Wheel.material} />
      <mesh geometry={nodes.Wheel_1.geometry} material={nodes.Wheel_1.material} />
      <mesh geometry={nodes.Wheel_2.geometry} material={nodes.Wheel_2.material} />
      <mesh geometry={nodes.Wheel_3.geometry} material={nodes.Wheel_3.material} />
    </group>
  );
}
 export default function AppCar() {
  return (
    // Creamos un componente Canvas para renderizar los elementos 3D
    <Canvas>
      {/* Añadimos una luz ambiental y una luz direccional */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Añadimos un plano para simular el suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>
      {/* Renderizamos el componente Car */}
      <Car />
    </Canvas>
  );
}