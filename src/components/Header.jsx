import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bs-header-3-area">

      <div className="bs-header-3-main d-flex align-items-center">

        <div className="container bs-container-1">
          <div className="bs-header-3-main-left">

            <Link
              to="/"
              aria-label="Home"
              className="bs-header-logo-3"
            >
              <img
                src="/assets/img/logo/logo-2.png"
                alt="Logo"
                style={{ height: "4rem" }}
              />
            </Link>

            <nav className="bs-main-navigation d-none d-lg-block">
              <ul id="main-nav" className="nav navbar-nav">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li className="dropdown">
                  <a href="#">About</a>

                  <ul className="dropdown-menu clearfix">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>

                    <li>
                      <Link to="/behind-the-craft">
                        Behind The Craft
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/projects">
                    Our Projects
                  </Link>
                </li>

                <li>
                  <Link to="/products">
                    Our Products
                  </Link>
                </li>

                <li>
                  <a href="/blogs">
                    Our Blogs
                  </a>
                </li>

                <li>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </li>

              </ul>
            </nav>

            <button
              className="bs-search-btn-1 search_btn_toggle"
              style={{ background: "transparent" }}
            >
            </button>

          </div>
        </div>

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