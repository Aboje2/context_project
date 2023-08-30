import React, { useContext } from "react";
import { QuizContext } from "../../ContextApi/GloabalState";
import { getContextValue } from "../../ContextApi/GloabalState";
import { Paper, Button, Container } from "@material-ui/core";
import useStyles from "./styles";

const MainMenu = () => {
  //Below is the first way of accessing your state from the context. the draw to this is that
  // yow will have to import the useContext and the QuizContext in all component u need the state
  const { setGameState } = useContext(QuizContext);

  //Below is how u access the state using the custom context hook
  const { setGameStates } = getContextValue;
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xs">
        <Paper className={classes.paper} elevation={6}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setGameState("startQuiz")}
          >
            Start Quiz
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default MainMenu;
