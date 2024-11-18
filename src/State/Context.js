import { createContext, useState } from "react";

export const myContext = createContext();
export const MyProvider = ({ children }) => {
  const [money, setMoney] = useState(0);
  const [status, setStatus] = useState(false);
  return (
    <myContext.Provider value={{ money, setMoney, status, setStatus }}>
      {children}
    </myContext.Provider>
  );
};
