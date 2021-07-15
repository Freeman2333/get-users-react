import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import classes from "./CreateUser.module.css";
import { connect } from "react-redux";
import { addUser, updateUser, requestUsers } from "../../redux/actions/actions";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { getUsers } from "./../../redux/useSelector";

const CreateUser = ({ addUser, users, updateUser, requestUsers }) => {
  const [isUser, setIsUser] = useState(false);
  const { id } = useParams();
  let user = "";
  if (id) {
    user = users.find((user) => {
      return user.id == id;
    });
  }
  if (isUser || !users.length) {
    setTimeout(requestUsers, 500);
    return <Redirect to={"/"} />;
  }
  return (
    <>
      <h1 className={classes.title}>{id ? "Edit User" : "Create user"}</h1>
      <Formik
        initialValues={{
          name: user ? user.name : "",
          surname: user ? user.surname : "",
          desc: user ? user.desc : "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          surname: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          desc: Yup.string()
            .min(15, "Must be at least 15 characters long.")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          id ? updateUser(id, values) : addUser(values);
          setSubmitting(false);
          setIsUser(true);
        }}
      >
        <Form className={classes.form}>
          <label htmlFor="name">First Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <label htmlFor="surname">Surname</label>
          <Field name="surname" type="text" />
          <ErrorMessage name="surname" />
          <label htmlFor="desc">Description</label>
          <Field name="desc" as="textarea" className="form-input" />
          <ErrorMessage name="desc" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
  };
};

export default connect(mapStateToProps, { addUser, updateUser, requestUsers })(
  CreateUser
);
