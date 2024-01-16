import Image from "next/image";
import "./UserListModal.css";
import { useEffect, useRef } from "react";

const UserListModal = ({ UserList, selectUser }) => {
  return (
    <ul className="user-list-modal">
      {UserList.map((user, index) => {
        return (
          <li
            className="user-list-item"
            onClick={() => selectUser(user)}
            key={index}
          >
            <Image
              className="user-image"
              src={user.image}
              alt="user"
              width={35}
              height={35}
            />
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default UserListModal;
