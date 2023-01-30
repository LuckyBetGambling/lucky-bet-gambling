import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth, signInWithGoogle, signInWithFacebook} from '../config/firebase';


  // function for handling register
  export const registerUser = async (auth, registerEmail, registerPassword ) => {
    try{
      
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      
    }
    catch(err){
      console.log(err.message);
    }
  }

  // function for handling login
  export const loginUser = async (auth, loginEmail, loginPassword) => {

    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    }
    catch(err){
      console.log(err.message);
    }
    
  }

  // function for handling log out
  export const logoutUser = async (auth) => {
    await signOut(auth);
  }