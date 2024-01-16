"use client";
import { ChangeEvent, useEffect, useState } from "react";
import "./UserInput.css";
import UserCard from "../UserCard/UserCard.tsx";
import UserListModal from "../UserListModal/UserListModal.tsx";
import { users } from "../../constants/index";
import { UserInfo } from "@/types";

const arr = users;

const UserInput = () => {
  const initialUserList: UserInfo[] = [];
  const [selectedUsers, setSelectedUsers] = useState<UserInfo[]>(initialUserList);

  const [currentInput, setCurrentInput] = useState<String>("");
  const [suggestedUsers, setSuggestedUsers] = useState<UserInfo[]>(initialUserList);
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    filterSuggestion();
  }, [currentInput, selectedUsers]);

  const filterSuggestion = () => {
    const inputText: string = currentInput.toLowerCase();

    const matchingUsers: UserInfo[] = arr.filter(
      (user) =>
        user.name.toLowerCase().includes(inputText) &&
        !selectedUsers.some(
          (selectedUser) =>
            selectedUser.name.toLowerCase() === user.name.toLowerCase()
        )
    );
    setSuggestedUsers(matchingUsers);
  };

  const removeUserByName = (name: string) => {
    setSelectedUsers(selectedUsers.filter((user) => user.name !== name));
  };

  const selectUser = (user: UserInfo) => {
    const updatedSelectedUser: UserInfo[] = [...selectedUsers];
    updatedSelectedUser.push(user);
    setSelectedUsers(updatedSelectedUser);
    setCurrentInput("");
  };

  return (
    <div className="user-input-container">
      {selectedUsers.map((user, index) => {
        return (
          <UserCard
            user={user}
            index={index}
            key={index}
            removeUser={removeUserByName}
          />
        );
      })}

      {selectedUsers.length != arr.length && (
        <div className="new-input-container">
          <input
            onChange={(e) => handleInput(e)}
            onFocus={handleFocus}
            type="text"
            placeholder="Enter name"
            value={currentInput}
          />
          {isFocused && (
            <UserListModal
              UserList={suggestedUsers}
              selectUser={selectUser}
              setCurrentInput={setCurrentInput}
              currentInput={currentInput}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserInput;
