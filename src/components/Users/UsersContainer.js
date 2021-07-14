import React, { useEffect, useState } from "react";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import classes from "./Users.module.css";
import { connect } from "react-redux";
import { getUsers, isUsersLoaded } from "./../../redux/useSelector";
import { requestUsers, userDelete } from "./../../redux/actions/actions";
import Pagination from "../common/Pagination/Pagination";

const UsersContainer = ({ requestUsers, users, usersLoaded, userDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  useEffect(() => {
    requestUsers();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  //Change page
  const paginate = (number) => setCurrentPage(number);

  if (usersLoaded) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.usersContainer}>
        <div className={classes.users}>
          {currentUsers.map((user) => (
            <User user={user} key={user.id} userDelete={userDelete} />
          ))}
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
          />
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
