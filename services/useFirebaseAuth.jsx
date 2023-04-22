import { useState, useEffect } from 'react'
import {auth} from '../config/firebase'


const formatAuthUser = (user) => ({
	uid: user.uid,
	email: user.email,
	user: user
})

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const authStateChanged = async (user) => {
		console.log('This ran', user)
		if (!user) {
			setAuthUser(null)
			setLoading(false)
			return
		}

		setLoading(true)
		var formattedUser = formatAuthUser(user)
		setAuthUser(formattedUser)    
		setLoading(false)
	}

	// listen for Firebase state change
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authStateChanged)
		return () => unsubscribe()
	}, [])

	return {
		authUser,
		loading
	}
}