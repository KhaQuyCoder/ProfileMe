import { createContext, useState } from "react";

export const myContext = createContext();
export const MyProvider = ({ children }) => {
  const [money, setMoney] = useState(0);

  return (
    <myContext.Provider value={{ money, setMoney }}>
      {children}
    </myContext.Provider>
  );
};
