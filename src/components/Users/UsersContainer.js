import React, { useEffect } from "react";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import classes from "./Users.module.css";
import { connect } from "react-redux";
import { getUsers, isUsersLoaded } from "./../../redux/useSelector";
import { requestUsers, userDelete } from "./../../redux/actions/actions";

const UsersContainer = ({ requestUsers, users, usersLoaded, userDelete }) => {
  useEffect(() => {
    requestUsers();
  }, []);

  if (usersLoaded) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.usersContainer}>
        <div className={classes.users}>
          {users.map((user) => (
            <User user={user} key={user.id} userDelete={userDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    usersLoaded: isUsersLoaded(state),
  };
};

export default connect(mapStateToProps, { requestUsers, userDelete })(
  UsersContainer
);
