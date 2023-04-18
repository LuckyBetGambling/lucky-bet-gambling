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

// function for handling password change
export const updateUserPassword = async (user, loginPassword, newPassword) => {
	const credential = EmailAuthProvider.credential(
		user.email,
		loginPassword,
		user.tenantId
	  )

	try {
		await reauthenticateWithCredential(user, credential, { tenantId: user.tenantId })
		await updatePassword(user, newPassword, user.tenantId)
		console.log('Password updated successfully.')
	} 
	catch (error) {
		console.log(error)
	}
}
  


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