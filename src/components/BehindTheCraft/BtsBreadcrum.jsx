import { useEffect } from "react";

function BreadcrumbSection() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const $ = window.jQuery;

      if (!gsap || !$) return;

      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (SplitText)     gsap.registerPlugin(SplitText);

      // ── wa-parallax-img
      gsap.fromTo(
        ".breadcrumb-area .wa-parallax-img",
        { objectPosition: "50% 0%" },
        {
          objectPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".breadcrumb-area",
            scrub: true,
          },
        }
      );

      // ── wa-split-right (title)
      if (SplitText) {
        document.querySelectorAll(".breadcrumb-area .wa-split-right").forEach((el) => {
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
          });
        });
      }

      // ── disc fadeInUp
      gsap.from(".breadcrumb-area .disc", {
        y: 30,
        autoAlpha: 0,
        duration: 0.5,
        delay: 1.3,
        ease: "power2.out",
      });

      // ── button fadeInUp
      gsap.from(".breadcrumb-area .bs-btn-1", {
        y: 30,
        autoAlpha: 0,
        duration: 0.5,
        delay: 1.5,
        ease: "power2.out",
      });

      // ── sm-img clip reveal
      gsap.fromTo(
        ".breadcrumb-area .sm-img",
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.8,
          delay: 1.6,
          ease: "power2.out",
        }
      );

      // ── big-img clip reveal
      gsap.fromTo(
        ".breadcrumb-area .big-img",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.8,
          delay: 1.2,
          ease: "power2.out",
        }
      );

      // ── bs-btn-1 ripple effect
      if ($(".breadcrumb-area .bs-btn-1").length) {
        $(".breadcrumb-area .bs-btn-1")
          .on("mouseenter", function (e) {
            const po = $(this).offset();
            $(this).find(".shape").css({
              top:  e.pageY - po.top,
              left: e.pageX - po.left,
            });
          })
          .on("mouseout", function (e) {
            const po = $(this).offset();
            $(this).find(".shape").css({
              top:  e.pageY - po.top,
              left: e.pageX - po.left,
            });
          });
      }

    }, 150);

    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll()
          .filter((t) => {
            const el = t.vars?.scrollTrigger?.trigger;
            return typeof el === "string" && el.includes("breadcrumb");
          })
          .forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* breadcrumb-start */}
      <section className="breadcrumb-area has-career-page wa-p-relative">

        <div className="breadcrumb-bg-img wa-fix wa-img-cover">
          <img
            className="wa-parallax-img"
            src="assets/img/breadcrumb/breadcrumb-img.png"
            alt=""
          />
        </div>

        <div className="container bs-container-1">
          <div className="breadcrumb-wrap">

            <div className="left">
              <h1
                className="breadcrumb-title wa-split-right wa-capitalize"
                data-split-delay="1.1s"
              >
                Behind the Craft
              </h1>

              <p className="bs-p-4 disc">
                From raw stone to handcrafted architectural masterpieces.
              </p>

              <a href="#process-start" aria-label="name" className="bs-btn-1">
                <span className="text">Explore</span>
                <span className="icon">
                  <i className="fa-solid fa-right-long"></i>
                  <i className="fa-solid fa-right-long"></i>
                </span>
                <span className="shape"></span>
              </a>

              <div className="sm-img wa-img-cover wa-fix">
                <img src="assets/img/work/w6-big-img.png" alt="" />
              </div>
            </div>

            <div className="big-img wa-img-cover wa-fix">
              <img src="assets/img/about/a1-img-4.JPG" alt="" />
            </div>

          </div>
        </div>

      </section>
      {/* breadcrumb-end */}
    </>
  );
}

export default BreadcrumbSection;