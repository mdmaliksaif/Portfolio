import Qualification from "../../Qualification/Qualification"; // Import the Qualification component
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Qualification />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
