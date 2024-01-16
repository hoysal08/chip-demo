import Image from "next/image";
import "./UserCard.css";
const UserCard = ({ user, index, removeUser }) => {
  return (
    <div className="user-card-container">
      <Image
        className="user-image"
        src={user.image}
        alt="user"
        width={22}
        height={22}
      />
      {user.name}
      <p className="close" onClick={() => removeUser(user.name)}>
        x
      </p>
    </div>
  );
};

export default UserCard;
