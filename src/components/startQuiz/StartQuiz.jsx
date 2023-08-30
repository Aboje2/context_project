import React, { useContext, useState } from "react";
import { Button, Paper, Container } from "@material-ui/core";
import { Questions } from "../../ContextApi/Questions";
import { QuizContext } from "../../ContextApi/GloabalState";
import useStyles from "./styles";

const StartQuiz = () => {
  const classes = useStyles();
  const { scores, setScores, setGameState } = useContext(QuizContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [select, setSelect] = useState(true);
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(true);
  const [select3, setSelect3] = useState(true);
  const handleChange = () => {
    if (selectedOption === Questions[questionIndex].answer) {
      setScores(scores + 1);
    }
    setQuestionIndex(questionIndex + 1);
    setSelect(true);
    setSelect1(true);
    setSelect2(true);
    setSelect3(true);
  };

  const handleEnd = () => {
    if (selectedOption === Questions[questionIndex].answer) {
      setScores(scores + 1);
    }

    setGameState("endQuiz");
  };

  const handleClick = () => {
    setSelectedOption("A");
    setSelect((prevSelect) => !prevSelect);
  };
  const handleClick1 = () => {
    setSelectedOption("B");
    setSelect1((prevSelect1) => !prevSelect1);
  };
  const handleClick2 = () => {
    setSelectedOption("C");
    setSelect2((prevSelect2) => !prevSelect2);
  };
  const handleClick3 = () => {
    setSelectedOption("D");
    setSelect3((prevSelect3) => !prevSelect3);
  };
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Button
            className={classes.btn1}
            variant="contained"
            color="secondary"
          >
            {Questions[questionIndex].prompt}
          </Button>
          <Button
            variant="contained"
            color={select ? "primary" : "success"}
            className={classes.btn2}
            onClick={handleClick}
          >
            {Questions[questionIndex].optionA}
          </Button>
          <Button
            variant="contained"
            className={classes.btn3}
            color={select1 ? "primary" : "success"}
            onClick={handleClick1}
          >
            {Questions[questionIndex].optionB}
          </Button>
          <Button
            className={classes.btn4}
            variant="contained"
            color={select2 ? "primary" : "success"}
            onClick={handleClick2}
          >
            {Questions[questionIndex].optionC}
          </Button>
          <Button
            className={classes.btn5}
            variant="contained"
            color={select3 ? "primary" : "success"}
            onClick={handleClick3}
          >
            {Questions[questionIndex].optionD}
          </Button>

          {Questions[questionIndex] === Questions[Questions.length - 1] ? (
            <Button onClick={handleEnd}>End Quiz</Button>
          ) : (
            <Button onClick={handleChange}>Next question</Button>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default StartQuiz;
