import "./App.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SneakerSections from "./Page/SneakerSections.jsx";
function App() {
  const [flip, set] = useState(false);
  const fade = useSpring({
    reset: true,
    reverse: flip,
    from: { clipPath: `ellipse(100% 25% at 81% 99%)` },
    clipPath: `ellipse(100% 45% at 81% 99%)`,
    config: { mass: 1, tension: 80, friction: 8, duration: 4000 },
    delay: 1000,
    onRest: () => set(!flip),
  });
  return (
    <div className="relative flex justify-center items-center w-[100vw] h-[100vh] max-[800px]:h-[160vh] bg-white">
      <animated.div
        className="w-full h-full bg-yellow z-0"
        style={fade}
      ></animated.div>

      <SneakerSections />
    </div>
  );
}

export default App;
