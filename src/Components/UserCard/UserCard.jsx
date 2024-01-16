import "./UserCard.css";
const UserCard = ({ name, index, removeUser }) => {
  return (
    <div className="user-card-container">
      {name}
      <p className="close" onClick={() => removeUser(name)}>
        X
      </p>
    </div>
  );
};

export default UserCard;
