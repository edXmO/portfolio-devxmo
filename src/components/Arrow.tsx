import React from 'react';
import { animated } from 'react-spring';
import useAnimatedPath from '../hooks/useAnimatedPath';

export default function Arrow({ toggle }: { toggle: boolean }){

   const { style, ref } = useAnimatedPath({ toggle, config: { duration: 3500 } });

   return (
      <animated.path 
         //@ts-ignore
         style={style}
         ref={ref}
         d="M125.25 1C125.25 16 219 45 87 16C-45 -13 71.9999 156 50 181C28 206 -68.8022 213.579 92.0989 315.79C253 418 125.25 491.202 125.25 572.5L149.25 544.622"
         // d="M137 1C137 76.503 67 -25.7165 103.849 61.4066C140.698 148.53 77.2251 106.436 39.9971 90.442C-33.0057 59.0792 4.10107 236.405 103.849 315.79C271.697 449.372 137 491.202 137 572.5L161 544.622" 
         stroke="#FF0066" 
         stroke-width="2" 
         stroke-linecap="round"
      />
   )

}