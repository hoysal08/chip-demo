"use client";
import { useEffect, useState } from "react";
import "./UserInput.css";
import UserCard from "../UserCard/UserCard";
import UserListModal from "../UserListModal/UserListModal";
const arr = [
  {
    name: "abc",
    email: "abc@example.com",
  },
  {
    name: "dcb",
    email: "dcb@example.com",
  },
  {
    name: "egs",
    email: "egs@example.com",
  },
  {
    name: "wasf",
    email: "wasf@example.com",
  },
  {
    name: "hgds",
    email: "hgds@example.com",
  },
];

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
    setSelectedUser(selectedUser.push(user));
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
        <input onChange={(e) => handleInput(e)} />
        {true && <UserListModal UserList={suggestedUsers} />}
      </div>
    </div>
  );
};

export default UserInput;
