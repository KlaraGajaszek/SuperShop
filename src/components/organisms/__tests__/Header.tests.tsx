import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik'
import * as ReactRedux from 'react-redux'

import { Header } from '../Header/Header'
import { render } from '../../../utils/tests'
import { FormPage } from '../../../pages/Form/FormPage'

import { store } from '../../../index'
// import { FormTemplate } from '../FormTemplate'

const mockDispatch = jest.fn()

beforeAll(() => {
  ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch)
})

beforeEach(() => {
  ReactRedux.useDispatch.mockClear()
})

const wrapper = ({ children }: any) => (
  <Formik
    initialValues={{
      name: '',
      description: '',
      image: '',
      tags: [''],
      price: '',
    }}
    onSubmit={(value) => console.log(value)}
  >
    <Form>{children}</Form>
  </Formik>
)

describe('Header', () => {
  it('render without crash', async () => {
    render(<Header />)
    const button = screen.getByText('Add product')
    userEvent.click(button)

    // render(<FormPage />, { wrapper })
    const name = screen.getByPlaceholderText('Product Name')
    // const description = screen.getByPlaceholderText('Product Description')
    // const price = screen.getByPlaceholderText('Product Price')

    // expect(name).toBeInTheDocument()
    // expect(description).toBeInTheDocument()
    // expect(price).toBeInTheDocument()

    // await userEvent.type(name, 'test1')
    // await userEvent.type(description, 'test2')
    // await userEvent.type(price, 'test4')

    // const SubmitButton = screen.getByText('Submit')
    // expect(SubmitButton).toBeInTheDocument()
    // userEvent.click(button)
  })
})
