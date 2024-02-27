const HeroSection = () => {
  return (
    <div className="hero w-full bg-black h-[50vh] md:h-[75vh]">
      <video loop autoPlay muted className="h-[50vh] md:h-[75vh]">
        <source src="bg-earth-rotating.webm" type="video/mp4" />
      </video>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
