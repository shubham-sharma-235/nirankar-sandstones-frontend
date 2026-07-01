import { useEffect } from "react";

const workSteps = [
  {
    img: "assets/img/work/w5-img-1.png",
    title: "Understanding the Vision",
    disc: "Every project begins with your idea. We listen, discuss materials, and visualize the concept to align craftsmanship with purpose.",
    number: "01",
    ani: "has-ani-up",
  },
  {
    img: "assets/img/work/w5-img-2.png",
    title: "Design & Detailing",
    disc: "Our artisans and designers collaborate to sketch, model, and plan every curve and contour before carving begins.",
    number: "02",
    ani: "has-ani-down",
  },
  {
    img: "assets/img/work/w5-img-3.png",
    title: "Crafting & Carving",
    disc: "Skilled artisans bring the design to life, hand-chiseling raw sandstone into shapes that embody elegance and emotion.",
    number: "03",
    ani: "has-ani-up",
  },
  {
    img: "assets/img/work/w5-img-4.png",
    title: "Finishing & Installation",
    disc: "After fine polishing and quality checks, each piece is securely packed, shipped, and installed with precision on-site.",
    number: "04",
    ani: "has-ani-down",
  },
];

function WorkProcess() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const $ = window.jQuery;

      if (!gsap || !$) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── section background
      $(".bs-work-5-area[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
      });

      // ── CARD HOVER IMAGE FIX
      // The CSS has no height on .bg-img, and it's a background-image div.
      // We need to:
      // 1. Set the background-image from data-background on the card
      // 2. Set a height so the div is actually visible
      // 3. Set background-size: cover and background-position: center
      document.querySelectorAll(".bs-work-5-card").forEach((card) => {
        const bg    = card.getAttribute("data-background");
        const bgDiv = card.querySelector(".bg-img");
        if (!bg || !bgDiv) return;

        bgDiv.style.backgroundImage    = `url(${bg})`;
        bgDiv.style.backgroundSize     = "cover";
        bgDiv.style.backgroundPosition = "center center";
        bgDiv.style.backgroundRepeat   = "no-repeat";
        bgDiv.style.height             = "100%"; // fill the card
      });

      // ── wa-split-right
      if (SplitText) {
        document.querySelectorAll(".bs-work-5-area .wa-split-right").forEach((el) => {
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

      // ── card up/down animation (desktop only)
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-work-5-wrap",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
        tl.to(".bs-work-5-wrap .has-ani-up",  { y: -28, duration: 0.5, ease: "power2.out" });
        tl.to(".bs-work-5-wrap .has-ani-down", { y:  28, duration: 0.5, ease: "power2.out" }, "<");
      }

      // ── card title / disc / number fadeInUp
      document.querySelectorAll(
        ".bs-work-5-card .title, .bs-work-5-card .disc, .bs-work-5-card .number"
      ).forEach((el) => {
        gsap.from(el, {
          y: 30,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });

    }, 150);

    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const el = t.vars?.scrollTrigger?.trigger;
            return typeof el === "string" && el.includes("bs-work-5");
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* work-start */}
      <section
        className="bs-work-5-area wa-bg-default pt-1 pb-170"
        data-background="assets/img/work/w5-bg-img.png"
      >
        <div className="container bs-container-2">

          {/* section-title */}
          <div className="bs-work-5-sec-title mb-90">
            <h6 className="bs-subtitle-5 wa-capitalize">
              <span>05</span>
              <span className="wa-split-right">work process</span>
            </h6>
            <h2
              className="bs-sec-title-4 wa-split-right wa-capitalize"
              data-cursor="-opaque"
            >
              How We Transform Stone into Timeless Art.
            </h2>
          </div>

          {/* cards */}
          <div className="bs-work-5-wrap">
            {workSteps.map((step, index) => (
              <div
                key={index}
                className={`bs-work-5-card ${step.ani}`}
                data-background={step.img}
              >
                {/* empty div — background-image, size, height
                    all set by useEffect above               */}
                <div className="bg-img wa-img-cover wa-fix"></div>

                <h4 className="bs-h-1 title">{step.title}</h4>
                <p  className="bs-p-4 disc">{step.disc}</p>
                <h5 className="bs-h-1 number">{step.number}</h5>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* work-end */}
    </>
  );
}

export default WorkProcess;