import { useEffect, useRef } from "react";

const BLOGS = [
  {
    href: "./blogs/sand-stone-fountains-a-stylish-touch-that-instantly-enhances-indian-homes.html",
    img: "./blogs/images/one.png",
    date: "12 dec, 2025",
    title: "Sand Stone Fountains: A Stylish Touch That Instantly Enhances Indian Homes",
    excerpt: "Sandstone has always been an intrinsic part of Indian...",
    active: false,
  },
  {
    href: "./blogs/benefits-of-choosing-sandstone-sculptures-for-home-and-garden-spaces.html",
    img: "./blogs/images/two.png",
    date: "14 dec, 2025",
    title: "Benefits of Choosing Sandstone Sculptures for Home and Garden Spaces",
    excerpt: "Sandstone statues have been popular decorative elements...",
    active: true,
  },
  {
    href: "./blogs/how-stone-fountains-improve-the-look-and-feel-of-outdoor-areas.html",
    img: "./blogs/images/three.png",
    date: "16 dec, 2025",
    title: "How Stone Fountains Improve the Look and Feel of Outdoor Areas",
    excerpt: "Outdoor areas like gardens, courtyards, terraces, and walkways...",
    active: false,
  },
];

// BlogCard — handles its own hover state so CSS `active` class hover works in React
function BlogCard({ blog }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const enter = () => card.classList.add("active");
    const leave = () => card.classList.remove("active");
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className={`bs-blog-5-item${blog.active ? " active" : ""}`}
      ref={cardRef}
    >
      <div className="main-img wa-fix wa-img-cover">
        <a href={blog.href} className="w-100 h-100" data-cursor-text="View">
          <img src={blog.img} alt={blog.title} />
        </a>
      </div>
      <ul className="item-meta wa-list-style-none">
        <li className="bs-p-4">{blog.date}</li>
      </ul>
      <h5 className="bs-h-4 title">
        <a className="wa-line-limit has-line-2" href={blog.href} aria-label="name">
          {blog.title}
        </a>
      </h5>
      <p className="bs-p-4 disc wa-line-limit has-line-2">{blog.excerpt}</p>
    </div>
  );
}

function BlogSection() {
  const wrapRef = useRef(null);

  // Fade-in the whole blog wrap on scroll
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.opacity = "0";
    wrap.style.transform = "translateY(32px)";
    wrap.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrap.style.opacity = "1";
          wrap.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bs-blog-5-area pt-70 pb-100">
      <div className="container bs-container-2">

        {/* section-title */}
        <div className="bs-blog-5-sec-title">
          <div className="left">
            <h6 className="bs-subtitle-5 wa-capitalize">
              <span className="wa-split-right">Insights &amp; Stories</span>
            </h6>
            <h2 className="bs-sec-title-4 wa-split-right wa-capitalize" data-cursor="-opaque">
              Explore Our Latest Articles on Stone Art &amp; Design.
            </h2>
          </div>
          <div className="btn-wrap">
            <a href="./blogs/blog.html" aria-label="name" className="bs-pr-btn-3">
              <span className="text">View All Blogs <i className="fa-solid fa-angle-right"></i></span>
              <span className="text">View All Blogs <i className="fa-solid fa-angle-right"></i></span>
            </a>
          </div>
        </div>

        {/* blog-items */}
        <div className="bs-blog-5-wrap" ref={wrapRef}>
          {BLOGS.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;