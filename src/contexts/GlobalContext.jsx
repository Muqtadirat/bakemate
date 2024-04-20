import { useContext, useState, createContext } from "react";

const GlobalContext = createContext({
  checked: [],
  setChecked: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [checked, setChecked] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        checked,
        setChecked,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};
