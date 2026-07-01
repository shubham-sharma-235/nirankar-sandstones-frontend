import { useEffect } from "react";

function AboutSectionOne() {

  useEffect(() => {
    // Small delay ensures DOM is fully painted before Swiper measures slide widths
    const timer = setTimeout(() => {
      if (!document.querySelector(".bs-a1-active")) return;

      const swiper = new window.Swiper(".bs-a1-active", {
        loop: true,
        spaceBetween: 25,
        speed: 1000,
        autoplay: { delay: 5000 },
        breakpoints: {
          0:    { slidesPerView: 1 },
          576:  { slidesPerView: 2 },
          768:  { slidesPerView: 2 },
          992:  { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        },
      });

      // Drag cursor follow
      const drag  = document.querySelector(".bs-about-1-slider-drag");
      const area  = document.querySelector(".bs-about-1-slider");

      if (drag && area) {
        const onMove = (e) => {
          const offset = area.getBoundingClientRect();
          drag.style.left = (e.clientX - offset.left) + "px";
          drag.style.top  = (e.clientY - offset.top)  + "px";
        };
        area.addEventListener("mousemove", onMove);
        // cleanup stored so we can remove it on unmount
        area._onMove = onMove;
      }

      // MagnificPopup for images
      if (window.jQuery && window.jQuery.fn.magnificPopup) {
        window.jQuery(".bs-a1-active .popup-img").magnificPopup({
          type: "image",
          gallery: { enabled: true },
        });
      }

      // store instance for cleanup
      area._swiper = swiper;

    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup swiper on unmount
      const area = document.querySelector(".bs-about-1-slider");
      if (area?._swiper) {
        area._swiper.destroy(true, true);
      }
      if (area?._onMove) {
        area.removeEventListener("mousemove", area._onMove);
      }
    };
  }, []);

  return (
    <>
      {/* about-start */}
      <section className="bs-about-1-area pt-125 pb-100">
        <div className="container bs-container-1">

          {/* section-title */}
          <div className="bs-about-1-sec-title mb-30">
            <h6 className="bs-subtitle-1 wa-split-clr wa-capitalize">
              <span className="icon">
                <img src="assets/img/illus/star-shape.png" alt="" />
              </span>
              crafting excellence since 1990
            </h6>
            <h2 className="bs-sec-title-1 wa-split-right wa-capitalize" data-cursor="-opaque">
              Handcrafted Stone Art <br /> Rooted in Heritage and Precision
            </h2>
          </div>

          {/* slider */}
          <div className="bs-about-1-slider mb-40 wa-p-relative">
            <div className="swiper-container wa-fix bs-a1-active">
              <div className="swiper-wrapper">

                {/* single-slide */}
                <div className="swiper-slide">
                  <div className="bs-about-1-item wa-fix">
                    <a href="assets/img/about/a1-img-1.png" className="popup-img wa-img-cover">
                      <img src="assets/img/about/a1-img-1.png" alt="" />
                    </a>
                  </div>
                </div>

                {/* single-slide */}
                <div className="swiper-slide">
                  <div className="bs-about-1-item wa-fix">
                    <a href="assets/img/about/a1-img-2.png" className="popup-img wa-img-cover">
                      <img src="assets/img/about/a1-img-2.png" alt="" />
                    </a>
                  </div>
                </div>

                {/* single-slide */}
                <div className="swiper-slide">
                  <div className="bs-about-1-item wa-fix">
                    <a href="assets/img/about/a1-img-3.png" className="popup-img wa-img-cover">
                      <img src="assets/img/about/a1-img-3.png" alt="" />
                    </a>
                  </div>
                </div>

                {/* single-slide */}
                <div className="swiper-slide">
                  <div className="bs-about-1-item wa-fix">
                    <a href="assets/img/about/a1-img-4.png" className="popup-img wa-img-cover">
                      <img src="assets/img/about/a1-img-4.png" alt="" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="bs-about-1-slider-drag bs-p-1">drag</div>
          </div>

          <div className="bs-about-1-content">
            <p className="bs-p-1 disc wa-split-y wa-capitalize">
              For over three decades, our artisans have shaped raw stone into timeless art.
              <b> From concept to completion,</b> we ensure precision, quality, and unmatched craftsmanship in every creation.
            </p>
            <div className="btn-wrap wa-fadeInRight">
              <a href="#" aria-label="name" className="bs-btn-1">
                <span className="text">learn more about</span>
                <span className="icon">
                  <i className="fa-solid fa-right-long"></i>
                  <i className="fa-solid fa-right-long"></i>
                </span>
                <span className="shape"></span>
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* about-end */}
    </>
  );
}

export default AboutSectionOne;