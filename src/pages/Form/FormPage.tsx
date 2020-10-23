import React from 'react';
import axios from 'axios';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';

type InitialValue = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: string | number;
};

const initialValues: InitialValue = {
  name: '',
  description: '',
  image: '',
  tags: [''],
  price: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  description: Yup.string().required().label('Description'),
  image: Yup.string().label('Image'),
  tags: Yup.string().label('Tags'),
  price: Yup.string().required().label('Price'),
});

const FormPage = () => {
  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    axios({
      method: 'post',
      url: `https://hookb.in/aBDEM1zY1lI1oobLKe7N`,
      data: {
        name: values.name,
        description: values.description,
        tags: values.tags,
        image: values.image,
        price: values.price,
      },
    });
    console.log('values', {
      name: values.name,
      description: values.description,
      tags: values.tags,
      image: values.image,
      price: values.price,
    });
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(formProps) => {
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
            <input
              type="file"
              id="image"
              name="image"
              onChange={(event: React.ChangeEvent<any>) => {
                formProps.setFieldValue('image', event.target.files[0]);
              }}
            />
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
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
