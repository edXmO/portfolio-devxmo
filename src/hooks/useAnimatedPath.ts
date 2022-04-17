import { useState } from 'react'
import { useSpring } from 'react-spring';

const useAnimatedPath = ({ toggle, config } : { toggle: boolean, config?: { duration?: number } }) => {

   const [length, setLength] = useState<number | null>(null);

   const animatedStyle = useSpring({
      strokeDasharray: length,
      strokeDashoffset: toggle ? 0 : length,
      config,
   });

   return {
      style: animatedStyle,
      ref: (ref: SVGPathElement) => {
         if(ref){
            setLength(ref.getTotalLength())
         }
      }
   }
}

export default useAnimatedPath;