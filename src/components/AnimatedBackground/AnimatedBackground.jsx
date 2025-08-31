import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: "#0d0d0d" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
        particles: {
          number: { value: 60 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.7 },
          links: { enable: true, color: "#ffffff", opacity: 0.2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default AnimatedBackground;
