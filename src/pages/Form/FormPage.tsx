import React from 'react';
import { Formik, Form, FormikValues } from 'formik';

import { FormTemplate } from './FormTemplate';

export const FormPage = ({
  children,
  handleSubmit,
  initialValues,
  validationSchema,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>{children(<FormTemplate />)}</Form>
    </Formik>
  );
};
