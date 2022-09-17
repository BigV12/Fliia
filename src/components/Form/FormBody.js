import React, { Fragment } from "react";
import classes from "./FormBody.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Me from "./tab.js";

const FormBody = () => {
  return (
    <Fragment>
      {/* <SignIn />
      <SignUp /> */}
      <Me />
    </Fragment>
  );
};

export default FormBody;
