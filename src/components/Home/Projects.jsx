import { useEffect, useRef } from "react";

const PROJECT_SLIDES = [
  {
    href: "./projects/crafting-justice.html",
    img: "assets/img/projects/crafting-justice.png",
    alt: "Allahabad High Court",
    title: "Crafting Justice: Allahabad High Court, Lucknow Bench",
    tags: ["Institutional Stonework", "Pink & Red Stone"],
  },
  {
    href: "./projects/golden-arches-kolkata.html",
    img: "assets/img/projects/golden-arches.png",
    alt: "Golden Arches Kolkata",
    title: "Golden Arches of Kolkata: Jaisalmer Stone Landmark",
    tags: ["Jaisalmer Stone", "Clock Tower"],
  },
  {
    href: "./projects/restoring-royalty.html",
    img: "assets/img/projects/red-sandstone-reconstruction.png",
    alt: "Shahpura House",
    title: "Restoring Royalty: Shahpura House Red Stone",
    tags: ["Restoration", "Red Stone"],
  },
  {
    href: "./projects.html",
    img: "assets/img/projects/hotel-ratan-mahal.png",
    alt: "Nirankar Projects",
    title: "Hotel Ratan Mahal: Pink Sandstone Architecture",
    tags: ["Pink Sandstone", "Jharokhas"],
  },
  {
    href: "./projects.html",
    img: "assets/img/projects/seat-of-governance.png",
    alt: "Nirankar Projects",
    title: "Lok Bhawan: Yellow Sandstone Seat of Governance",
    tags: ["Yellow Stone", "Government Build"],
  },
  {
    href: "./projects.html",
    img: "assets/img/projects/manyawar-shri-kanshiram.png",
    alt: "Nirankar Projects",
    title: "Manyawar Shri Kanshiram Eco Garden: Monumental Stonework",
    tags: ["Sculptures", "Public Park"],
  },
];

function Projects() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Wait for Swiper to be available on window (loaded via CDN in index.html)
    if (typeof window.Swiper === "undefined") return;

    const swiper = new window.Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: swiperRef.current.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <>
      {/* project-start */}
      <section className="bs-blog-6-area pt-60 pb-50">
        <div className="container bs-container-1">

          <div className="bs-blog-5-sec-title d-flex justify-content-between align-items-end mb-50">
            <div className="left">
              <h6 className="bs-subtitle-5 wa-capitalize">
                <span className="wa-split-right">Our Work</span>
              </h6>
              <h2 className="bs-sec-title-4 wa-split-right wa-capitalize" data-cursor="-opaque">
                Landmark Stone Projects <br /> Crafted Across India
              </h2>
            </div>
            <div className="btn-wrap">
              <a href="./projects.html" aria-label="name" className="bs-pr-btn-3">
                <span className="text">View All Projects <i className="fa-solid fa-angle-right"></i></span>
              </a>
            </div>
          </div>

          <div className="swiper project-swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {PROJECT_SLIDES.map((slide, idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="bs-blog-4-item">
                    <div className="item-img wa-fix wa-img-cover">
                      <a href={slide.href} data-cursor-text="View">
                        <img src={slide.img} alt={slide.alt} />
                      </a>
                    </div>
                    <div className="content">
                      <a href={slide.href} className="item-btn">
                        <i className="flaticon-top-right"></i>
                      </a>
                      <h4 className="title bs-h-1">
                        <a href={slide.href}>{slide.title}</a>
                      </h4>
                      <p className="item-meta bs-p-4">
                        {slide.tags.map((tag, i) => (
                          <span key={i}>{(i > 0 ? " • " : "") + tag}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>
      {/* project-end */}
    </>
  );
}

export default Projects;