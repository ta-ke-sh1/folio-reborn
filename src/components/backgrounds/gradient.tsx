import { useEffect } from "react"
import { GradientAnimation } from "../../animations/gradient/gradient";

export default function GradientBackground(){

   useEffect(() => {
      let canvas = document.getElementById("canvas")
      let controller = new GradientAnimation(canvas);

      return function () {
          controller.clearCanvas()
      }
  }, [])

   return (
      <canvas style={{
         borderRadius: '10px',
         zIndex: -1,
         display: 'block',
         width: '100%',
         height: '100%',
         position: 'absolute',
         left: 0,
         top: 0
     }} id={"canvas"}></canvas>
   )
}