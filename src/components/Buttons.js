import styled from 'styled-components'
import { defaultTheme, typeScale } from '../utils'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
  &:hover {
    background-color: ${defaultTheme.status.warningHoverColor};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.status.warningHoverColor};
  }

  &:active {
    background-color: ${defaultTheme.status.warningActiveColor};
    border-color: ${defaultTheme.status.warningActiveColor};
  }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor}
  `,
  tertiaryButtonWarning: () => `
  color: ${defaultTheme.status.warningColor}
  `,
  error: () => `
  &:hover {
    background-color: ${defaultTheme.status.errorHoverColor};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.status.errorHoverColor};
  }

  &:active {
    background-color: ${defaultTheme.status.errorActiveColor};
    border-color: ${defaultTheme.status.errorActiveColor};
  }
  `,
  primaryButtonError: () => `
    background-color: ${defaultTheme.status.errorColor};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor}
  `,
  tertiaryButtonError: () => `
  color: ${defaultTheme.status.errorColor}
  `,
  success: () => `
  &:hover {
    background-color: ${defaultTheme.status.successHoverColor};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.status.successHoverColor};
  }

  &:active {
    background-color: ${defaultTheme.status.successActiveColor};
    border-color: ${defaultTheme.status.successActiveColor};
  }
  `,
  primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.successColor}
  `,
  tertiaryButtonSuccess: () => `
  color: ${defaultTheme.status.successColor}
  `,
}

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph}
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  // background-color: ${defaultTheme.textColorOnPrimary};
  background:none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid transparent;

  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
