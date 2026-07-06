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

// paths match original HTML exactly
const slides = [
  "https://nirankar-production.netlify.app/products/img/fountain/Fountain/4.jpeg",
  "https://nirankar-production.netlify.app/products/img/planter/planters/17.jpeg",
  "https://nirankar-production.netlify.app/products/img/modern-art/Modern%20Art/10.jpeg",
  "https://nirankar-production.netlify.app/products/img/statue/Statue/8.jpeg",
  "https://nirankar-production.netlify.app/products/img/decorative-items/Decor/17.jpg",
  "https://nirankar-production.netlify.app/products/img/table-console/Tablee/3.jpeg",
  "https://nirankar-production.netlify.app/products/img/wall-panel/4.jpg",
];

function ProductMain() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap          = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText     = window.SplitText;
      const $             = window.jQuery;
      const Swiper        = window.Swiper;

      if (!gsap || !$ || !Swiper) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // destroy any existing swiper instance first
      const swiperEl = document.querySelector(".bs-s5-active");
      if (swiperEl?._swiperInstance) {
        swiperEl._swiperInstance.destroy(true, true);
      }

      // init swiper — fade effect, no touch (hover controlled)
      const swiper = new Swiper(".bs-s5-active", {
        loop: false,
        speed: 600,
        effect: "fade",
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
        initialSlide: 0,
      });

      // HOVER: left item changes right slide
      // Using jQuery delegated events so it works even after React renders
      $(document).off("mouseenter.s5items", ".bs-services-5-item-single");
      $(document).on("mouseenter.s5items", ".bs-services-5-item-single", function () {
        const slideIndex = parseInt($(this).attr("data-slide"));
        if (!isNaN(slideIndex) && swiper) {
          swiper.slideTo(slideIndex, 600);
        }
      });

      // store swiper for cleanup
      if (swiperEl) swiperEl._swiperInstance = swiper;

      // bg-color scrub animation
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

      // wa-split-right on heading
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

      // wa-fadeInUp on service items
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

      // right slider clip reveal
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

    }, 150);

    return () => {
      clearTimeout(timer);

      const $ = window.jQuery;
      if ($) $(document).off("mouseenter.s5items", ".bs-services-5-item-single");

      const swiperEl = document.querySelector(".bs-s5-active");
      if (swiperEl?._swiperInstance) {
        swiperEl._swiperInstance.destroy(true, true);
      }

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
            .inner-div {
              display: none !important;
            }
          }
          @media (max-width: 767px) {
            .bs-services-5-left {
              padding-bottom: 1rem !important;
            }
          }
        `}</style>

        <div className="container bs-container-2">
          <div className="bs-services-5-wrap">

            {/* left side */}
            <div className="bs-services-5-left wa-p-relative">

              <div className="bg-color"></div>

              <div className="bs-services-5-sec-title mb-50">
                <h2
                  className="bs-sec-title-4 wa-split-right wa-capitalize"
                  data-cursor="-opaque"
                >
                  We craft excellence <br /> in every detail.
                </h2>
              </div>

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

            {/* right slider */}
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