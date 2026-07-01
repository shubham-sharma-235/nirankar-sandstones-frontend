function ContactMaps () {
    return (
        <>
            {/* map-start */}
            <div className="bs-contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7113.1180467207405!2d76.591517!3d26.949191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39727300fb3ef8a5%3A0x9454711ca86b24eb!2zU3RvbmUgS2FyaWdhcmkgYnkgTmlyYW5rYXLihKLvuI8!5e0!3m2!1sen!2sin!4v1762155598302!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* map-end */}
        </>
    )
}

export default ContactMaps;