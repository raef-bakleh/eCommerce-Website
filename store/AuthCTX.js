import React, { useState } from "react";

const authContext = React.createContext({});

const UserContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
};
