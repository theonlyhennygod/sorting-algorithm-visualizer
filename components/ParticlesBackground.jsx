import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
