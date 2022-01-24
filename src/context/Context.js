import React, { createContext, useState } from 'react';

export const PathContext = createContext();

export const PathContextProvider = (props) => {
    const [bgcolor,setBgcolor] = useState('#f15946');  
    const [modelPath,setModelPath] = useState("/armchairYellow.gltf");   
    const [slide,setSlide]= useState(false);
    const providerValue = {
        modelPath,setModelPath,
        bgcolor,setBgcolor,
        slide,setSlide
      };

  return (
    <PathContext.Provider value={providerValue}>
      {props.children}
    </PathContext.Provider>
  );
};

