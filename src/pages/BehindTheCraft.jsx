import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbSection from "../components/BehindTheCraft/BtsBreadcrum";
import Artisans from "../components/Home/Artisans";
import WorkProcessSection from "../components/BehindTheCraft/WorkProcessSection";
import OperationalStrengths from "../components/BehindTheCraft/OperationalStrengths";

function BehindTheCraft () {
  return (
    <>
      <Header/>
      <BreadcrumbSection/>
      <Artisans/>
      <WorkProcessSection/>
      <OperationalStrengths/>
      <Footer/>
    </>
  )
}

export default BehindTheCraft;
