import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });
// const initialValues = {
//   name: '',
//   email: '',
// };

// const FormPage = () => (
//   <>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={initialValues}
//       validationSchema={SignupSchema}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       <Form>
//         <Field name="name" />
//         - + <ErrorMessage name="name" />
//         <Field name="email" type="email" />
//         - + <ErrorMessage name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </>
// );
type InitialValue = {
  name?: string;
  email?: string;
};

const initialValues = {
  name: '',
  email: '',
};

const onSubmit = (values: InitialValue) => {
  console.log(values);
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
});

const FormPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : (
        ''
      )}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : (
        ''
      )}
      <button>Submit</button>
    </form>
  );
};
export default FormPage;
