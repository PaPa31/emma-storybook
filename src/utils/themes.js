import { rose, neutral, red, yellow, green } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: rose[300],
  primaryHoverColor: rose[200],
  primaryActiveColor: rose[100],
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
}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: rose[300],
  textColor: rose[300],
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
}
