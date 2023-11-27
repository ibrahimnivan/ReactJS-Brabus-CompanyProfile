const HomePage = () => {
  return (
    <div id="homepage" className="w-full relative">
      <video loop autoPlay muted className="w-full">
        <source src="video-hero.mp4" type="video/mp4" />
      </video>
      <figcaption className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-4xl">LEGENDS NEVER DIE.</h2>
      </figcaption>
    </div>
  );
};

export default HomePage;
