import { createContext, useContext, useState } from "react";

const RobotsContext = createContext();

export const RobotsContextProvider = ({ children }) => {
  const [robots, setRobots] = useState([]);

  return (
    <RobotsContext.Provider value={[robots, setRobots]}>
      {children}
    </RobotsContext.Provider>
  );
};

export const useRobotsContext = () => useContext(RobotsContext);
