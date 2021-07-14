import React from "react";

import classes from "./LogoComponent.module.css";
import UserLogo from "../../../assets/img/userLogo.png";

const LogoComponent = () => {
  return (
    <div className={classes.LogoWrapp}>
      <img src={UserLogo} alt="" className={classes.UserLogo} />
    </div>
  );
};

export default LogoComponent;
