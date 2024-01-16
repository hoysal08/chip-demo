import Image from "next/image";
import "./UserListModal.css";
import { useEffect, useRef } from "react";

const UserListModal = ({ UserList, selectUser }) => {
  const firstListItemRef = useRef(null);

  useEffect(() => {
    if (firstListItemRef.current) {
      firstListItemRef.current.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        const currentItem = document.activeElement;
        const previousItem = currentItem.previousSibling;

        if (previousItem) {
          previousItem.focus();
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        const currentItem = document.activeElement;
        const nextItem = currentItem.nextSibling;

        if (nextItem) {
          nextItem.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (UserList.length == 0) {
    return (
      <ul className="user-list-modal">
        <p>No Result found!</p>
      </ul>
    );
  }
  return (
    <ul className="user-list-modal">
      {UserList.map((user, index) => {
        return (
          <li
            className="user-list-item"
            onClick={() => selectUser(user)}
            key={index}
            ref={index === 0 ? firstListItemRef : null}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                selectUser(user);
              }
            }}
            data-user={JSON.stringify(user)}
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
