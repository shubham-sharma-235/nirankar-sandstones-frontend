import { useEffect } from "react";

export default function useHomeInit() {
  useEffect(() => {
    const timer = setTimeout(() => {

      // Background Images
      if (window.jQuery) {
        window.jQuery("[data-background]").each(function () {
          window.jQuery(this).css(
            "background-image",
            "url(" + window.jQuery(this).attr("data-background") + ")"
          );
        });
      }

      // Testimonial Slider
      if (window.Swiper && document.querySelector(".bs-t4-active")) {

        const existing =
          document.querySelector(".bs-t4-active")?.swiper;

        if (existing) {
          existing.destroy(true, true);
        }

        new window.Swiper(".bs-t4-active", {
          loop: true,
          speed: 1000,
          spaceBetween: 32,

          autoplay: {
            delay: 5000,
          },

          pagination: {
            el: ".bs-t4-pagination",
            type: "progressbar",
          },

          navigation: {
            nextEl: ".bs-t4-next",
            prevEl: ".bs-t4-prev",
          },

          breakpoints: {
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          },
        });
      }

      // Refresh GSAP
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }

    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // ----------------------------------------------------------------

  if (
    window.Swiper &&
    document.querySelector(".project-swiper-container")
  ) {
  
    const existing =
      document.querySelector(".project-swiper-container")?.swiper;
  
    if (existing) {
      existing.destroy(true, true);
    }
  
    new window.Swiper(".project-swiper-container", {
  
      loop: true,
      speed: 1000,
      spaceBetween: 40,
  
      autoplay: {
        delay: 5000,
      },
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
  
    });
  }
}