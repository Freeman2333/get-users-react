import React from "react";
import classes from "./Users.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogoComponent from "./../common/LogoComponent/LogoComponent";

const User = ({ user, userDelete }) => {
  const deleteUser = (id) => {
    userDelete(id);
  };
  return (
    <Card>
      <CardActionArea>
        <div className={classes.UserLogo}>
          <LogoComponent className={classes.UserLogo} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {user.surname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => deleteUser(user.id)}
          size="small"
          color="primary"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
