import { useState, useEffect, useContext, createContext } from "react";

const OnlineContext = createContext();
const OnlineProvider = ({ children }) => {
  const [Online, setOnline] = useState({});

  return (
    <OnlineContext.Provider value={[Online, setOnline]}>
      {children}
    </OnlineContext.Provider>
  );
};

const useOnline = () => useContext(OnlineContext);

export { useOnline, OnlineProvider };
