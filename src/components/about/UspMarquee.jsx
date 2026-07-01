function UspMarquee() {
  return (
    <div className="qc-marquee" aria-label="Craftsmanship marquee">
      <div className="qc-marquee__track">
        {[
          "Unparalleled Craftsmanship",
          "Wide Range of Creations",
          "Tailored Customization",
          "Quality & Timely Delivery",
          "Unparalleled Craftsmanship",
          "Wide Range of Creations",
          "Tailored Customization",
          "Quality & Timely Delivery",
        ].map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <div className="qc-marquee__item">{item}</div>
            <div className="qc-marquee__sep" aria-hidden="true">
              •
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UspMarquee;