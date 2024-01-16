"use client";
import { useEffect, useState } from "react";
import "./UserInput.css";
import UserCard from "../UserCard/UserCard";
import UserListModal from "../UserListModal/UserListModal";
import { users } from "../../constants/index";

const arr = users;

const UserInput = () => {
  const [selectedUser, setSelectedUser] = useState([
    {
      name: "wasf",
      email: "wasf@example.com",
    },
    {
      name: "hgds",
      email: "hgds@example.com",
    },
  ]);

  const [currentInput, setCurrentInput] = useState("");
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    filterSuggestion();
  }, [currentInput]);

  const filterSuggestion = () => {
    const matchingUsers = arr.filter((user) =>
      user.name.toLowerCase().includes(currentInput.toLowerCase())
    );
    setSuggestedUsers(matchingUsers);
  };

  const removeUserByName = (name) => {
    setSelectedUser(selectedUser.filter((user) => user.name !== name));
  };

  const selectUser = (user) => {
    const updatedSelectedUser = [...selectedUser];
    updatedSelectedUser.push(user);
    setSelectedUser(updatedSelectedUser);
  };

  return (
    <div className="user-input-container">
      {selectedUser.map((user, index) => {
        return (
          <UserCard
            name={user.name}
            index={index}
            key={index}
            removeUser={removeUserByName}
          />
        );
      })}
      <div className="new-input">
        <input onChange={(e) => handleInput(e)} type="text" />
        {<UserListModal UserList={suggestedUsers} selectUser={selectUser} />}
      </div>
    </div>
  );
};

export default UserInput;
