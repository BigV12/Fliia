import React, { Fragment } from "react";
import classes from "./SignUp.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const SignUp = () => {
  return (
    <Fragment>
      <form className={classes.form}>
        <h3 className={classes.have}> Sign Up </h3>

        <label>Name</label>
        <br />
        <input type="text" placeholder="First Name" className={classes.fname} />
        <br />

        <label>Email</label>
        <br />
        <input placeholder="Email" type="email" className={classes.email} />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          className={classes.password}
        />

        <br />
        <button className={classes.summit}>Sign Up</button>
        <p>SignUp with</p>
        <FaFacebook className={classes.fb} size="30px" />
        <FaGoogle className={classes.google} size="30px" />
        <FaTwitterSquare className={classes.twitter} size="30px" />
      </form>
    </Fragment>
  );
};

export default SignUp;
