import React from 'react'
import 'whatwg-fetch'
import { rest } from 'msw'
import axios from 'axios'
import {
  screen,
  render,
  render as rtlRender,
  wait,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { AddProductsModal } from '../../../modals/AddProductsModal/AddProductsModal'
import { server } from '../../../testServer'
import { showModal } from '../../../store/actions/setModalState'
import { handleSubmit } from '../../../modals/AddProductsModal/AddProductsModal'

jest.mock('axios')

beforeEach(() => {
  axios.mockClear()
})

const mockData = {
  name: 'productName',
  description: 'productDescription',
  image: '',
  price: 'priceText',
  tags: ['tagText'],
}

describe('check that reques is good', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store, wrapper: any

  it('should create an action to open modal with test content', () => {
    const data = {
      modal: 'ADD_PRODUCT_FORM',
      payload: { name: 'test' },
    }

    const SHOW_MODAL = 'SHOW_MODAL'
    const text = 'test content'
    const expectedAction = {
      type: SHOW_MODAL,
      modal: 'ADD_PRODUCT_FORM',
      payload: { name: 'test' },
    }
    expect(showModal(data)).toEqual(expectedAction)
  })
  // it("it's submit succesfully", async () => {
  //   // const onSubmit = await jest.fn()
  //   axios.mockResolvedValue({ data: 'test' })
  //   //  console.log('axios', axios)

  //   store = mockStore(initialState)
  //   render(
  //     <Provider store={store}>
  //       <AddProductsModal />
  //     </Provider>
  //   )

  //   const nameInput = screen.getByPlaceholderText('Product Name')
  //   const descriptionInput = screen.getByPlaceholderText('Product Description')
  //   const tagsInput = screen.getByPlaceholderText('Tag nr.0')
  //   const priceInput = screen.getByPlaceholderText('Price')

  //   userEvent.type(nameInput, 'productName')
  //   userEvent.type(descriptionInput, 'productDescription')
  //   userEvent.type(tagsInput, 'tagText')
  //   userEvent.type(priceInput, 'priceText')

  //   const button = screen.getByTestId('buttonID')

  //   expect(button).toBeInTheDocument()
  //   userEvent.click(button)

  //   await wait(() => expect(axios).toHaveBeenCalledTimes(1))

  //   // await expect(axios).toHaveBeenCalledWith(
  //   //   expect.objectContaining({
  //   // name: 'productName',
  //   // description: 'productDescription',
  //   // price: 'priceText',
  //   // tags: ['tagText'],
  //   //   })
  //   // )
  // })

  it('response is bad with ', async () => {
    store = mockStore(initialState)
    render(
      <Provider store={store}>
        <AddProductsModal />
      </Provider>
    )

    server.use(
      rest.post('https://httpbin.org/post', (req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    const nameInput = screen.getByPlaceholderText('Product Name')
    const descriptionInput = screen.getByPlaceholderText('Product Description')
    const tagsInput = screen.getByPlaceholderText('Tag nr.0')
    const priceInput = screen.getByPlaceholderText('Price')

    userEvent.type(nameInput, 'productName')
    userEvent.type(descriptionInput, 'productDescription')
    userEvent.type(tagsInput, 'tagText')
    userEvent.type(priceInput, 'priceText')

    const button = screen.getByTestId('buttonID')
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    // expect(handleSubmit(mockData)).rejects

    await wait(() => expect(axios).toHaveBeenCalledTimes(1))
  })
})
