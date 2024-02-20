import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts";

export function loader() {}

export default function UserPage() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    setLoggedIn(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>This is the user page</h1>
    </div>
  );
}
