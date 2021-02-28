import React from 'react'
import axios from 'axios'
import { Formik, Form, FormikValues } from 'formik'
import * as Yup from 'yup'

import { Modal } from '../../components/moleculs/Modal/Modal'
import { closeModal } from '../../store/actions/setModalState'
import { useDispatch } from 'react-redux'
import { FormPage } from '../../pages/Form/FormPage'
import { FormTemplate } from '../../pages/Form/FormTemplate'
import { SuccessNotification } from '../../components/atoms/Notification/SuccessNotification'
import { ErrorNotification } from '../../components/atoms/Notification/ErrorNotification'

type InitialValue = {
  name: string
  description: string
  image: string
  tags: string[]
  price: string
}

const initialValues: InitialValue = {
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

export const handleSubmit = async (values: InitialValue) => {
  // onSubmit(values);

  let bodyFormData = new FormData()

  bodyFormData.append('name', values.name)
  bodyFormData.append('description', values.description)
  bodyFormData.append('tags', JSON.stringify(values.tags))
  bodyFormData.append('price', values.price)
  bodyFormData.append('image', values.image)

  console.log('bodyFormData', bodyFormData)
  try {
    const result = await axios({
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
  } catch (e) {
    console.log(e)
  }
}

export const AddProductsModal = () => {
  const dispatch = useDispatch()

  return (
    <FormPage
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(form: any) => (
        <Modal
          content={'Add product'}
          buttonTitle="Submit"
          isOpen={true}
          onClose={() => {
            dispatch(closeModal())
          }}
        >
          {form}
        </Modal>
      )}
    </FormPage>
  )
}
