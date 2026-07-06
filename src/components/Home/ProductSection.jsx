import { useEffect } from "react";

const productCards = [
  {
    href: "./products/statue.html",
    title: "Statues",
    img: "./assets/img/services/s4-img-1.png",
    disc: "Hand-carved décor crafted for luxury gardens, villas, and premium resort spaces.",
    bg: "assets/img/services/s4-card-bg.png",
    defaultImg: "./assets/img/services/s4-img-1.png",
    active: true,
  },
  {
    href: "./products/fountain.html",
    title: "Stone Fountains",
    img: "./assets/img/services/fountain-cover.jpeg",
    disc: "Elegant handcrafted stone fountains designed to bring serenity and sophistication to any landscape.",
    bg: "assets/img/services/s4-card-bg.png",
    defaultImg: "./assets/img/services/fountain-cover.jpeg",
    active: false,
  },
  {
    href: "./products/planters.html",
    title: "Stone Planters",
    img: "./assets/img/services/planters-cover.jpeg",
    disc: "Premium stone planters crafted for luxurious outdoor and indoor spaces with timeless elegance.",
    bg: "assets/img/services/s4-card-bg.png",
    defaultImg: "./assets/img/services/planters-cover.jpeg",
    active: false,
  },
  {
    href: "./products/wall-panel.html",
    title: "Wall Panels",
    img: "https://nirankar-production.netlify.app/products/img/wall-panel/4.jpg",
    disc: "Artistic Wall Panels designed to create ambient with a touch of natural elegance.",
    bg: "assets/img/services/s4-card-bg.png",
    defaultImg: "https://nirankar-production.netlify.app/products/img/wall-panel/4.jpg",
    active: false,
  },
  {
    href: "./products/modern-art.html",
    title: "Modern Stone Arts",
    img: "./assets/img/services/modern-art-cover.jpeg",
    disc: "Contemporary stone sculptures crafted with precision to elevate luxury homes and curated spaces.",
    bg: "assets/img/services/s4-card-bg.png",
    defaultImg: "./assets/img/services/modern-art-cover.jpeg",
    active: false,
  },
];

function ProductSection() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const $ = window.jQuery;

      if (!gsap || !$) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── 1. data-background on section + cards
      $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
      });

      // ── 2. marquee on "Nirankar Sandstones" text
      if ($(".bs-video-4-marquee-active").length && $.fn.marquee) {
        $(".bs-video-4-marquee-active").marquee({
          gap: 50,
          speed: 80,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: true,
          pauseOnHover: true,
          startVisible: true,
        });
      }

      // ── 3. wa-parallax-img on video section bg
      gsap.fromTo(
        ".bs-video-4-area .wa-parallax-img",
        { objectPosition: "50% 0%" },
        {
          objectPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".bs-video-4-area",
            scrub: true,
          },
        }
      );

      // ── 4. wa-split-text on marquee heading
      if (SplitText && $(".bs-video-4-area .wa-split-text").length) {
        $(".bs-video-4-area .wa-split-text").each(function (_, el) {
          el.split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
        });
      }

      // ── 5. subtitle-4 width animation
      gsap.from(".bs-services-4-area .bs-subtitle-4", {
        width: "0%",
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: ".bs-services-4-area .bs-subtitle-4",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // ── 6. wa-split-right on heading
      if (SplitText) {
        document.querySelectorAll(".bs-video-4-area .wa-split-text").forEach((el) => {
          const split = new SplitText(el, {
            type: "chars",
            charsClass: "split-char",
          });
      
          split.chars.forEach((char) => {
            char.addEventListener("mouseenter", () => {
              gsap.to(char, {
                y: -8,
                duration: 0.2,
                ease: "power2.out",
              });
            });
            char.addEventListener("mouseleave", () => {
              gsap.to(char, {
                y: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.4)",
              });
            });
          });
        });
      }

      // ── 7. wa-fadeInUp (disc + button)
      document.querySelectorAll(".bs-services-4-area .wa-fadeInUp").forEach((el) => {
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

      // ── 8. wa-slideInLeft on side image
      gsap.from(".bs-services-4-img.wa-slideInLeft", {
        xPercent: -100,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: ".bs-services-4-img",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // ── 9. product cards slide in from right (desktop)
      if (window.matchMedia("(min-width: 992px)").matches) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-services-4-item-single",
            start: "top 40%",
            toggleActions: "play none none reverse",
          },
        }).from(".bs-services-4-item", { x: 324, stagger: 0.2 });
      }

      // ── 10. product card hover active toggle
      $(".bs-services-4-item-single").on("mouseover", function () {
        $(".bs-services-4-item-single.active").removeClass("active");
        $(this).addClass("active");
      });

    }, 150);

    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const el = t.vars?.scrollTrigger?.trigger;
            return typeof el === "string" && (
              el.includes("bs-video-4") ||
              el.includes("bs-services-4")
            );
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* video-start */}
      <section className="bs-video-4-area">
        <div className="bs-video-4-content wa-p-relative wa-fix wa-img-cover">
          <img
            className="wa-parallax-img"
            src="assets/img/video/v4-img-1.png"
            alt=""
          />
          <div className="bs-video-4-text">
            {/* marquee wrapper — jQuery marquee duplicates this automatically */}
            <div className="bs-video-4-marquee-active">
              <h4 className="bs-h-1 bs-video-4-text-item wa-split-text">
                Nirankar Sandstones
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* video-end */}

      {/* services-start */}
      <section
        className="bs-services-4-area pt-100 wa-fix"
        data-background="assets/img/services/s4-bg.png"
      >
        <div className="bs-services-4-img wa-fix wa-img-cover wa-slideInLeft">
          <img src="assets/img/services/s4-img-1.png" alt="" />
        </div>

        <div className="container bs-container-2">
          <h5 className="bs-subtitle-4 bs-services-4-subtitle">
            <span className="text">Our Products</span>
            <span className="icon">
              <img src="assets/img/illus/subtitle-4-icon-2.svg" alt="" />
            </span>
          </h5>

          <div className="bs-services-4-wrap">

            {/* left-content */}
            <div className="bs-services-4-content">
              <h2
                className="bs-sec-title-4 title wa-split-right wa-capitalize"
                data-cursor="-opaque"
              >
                Crafted to Endure.
              </h2>

              <p className="bs-p-4 disc wa-fadeInUp">
                Discover Nirankar's handcrafted collection of sculptures, fountains, and architectural stoneworks — where every creation reflects heritage, precision, and enduring beauty.
              </p>

              <div className="btn-wrap wa-fadeInUp">
                <a href="/products" aria-label="name" className="bs-pr-btn-2">
                  <span className="text" data-back="view all products" data-front="view all products"></span>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="box box-1"></span>
                  <span className="box box-2"></span>
                  <span className="box box-3"></span>
                  <span className="box box-4"></span>
                </a>
              </div>
            </div>

            {/* right-item — product cards */}
            <div className="bs-services-4-item">
              {productCards.map((card, index) => (
                <div
                  key={index}
                  className={`bs-services-4-item-single wa-bg-default${card.active ? " active" : ""}`}
                  data-background={card.bg}
                >
                  {/* active (expanded) content */}
                  <div className="active-content">
                    <h4 className="bs-h-1 title">
                      <a href={card.href} aria-label={card.title} className="wa-line-limit has-line-2">
                        {card.title}
                      </a>
                    </h4>
                    <div className="main-img wa-fix wa-img-cover">
                      <img src={card.img} alt={card.title} />
                    </div>
                    <p className="bs-p-4 disc wa-line-limit has-line-3">
                      {card.disc}
                    </p>
                  </div>

                  {/* default (collapsed) content */}
                  <div className="default-content">
                    <div className="img-2 wa-fix wa-img-cover">
                      <img src={card.defaultImg} alt={card.title} />
                    </div>
                    <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* services-end */}
    </>
  );
}

export default ProductSection;