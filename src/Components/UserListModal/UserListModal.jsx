import { Amarante } from "next/font/google";
import "./UserListModal.css";
const UserListModal = ({ UserList }) => {
  console.log(UserList);
  return (
    <ul className="user-list-modal">
      {UserList.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
};

export default UserListModal;
