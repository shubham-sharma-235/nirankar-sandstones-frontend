import { useEffect } from "react";

export default function useTemplate() {

  useEffect(() => {

    const timer = setTimeout(() => {

      // Reapply backgrounds
      if (window.jQuery) {
        window.jQuery("[data-background]").each(function () {
          window.jQuery(this).css(
            "background-image",
            "url(" + window.jQuery(this).attr("data-background") + ")"
          );
        });
      }

      // Refresh GSAP
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }

      // WOW
      if (window.WOW) {
        new window.WOW().init();
      }

      // Trigger resize
      window.dispatchEvent(new Event("resize"));

    }, 1000);

    return () => clearTimeout(timer);

  }, []);
}