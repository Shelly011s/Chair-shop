/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MADE.COM (https://sketchfab.com/made-it)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/ritchie-armchair-pearl-grey-3c06a4fd6d994f9abeec4d28f67a8ae6
title: Ritchie Armchair, Pearl Grey
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/armchairGray.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 40, -16]} rotation={[1.85, -0.55, -0.05]} scale={0.6}>
          <group position={[0.06, 27.41, -0.65]}>
            <mesh geometry={nodes.PEARL_GREY.geometry} material={materials.PEARL_GREY} />
            <mesh geometry={nodes.RAINBOW_BUTTONS.geometry} material={materials.EnvironmentAmbientLight} />
            <mesh geometry={nodes.LEGS.geometry} material={materials.LEGS} />
          </group>
        </group>
        <mesh geometry={nodes.FLOOR.geometry} material={materials.FLOOR} />
      </group>
    </group>
  )
}

useGLTF.preload('/armchairGray.gltf')
