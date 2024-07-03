/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import about from "../../assets/about.png";
import play from "../../assets/play-icon.png";

const About = (props) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="aboutImage" src={about} alt="" />
        <img
          onClick={() => props.setPlayState(true)}
          className="playImage"
          src={play}
          alt=""
        />
      </div>
      <div className="about-right">
        <h3 className="about-h3">ABOUT UNIVERSITY</h3>
        <h2 className="about-h2">Nurturing Tomorrow's Leaders Today</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          culpa eos incidunt, delectus iste quos fugiat quis vitae facilis unde
          expedita nisi, sint aperiam. Amet atque corrupti veritatis quis nam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          culpa eos incidunt, delectus iste quos fugiat quis vitae facilis unde
          expedita nisi.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          culpa eos incidunt, delectus iste quos fugiat quis vitae facilis unde
          expedita nisi, sint aperiam. Amet atque corrupti veritatis quis nam.
        </p>
      </div>
    </div>
  );
};
export default About;
