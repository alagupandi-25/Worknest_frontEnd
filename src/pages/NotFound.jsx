import React from "react";
import { Link } from "react-router-dom";
import design from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      <div className={design.face}>
        <div className={design.band}>
          <div className={design.red}></div>
          <div className={design.white}></div>
          <div className={design.blue}></div>
        </div>
        <div className={design.eyes}></div>
        <div className={design.dimples}></div>
        <div className={design.mouth}></div>
      </div>

      <h1 className={design.title}>Oops! Something went wrong!</h1>
      <Link to='/' className={`my-5`}>Return to Home</Link>
    </div>
  );
}

export default NotFound;
