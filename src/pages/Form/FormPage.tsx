import React, { FC } from 'react'
import axios from 'axios'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { FormTemplate } from './FormTemplate'

type InitialValue = {
  name: string
  description: string
  image: string
  tags: string[]
  price: string
}

const initialValues: any = {
  name: '',
  description: '',
  image: '',
  tags: [''],
  price: '',
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  description: Yup.string().required().label('Description'),
  image: Yup.string().label('Image'),
  tags: Yup.string().label('Tags'),
  price: Yup.string().label('Price'),
})

export const FormPage: FC<any> = ({ children }: any) => {
  const onSubmit = (values: any, onSubmitProps: FormikHelpers<any>) => {
    console.log('values', values)

    let bodyFormData = new FormData()

    bodyFormData.append('name', values.name)
    bodyFormData.append('description', values.description)
    bodyFormData.append('tags', JSON.stringify(values.tags))
    bodyFormData.append('price', values.price)
    bodyFormData.append('image', values.image)

    axios({
      method: 'post',
      url: `https://httpbin.org/post`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: bodyFormData,
      onUploadProgress: (progressEvent) => {
        console.log(
          'upload event',
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        )
      },
    })
      .then(function () {
        setTimeout(() => {
          // handleFormModal(false);
        }, 500)
        onSubmitProps.resetForm()
      })
      .catch(function (response) {
        //handle error
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: any) => console.log(values)}
    >
      <Form>
        <FormTemplate />
      </Form>
    </Formik>
  )
}
