import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts";

export function loader() {}

export default function UserPage() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  return (
    <div>
      <h1>This is the user page</h1>
    </div>
  );
}
