// // context api
// Content is a way to share data between component with passing props.
// It is like a global state that can be accessed by any component in the App.

import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;
