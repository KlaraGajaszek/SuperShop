import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import { IoMdAddCircle } from 'react-icons/io'

import ButtonWithIcon from '../ButtonWithIcon'

describe('ButtonWithIcon', () => {
  it('render without crash', () => {
    const mockFn = jest.fn()
    render(
      <ButtonWithIcon
        disable={false}
        color="red"
        icon={'tets'}
        width="10px"
        height="5px"
        margin="1px"
        onClick={mockFn}
      />
    )
  })

  it('not called function when disabled is true', () => {
    const mockFn = jest.fn()
    render(
      <ButtonWithIcon
        disable={true}
        color="red"
        icon={'tets'}
        width="10px"
        height="5px"
        margin="1px"
        onClick={mockFn}
      />
    )

    const button = screen.queryByTestId('buttonId') as HTMLElement
    userEvent.click(button)
    expect(button).toHaveAttribute('disabled')
    expect(mockFn).not.toHaveBeenCalled()
  })

  it('called function atfer click', () => {
    const mockCallback = jest.fn()
    render(
      <ButtonWithIcon
        disable={false}
        color="red"
        icon={'tets'}
        width="10px"
        height="5px"
        margin="1px"
        onClick={mockCallback}
      />
    )

    const button = screen.getByTestId('buttonId')
    userEvent.click(button)
    expect(mockCallback).toHaveBeenCalled()
  })

  it('allows to pass styles as props', () => {
    const mockCallback = jest.fn()
    const button = renderer
      .create(
        <ButtonWithIcon
          disable={false}
          color="red"
          icon={'tets'}
          width="10"
          height="5"
          margin="1"
          onClick={mockCallback}
        />
      )
      .toJSON()

    expect(button).toHaveStyleRule('margin', '1')
  })

  it('render icon in button', () => {
    render(<ButtonWithIcon as={IoMdAddCircle} />)
    const buttonIcon = screen.getByTestId('buttonIcon')
    expect(buttonIcon).toBeInTheDocument()
  })
})
