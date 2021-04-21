import React from 'react'
import { Formik, Form } from 'formik'
import axios from 'axios'
import { FormTemplate } from '../FormTemplate'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// jest.mock('axios')
// axios.mockResolvedValue()

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
xdescribe('check that reques is good', () => {
  it("it's submit succesfully", async () => {
    render(<FormTemplate />, { wrapper })

    const name = screen.getByPlaceholderText('Product Name')
    const description = screen.getByPlaceholderText('Product Description')
    const price = screen.getByPlaceholderText('Product Price')

    await userEvent.type(name, 'test1')
    userEvent.type(description, 'test2')
    userEvent.type(price, 'test4')
  })
})

// const button = screen.getByTestId('buttonID');

// expect(button).toBeInTheDocument();
// userEvent.click(button);
// expect(button).toHaveBeenCalled();
