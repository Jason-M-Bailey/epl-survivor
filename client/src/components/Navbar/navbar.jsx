import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";

function Nav() {
  return (
    

    <nav className="navbar bg-dark container">
      <h4>
        <Link className="link" to="/">EPL Survivor Pool</Link>
      </h4>
      <h4>
        <Link className="link" to="/standings">Standings</Link>
      </h4>
      <h4>
        <Link className="link" to="/account">Account</Link>
      </h4>
    </nav>
  );
}

export default Nav;
