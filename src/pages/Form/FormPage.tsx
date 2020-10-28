import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray, FormikHelpers } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import { BoxWrapper, InputsBox } from './FormPageStyles';
import FormButton from '../../components/atoms/FormButton/FormButton';
import ErrorBoxWrapper from '../../components/atoms/ErrorBox/ErrorBox';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';
import Modal from '../../components/moleculs/Modal/Modal';

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
  const [modalVisible, setStateModlVisible] = useState(false);

  const modalHandlerOpen = () => {
    setStateModlVisible(true);
  };

  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    let bodyFormData = new FormData();

    bodyFormData.append('image', values.image);

    // return fetch(`https://hookb.in/aBDEM1zY1lI1oobLKe7N`, {
    //   method: 'post',
    //   headers: new Headers({ Accept: 'multipart/form-data' }),
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log('data', data))
    //   .catch(() => console.log(console.log('error')));

    axios({
      method: 'post',
      url: `https://hookb.in/aBDEM1zY1lI1oobLKe7N`,
      // headers: { 'Content-Type': 'applicationx-www-form-urlencoded' },
      data: {
        name: values.name,
        description: values.description,
        tags: values.tags,
        image: bodyFormData.append('image', values.image),
        price: 100 * Number(values.price.replace(/,/g, '.')),
      },
    })
      .then((res) => console.log('res', res))
      .then((data) => console.log('DATA', data))
      .then(function () {
        console.log('oki');
        setTimeout(() => {
          setStateModlVisible(false);
        }, 500);
        onSubmitProps.resetForm();
        console.log('rrrr');
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formProps) => {
        const hasChanged = !_.isEqual(formProps.values, initialValues);
        console.log('hasChanged', hasChanged);

        const hasErrors = Object.keys(formProps.errors).length > 0;
        console.log('hasErrors', hasErrors);
        console.log('formPropsTouched', formProps);
        // const array = [
        //   formProps.errors.name,
        //   formProps.errors.image,
        //   formProps.errors.tags,
        //   formProps.errors.price,
        // ];
        return (
          <Form>
            <Modal
              content={'Add product'}
              show={modalVisible}
              clsFunction={() => {
                setStateModlVisible(false);
                formProps.handleReset();
              }}
            >
              <BoxWrapper>
                <InputsBox>
                  <InputDefault
                    name="name"
                    placeholder={'name'}
                    radius={'5px'}
                    margin={'0px 0px 10px 0px'}
                    type="input"
                  />

                  <InputDefault
                    name="description"
                    placeholder={'description'}
                    radius={'5px'}
                    margin={'0px 0px 10px 0px'}
                    type="input"
                  />
                  <FieldArray
                    name="tags"
                    render={(arrayHelpers) => (
                      <div>
                        {arrayHelpers.form.values.tags?.map(
                          (tag: string, index: number) => (
                            <div key={index}>
                              <InputDefault
                                name={`tags[${index}]`}
                                placeholder={'tag'}
                                radius={'5px 0 0 5px'}
                                type="input"
                                margin={'0px 0px 10px 0px'}
                              />

                              <ButtonWithIcon
                                type="button"
                                bgcolor={'#dc143c'}
                                radius={'0px 0px 0px 0px'}
                                margin={'0px'}
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
                                margin={'0px'}
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
                    type="input"
                    margin={'0px 0px 10px 0px'}
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
                </InputsBox>
                <FormButton
                  type="submit"
                  content={'Submit'}
                  bgcolor={'#006aff'}
                  radius={'5px'}
                  margin={'10px 0 10px 0'}
                />
              </BoxWrapper>
              {hasChanged ? (
                <ErrorBoxWrapper
                  bgcolor={'rgba(207, 0, 15, 0.2)'}
                  radius={'5px'}
                  content={formProps.errors}
                />
              ) : (
                ''
              )}
            </Modal>
            <ButtonWithIcon
              type="button"
              bgcolor={'#dc143c'}
              radius={'0px 0px 0px 0px'}
              margin={'5px 0px 0 0'}
              content={'Modal Open'}
              btnFunction={() => {
                modalHandlerOpen();
                formProps.setErrors({});
              }}
              disable={false}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
