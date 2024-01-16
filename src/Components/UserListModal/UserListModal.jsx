import "./UserListModal.css";

const UserListModal = ({ UserList, selectUser }) => {
  UserList = UserList.slice(0, 5);
  return (
    <ul className="user-list-modal">
      {UserList.map((user, index) => {
        return (
          <li onClick={() => selectUser(user)} key={index}>
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default UserListModal;
