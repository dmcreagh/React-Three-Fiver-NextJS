'use client'
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


// Creamos un componente que representa un cubo 3D
function Cube(props: any) {


    // Usamos una referencia para acceder al objeto mesh de Three.js
    const mesh = useRef<any>();
    // Usamos un hook para actualizar la rotación del cubo en cada frame
    useFrame((state, delta) => {
        // mesh.current.rotation.x += delta;
        // mesh.current.rotation.y += delta / 2;
        mesh.current.rotation.y = state.mouse.x * Math.PI;
        mesh.current.rotation.x = state.mouse.y * Math.PI;
        //  const x = (state.mouse.x * state.viewport.width) / 2
        //  const y = (state.mouse.y * state.viewport.height) / 2
        //  mesh.current.position.set(x, y, 0)
    });
    // Retornamos el elemento JSX que representa el cubo
    return (
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}
function Capsule(props: any) {

    // Usamos una referencia para acceder al objeto mesh de Three.js
    const mesh = useRef<any>();
    // Usamos un hook para actualizar la rotación del cubo en cada frame
    useFrame((state, delta) => {

        mesh.current.rotation.x += delta
        mesh.current.rotation.y += delta


        //console.log(rotX)

        //  mesh.current.rotation.z += delta;
    });
    // Retornamos el elemento JSX que representa el cubo
    return (
        <mesh {...props} ref={mesh}>
            <capsuleGeometry args={[1, 1, 4, 8]} />
            <meshLambertMaterial color="#f60491" fog={true} wireframe={true} />
        </mesh>
    );
}
// Creamos el componente principal que contiene el canvas
function AppCube() {


    // Retornamos el elemento JSX que representa el canvas y el cubo
    return (

        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube position={[-3, 0, 0]} scale={[1, 1, 1]} />
            <Capsule position={[3, 0, 0]} scale={[1, 1, 1]} />

        </Canvas>



    );
}
export default AppCube;