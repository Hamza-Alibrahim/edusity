import "./Testimonials.css";
import UserCard from "./SliderCard";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import goBack from "../../assets/back-icon.png";
import goNext from "../../assets/next-icon.png";
import { useRef } from "react";
import Header from "../header/Header";

const Testimonials = () => {
  const oppinionRef = useRef(null);
  const oppinions = [
    { img: user1, name: "William Jackson", location: "USA" },
    { img: user2, name: "William Jackson", location: "USA" },
    { img: user3, name: "William Jackson", location: "USA" },
    { img: user4, name: "William Jackson", location: "USA" },
  ];
  const goLeft = () =>
    (oppinionRef.current.scrollLeft -= oppinionRef.current.offsetWidth / 2);
  const goRight = () =>
    (oppinionRef.current.scrollLeft += oppinionRef.current.offsetWidth / 2);
  return (
    <div className="testimonials">
      <Header subTitle="Testimonials" title="What Student Says" />
      <div className="slider">
        <div onClick={() => goLeft()} className="controller">
          <img className="go-left" src={goBack} alt="" />
        </div>
        <div ref={oppinionRef} className="oppinions">
          {oppinions.map((op, i) => {
            return (
              <UserCard
                key={i}
                img={op.img}
                name={op.name}
                location={op.location}
              />
            );
          })}
        </div>
        <div onClick={() => goRight()} className="controller">
          <img className="go-left" src={goNext} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
