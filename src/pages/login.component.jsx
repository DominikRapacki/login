import React from "react";

import logo from "../assets/rle-logo.png";
import background from "../assets/background-login.png";

import "./login.styles.css";

import { CustomButton } from "../components/button/button.component";

export const LoginPage = () => {
  return (
    <div
      className="main-div"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <h1>ArbeitsplatzApp</h1>
        <h3>Please log in or sign up.</h3>
        <form>
          <label>
            Username:
            <input type="text" name="name" placeholder="name@domain.com" />
          </label>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
          <CustomButton type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
