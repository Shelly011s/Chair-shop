import React, { createContext, useRef, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import lerp from "lerp";
import state from "./state";

const offsetContext = createContext(0);
//for smooth scroll 
function Section({ children, offset, factor, ...props }) {
  // factor, which gets added to the offset position and subtracted using scrollTop,
  // it will control the blocks speed and direction
  // Fetch parent offset and the height of a single section
  const { offset: parentOffset, sectionHeight, aspect } = useSection();
  const ref = useRef();
  //an offset, which is the section index
  // Runs every frame and lerps the inner block into its place
  offset = offset !== undefined ? offset : parentOffset;
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current / aspect;
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
  });
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
}

//custom hook
function useSection() {
  const { sections, pages, zoom } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const aspect = size.height / viewportHeight;
  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  };
}

export { Section, useSection };