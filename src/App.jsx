import { useState } from "react";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact-us/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navBar/Navbar";
import Program from "./components/program/Program";
import Testimonials from "./components/testimonials/Testimonials";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
        <About setPlayState={setPlayState} />
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};
export default App;
