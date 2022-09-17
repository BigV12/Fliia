import React, { Fragment } from "react";
import classes from "./App.module.css";

import NavBar from "./components/NavBar/NavBar";
import FormBody from "./components/Form/FormBody";
import OtherMovies from "./components/OtherMovies/OtherMovies";
import Title from "./components/Title/Title";

function App() {
  return (
    <Fragment>
      <div className={classes.container}>
        <NavBar />
        <Title />
        <FormBody />
        <OtherMovies />
      </div>
    </Fragment>
  );
}

export default App;
