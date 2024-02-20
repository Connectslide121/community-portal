/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { CurrentUserContext, LoginContext } from "../../contexts";
import { getMe } from "../../APIs/API";

export function loader() {}

export default function UserProfile() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const me = await getMe();
      setCurrentUser(me);
      setLoggedIn(true);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loggedIn && (
        <h1>
          Welcome{" "}
          {currentUser.userName ? currentUser.userName : currentUser.email}!
        </h1>
      )}
    </div>
  );
}
