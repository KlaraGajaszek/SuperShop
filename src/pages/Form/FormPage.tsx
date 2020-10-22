import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type InitialValue = {
  name: string;
  email: string;
};

const initialValues: InitialValue = {
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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" />
        <button>Submit</button>
      </Form>
    </Formik>
  );
};
export default FormPage;
