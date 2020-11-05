import React, { useContext } from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import TagInput from '../../components/atoms/Input/Input';
import { BoxWrapper, InputsBox, Tag, TagWrapper } from './FormPageStyles';
import FormButton from '../../components/atoms/FormButton/FormButton';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';
import { ModelFormContext } from '../../context/ModalFormProductsContext';

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
  const { handleCloseFormModal } = useContext(ModelFormContext);

  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    let bodyFormData = new FormData();

    bodyFormData.append('name', values.name);
    bodyFormData.append('description', values.description);
    bodyFormData.append('tags', JSON.stringify(values.tags));
    bodyFormData.append('price', values.price);
    bodyFormData.append('image', values.image);

    axios({
      method: 'post',
      url: `https://httpbin.org/post`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: bodyFormData,
    })
      .then(function () {
        setTimeout(() => {
          handleCloseFormModal();
        }, 500);
        onSubmitProps.resetForm();
      })
      .catch(function (response) {
        //handle error
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
        return (
          <Form>
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
                          <TagWrapper key={index}>
                            <Tag>
                              <TagInput
                                name={`tags[${index}]`}
                                placeholder={'tag'}
                                radius={'5px 0 0 5px'}
                                type="input"
                                margin={'0px 0px 10px 0px'}
                              />
                            </Tag>
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
                          </TagWrapper>
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
                bgcolor={'#F92A70'}
                radius={'5px'}
                margin={'20px 0 20px 0'}
                btnFunction={() => {}}
                width={'150px'}
              />
            </BoxWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
