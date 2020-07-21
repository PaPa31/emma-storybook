import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'
import { GlobalStyle, defaultTheme, darkTheme } from './utils'
import { ThemeProvider } from 'styled-components'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <PrimaryButton modifiers={['small', 'error', 'primaryButtonError']}>
          Hello World
        </PrimaryButton>
        <SecondaryButton
          modifiers={['large', 'warning', 'secondaryButtonWarning']}
        >
          Goodbye World
        </SecondaryButton>
        <TertiaryButton modifiers={['success', 'tertiaryButtonSuccess']}>
          Hey world
        </TertiaryButton>

        <PrimaryButton modifiers={['small']}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={['large']}>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
