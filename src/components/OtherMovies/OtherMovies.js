import React, { Fragment } from "react";
import classes from "./OtherMovies.module.css";
import venom from "./venom.jpg";
import rise from "./rise.jpg";
import thor from "./thor.jpg";
import major from "./major.jpg";
import spider from "./spider.jpeg";
import { IoCaretForwardCircle } from "react-icons/io5";

const OtherMovies = () => {
  return (
    <Fragment>
      <div>
        <h4 className={classes.subscribe}>
          {" "}
          Subscribe Today and Enjoy
          <span className={classes.aa}> Amazing Movies</span>
        </h4>
      </div>

      <div className={classes.flexcontainer}>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
        </div>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
        </div>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
        </div>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
        </div>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
        </div>
        <div className={classes.flexitems}>
          {" "}
          <div class={classes.playbtn}>
            <IoCaretForwardCircle />
          </div>
          click to see more
        </div>
      </div>
    </Fragment>
  );
};

export default OtherMovies;
