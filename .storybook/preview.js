import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { withKnobs } from '@storybook/addon-knobs'
import { contexts } from './contexts'

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#ffffff', default: true },
    { name: 'Dark theme', value: '#f51aa4' },
  ],
})

addDecorator(withContexts(contexts))
addDecorator(withKnobs)