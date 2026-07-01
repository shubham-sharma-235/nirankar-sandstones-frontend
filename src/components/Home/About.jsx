function About() {
    return(
        <>
            <section className="bs-about-5-area pt-135 pb-100 wa-fix wa-p-relative">
                <div className="bs-about-5-bg-shape">
                    <img src="assets/img/about/a5-bg-shape.png" alt=""/>
                </div>
                <div className="bs-about-5-bg-shape-2">
                    <img src="assets/img/about/a5-bg-shape-2.png" alt=""/>
                </div>
            
                <div className="container bs-container-2">
            
                    {/* <!-- section-title --> */}
                    <div className="bs-about-5-sec-title mb-55">
                        <h6 className="bs-subtitle-5 wa-capitalize">
                            <span>01</span>
                            <span className="wa-split-right">about us</span>
                        </h6>
                        <h2 className="bs-sec-title-5 wa-split-right wa-capitalize pb-4" data-cursor="-opaque">
                            Crafting timeless stone art through heritage, skill & precision.
                        </h2>
                    </div>
            
                    <div className="bs-about-5-wrap">
            
                        {/* <!-- left-side --> */}
                        <div className="bs-about-5-left">
                            <p className="bs-p-4 disc wa-fadeInUp">
                                At Nirankar Sandstone Industries, every creation begins with raw stone and a vision. 
                                From traditional sculptures to contemporary installations, we shape each piece with 
                                artisanal mastery, blending centuries-old craftsmanship with modern design sensibilities.  
                                Our work reflects India’s timeless artistry — carved with devotion, delivered with excellence.
                            </p>
            
                            <div className="btn-wrap wa-fadeInUp">
                                <a href="about.html" aria-label="name" className="bs-pr-btn-3">
                                    <span className="text">know about us <i className="fa-solid fa-angle-right"></i></span>
                                    <span className="text">know about us <i className="fa-solid fa-angle-right"></i></span>
                                </a>
                            </div>
            
                            <div className="bs-about-5-img-1 wa-fix wa-img-cover wa-fadeInUp" data-cursor="-opaque">
                                {/* <!-- <img className="wa-parallax-img" src="assets/img/about/a5-img-1.png" alt=""> --> */}
                                <img className="wa-parallax-img" src="assets/img/about/a1-img-5.webp" alt=""/>
                            </div>
                        </div>
            
                        {/* <!-- right-side --> */}
                        <div className="bs-about-5-right">
                            <div className="bs-about-5-img-2 wa-fix wa-img-cover wa-fadeInUp" data-cursor="-opaque">
                                {/* <!-- <img className="wa-parallax-img" src="assets/img/about/a5-img-2.png" alt=""> --> */}
                                <img className="wa-parallax-img" src="assets/img/about/a1-img-3.png" alt=""/>
                                {/* <!-- <img className="wa-parallax-img" src="assets/img/projects/red-sandstone-reconstruction.png" alt=""> --> */}
                            </div>
            
                            <ul className="bs-about-5-feature wa-list-style-none">
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Hand-Carved Sculptures
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Heritage-Inspired Architecture
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Custom Fountains & Water Features
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Bespoke Planters & Garden Elements
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Modern Stone Installations
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Architectural Stonework
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Interior Stone Art & Decor
                                </li>
                                <li className="bs-p-4 wa-fadeInUp">
                                    <i className="fa-solid fa-plus"></i>
                                    Fully Custom Stone Design Solutions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;