import "./Program.css";
import ProgramCard from "./ProgramCard";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import Header from "../header/Header";

const Program = () => {
  return (
    <div className="program">
      <Header subTitle="our program" title="What We Offer" />
      <div className="main">
        <ProgramCard
          mainImage={program1}
          iconImage={program_icon_1}
          text="Graduation Degree"
        />
        <ProgramCard
          mainImage={program2}
          iconImage={program_icon_2}
          text="Masters Degree"
        />
        <ProgramCard
          mainImage={program3}
          iconImage={program_icon_3}
          text="Post Graduation"
        />
      </div>
    </div>
  );
};
export default Program;
