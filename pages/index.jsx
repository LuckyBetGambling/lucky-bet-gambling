import Head from 'next/head'
import styled from "styled-components";
import { Fragment, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';


const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 4px solid red;
  z-index: 69;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

const RegisterModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 4px solid red;
  z-index: 69;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default function Home() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // function for handling register
  const handleRegister = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    }
    catch(err){
      console.log(err.message);
    }
  }

    // function for handling login
  const handleLogin = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    }
    catch(err){
      console.log(err.message);
    }
  }

  // function for handling log out
  const handleLogout = async () => {
    await signOut(auth);
  }

  return (
    <Fragment>
      <Head>
        <title>Lucky Bet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lucky Bet</h1>

      <button onClick={() => {setShowRegisterModal(true)}}>Register</button>

      {showRegisterModal ? <RegisterModal>
        <h3>Register User</h3>

        <RegisterForm>
          <label for='email'>Email</label>
          <input type='text'  name='email' onChange={(e) => {setRegisterEmail(e.target.value)}} />
          <label for='password'>Password</label>
          <input type='password'  name='password' onChange={(e) => {setRegisterPassword(e.target.value)}}/>
          <button onClick={handleRegister}>Register</button>
        </RegisterForm>
        <button onClick={() => {setShowRegisterModal(false)}}>Close</button>

      </RegisterModal> : null}


      
      <button onClick={() => {setShowLoginModal(true)}}>Log In</button>

      {showLoginModal ? <LoginModal>
        <h3>Login</h3>
        <LoginForm>
          <label for='email'>Email</label>
          <input type='text' placeholder='email' name='email' onChange={(e) => {setLoginEmail(e.target.value)}} />
          <label for='password'>Password</label>
          <input type='password' placeholder='password' name='password' onChange={(e) => {setLoginPassword(e.target.value)}} />
          <button onClick={handleLogin}>Log In</button>
        </LoginForm>
        <button onClick={() => {setShowLoginModal(false)}}>Close</button>
      </LoginModal> : null} 
      
      <button onClick={handleLogout}>Sign out</button>


    </Fragment>
  )
}
