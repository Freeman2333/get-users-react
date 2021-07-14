import { Route, BrowserRouter, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <div className={classes.page}>
          <Navbar />
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
