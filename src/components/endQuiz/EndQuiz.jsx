import { Paper, Typography, Container, Button } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "./styles";
import { Questions } from "../../ContextApi/Questions";
import { QuizContext } from "../../ContextApi/GloabalState";

const EndQuiz = () => {
  const { scores, setScores, setGameState } = useContext(QuizContext);
  const classes = useStyles();
  const toMenu = () => {
    setGameState("mainMenu");
    setScores(0);
  };
  return (
    <Container maxWidth="xs">
      <Paper alignItem="center" className={classes.paper}>
        <Typography variant="h3">Finished Quiz</Typography>
        <h3>
          {scores} / {Questions.length}
        </h3>
        <Button variant="contained" color="success" onClick={toMenu}>
          To Main menu
        </Button>
      </Paper>
    </Container>
  );
};

export default EndQuiz;
