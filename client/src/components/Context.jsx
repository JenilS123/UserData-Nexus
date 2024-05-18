import { createContext, useState } from "react";

export const ContextData = createContext();

export const ContextDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <ContextData.Provider value={{user, setUser}}>
      {children}
    </ContextData.Provider>
  );
};
