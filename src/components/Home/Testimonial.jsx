import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    img: "https://images.unsplash.com/photo-1742981365880-698cfb84492d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    comment: '"The sandstone sculpture they made for our lobby is breathtaking. You can actually see the handwork in every curve. This is true craftsmanship."',
    name: "Rohit Mehta",
    bio: "Hotel Owner, Jaipur",
  },
  {
    img: "https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    comment: '"We ordered custom planters and a water feature for our villa. The finish, proportions, and detailing were exactly what we imagined – actually better."',
    name: "Aditi Sharma",
    bio: "Interior Designer, New Delhi",
  },
  {
    img: "https://images.unsplash.com/photo-1692197393247-c76e1bd8f29e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    comment: '"Their team handled everything from design to installation for our temple work. The carving quality is absolutely temple-grade, with perfect symmetry."',
    name: "Vikas Gupta",
    bio: "Project Contractor",
  },
  {
    img: "https://images.unsplash.com/photo-1725567587368-e7d0fe81bec1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    comment: '"We export their sandstone pieces to our overseas clients. The consistency, packing, and timely delivery make them incredibly reliable partners."',
    name: "Neha Verma",
    bio: "Export Buyer",
  },
];

function Testimonial() {
  const swiperContainerRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window.Swiper === "undefined") return;

    swiperInstanceRef.current = new window.Swiper(swiperContainerRef.current, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: {
        el: ".bs-t4-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".bs-t4-next",
        prevEl: ".bs-t4-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });

    return () => swiperInstanceRef.current?.destroy(true, true);
  }, []);

  return (
    <>
      {/* testimonial-start */}
      <section className="bs-testimonial-4-area wa-fix wa-p-relative pt-125 pb-50">

        <div
          className="bs-testimonial-4-bg"
          style={{ backgroundImage: "url(assets/img/testimonial/t4-bg.png)" }}
        ></div>

        <div className="container bs-container-2">
          <div className="bs-testimonial-4-content">
            <h5 className="bs-subtitle-4">
              <span className="text">testimonial</span>
              <span className="icon">
                <img src="assets/img/illus/subtitle-4-icon.svg" alt="" />
              </span>
            </h5>
            <div className="inner-div">
              <h2 className="bs-sec-title-4 title wa-split-right wa-capitalize" data-cursor="-opaque">
                See What Our Valued Customers Say Our Services.
              </h2>
            </div>
          </div>
        </div>

        <div className="bs-testimonial-4-slider wa-fadeInUp">
          {/* ✅ Use ref directly on swiper-container element */}
          <div className="swiper-container wa-fix bs-t4-active" ref={swiperContainerRef}>
            <div className="swiper-wrapper">
              {TESTIMONIALS.map((t, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="bs-testimonial-4-slider-item">
                    <div className="item-img wa-fix wa-img-cover">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="content">
                      <div className="bs-star-1">
                        {[...Array(5)].map((_, si) => (
                          <i key={si} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                      <p className="bs-p-4 comment">{t.comment}</p>
                      <h4 className="bs-p-4 name">{t.name}</h4>
                      <h4 className="bs-p-4 bio">{t.bio}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="bs-testimonial-4-slider-btn wa-fadeInUp">
            <div className="btn-elm bs-t4-prev" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-angle-left"></i> prev
            </div>
            <div className="pagination wa-p-relative">
              <div className="bs-t4-pagination"></div>
            </div>
            <div className="btn-elm bs-t4-next" style={{ cursor: "pointer" }}>
              next <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>

      </section>
      {/* testimonial-end */}
    </>
  );
}

export default Testimonial;