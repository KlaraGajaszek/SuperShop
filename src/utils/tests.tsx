import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../store/reducers'

export const render = ({
  initialState = {},
  store = createStore(reducer, initialState),
  ...renderOptions
}: any) => {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender({ wrapper: Wrapper, ...renderOptions })
}
