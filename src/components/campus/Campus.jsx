import "./Campus.css";
import galler1 from "../../assets/gallery-1.png";
import galler2 from "../../assets/gallery-2.png";
import galler3 from "../../assets/gallery-3.png";
import galler4 from "../../assets/gallery-4.png";
import more from "../../assets/white-arrow.png";
import Header from "../header/Header";

const Campus = () => {
  return (
    <div className="campus">
      <Header subTitle="Gallery" title="Campus Photos" />
      <div className="gallery">
        <img className="galleryImg" src={galler1} alt="" />
        <img className="galleryImg" src={galler2} alt="" />
        <img className="galleryImg" src={galler3} alt="" />
        <img className="galleryImg" src={galler4} alt="" />
      </div>
      <a className="btn dark-btn" href="#">
        See more here
        <img className="next" src={more} alt="" />
      </a>
    </div>
  );
};
export default Campus;
