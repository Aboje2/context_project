import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    background: "#000",
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#990000",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        fullWidth: "200px",
      },
    },
  },

  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});
