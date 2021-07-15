import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import classes from "./CreateUser.module.css";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/actions";
import * as Yup from "yup";

const CreateUser = ({ addUser }) => {
  const [isUser, setIsUser] = useState(false);

  if (isUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <h1 className={classes.title}>Create user</h1>
      <Formik
        initialValues={{ name: "", surname: "", desc: "" }}
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
          addUser(values);
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

export default connect(null, { addUser })(CreateUser);
