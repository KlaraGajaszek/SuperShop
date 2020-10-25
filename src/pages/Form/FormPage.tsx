import React from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import { BoxWrapper } from './FormPageStyles';
import FormButton from '../../components/atoms/FormButton/FormButton';
import ErrorBoxWrapper from '../../components/atoms/ErrorBox/ErrorBox';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';

type InitialValue = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: string;
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
  tags: Yup.string().required().label('Tags'),
  price: Yup.string().required().label('Price'),
});

const FormPage = () => {
  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    console.log(100 * Number(values.price));
    axios({
      method: 'post',
      url: `https://hookb.in/aBDEM1zY1lI1oobLKe7N`,
      data: {
        name: values.name,
        description: values.description,
        tags: values.tags,
        image: values.image,
        price: 100 * Number(values.price.replace(/,/g, '.')),
      },
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
        // const array = [
        //   formProps.errors.name,
        //   formProps.errors.image,
        //   formProps.errors.tags,
        //   formProps.errors.price,
        // ];
        return (
          <Form>
            <BoxWrapper>
              <InputDefault
                name="name"
                placeholder={'name'}
                radius={'5px'}
                margin={'5px 15px 0  0'}
                type="input"
              />
              <InputDefault
                name="description"
                placeholder={'description'}
                radius={'5px'}
                margin={'5px 15px 0 0'}
                type="input"
              />
              <FieldArray
                name="tags"
                render={(arrayHelpers) => (
                  <div>
                    {console.log('arrayHelpers', arrayHelpers)}
                    {arrayHelpers.form.values.tags?.map(
                      (tag: string, index: number) => (
                        <div key={index}>
                          <InputDefault
                            name={`tags[${index}]`}
                            placeholder={'tag'}
                            radius={'5px 0 0 5px'}
                            margin={'5px 0px 0 0'}
                            type="input"
                          />
                          <ButtonWithIcon
                            type="button"
                            bgcolor={'#dc143c'}
                            radius={'0px 0px 0px 0px'}
                            margin={'5px 0px 0 0'}
                            content={'+'}
                            btnFunction={() => arrayHelpers.push('')}
                            disable={false}
                          />
                          <ButtonWithIcon
                            type="button"
                            bgcolor={
                              arrayHelpers.form.values.tags.length > 1
                                ? 'gray'
                                : '#D3D3D3'
                            }
                            radius={'0px 5px 5px 0px'}
                            margin={'5px 0px 0 0'}
                            content={'-'}
                            btnFunction={() => arrayHelpers.remove(index)}
                            disable={
                              arrayHelpers.form.values.tags.length > 1
                                ? false
                                : true
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              />
              <InputDefault
                name="price"
                placeholder={'price'}
                radius={'5px'}
                margin={'5px 15px 0 15px'}
                type="input"
              />
              <input
                type="file"
                name="image"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) {
                    return;
                  }
                  formProps.setFieldValue('image', e.target.files[0]);
                }}
              />
              <FormButton
                type="submit"
                content={'Submit'}
                bgcolor={'#006aff'}
                radius={'5px'}
                margin={'5px 0 0 0'}
              />
            </BoxWrapper>
            <ErrorBoxWrapper
              bgcolor={'rgba(207, 0, 15, 0.2)'}
              radius={'5px'}
              content={formProps.errors}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
