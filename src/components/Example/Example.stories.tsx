import type { Meta, StoryObj } from '@storybook/react'
import { Example } from './'

const meta = {
  title: 'Foundation/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  args: {
    heading: 'Example component',
    body: 'Use this as a reference for new building blocks in the library.',
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof meta>

export const Neutral: Story = {}

export const Info: Story = {
  args: {
    tone: 'info',
    body: 'The tone prop swaps style tokens. Treat it as a theme hook for future components.',
  },
}

export const WithChildren: Story = {
  args: {
    heading: 'Slot in any JSX',
    tone: 'warning',
    body: 'Children live in the content area—use it for buttons, links, or extra UI.',
    children: (
      <>
        <button type='button'>Primary action</button>
        <button
          type='button'
          style={{ opacity: 0.7 }}
        >
          Secondary
        </button>
      </>
    ),
  },
}
