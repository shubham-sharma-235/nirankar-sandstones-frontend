import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBreadcrumb from "../components/about/AboutBreadcrumb";
import UspMarquee from "../components/about/UspMarquee";
import AboutSectionOne from "../components/about/AboutSectionOne";
import CounterSection from "../components/about/CounterSection";
import AboutVideoSection from "../components/about/AboutVideoSection";
import Artisans from "../components/Home/Artisans";
import WorkProcess from "../components/about/WorkProcess";

function About () {
  return (
    <>
      <Header/>
      <AboutBreadcrumb/>
      <UspMarquee/>
      <AboutSectionOne/>
      <CounterSection/>
      <AboutVideoSection/>
      <Artisans/>
      <WorkProcess/>
      <Footer/>
    </>
  )
}

export default About;
