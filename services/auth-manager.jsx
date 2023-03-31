import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import {auth, signInWithGoogle, signInWithFacebook} from '../config/firebase'
import axios from 'axios'

// function for handling register
export const registerUser = async (auth, registerEmail, registerPassword ) => {
	try{
		// Attempt sign up  
		await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(
			async (user) => {
				// Attempt to add user to db
				await axios.post('/api/user', {
					uid: user.user.uid,
					user: JSON.stringify(user),
					metadata: user.user.metadata,
					email: user.user.email
				}).catch(
					// Sign up was successful but we were unable to add the user data to the db
					(e) => console.log(e.message)
				)
				return user
		  }
		)
	}
	catch(err){
		// Sign up was unsuccesful
		console.log(err.message)
		return null
	}
}

// function for handling login
export const loginUser = async (auth, loginEmail, loginPassword) => {

	try{
		const userCred = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
		
		const { data } = await axios.get(`api/user/${userCred.user.uid}`)
		return data.isAdmin
	}
	catch(err){
		console.log(err.message)
		return false
	}
    
}

// function for handling log out
export const logoutUser = async (auth) => {
	await signOut(auth)
}