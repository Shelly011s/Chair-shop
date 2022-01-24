import React, { useEffect, useContext, Suspense } from 'react';
//import styled from 'styled-components';

import { PathContext } from '../context/Context';
import ArmchairGreen from './ArmchairGreen';
import ArmchairGray from './ArmchairGray';

// R3F
import { Canvas, useFrame } from "@react-three/fiber";


const Card = ({path, color, isGreen}) => {
  const {
    setModelPath, setBgcolor,setSlide,slide
  } = useContext(PathContext);    
  return (
      <div className="board">
        <Canvas className = "canvas" >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} castShadow />
        <Suspense fallback={null}>
        {isGreen? <ArmchairGreen/>: <ArmchairGray/>}
        </Suspense>
        </Canvas>
          
          <button 
          className="content"
          onClick={() => {
            setModelPath(path);
            setBgcolor(color);
            setSlide(true);
            setTimeout(() => {
              setSlide(false);
            }, 3000);  } }>
          <b>A monochrome chair <br/>
          <span>Get it in {isGreen? "Green": "Gray"}!!</span></b>
          </button>
          
        
      </div>
    );
  
}

export default Card;