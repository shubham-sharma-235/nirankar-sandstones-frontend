import { useEffect } from "react";

const processSteps = [
  {
    video: "./assets/img/video/c2.webm",
    number: "01",
    title: "Stone Selection & Planning",
    disc: "We begin by selecting premium sandstone blocks and planning sizes, finishes, and quantities as per project drawings.",
  },
  {
    video: "./assets/img/video/c4.webm",
    number: "02",
    title: "Cutting & Primary Shaping",
    disc: "Raw blocks are cut on gang saws and machines into slabs, columns, and profiles, ready for carving and detailing.",
  },
  {
    video: "./assets/img/video/c3.webm",
    number: "03",
    title: "Hand-Carving & Finishing",
    disc: "Skilled artisans hand-carve jalis, jharokhas, arches, and moldings, followed by fine finishing and surface treatment.",
  },
  {
    video: "./assets/img/video/c1.webm",
    number: "04",
    title: "Quality Check & Dispatch",
    disc: "Every piece is checked for size, finish, and detailing, then securely packed and dispatched to project sites worldwide.",
  },
];

function WorkProcessSection() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const $ = window.jQuery;

      if (!gsap || !$) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── item-line height grow on scroll
      document.querySelectorAll(".bs-work-process-area .item-line").forEach((el) => {
        gsap.from(el, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── item-img clip reveal
      document.querySelectorAll(".bs-work-process-area .item-img").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ── number fadeInUp
      document.querySelectorAll(".bs-work-process-area .number").forEach((el) => {
        gsap.from(el, {
          y: 30,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── title wa-split or simple fadeInUp
      document.querySelectorAll(".bs-work-process-area .title").forEach((el) => {
        if (SplitText) {
          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(split.chars, { x: 50, opacity: 0 });
          gsap.to(split.chars, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.02,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        } else {
          gsap.from(el, {
            y: 20,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      // ── disc fadeInUp
      document.querySelectorAll(".bs-work-process-area .disc").forEach((el) => {
        gsap.from(el, {
          y: 20,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── full row stagger on each single item
      document.querySelectorAll(".bs-work-process-item-single").forEach((el, i) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
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
            return typeof el === "string" && el.includes("bs-work-process");
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* work-process-start */}
      <section className="bs-work-process-area pt-100" id="process-start">
        <div className="container bs-container-1">
          <div className="bs-work-process-item">

            {processSteps.map((step, index) => (
              <div key={index} className="bs-work-process-item-single">

                <div className="item-img wa-fix wa-img-cover">
                  <video
                    style={{ height: "100%", width: "100%" }}
                    src={step.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                <div className="item-line"></div>

                <div className="content">
                  <h4 className="bs-h-4 number">{step.number}</h4>
                  <h5 className="bs-h-4 title">{step.title}</h5>
                  <p className="bs-p-4 disc">{step.disc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
      {/* work-process-end */}
    </>
  );
}

export default WorkProcessSection;