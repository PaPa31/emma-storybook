import React from 'react'
import styled from 'styled-components'
import { typeScale } from '../utils'
import { PrimaryButton, SecondaryButton } from './Buttons'
import { Illustrations, CloseIcon } from '../assets'
import { EmailInput, PasswordInput } from './TextFields'

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`
const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img
        src={Illustrations.SignUp}
        alt="Sign up for an account!"
        aria-hidden="true"
      />
      <ModalHeader>Sign Up</ModalHeader>
      <SignUpText>
        Sign up today to get access to all of our content and features!
      </SignUpText>
      <PrimaryButton onClick={() => console.log('You signed up!')}>
        Sign Up
      </PrimaryButton>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => console.log('You closed the modal!')}
      >
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  )
}

export const SignInModal = () => (
  <ColumnModalWrapper>
    <div>
      <ModalHeader>Sign In</ModalHeader>
      <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
      <PasswordInput label="Password" />
      <SecondaryButton
        style={{ margin: '16px 16px 0 0' }}
        onClick={() => console.log('You signed in!')}
      >
        Sign Up
      </SecondaryButton>
      <PrimaryButton onClick={() => console.log('You signed in!')}>
        Log In
      </PrimaryButton>
    </div>
    <img
      src={Illustrations.SignIn}
      alt="Sign in to your account!"
      aria-hidden="true"
    />
    <CloseModalButton
      aria-label="Close modal"
      onClick={() => console.log('You closed the modal!')}
    >
      <CloseIcon />
    </CloseModalButton>
  </ColumnModalWrapper>
)
