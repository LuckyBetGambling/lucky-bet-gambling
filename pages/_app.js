import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react';

import styled from "styled-components"
import Modal, {openModal} from '../components/modal'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default function App({ Component, pageProps }) {

  const currentUser = {
    username: 'pitoloco',
    userId: '123',
    name: 'Erik'
  }
  
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <>
      <Header title='Gambling Platform' wallet='1000' currentUser={currentUser} signUpCallback={() => openModal(() => setShowSignUpModal(true))} loginCallback={() => openModal(() => setShowLoginModal(true))}/>
      <Component {...pageProps} />
      <Footer>GamblingCompanyLLC - est. 2023</Footer>

      <Modal show={showSignUpModal} onClose={() => { setShowSignUpModal(false) }} title='Sign Up'>
        <LoginForm>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button type='submit'>Sign Up</button>
        </LoginForm>
      </Modal>

      <Modal show={showLoginModal} onClose={() => { setShowLoginModal(false) }} title='Log In'>
        <LoginForm>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button type='submit'>Log In</button>
        </LoginForm>
      </Modal>
    </>
  )
}
