import Image from "next/image";
import "./UserCard.css";
import { UserInfo } from "@/types";

interface UserCardProps {
  user: UserInfo
  index: number;
  removeUser: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, index, removeUser }) => {
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
