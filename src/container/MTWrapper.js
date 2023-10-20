"use client";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
const MTWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MTWrapper;
