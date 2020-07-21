import React from 'react'
import styled from 'styled-components'

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M24 3.12039L20.877 0L11.9994 8.87811L3.1215 0L0 3.12189L8.877 12L0 20.8787L3.1215 24L11.9994 15.1228L20.877 24L24 20.8787L15.1215 12L24 3.12039Z"
      fill="#F51AA4"
    />
  </CloseIconWrapper>
)
