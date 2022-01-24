import React , { useEffect,useContext, Suspense }from "react";
import "../App.scss";
import "../index.css";
//Components

import Card from "./card";
import { Section } from "./section";

// Page State
import state from "./state";

// R3F
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, OrbitControls  } from "@react-three/drei";

//context
import {PathContext} from '../context/Context';

// React Spring
//import { a, useTransition } from "@react-spring/web";
//Intersection Observer
//import { useInView } from "react-intersection-observer";


export const Model =({ url }) => {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}
const Lights = () => {
  return (
    <>
      {/* Ambient light is shining from every direction */}
      <ambientLight intensity={0.3} />
      
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
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
      {/* Spotlight Large overhead light */}
      <spotLight intensity={.5} position={[1000, 0, 0]} castShadow />
    </>
  );
};
const HTMLContent = ({
 // domContent,
  children,
  bgColor,
  modelPath,
  position,
}) => {
  useEffect(() => {
    (document.querySelector(".slider").style.background = bgColor);
    const timer = setTimeout(() => {
      (document.body.style.background = bgColor);
      console.log("time");
    }, 3000);
    //clearTimeout(timer);     
         
  }, [bgColor]); 
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh position={[0, -35, 0]} scale={1.2} >
          <Model url={modelPath} />
        </mesh>
        <Html fullscreen>
        <div className='container'>
            <h3 className='title'>{children}</h3>
         </div> 
        </Html>
      </group>
    </Section>
  );
};
export default function Page(){
  const { bgcolor, modelPath,slide } = useContext(PathContext); 
    
  return(
    <>
    <div className = {`slider ${slide? 'animation':''}`}/>
    <div className='container'>
    
    <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>
        <OrbitControls autoRotate/>
        
        {/* Lights Component */}
        <Lights />

        <Suspense fallback={null}>
        
          <HTMLContent
            bgColor={bgcolor}
            modelPath = {modelPath}
            position={250}>
            <span>Meet the new 
            shopping experience <br/>
            for online chairs</span>
          </HTMLContent>
          
        </Suspense>
        
    </Canvas>
      
      <div className='chairs'>
        <Card path={"/armchairGreen.gltf"} color={'#a780f0'} isGreen/>
        <Card path={"/armchairGray.gltf"} color={'#dca25a'} isGreen={false} /> 
      </div>
      
    </div>  
    </>
  );
};