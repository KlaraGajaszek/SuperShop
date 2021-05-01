import React from 'react'
import 'jest-styled-components'
import { screen, render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

import { Button } from '../Button'

describe('Content', () => {
  it('render without crash', () => {
    const mockFunction = jest.fn()
    render(<Button content="test" onClick={mockFunction} />)
    const formWrapper = screen.getByText('test')
    expect(formWrapper).toBeInTheDocument()
  })

  it('all styles should be render', () => {
    const mockFunction = jest.fn()
    const formButton = renderer
      .create(<Button content="test" onClick={mockFunction} />)
      .toJSON()
    expect(formButton).toMatchSnapshot()
  })
})
