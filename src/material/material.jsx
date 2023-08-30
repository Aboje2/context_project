import React from "react";
import {
  AppBar,
  TextField,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";
import { useStyles, theme } from "./styles";

const Material = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.root}>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <PhotoCamera />
              <Typography variant="h6" style={{ marginLeft: "3px" }}>
                Camera
              </Typography>
            </div>
            <Button color="secondary " size="small">
              Log In
            </Button>
          </Container>
        </AppBar>
        <br />
        <br />
        <Button variant="contained" color="primary" size="large">
          Log Out
        </Button>
      </ThemeProvider>
    </>
  );
};

export default Material;
