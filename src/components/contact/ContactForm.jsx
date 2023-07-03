/* eslint-disable react/prop-types */
import styles from "./contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    text: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    text: Yup.string().required(),
  });

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
   localStorage.setItem('values', JSON.stringify(values));
    console.log("hello");
    resetForm({values: ''})
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        console.log(props);
        return (
          <Form className={`flex flex-col gap-xs ${styles.form}`}>
            <Field name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="p" />
            <Field name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="p" />
            <textarea
             placeholder='Enter your request'
             name='text'
             id='text'
             type='text'
             value={props.values.text}
             onChange={props.handleChange}
             onBlur={props.handleBlur}
            />
            <ErrorMessage component='p' name="text" />
            <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
