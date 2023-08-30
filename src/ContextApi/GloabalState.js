import { createContext, useContext } from "react";
//the context exported here was what was imported in the app file
export const QuizContext = createContext();

export const useGetContextHook = ({ children }) => {
  //you can keep all the logic of your app in here rather than having it in the app like in
  //the first example. so here you can define your state and any property you want to share
  //within your app
  const contextWithHook = createContext();

  const [gameStates, setGameStates] = useState("mainMenu");
  const [scores, setScores] = useState(0);

  return (
    <contextWithHook.Provider
      value={{ gameStates, setGameStates, scores, setScores }}
    >
      {childdren}
    </contextWithHook.Provider>
  );
};

export const getContextValue = () => useContext(contextWithHook);
