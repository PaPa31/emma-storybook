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
  warning: ({ theme }) => `
  &:hover {
    background-color: ${theme.status.warningHoverColor};
  }

  &:focus {
    outline: 3px solid ${theme.status.warningHoverColor};
  }

  &:active {
    background-color: ${theme.status.warningActiveColor};
    border-color: ${theme.status.warningActiveColor};
  }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
  `,
  secondaryButtonWarning: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
    color: ${theme.status.warningColor}
  `,
  tertiaryButtonWarning: ({ theme }) => `
  color: ${theme.status.warningColor}
  `,
  error: ({ theme }) => `
  &:hover {
    background-color: ${theme.status.errorHoverColor};
  }

  &:focus {
    outline: 3px solid ${theme.status.errorHoverColor};
  }

  &:active {
    background-color: ${theme.status.errorActiveColor};
    border-color: ${theme.status.errorActiveColor};
  }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
  `,
  secondaryButtonError: ({ theme }) => `
    border: 2px solid ${theme.status.errorColor};
    color: ${theme.status.errorColor}
  `,
  tertiaryButtonError: ({ theme }) => `
  color: ${theme.status.errorColor}
  `,
  success: ({ theme }) => `
  &:hover {
    background-color: ${theme.status.successHoverColor};
  }

  &:focus {
    outline: 3px solid ${theme.status.successHoverColor};
  }

  &:active {
    background-color: ${theme.status.successActiveColor};
    border-color: ${theme.status.successActiveColor};
  }
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border: 2px solid ${theme.status.successColor};
    color: ${theme.status.successColor}
  `,
  tertiaryButtonSuccess: ({ theme }) => `
  color: ${theme.status.successColor}
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
