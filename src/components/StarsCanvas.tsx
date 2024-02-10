import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarsCanvas = () => {
  return (
    <Canvas id="stars">
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
    </Canvas>
  );
};

export default StarsCanvas;