import { useEffect } from "react";

const serviceItems = [
  { number: "01", title: "Fountains",        href: "./products/fountain.html",        slide: 0 },
  { number: "02", title: "Planters",         href: "./products/planters.html",         slide: 1 },
  { number: "03", title: "Modern Arts",      href: "./products/modern-art.html",       slide: 2 },
  { number: "04", title: "Statue",           href: "./products/statue.html",           slide: 3 },
  { number: "05", title: "Decorative Items", href: "./products/decorative-items.html", slide: 4 },
  { number: "06", title: "Table Console",    href: "./products/table-console.html",    slide: 5 },
  { number: "07", title: "Wall Panel",       href: "./products/wall-panel.html",       slide: 6 },
];

const slides = [
  "./assets/category-img/fountain/Fountain/4.jpeg",
  "./products/img/planter/planters/17.jpeg",
  "./products/img/modern-art/Modern Art/10.jpeg",
  "./products/img/statue/Statue/8.jpeg",
  "./products/img/decorative-items/Decor/17.jpg",
  "./products/img/table-console/Tablee/3.jpeg",
  "./products/img/wall-panel/4.jpg",
];

function ProductMain() {

  
  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap        = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText   = window.SplitText;
      const $           = window.jQuery;
      const Swiper      = window.Swiper;

      if (!gsap || !$ || !Swiper) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── init swiper (fade, no touch — controlled by hover)
      const swiper = new Swiper(".bs-s5-active", {
        loop: false,
        speed: 800,
        effect: "fade",
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
      });

      // ── hover on left item → change right slide
      document.querySelectorAll(".bs-services-5-item-single").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const slideIndex = parseInt(el.getAttribute("data-slide"));
          if (!isNaN(slideIndex)) swiper.slideTo(slideIndex);
        });
      });

      // ── bg-color scrub animation
      if (ScrollTrigger) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-services-5-left",
            start: "top 70%",
            end: "top 0",
            scrub: 0.8,
          },
        }).from(".bs-services-5-left .bg-color", {
          x: -100,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      // ── wa-split-right (heading)
      if (SplitText) {
        document.querySelectorAll(".bs-services-5-area .wa-split-right").forEach((el) => {
          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(el, { perspective: 400 });
          const delayValue = parseFloat(el.getAttribute("data-split-delay")) || 0;
          gsap.set(split.chars, { x: 50, opacity: 0 });
          gsap.to(split.chars, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.02,
            delay: delayValue,
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }

      // ── wa-fadeInUp (video + each service item)
      document.querySelectorAll(".bs-services-5-area .wa-fadeInUp").forEach((el) => {
        gsap.from(el, {
          y: 30,
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── right slider clip reveal
      gsap.fromTo(
        ".bs-services-5-slider",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".bs-services-5-slider",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // store swiper for cleanup
      const swiperEl = document.querySelector(".bs-s5-active");
      if (swiperEl) swiperEl._swiperInstance = swiper;

    }, 150);

    return () => {
      clearTimeout(timer);

      // destroy swiper
      const swiperEl = document.querySelector(".bs-s5-active");
      if (swiperEl?._swiperInstance) {
        swiperEl._swiperInstance.destroy(true, true);
      }

      // kill scoped ScrollTriggers
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const el = t.vars?.scrollTrigger?.trigger;
            return typeof el === "string" && el.includes("bs-services-5");
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* product-start */}
      <section className="bs-services-5-area wa-fix wa-p-relative pt-80 pb-5">

        <style>{`
          .bs-services-5-left {
            padding-bottom: 3rem !important;
          }
          @media (max-width: 1024px) {
            .bs-services-5-left {
              padding-bottom: 1.5rem !important;
            }
          }
          @media (max-width: 767px) {
            .bs-services-5-left {
              padding-bottom: 1rem !important;
            }
          }
          @media (max-width: 1024px) {
            .inner-div {
              display: none !important;
            }
          }
        `}</style>

        <div className="container bs-container-2">
          <div className="bs-services-5-wrap">

            {/* ── left side ── */}
            <div className="bs-services-5-left wa-p-relative">

              <div className="bg-color"></div>

              {/* section title */}
              <div className="bs-services-5-sec-title mb-50">
                <h2
                  className="bs-sec-title-4 wa-split-right wa-capitalize"
                  data-cursor="-opaque"
                >
                  We craft excellence <br /> in every detail.
                </h2>
              </div>

              {/* drone video — hidden on tablet/mobile */}
              <div className="inner-div">
                <div className="bs-services-5-img-1 wa-fix wa-img-cover wa-fadeInUp">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="assets/img/video/fac-drone-video.mp4"
                  />
                </div>
              </div>

              {/* service list */}
              <div className="bs-services-5-item">
                {serviceItems.map((item) => (
                  <a
                    key={item.slide}
                    href={item.href}
                    aria-label={item.title}
                    className="bs-h-4 bs-services-5-item-single wa-fadeInUp"
                    data-cursor-text="View"
                    data-slide={item.slide}
                  >
                    <span className="number">{item.number}</span>
                    <span className="title">{item.title}</span>
                    <div className="icon">
                      <i className="flaticon-next-1 flaticon"></i>
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* ── right slider ── */}
            <div
              className="bs-services-5-slider wa-p-relative wa-fix"
              data-cursor="-opaque"
            >
              <div className="swiper-container wa-fix bs-s5-active">
                <div className="swiper-wrapper">
                  {slides.map((src, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="bs-services-5-slider-single">
                        <div className="bs-services-5-img wa-fix wa-img-cover">
                          <img
                            src={src}
                            alt={serviceItems[index]?.title || ""}
                          />
                        </div>
                        <div className="bs-services-5-img-border-1"></div>
                        <div className="bs-services-5-img-border-2"></div>
                        <div className="bs-services-5-img-border-3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* product-end */}
    </>
  );
}

export default ProductMain;