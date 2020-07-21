import styled from 'styled-components'
import { typeScale } from '../utils'
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
    background-color: ${(props) => props.theme.status.warningHoverColor};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.status.warningHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.status.warningActiveColor};
    border-color: ${(props) => props.theme.status.warningActiveColor};
  }
  `,
  primaryButtonWarning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.status.warningColor}
  `,
  tertiaryButtonWarning: () => `
  color: ${(props) => props.theme.status.warningColor}
  `,
  error: () => `
  &:hover {
    background-color: ${(props) => props.theme.status.errorHoverColor};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.status.errorHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.status.errorActiveColor};
    border-color: ${(props) => props.theme.status.errorActiveColor};
  }
  `,
  primaryButtonError: () => `
    background-color: ${(props) => props.theme.status.errorColor};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${(props) => props.theme.status.errorColor};
    color: ${(props) => props.theme.status.errorColor}
  `,
  tertiaryButtonError: () => `
  color: ${(props) => props.theme.status.errorColor}
  `,
  success: () => `
  &:hover {
    background-color: ${(props) => props.theme.status.successHoverColor};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.status.successHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.status.successActiveColor};
    border-color: ${(props) => props.theme.status.successActiveColor};
  }
  `,
  primaryButtonSuccess: () => `
    background-color: ${(props) => props.theme.status.successColor};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${(props) => props.theme.status.successColor};
    color: ${(props) => props.theme.status.successColor}
  `,
  tertiaryButtonSuccess: () => `
  color: ${(props) => props.theme.status.successColor}
  `,
}

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph}
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
    border: none;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  // background-color: ${(props) => props.theme.textColorOnPrimary};
  background:none;
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid transparent;

  &:disabled {
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
