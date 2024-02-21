/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext, LoginContext } from "../../contexts";
import { getMe, updateMe } from "../../APIs/API";

export function loader() {}

export default function UserProfile() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userName, setUserName] = useState("");
  const [userProfilePicturePath, setUserProfilePicturePath] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const getUserInfo = async () => {
    const me = await getMe();
    setCurrentUser(me);
    setLoggedIn(true);
    setUserName(me.userName ? me.userName : "");
    setUserProfilePicturePath(
      me.profilePicturePath ? me.profilePicturePath : ""
    );
    setUserDescription(me.description ? me.description : "");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      userName: userName,
      profilePicturePath: userProfilePicturePath,
      description: userDescription,
      id: currentUser.userId
    };
    updateMe(updatedUser);
    getUserInfo();
  };

  return (
    <div className="user-profile-wrapper">
      {loggedIn && (
        <>
          <h1>
            Welcome,{" "}
            {currentUser.userName ? currentUser.userName : currentUser.email}!
          </h1>
          <img
            src={
              currentUser.profilePicturePath
                ? currentUser.profilePicturePath
                : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            }
            alt="User profile"
            className="user-profile-picture"
          />

          <form
            method="POST"
            onSubmit={handleSubmit}
            className="user-profile-form"
          >
            <div className="user-form-row-wrapper">
              <label htmlFor="userName">Username:</label>
              <input
                type="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="user-form-row-wrapper">
              <label htmlFor="profilePicturePath">Profile picture:</label>
              <input
                type="profilePicturePath"
                value={userProfilePicturePath}
                onChange={(e) => setUserProfilePicturePath(e.target.value)}
              />
            </div>
            <div className="user-form-row-wrapper">
              <label htmlFor="description">Description:</label>
              <textarea
                type="description"
                value={userDescription}
                onChange={(e) => setUserDescription(e.target.value)}
                rows={"4"}
              />
            </div>
            <button type="submit" className="user-form-button">
              Update
            </button>
          </form>
        </>
      )}
    </div>
  );
}
