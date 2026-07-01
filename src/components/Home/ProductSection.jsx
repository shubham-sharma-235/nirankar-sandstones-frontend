function ProductSection (){
    return(
        <>
            {/* video-start */}
            <section className="bs-video-4-area">
              <div className="bs-video-4-content wa-p-relative wa-fix wa-img-cover">
                <img className="wa-parallax-img" src="assets/img/video/v4-img-1.png" alt="" />
                <div className="bs-video-4-text">
                  <div className="bs-video-4-marquee-active">
                    <h4 className="bs-h-1 bs-video-4-text-item wa-split-text">Nirankar Sandstones</h4>
                  </div>
                </div>
              </div>
            </section>
            {/* video-end */}
            
            {/* services-start */}
            <section className="bs-services-4-area pt-100 wa-fix" data-background="assets/img/services/s4-bg.png">
              <div className="bs-services-4-img wa-fix wa-img-cover wa-slideInLeft">
                <img src="assets/img/services/s4-img-1.png" alt="" />
              </div>
              <div className="container bs-container-2">
                <h5 className="bs-subtitle-4 bs-services-4-subtitle">
                  <span className="text">Our Products</span>
                  <span className="icon">
                    <img src="assets/img/illus/subtitle-4-icon-2.svg" alt="" />
                  </span>
                </h5>
            
                <div className="bs-services-4-wrap">
            
                  {/* left-content */}
                  <div className="bs-services-4-content">
                    <h2 className="bs-sec-title-4 title wa-split-right wa-capitalize" data-cursor="-opaque">
                      Crafted to Endure.
                    </h2>
                    <p className="bs-p-4 disc wa-fadeInUp">
                      Discover Nirankar's handcrafted collection of sculptures, fountains, and architectural stoneworks — where every creation reflects heritage, precision, and enduring beauty.
                    </p>
                    <div className="btn-wrap wa-fadeInUp">
                      <a href="./products.html" aria-label="name" className="bs-pr-btn-2">
                        <span className="text" data-back="view all products" data-front="view all products"></span>
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="box box-1"></span>
                        <span className="box box-2"></span>
                        <span className="box box-3"></span>
                        <span className="box box-4"></span>
                      </a>
                    </div>
                  </div>
            
                  {/* right-item */}
                  <div className="bs-services-4-item">
            
                    {/* PRODUCT CARDS (UPDATED) */}
                    <div className="bs-services-4-item-single wa-bg-default active" data-background="assets/img/services/s4-card-bg.png">
                      <div className="active-content">
                        <h4 className="bs-h-1 title">
                          <a href="./products/statue.html" aria-label="name" className="wa-line-limit has-line-2">Statues</a>
                        </h4>
                        <div className="main-img wa-fix wa-img-cover">
                          <img src="./assets/img/services/s4-img-1.png" alt="" />
                        </div>
                        <p className="bs-p-4 disc wa-line-limit has-line-3">
                          Hand-carved décor crafted for luxury gardens, villas, and premium resort spaces.
                        </p>
                      </div>
                      <div className="default-content">
                        <div className="img-2 wa-fix wa-img-cover">
                          <img src="./assets/img/services/s4-img-1.png" alt="" />
                        </div>
                        <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">Statues</h4>
                      </div>
                    </div>
            
                    {/* single-item */}
                    <div className="bs-services-4-item-single wa-bg-default" data-background="assets/img/services/s4-card-bg.png">
                      <div className="active-content">
                        <h4 className="bs-h-1 title">
                          <a href="./products/fountain.html" aria-label="name" className="wa-line-limit has-line-2">Stone Fountains</a>
                        </h4>
                        <div className="main-img wa-fix wa-img-cover">
                          <img src="./assets/img/services/fountain-cover.jpeg" alt="" />
                        </div>
                        <p className="bs-p-4 disc wa-line-limit has-line-3">
                          Elegant handcrafted stone fountains designed to bring serenity and sophistication to any landscape.
                        </p>
                      </div>
                      <div className="default-content">
                        <div className="img-2 wa-fix wa-img-cover">
                          <img src="./assets/img/services/fountain-cover.jpeg" alt="" />
                        </div>
                        <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">Stone Fountains</h4>
                      </div>
                    </div>
            
                    {/* single-item */}
                    <div className="bs-services-4-item-single wa-bg-default" data-background="assets/img/services/s4-card-bg.png">
                      <div className="active-content">
                        <h4 className="bs-h-1 title">
                          <a href="./products/planters.html" aria-label="name" className="wa-line-limit has-line-2">Stone Planters</a>
                        </h4>
                        <div className="main-img wa-fix wa-img-cover">
                          <img src="./assets/img/services/planters-cover.jpeg" alt="" />
                        </div>
                        <p className="bs-p-4 disc wa-line-limit has-line-3">
                          Premium stone planters crafted for luxurious outdoor and indoor spaces with timeless elegance.
                        </p>
                      </div>
                      <div className="default-content">
                        <div className="img-2 wa-fix wa-img-cover">
                          <img src="./assets/img/services/planters-cover.jpeg" alt="" />
                        </div>
                        <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">Stone Planters</h4>
                      </div>
                    </div>
            
                    {/* single-item */}
                    <div className="bs-services-4-item-single wa-bg-default" data-background="assets/img/services/s4-card-bg.png">
                      <div className="active-content">
                        <h4 className="bs-h-1 title">
                          <a href="./products/wall-panel.html" aria-label="name" className="wa-line-limit has-line-2">Wall Panels</a>
                        </h4>
                        <div className="main-img wa-fix wa-img-cover">
                          <img src="./products/img/wall-panel/4.jpg" alt="" />
                        </div>
                        <p className="bs-p-4 disc wa-line-limit has-line-3">
                          Artistic Wall Panels designed to create ambient with a touch of natural elegance.
                        </p>
                      </div>
                      <div className="default-content">
                        <div className="img-2 wa-fix wa-img-cover">
                          <img src="./products/img/wall-panel/4.jpg" alt="" />
                        </div>
                        <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">Wall Panels</h4>
                      </div>
                    </div>
            
                    {/* single-item */}
                    <div className="bs-services-4-item-single wa-bg-default" data-background="assets/img/services/s4-card-bg.png">
                      <div className="active-content">
                        <h4 className="bs-h-1 title">
                          <a href="./products/modern-art.html" aria-label="name" className="wa-line-limit has-line-2">Modern Stone Arts</a>
                        </h4>
                        <div className="main-img wa-fix wa-img-cover">
                          <img src="./assets/img/services/modern-art-cover.jpeg" alt="" />
                        </div>
                        <p className="bs-p-4 disc wa-line-limit has-line-3">
                          Contemporary stone sculptures crafted with precision to elevate luxury homes and curated spaces.
                        </p>
                      </div>
                      <div className="default-content">
                        <div className="img-2 wa-fix wa-img-cover">
                          <img src="./assets/img/services/modern-art-cover.jpeg" alt="" />
                        </div>
                        <h4 className="bs-h-1 title-2 wa-line-limit has-line-1">Modern Stone Arts</h4>
                      </div>
                    </div>
            
                  </div>
                </div>
              </div>
            </section>
            {/* services-end */}
        </>
    )
}

export default ProductSection;