import React, { useState } from "react";
import MainMenu from "./components/mainMenu/MainMenu";
import EndQuiz from "./components/endQuiz/EndQuiz";
import StartQuiz from "./components/startQuiz/StartQuiz";
import { QuizContext } from "./ContextApi/GloabalState";
import { AppBar, Typography } from "@material-ui/core";
import Material from "./material/material";

const App = () => {
  const [gameState, setGameState] = useState("mainMenu");
  const [scores, setScores] = useState(0);
  return (
    // Below is the contextProvider for wrapping the entire state of the app
    // since this is wrapping the entire component, the gameState scores and set score is
    // accessible in all the application component. This one way of doing it and wherever the
    //This is one way of doing it
    <QuizContext.Provider
      value={{ gameState, setGameState, scores, setScores }}
    >
      <AppBar position="static">
        <Typography variant="h2" align="center">
          Quiz App
        </Typography>
      </AppBar>
      {gameState === "mainMenu" && <MainMenu />}
      {gameState === "startQuiz" && <StartQuiz />}
      {gameState === "endQuiz" && <EndQuiz />}
    </QuizContext.Provider>
  );
};

export default App;

//Below is the second way which involve the use of hooks.
import { useGetContextHook } from "./ContextApi/GloabalState";

const Apps = () => {
  return (
    <useGetContextHook>
      //you wrap all your component which give the access to the state
    </useGetContextHook>
  );
};
