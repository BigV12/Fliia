import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./tab.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Me = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
        className={classes.move}
        TabIndicatorProps={{
          sx: { backgroundColor: "black", height: "2px" },
        }}
        sx={{
          "& button:focus": { color: "black", backgroundColor: "white" },
          //   "& button:active": { color: "black" },
          "& button.Mui-selected": {
            backgroundColor: "red",
            color: "white",
            borderRadius: "6px",
          },
          "& button": { color: "white", marginLeft: "2vw" },
        }}
      >
        <Tab label="Sign Up" />

        <Tab label="Sign In" />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.more}>
        <SignUp handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.more1}>
        <SignIn />
      </TabPanel>
    </Fragment>
  );
};

export default Me;
