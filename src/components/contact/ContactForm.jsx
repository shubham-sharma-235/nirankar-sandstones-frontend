function ContactForm () {
    return (
        <>
            {/* contact-form-start */}
            <section className="bs-contact-6-area pt-70 pb-70">
              <div className="container bs-container-1">
                <div className="bs-contact-6-wrap">
            
                  <div className="bs-contact-6-img wa-fix wa-img-cover">
                    <img src="assets/img/contact/c6-img-1.png" alt="" />
                  </div>
            
                  <div className="bs-contact-6-content">
            
                    {/* section-title */}
                    <div className="bs-about-1-sec-title mb-30">
                      <h6 className="bs-subtitle-1 wa-split-clr wa-capitalize">
                        <span className="icon">
                          <img src="assets/img/illus/star-shape.png" alt="" />
                        </span>
                        Contact us
                      </h6>
            
                      <h2
                        className="bs-sec-title-1 wa-split-right wa-capitalize"
                        data-cursor="-opaque"
                      >
                        Let’s talk about your dream project.
                      </h2>
                    </div>
            
                    <form
                      id="contact-form"
                      action="contact.php"
                      method="post"
                      className="bs-form-1 bs-career-single-form"
                    >
                      <div className="form-messages"></div>
            
                      <div className="bs-form-1-item">
                        <label className="bs-form-1-item-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          className="bs-form-1-item-input"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                        />
                      </div>
            
                      <div className="bs-form-1-item">
                        <label className="bs-form-1-item-label" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="bs-form-1-item-input"
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>
            
                      <div className="bs-form-1-item">
                        <label className="bs-form-1-item-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          className="bs-form-1-item-input"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                        />
                      </div>
            
                      <div className="bs-form-1-item">
                        <label className="bs-form-1-item-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          className="bs-form-1-item-input"
                          name="message"
                          id="message"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>
            
                      <div className="bs-form-1-item">
                        <button className="bs-btn-1" type="submit">
                          <span className="text">submit now</span>
            
                          <span className="icon">
                            <i className="fa-solid fa-right-long"></i>
                            <i className="fa-solid fa-right-long"></i>
                          </span>
            
                          <span className="shape"></span>
                        </button>
                      </div>
                    </form>
            
                  </div>
                </div>
              </div>
            </section>
            {/* contact-form-end */}
        </>
    )
}

export default ContactForm;