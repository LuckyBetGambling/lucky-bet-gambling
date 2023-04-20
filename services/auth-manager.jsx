import { getAuth, createUserWithEmailAndPassword, reauthenticateWithCredential, EmailAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updatePassword  } from 'firebase/auth'
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
					email: user.user.email,
					profilePhoto: user.user.photoURL,
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
		
		if (!data.admin) {
			return false
		}
		
		return data.admin
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

// Function to check if the provided email and password match the ones stored in Firebase Authentication
const checkPassword = async (auth, loginEmail, currentPassword) => {
	try {
	  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, currentPassword)
	  // If sign-in is successful, return true
	  return true
	} catch (error) {
	  // If there's an error, return false
	  return false
	}
}
  

// function for handling password change
export const updateUserPassword = async (auth, currentPassword, newPassword) => {
	
	const user = auth.currentUser

	// Check if the user entered the correct current password
	const passwordIsCorrect = await checkPassword(auth, user.email, currentPassword)

	if (!passwordIsCorrect) {
		console.log('The current password entered is incorrect.')
		return
	}


	const credential = EmailAuthProvider.credential(
		user.email,
		currentPassword
	  )

	try {
		
		await user.reauthenticateWithCredential(credential)
    	await updatePassword(user, newPassword)
		console.log('Password updated successfully.')
	} 
	catch (error) {
		console.log(error)
	}} 


// TODO: handle authentiaction ofthese requests
export const updateUser = async (user, auth) => {
	await axios.put(`/api/user/${user.uid}`, {
		...user
	})
}

export const deleteUser = async (user, auth) => {
	await axios.delete(`/api/user/${user.uid}`, {
		...user
	})
	console.log(user)
}