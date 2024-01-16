"use client";
import { useState } from "react";
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
  const [currentInput, setCurrentInput] = useState();

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  };
  return (
    <div className="user-input-container">
      {selectedUser.map((user, index) => {
        return <UserCard name={user.name} key={index} />;
      })}
      <div className="new-input">
        <input onChange={(e) => handleInput(e)} />
        {true && <UserListModal UserList={arr} />}
      </div>
    </div>
  );
};

export default UserInput;
