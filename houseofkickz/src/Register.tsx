import React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import "./App.css";
import * as yup from "yup";
import { AccountService } from "./AccountService";

const accountService = new AccountService();

export interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  equalsPassword: string;
}

const schema = yup.object().shape({
  firstname: yup.string().min(2, "Too short").max(50, "Too Long"),
  lastname: yup.string().min(2, "Too short").max(50, "Too long"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .password()
    .min(6, "Password is too short - 6 Chars minimum")
    .required("Password is required"),
    equalsPassword: yup
    .string()
    .password()
    .min(6, "Password is too short - 6 Chars minimum")
    .required("Password is required")
    .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
    })
});

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="contact">
          <h1 className="whiteText">Register</h1>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              equalsPassword: "",
            }}
            validationSchema={schema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                accountService.postAccount(values);
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="col-md-12">
                  <label
                    htmlFor="firstname"
                    className="contactFields whiteText"
                  >
                    Firstname
                  </label>
                  <Field
                    id="firstname"
                    name="firstname"
                    placeholder="Max"
                  ></Field>
                  {errors.firstname && touched.firstname ? (
                    <div>{errors.firstname}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="lastname" className="contactFields whiteText">
                    Lastname
                  </label>
                  <Field
                    id="lastname"
                    name="lastname"
                    placeholder="Muster"
                  ></Field>
                  {errors.lastname && touched.lastname ? (
                    <div>{errors.lastname}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="email" className="contactFields whiteText">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="max.muster@gmail.com"
                  ></Field>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="password" className="contactFields whiteText">
                    Password
                  </label>
                  <Field id="password" name="password" type="password"></Field>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="equalsPassword" className="contactFields whiteText">
                    Confirm password
                  </label>
                  <Field id="equalsPassword" name="equalsPassword" type="password"></Field>
                  {errors.equalsPassword && touched.equalsPassword ? (
                    <div>{errors.equalsPassword}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <button type="submit" className="contactBtn whiteText">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
