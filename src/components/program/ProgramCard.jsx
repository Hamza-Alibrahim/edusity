/* eslint-disable react/prop-types */
const ProgramCard = (props) => {
  return (
    <div className="card">
      <div className="mainImage">
        <img className="programImage" src={props.mainImage} alt="" />
      </div>
      <div className="caption">
        <img className="captionImg" src={props.iconImage} alt="" />
        <p>{props.text}</p>
      </div>
    </div>
  );
};
export default ProgramCard;
