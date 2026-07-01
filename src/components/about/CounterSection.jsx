import { useEffect } from "react";

const stats = [
  {
    title: "Projects Completed",
    count: 42,
    disc: "Successfully delivered bespoke stone projects across India and abroad.",
    delay: "",
  },
  {
    title: "Years of Expertise",
    count: 35,
    disc: "Over three decades of experience in traditional and modern stone artistry.",
    delay: "0.2s",
  },
  {
    title: "Happy Clients",
    count: 680,
    disc: "Trusted by architects, designers, and homeowners worldwide.",
    delay: "0.4s",
  },
  {
    title: "Skilled Artisans",
    count: 110,
    disc: "A dedicated team of craftsmen bringing life and detail to every creation.",
    delay: "0.6s",
  },
];

function CounterSection() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.jQuery;
      if (!$) return;

      // counterUp needs waypoints — init both
      if ($.fn.counterUp) {
        $(".counter").counterUp({ delay: 10, time: 5000 });
      }

      // Fix wa-counter widths (template sets fixed width to prevent layout shift)
      document.querySelectorAll(".wa-counter").forEach((el) => {
        el.style.width = el.clientWidth + "px";
      });

      // Re-init WOW for the new elements if available
      if (window.WOW) {
        new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        }).init();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* counter-start */}
      <section className="bs-core-feature-5-area mb-90">
        <div className="container bs-container-2">
          <div className="bs-core-feature-4-line wa-scaleXInUp"></div>

          <div className="bs-core-feature-4-wrap has-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bs-core-feature-4-item wow fadeInRight"
                data-wow-delay={stat.delay || undefined}
              >
                <h4 className="bs-h-4 item-title">{stat.title}</h4>
                <h5 className="bs-h-4 item-counter" data-cursor="-opaque">
                  <span className="counter wa-counter">{stat.count}</span>+
                </h5>
                <p className="bs-p-4 item-disc">{stat.disc}</p>
              </div>
            ))}
          </div>

          <div className="bs-core-feature-4-line wa-scaleXInUp"></div>
        </div>
      </section>
      {/* counter-end */}
    </>
  );
}

export default CounterSection;