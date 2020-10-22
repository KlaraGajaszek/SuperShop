import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

type InitialValue = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: number;
};

const initialValues: InitialValue = {
  name: '',
  description: '',
  image: '',
  tags: [''],
  price: 0, // jak dobrac wartosc poczatkowa dla typu number
};

const onSubmit = (values: InitialValue, onSubmitProps: any) => {
  console.log(values);
  console.log('onSubmitProps', onSubmitProps);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  description: Yup.string().required().label('Description'),
  image: Yup.string().required().label('Image'),
  tags: Yup.string().label('Tags'),
  price: Yup.string().required().label('Price'),
});

const FormPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>

            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" />

            <label htmlFor="image">Image</label>
            <Field type="text" id="image" name="image" />
            <ErrorMessage name="image" />

            <label htmlFor="tags">Tags</label>
            <FieldArray name="tags">
              {({ push, remove, form }) => {
                const { values } = form;
                const { tags } = values;
                return (
                  <div>
                    {tags.map((tag: string, index: number) => (
                      <div key={index}>
                        <Field name={`tags[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                        <button type="button" onClick={() => push('')}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <label htmlFor="price">Price</label>
            <Field type="text" id="price" name="price" />
            <ErrorMessage name="price" />

            <button disabled={formik.isSubmitting}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
