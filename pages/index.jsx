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



  return (
    <Fragment>
    


    </Fragment>
  )
}
