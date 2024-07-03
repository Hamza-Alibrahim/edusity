/* eslint-disable react/prop-types */
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <p>{props.subTitle}</p>
      <h2 className="title">{props.title}</h2>
    </div>
  );
};
export default Header;
