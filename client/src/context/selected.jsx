import { useState, useEffect, useContext, createContext } from "react";

const SelectedContext = createContext();
const SelectedProvider = ({ children }) => {
  const [selected, setselected] = useState({
   
  });
  
  return (
    <SelectedContext.Provider value={[selected, setselected]}>
      {children}
    </SelectedContext.Provider>
  );
};

const useSelected = () => useContext(SelectedContext);

export { useSelected, SelectedProvider };
