import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../services/useFirebaseAuth'

const authUserContext = createContext({
	authUser: null,
	loading: true
})

export default function UserContext({ children }) {
	const auth = useFirebaseAuth()
	return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext)