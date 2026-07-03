import { useEffect } from "react";

const PROGRESS_ITEMS = [
  { label: "Artisanal Craftsmanship", value: 95 },
  { label: "Design Precision",        value: 90 },
  { label: "Client Satisfaction",     value: 98 },
];

const FEATURE_ITEMS = [
  {
    icon: "flaticon-minimalist",
    title: "Artisan Expertise",
    desc: "Backed by generations of skilled artisans, we craft each piece with unmatched precision and soulful artistry.",
  },
  {
    icon: "flaticon-blueprint",
    title: "Design Innovation",
    desc: "Combining heritage techniques with modern design, our creations bring timeless elegance to every project.",
  },
  {
    icon: "flaticon-property-insurance",
    title: "Quality Commitment",
    desc: "Every product undergoes strict quality checks to ensure lasting beauty, durability, and flawless finish.",
  },
  {
    icon: "flaticon-goodwill-1",
    title: "Trusted Legacy",
    desc: "With decades of experience and countless satisfied clients, Nirankar stands as a symbol of trust and excellence.",
  },
];

function WhyChooseUs() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap        = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText   = window.SplitText;
      const $           = window.jQuery;

      if (!gsap || !$) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── 1. data-background
      $(".bs-choose-4-area[data-background]").each(function () {
        $(this).css(
          "background-image",
          "url(" + $(this).attr("data-background") + ")"
        );
      });

      // ── 2. subtitle-4 width animation
      gsap.from(".bs-choose-4-area .bs-subtitle-4", {
        width: "0%",
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: ".bs-choose-4-area .bs-subtitle-4",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // ── 3. wa-split-right on heading
      if (SplitText) {
        document.querySelectorAll(".bs-choose-4-area .wa-split-right").forEach((el) => {
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

      // ── 4. wa-fadeInUp on paragraph
      document.querySelectorAll(".bs-choose-4-area .wa-fadeInUp").forEach((el) => {
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

      // ── 5. progress bars — GSAP scaleX from left (wa-progress)
      document.querySelectorAll(".bs-choose-4-area .wa-progress").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left",
          ease: "power2.out",
          duration: 3,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── 6. DESKTOP ONLY — pin + shrink left content on scroll
      //       + tyre-roll feature cards from left
      if (window.matchMedia("(min-width: 992px)").matches) {

        // pin the left content column while user scrolls through the section
        gsap.to(".bs-choose-4-content-pin", {
          scrollTrigger: {
            trigger: ".bs-choose-4-content-height",
            start: "top top",
            end: "bottom bottom",
            pin: ".bs-choose-4-content-pin",
            pinSpacing: true,
            markers: false,
          },
        });

        // shrink + slide left content as user scrolls down (scale 0, xPercent -50)
        gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-choose-4-content-height",
            start: "top 0%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }).to(".bs-choose-4-content", {
          scale: 0,
          xPercent: -50,
        });

        // feature cards fly in from left like tyres rolling in
        gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-choose-4-feature",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }).from(".bs-choose-4-feature .item-margin", {
          xPercent: -200,
          rotation: -200,
          stagger: -0.1,  // reverse stagger so last card arrives first
          duration: 1.5,
          ease: "back.out(2)",
        });
      }

    }, 150);

    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const el = t.vars?.scrollTrigger?.trigger;
            return typeof el === "string" && el.includes("bs-choose-4");
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* choose-start */}
      <section
        className="bs-choose-4-area wa-bg-default wa-fix pb-120"
        data-background="assets/img/choose/ch5-bg-img-1.webp"
      >
        <div className="container bs-container-2">
          <div className="bs-choose-4-wrap">

            <div className="bs-choose-4-content-height">
              {/* left-content */}
              <div className="bs-choose-4-content-pin">
                <div className="bs-choose-4-content">

                  <h5 className="bs-subtitle-4 bs-choose-4-subtitle">
                    <span className="text">Why Choose Us</span>
                    <span className="icon">
                      <img src="assets/img/illus/subtitle-4-icon-2.svg" alt="" />
                    </span>
                  </h5>

                  <h2
                    className="bs-sec-title-4 title wa-split-right wa-capitalize"
                    data-cursor="-opaque"
                  >
                    Masters in Stone Craftsmanship and Architectural Art.
                  </h2>

                  <p className="bs-p-4 disc wa-fadeInUp">
                    With decades of experience, Nirankar Sandstone Industries blends
                    traditional artistry with modern design excellence. Our dedication
                    to detail, quality, and innovation ensures that every creation
                    stands as a symbol of heritage and trust.
                  </p>

                  <div className="bs-choose-4-progress">
                    {PROGRESS_ITEMS.map((item, i) => (
                      <div className="bs-choose-4-progress-item" key={i}>
                        <h5
                          className="bs-p-1 progress-title"
                          style={{ width: `${item.value}%` }}
                        >
                          <span>{item.label}</span>
                          <span className="counter">{item.value}</span>%
                        </h5>
                        <div className="progress-line">
                          <div
                            className="progress-line-fill wa-progress"
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* right-play-btn — commented out in original */}
            {/* <div className="bs-choose-4-right d-flex justify-content-center align-items-center">
              <video href="./assets/img/video/making-video.mp4" aria-label="name" className="bs-play-btn-4 wa-magnetic popup-video">
                <span className="icon wa-magnetic-btn">
                  <i className="flaticon-play flaticon"></i>
                </span>
              </video>
            </div> */}

          </div>

          {/* feature cards — tyre-roll animation from left */}
          <div className="bs-choose-4-feature">
            {FEATURE_ITEMS.map((feat, i) => (
              <div className="item-margin" key={i}>
                <div className="bs-choose-4-feature-single">
                  <div className="icon">
                    <i className={`${feat.icon} flaticon`}></i>
                  </div>
                  <h4 className="bs-h-4 title">{feat.title}</h4>
                  <p className="bs-p-4 disc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* choose-end */}
    </>
  );
}

export default WhyChooseUs;