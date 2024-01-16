"use client";
import { useEffect, useState } from "react";
import "./UserInput.css";
import UserCard from "../UserCard/UserCard";
import UserListModal from "../UserListModal/UserListModal";
import { users } from "../../constants/index";

const arr = users;

const UserInput = () => {
  const [selectedUsers, setSelectedUsers] = useState([
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
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    filterSuggestion();
  }, [currentInput, selectedUsers]);

  const filterSuggestion = () => {
    const inputText = currentInput.toLowerCase();

    const matchingUsers = arr.filter(
      (user) =>
        user.name.toLowerCase().includes(inputText) &&
        !selectedUsers.some(
          (selectedUser) =>
            selectedUser.name.toLowerCase() === user.name.toLowerCase()
        )
    );
    setSuggestedUsers(matchingUsers);
  };

  const removeUserByName = (name) => {
    setSelectedUsers(selectedUsers.filter((user) => user.name !== name));
  };

  const selectUser = (user) => {
    const updatedSelectedUser = [...selectedUsers];
    updatedSelectedUser.push(user);
    setSelectedUsers(updatedSelectedUser);
  };

  return (
    <div className="user-input-container">
      {selectedUsers.map((user, index) => {
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
        <input
          onChange={(e) => handleInput(e)}
          onFocus={handleFocus}
          type="text"
        />
        {isFocused && (
          <UserListModal UserList={suggestedUsers} selectUser={selectUser} />
        )}
      </div>
    </div>
  );
};

export default UserInput;
