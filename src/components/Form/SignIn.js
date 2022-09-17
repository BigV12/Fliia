import React, { Fragment } from "react";
import classes from "./SignIn.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const SignIn = () => {
  return (
    <Fragment>
      <form className={classes.form}>
        <h3 className={classes.have}>Sign In</h3>
        <label className={classes.label}>Email</label>
        <br />
        <input
          placeholder="Enter Your Email"
          type="email"
          className={classes.email}
        />
        <br />
        <label className={classes.label}>Password</label>
        <br />
        <input
          type="password"
          placeholder=" Enter Your Password"
          className={classes.password}
        />{" "}
        <br />
        <button className={classes.summit}>Sign In</button>
        <p>Login with</p>
        <FaFacebook className={classes.fb} size="30px" />
        <FaGoogle className={classes.google} size="30px" />
        <FaTwitterSquare className={classes.twitter} size="30px" />
      </form>
    </Fragment>
  );
};

export default SignIn;
