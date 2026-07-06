import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.jQuery;
      if (!$) return;

      // ── offcanvas toggle
      // Remove old handlers first to prevent duplicates on re-render
      $(document).off("click", ".offcanvas_toggle");
      $(document).off("click", ".wa-overly, .offcanvas_box_close");
      $(document).off("click", ".offcanvas_box_active a");

      $(document).on("click", ".offcanvas_toggle", function () {
        $(".wa-overly, .offcanvas_box_active").addClass("active");
      });

      $(document).on("click", ".wa-overly, .offcanvas_box_close", function () {
        $(".offcanvas_box_active").removeClass("active");
        $(".wa-overly").removeClass("active");
      });

      $(document).on("click", ".offcanvas_box_active a", function () {
        $(".offcanvas_box_active").removeClass("active");
        $(".wa-overly").removeClass("active");
      });

      // ── escape key closes offcanvas
      $(document).off("keydown.offcanvas");
      $(document).on("keydown.offcanvas", function (e) {
        if (e.key === "Escape") {
          $(".offcanvas_box_active").removeClass("active");
          $(".wa-overly").removeClass("active");
        }
      });

      // ── mobile dropdown
      $(".mobile-main-navigation li.dropdown")
        .find(".dropdown-btn")
        .remove(); // remove old ones first

      $(".mobile-main-navigation li.dropdown").append(
        '<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'
      );

      $(document).off("click", ".mobile-main-navigation li .dropdown-btn");
      $(document).on("click", ".mobile-main-navigation li .dropdown-btn", function () {
        if ($(this).hasClass("active")) {
          $(this).closest("ul").find(".dropdown-btn.active").toggleClass("active");
          $(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle();
        } else {
          $(this).closest("ul").find(".dropdown-btn.active").toggleClass("active");
          $(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle();
          $(this).toggleClass("active");
          $(this).parent().find("> .dropdown-menu").toggleClass("active");
          $(this).parent().find("> .dropdown-menu").slideToggle();
        }
      });

      // ── sticky header
      const $window = $(window);
      const $header = $(".wa_sticky_header");
      let lastScrollTop = 0;
      const headerHeight = ($header.outerHeight() || 0) + 30;

      $window.off("scroll.stickyHeader");
      $window.on("scroll.stickyHeader", function () {
        const windowTop = $window.scrollTop();
        if (windowTop >= headerHeight) {
          $header.addClass("wa_sticky");
        } else {
          $header.removeClass("wa_sticky wa_sticky_show");
        }
        if ($header.hasClass("wa_sticky")) {
          if (windowTop < lastScrollTop) {
            $header.addClass("wa_sticky_show");
          } else {
            $header.removeClass("wa_sticky_show");
          }
        }
        lastScrollTop = windowTop;
      });

    }, 100);

    return () => {
      clearTimeout(timer);
      // cleanup on unmount
      const $ = window.jQuery;
      if (!$) return;
      $(document).off("click", ".offcanvas_toggle");
      $(document).off("click", ".wa-overly, .offcanvas_box_close");
      $(document).off("click", ".offcanvas_box_active a");
      $(document).off("keydown.offcanvas");
      $(document).off("click", ".mobile-main-navigation li .dropdown-btn");
      $(window).off("scroll.stickyHeader");
    };
  }, []);

  return (
    <header className="bs-header-3-area wa_sticky_header">

      <div className="bs-header-3-main d-flex align-items-center">

        <div className="container bs-container-1">
          <div className="bs-header-3-main-left">

            <Link to="/" aria-label="Home" className="bs-header-logo-3">
              <img
                src="/assets/img/logo/logo-2.png"
                alt="Logo"
                style={{ height: "4rem" }}
              />
            </Link>

            {/* desktop nav */}
            <nav className="bs-main-navigation d-none d-lg-block">
              <ul id="main-nav" className="nav navbar-nav">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li className="dropdown">
                  <a href="#">About</a>
                  <ul className="dropdown-menu clearfix">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/behind-the-craft">Behind The Craft</Link></li>
                  </ul>
                </li>

                <li><Link to="/projects">Our Projects</Link></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><a href="/blogs">Our Blogs</a></li>
                <li><Link to="/contact">Contact Us</Link></li>

              </ul>
            </nav>

            <button
              className="bs-search-btn-1 search_btn_toggle"
              style={{ background: "transparent" }}
            />

          </div>
        </div>

        {/* mobile hamburger — triggers offcanvas */}
        <button className="bs-offcanvas-btn-2 offcanvas_toggle">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>

      </div>
    </header>
  );
}

export default Header;