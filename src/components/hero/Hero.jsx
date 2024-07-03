import "./Hero.css";
import next from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <h1 className="hero-title">
          We Ensure better education for a better world
        </h1>
        <p className="hero-description">
          Our cutting-edge curriculum is designed to emprower students with the
          knowledge, skills, and experience needed to excel in the dynamic field
          of education
        </p>
        <a className="btn" href="#">
          Explore more <img className="next" src={next} alt="" />
        </a>
      </div>
    </div>
  );
};
export default Hero;
