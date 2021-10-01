import React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import "./App.css";
import * as yup from "yup";
import { postProduct } from "./ProductService";

export interface Values {
  img: string;
  name: string;
  price: string;
}

const schema = yup.object().shape({
  img: yup.string().required("Image required"),
  name: yup.string().required("Name required"),
  price: yup.string().required("Price required"),
});

export default function CreateNewProduct() {
  return (
    <>
      <div className="container">
        <div className="contact">
          <h1 className="whiteText">Create new Product</h1>
          <Formik
            initialValues={{
              img: "",
              name: "",
              price: "",
            }}
            validationSchema={schema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                postProduct(values);
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="col-md-12">
                  <label htmlFor="img" className="contactFields whiteText">
                    Image Source
                  </label>
                  <Field
                    id="img"
                    name="img"
                    placeholder="https://grailpoint.com/wp-content/uploads/2020/09/22-2.jpg"
                  ></Field>
                  {errors.img && touched.img ? <div>{errors.img}</div> : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="name" className="contactFields whiteText">
                    Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Nike Airforce"
                  ></Field>
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>

                <div className="col-md-12">
                  <label htmlFor="price" className="contactFields whiteText">
                    Price
                  </label>
                  <Field id="price" name="price" placeholder="1000 CHF"></Field>
                  {errors.price && touched.price ? (
                    <div>{errors.price}</div>
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
