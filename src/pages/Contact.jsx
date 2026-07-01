import Header from "../components/Header";
import BreadcrumCommon from "../components/BreadcrumCommon";
import FooterPlain from "../components/FooterPlain";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMaps from "../components/contact/ContactMap";

function Contact() {
  return (
    <>
      <Header />
      <BreadcrumCommon />
      <ContactInfo />
      <ContactForm />
      <ContactMaps />
      <FooterPlain />
    </>
  )
}

export default Contact;