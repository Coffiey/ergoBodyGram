import { Canvas } from "@react-three/fiber";
import Cylinder from "./cylinder"

function ThreeIndex() {
    return (
        <section className='App-header'>
          <Canvas>
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <ambientLight /> */}
            <Cylinder position={[-1.2, 0, 0]} />
            <Cylinder position={[1.2, 0, 0]} />
          </Canvas>
        </section>
    );
  }
   
  export default ThreeIndex;