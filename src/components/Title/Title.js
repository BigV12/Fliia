import React, { Fragment } from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <Fragment>
      <div className={classes.titlecontainer}>
        <h2 className={classes.titleh}>All The Movies You Can Get And More </h2>
        <p className={classes.titlep}>
          Your one Stop Platform for all{" "}
          <span className={classes.hot}> HOT </span>and Exciting Moviesto keep
          you Engaged
          <br />
          The perfect cure for boredom. tream all your favourite movies and Tv
          shows with any device, any where you are in the world
        </p>

        <a href="#" className={classes.button1}>
          <span>&#10148; Start a Free Trial</span>
        </a>

        <a href="#" className={classes.button2}>
          <span>&#43; Create a Free Playlist</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Title;
