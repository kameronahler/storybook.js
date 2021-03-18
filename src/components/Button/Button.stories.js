import React from 'react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: 'Button',
  },
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default button',
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  text: 'Primary button',
}

export const Empty = Template.bind({})
Empty.args = {
  empty: true,
  text: 'Empty button',
}
