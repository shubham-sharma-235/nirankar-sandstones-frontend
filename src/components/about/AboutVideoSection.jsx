import { useEffect } from "react";

function AboutVideoSection() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const $ = window.jQuery;

      if (!gsap || !$) return;

      // ── wa-split-down (title words)
      if (SplitText) {
        gsap.registerPlugin(SplitText);

        document.querySelectorAll(".bs-video-1-area .wa-split-down").forEach((el) => {
          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(split.chars, { yPercent: 100, opacity: 0 });
          gsap.to(split.chars, {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(2)",
            stagger: { amount: 0.7, from: "random" },
            scrollTrigger: ScrollTrigger
              ? {
                  trigger: el,
                  start: "top 86%",
                  toggleActions: "play none none reverse",
                }
              : undefined,
          });
        });
      }

      // ── video-1 title slide up
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bs-video-1-content .title",
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power2.out", duration: 0.8 },
        });
        tl.from(".bs-video-1-content .title", { yPercent: 100 });
        tl.from(".bs-video-1-content-list",    { xPercent: 100, opacity: 0 }, "<80%");

        // ── video image parallax
        gsap.fromTo(
          ".bs-video-1-content-img",
          { objectPosition: "50% 0%" },
          {
            objectPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: ".bs-video-1-area",
              scrub: true,
            },
          }
        );

        // ── wa-clip-left-right on list items
        document.querySelectorAll(".bs-video-1-area .wa-clip-left-right").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.out",
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // ── fadeInUp on list
        document.querySelectorAll(".bs-video-1-area .wa-fadeInUp").forEach((el) => {
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
      }

      // ── magnetic on play button
      if ($(".bs-video-1-area .wa-magnetic").length) {
        $(".bs-video-1-area .wa-magnetic").each(function () {
          const magnet = this;
          magnet.addEventListener("mousemove", (event) => {
            const b = magnet.getBoundingClientRect();
            gsap.to(magnet, {
              x: (((event.clientX - b.left) / magnet.offsetWidth)  - 0.5) * 100,
              y: (((event.clientY - b.top)  / magnet.offsetHeight) - 0.5) * 100,
              duration: 1,
              ease: "elastic.out(1,0.3)",
            });
          });
          magnet.addEventListener("mouseout", () => {
            gsap.to(magnet, { x: 0, y: 0, duration: 1, ease: "elastic.out(1,0.3)" });
          });
        });
      }

      // ── popup video (if play button uncommented)
      if ($(".bs-video-1-area .popup-video").length && $.fn.magnificPopup) {
        $(".bs-video-1-area .popup-video").magnificPopup({ type: "iframe" });
      }

    }, 150);

    return () => {
      clearTimeout(timer);
      // Kill ScrollTriggers scoped to this section only
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const trigger = t.vars?.scrollTrigger?.trigger;
            return (
              typeof trigger === "string" &&
              trigger.includes("bs-video-1")
            );
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* video-start */}
      <section className="bs-video-1-area wa-fix">
        <div className="bs-video-1-content wa-p-relative">

          <div className="bs-video-1-content-img wa-p-relative wa-fix wa-img-cover">
            <video autoPlay muted loop playsInline src="./assets/img/video/making-video.mp4" />

            {/* Uncomment to enable play button
            <div className="bs-video-1-play-btn">
              
                href="https://www.youtube.com/watch?v=TdTudAOl37s"
                aria-label="Play video"
                className="bs-play-btn-3 wa-magnetic popup-video"
              >
                <span className="icon wa-magnetic-btn">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div> */}
          </div>

          <div className="bs-h-1 title wa-split-down" data-cursor="-opaque">
            timeless
            <div className="bs-video-1-content-list">
              {/* Uncomment to enable image
              <div className="main-img wa-fix wa-img-cover">
                <img src="assets/img/video/v1-img-2.png" alt="" />
              </div> */}
              <ul className="list">
                <li>
                  <b>expertise:</b> stone design & craftsmanship
                </li>
                <li>
                  <b>legacy since:</b> 1990 · Rajasthan, India
                </li>
              </ul>
            </div>
            artistry
          </div>

        </div>
      </section>
      {/* video-end */}
    </>
  );
}

export default AboutVideoSection;