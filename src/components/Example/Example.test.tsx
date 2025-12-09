import { render, screen } from '@testing-library/react'
import { Example } from './'
import styles from './styles.module.css'

describe('Example', () => {
  it('renders heading and body copy', () => {
    render(
      <Example
        heading='Blueprint'
        body='Use this as a starting point.'
      />,
    )

    expect(screen.getByRole('heading', { level: 2, name: 'Blueprint' })).toBeInTheDocument()
    expect(screen.getByText('Use this as a starting point.')).toBeInTheDocument()
  })

  it('applies tone-specific styling', () => {
    render(
      <Example
        heading='Warning state'
        tone='warning'
        data-testid='example'
      />,
    )

    const element = screen.getByTestId('example')
    expect(element).toHaveClass(styles['example--warning'])
  })

  it('renders children within the content area', () => {
    render(
      <Example heading='With actions'>
        <button type='button'>Action</button>
      </Example>,
    )

    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })
})
