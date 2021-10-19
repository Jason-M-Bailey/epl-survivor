import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Account from "./components/Account/account";
import Standings from "./components/Standings/standings";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/standings">
          <Standings />
        </Route>

        <Route path="/account">
          <Account />
        </Route>

      </div>
    </Router>
  );
}

export default App;
