import { pink, neutral, red, yellow, green } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: pink[300],
  primaryHoverColor: pink[200],
  primaryActiveColor: pink[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  status: {
    warningColor: yellow[300],
    errorColor: red[300],
    successColor: green[300],
    warningHoverColor: yellow[200],
    errorHoverColor: red[200],
    successHoverColor: green[200],
    warningActiveColor: yellow[100],
    errorActiveColor: red[100],
    successActiveColor: green[100],
  },
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: pink[300],
  textColor: pink[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[300],
    errorColor: red[300],
    successColor: green[300],
    warningHoverColor: yellow[200],
    errorHoverColor: red[200],
    successHoverColor: green[200],
    warningActiveColor: yellow[100],
    errorActiveColor: red[100],
    successActiveColor: green[100],
  },
  formElementBackground: pink[100],
  textOnFormElementBackground: neutral[100],
}
