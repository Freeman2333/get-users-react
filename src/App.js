import { Route, BrowserRouter, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import CreateUser from "./components/CreateUser/CreateUser";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <div className={classes.page}>
          <Navbar />
          <div className={classes.wrapper}>
            <div className={classes.contentWrapper}>
              <Switch>
                <Route path="/edit-user/:id" component={CreateUser} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/" component={UsersContainer} exact />
              </Switch>
            </div>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
