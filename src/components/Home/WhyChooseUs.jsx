import { useEffect, useRef } from "react";

const PROGRESS_ITEMS = [
  { label: "Artisanal Craftsmanship", value: 95 },
  { label: "Design Precision", value: 90 },
  { label: "Client Satisfaction", value: 98 },
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
  const sectionRef = useRef(null);
  const progressRefs = useRef([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Apply data-background as inline style (main.js did this in HTML version)
    const section = sectionRef.current;
    if (section) {
      section.style.backgroundImage = "url(assets/img/choose/ch5-bg-img-1.webp)";
      section.style.backgroundSize = "cover";
      section.style.backgroundPosition = "center";
    }

    // Scroll-triggered progress bar animation
    const animateProgress = () => {
      if (animatedRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        animatedRef.current = true;
        progressRefs.current.forEach((bar, i) => {
          if (!bar) return;
          const targetWidth = PROGRESS_ITEMS[i].value + "%";
          bar.style.transition = "width 1.2s ease";
          bar.style.width = "0%";
          // Trigger reflow so transition fires
          void bar.offsetWidth;
          bar.style.width = targetWidth;
        });
      }
    };

    // Start bars at 0
    progressRefs.current.forEach((bar) => {
      if (bar) bar.style.width = "0%";
    });

    window.addEventListener("scroll", animateProgress, { passive: true });
    animateProgress(); // check on mount in case already in view

    return () => window.removeEventListener("scroll", animateProgress);
  }, []);

  return (
    <>
      {/* choose-start */}
      <section
        className="bs-choose-4-area wa-bg-default wa-fix pb-120"
        ref={sectionRef}
      >
        <div className="container bs-container-2">
          <div className="bs-choose-4-wrap">

            <div className="bs-choose-4-content-height">
              <div className="bs-choose-4-content-pin">
                <div className="bs-choose-4-content">

                  <h5 className="bs-subtitle-4 bs-choose-4-subtitle">
                    <span className="text">Why Choose Us</span>
                    <span className="icon">
                      <img src="assets/img/illus/subtitle-4-icon-2.svg" alt="" />
                    </span>
                  </h5>

                  <h2 className="bs-sec-title-4 title wa-split-right wa-capitalize" data-cursor="-opaque">
                    Masters in Stone Craftsmanship and Architectural Art.
                  </h2>

                  <p className="bs-p-4 disc wa-fadeInUp">
                    With decades of experience, Nirankar Sandstone Industries blends traditional artistry with modern design excellence.
                    Our dedication to detail, quality, and innovation ensures that every creation stands as a symbol of heritage and trust.
                  </p>

                  <div className="bs-choose-4-progress">
                    {PROGRESS_ITEMS.map((item, i) => (
                      <div className="bs-choose-4-progress-item" key={i}>
                        <h5 className="bs-p-1 progress-title">
                          <span>{item.label}</span>
                          <span className="counter">{item.value}</span>%
                        </h5>
                        <div className="progress-line">
                          <div
                            className="progress-line-fill wa-progress"
                            ref={(el) => (progressRefs.current[i] = el)}
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>

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