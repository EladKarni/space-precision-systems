const HeroSection = () => {
  return (
    <div className="hero w-full bg-black max-h-[60vh] my-8">
      <video loop autoPlay muted className="max-h-[60vh]">
        <source src="bg-earth-rotating.webm" type="video/mp4" />
      </video>
      <div className="hero-content text-center text-neutral-content mt-16">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-7xl font-bold text-secondary">
            Space Precision Systems
          </h1>
          <p className="mb-5 mx-5 text-gray-300">Liftoff Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
