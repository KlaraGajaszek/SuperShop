import React, { useRef } from 'react'
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
  tags: [''],
  price: '',
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  description: Yup.string().required().label('Description'),
  tags: Yup.string().label('Tags'),
  price: Yup.string().label('Price'),
})

export const FormPage = () => {
  const fileRef = useRef<HTMLInputElement>(null)

  const onSubmit = (values: any, onSubmitProps: FormikHelpers<any>) => {
    console.log('XTEAM', values)

    let bodyFormData = new FormData()

    bodyFormData.append('name', values.name)
    bodyFormData.append('description', values.description)
    bodyFormData.append('tags', JSON.stringify(values.tags))
    bodyFormData.append('price', values.price)
    if (fileRef?.current?.files) {
      console.log('fileRef', fileRef.current.files[0])
      bodyFormData.append('image', fileRef.current.files[0])
    }

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
        onSubmitProps.resetForm()
      })
      .catch((e) => console.log(e))
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormTemplate fileRef={fileRef} />
      </Form>
    </Formik>
  )
}
