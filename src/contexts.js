import { createContext } from "react";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {}
});

export const CurrentUserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {}
});
