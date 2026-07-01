import { useEffect, useRef } from "react";

const ARTISAN_IMAGES = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function Artisans() {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone all children to create seamless loop
    const originals = Array.from(track.children);
    originals.forEach((el) => {
      const clone = el.cloneNode(true);
      track.appendChild(clone);
    });

    const speed = 0.5; // px per frame — adjust for faster/slower

    const animate = () => {
      posRef.current -= speed;
      // Reset when first set has fully scrolled out
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const viewport = track.parentElement;
    const pause = () => cancelAnimationFrame(animFrameRef.current);
    const resume = () => { animFrameRef.current = requestAnimationFrame(animate); };
    viewport?.addEventListener("mouseenter", pause);
    viewport?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      viewport?.removeEventListener("mouseenter", pause);
      viewport?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <>
      {/* team-start */}
      <section className="bs-team-4-area pt-130 pb-100 wa-fix">
        <div className="container bs-container-2">

          <h5 className="bs-subtitle-4 bs-team-4-subtitle">
            <span className="text">Artisans</span>
            <span className="icon">
              <img src="assets/img/illus/subtitle-4-icon.svg" alt="" />
            </span>
          </h5>

          <div className="bs-team-4-wrap">
            {/* left-content */}
            <div className="bs-team-4-content">
              <h2 className="bs-sec-title-4 title wa-split-right wa-capitalize" data-cursor="-opaque">
                Meet the Artisans Behind Our Masterpieces
              </h2>
              <p className="bs-p-4 disc wa-fadeInUp">
                At Nirankar Sandstone Industries, our artisans are the heart of every creation.
                Generations of craftsmen transform raw stone into timeless works of art — blending precision, patience,
                and passion passed down through decades of tradition.
                Their hands shape heritage into form, giving each piece its soul.
              </p>
              <div className="btn-wrap wa-fadeInUp">
                <a href="./about.html" aria-label="name" className="bs-pr-btn-2">
                  <span className="text" data-back="About Us" data-front="About Us"></span>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="box box-1"></span>
                  <span className="box box-2"></span>
                  <span className="box box-3"></span>
                  <span className="box box-4"></span>
                </a>
              </div>
            </div>

            {/* right-img */}
            <div className="bs-team-4-img wa-fix wa-img-cover wa-clip-left-right">
              <img src="assets/img/team/team-one.webp" alt="" />
            </div>
          </div>

          {/* Infinite image marquee */}
          <div className="bs-team-1-wrap">
            <section className="im-strip w-100" aria-label="Infinite image marquee">
              <div
                className="im-strip__viewport"
                style={{ overflow: "hidden", width: "100%" }}
              >
                <div
                  className="im-strip__track"
                  ref={trackRef}
                  style={{ display: "flex", willChange: "transform" }}
                >
                  {ARTISAN_IMAGES.map((n) => (
                    <a key={n} className="im-item" href="#" aria-label={`Image ${n}`}>
                      <img
                        src={`./assets/img/artisions/${n}.webp`}
                        alt={`Gallery image ${n}`}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </div>
      </section>
      {/* team-end */}
    </>
  );
}

export default Artisans;