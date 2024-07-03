/* eslint-disable react/prop-types */
const UserCard = (props) => {
  return (
    <div className="slide">
      <div className="userDetails">
        <img className="userImg" src={props.img} alt="" />
        <div>
          <h3 className="name">{props.name}</h3>
          <span>{props.location}</span>
        </div>
      </div>
      <div className="userOppinion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        corporis dolores itaque nobis! Nemo libero praesentium nesciunt
        temporibus! Ipsum quos distinctio soluta. Corrupti magni neque impedit
        ex officia aperiam iusto!
      </div>
    </div>
  );
};
export default UserCard;
