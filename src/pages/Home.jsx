import Header from "../components/Header";
import Hero from '../components/Home/Hero';
import About from "../components/Home/About";
import ProductSection from "../components/Home/ProductSection";
import Artisans from "../components/Home/Artisans";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Projects from "../components/Home/Projects";
import Testimonial from "../components/Home/Testimonial";
import BlogSection from "../components/Home/BlogSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProductSection />
      <Artisans />
      <WhyChooseUs />
      <Projects />
      <Testimonial />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home;