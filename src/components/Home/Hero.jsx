function Hero() {
  return (
    <section className="nirankar-hero">
      <div className="hero-title" id="heroText">
        <div className="hero-title-inner">
          <span className="hero-title-main">Nirankar</span>
          <span className="hero-title-sub">Sandstones</span>
          <span className="hero-title-line"></span>
        </div>
      </div>

      <div className="hero-carousel">
        <div className="hero-slide active">
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/assets/img/video/making-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
    
  );
}

export default Hero;