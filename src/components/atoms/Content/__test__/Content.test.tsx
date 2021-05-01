import React from 'react'
import { screen, render, within } from '@testing-library/react'
import 'jest-styled-components'

import Content from '../Content'

describe('Content', () => {
  it('render without crash', () => {
    render(<Content data-testid="contentId" description="desc" name="name" />)
    const content = screen.getByTestId('contentId')
    expect(content).toBeInTheDocument()
  })

  it('render header text inside element', () => {
    render(<Content name="Test" description="desc" />)

    const titleHeader = screen.getByText('Test')

    expect(titleHeader).toBeInTheDocument()

    const headerContent = within(titleHeader).queryByText('Test')
    expect(headerContent).toBeInTheDocument()
  })

  it('render description', () => {
    render(<Content description="TestDescription" name="name" />)

    const titleDescription = screen.getByText('TestDescription')

    expect(titleDescription).toBeInTheDocument()

    const descriptionContent = within(titleDescription).queryByText(
      'TestDescription'
    )
    expect(descriptionContent).toBeInTheDocument()
  })
})
