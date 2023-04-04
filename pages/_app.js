import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth, signInWithGoogle, signInWithFacebook} from '../config/firebase'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig'
import Modal from '../components/modal'
import { loginUser, logoutUser, registerUser } from '../services/auth-manager'
import Sidebar from '../components/sidebar'


const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`

const LogoutForm = styled.form`
  display: flex;
  flex-direction: column;
`


export default function App({ Component, pageProps }) {

	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showSignUpModal, setShowSignUpModal] = useState(false)
	const [showLogoutModal, setShowLogoutModal] = useState(false)
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [isAdmin, setIsAdmin] = useState(false)
	const [user, setUser] = useState({
		currentUser: null,
		isAdmin: isAdmin
	})
	const [theme, setTheme] = useState('light') 
	const [showSidebar, setShowSidebar] = useState(true)

	const toggleTheme = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light')
	}

	useEffect(() => {
		onAuthStateChanged(auth, () => {
			setUser({
				currentUser: auth.currentUser,
				isAdmin: isAdmin
			})
		})}, [isAdmin])

	// function for handling register
	const handleRegister = async (e) => {
		e.preventDefault()
		registerUser(auth, registerEmail, registerPassword)
		setShowSignUpModal(false)
	}

	// function for handling login
	const handleLogin = async (e) => {
		e.preventDefault()
		setIsAdmin(await loginUser(auth, loginEmail, loginPassword))
		setShowLoginModal(false)
	}

	// function for handling log out
	const handleLogout = async (e) => {
		e.preventDefault()
		logoutUser(auth)
		setIsAdmin(false)
		setShowLogoutModal(false)
	}

	// function for toggling sidebar
	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}
	
	return (
		<ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Header 
				title='Lucky Bet' userData={user} 
				signUpCallback={() => setShowSignUpModal(true)} 
				loginCallback={() => setShowLoginModal(true)}
				logoutCallback={() => setShowLogoutModal(true)}
				themeCallback={() => toggleTheme()}
				showSidebar={showSidebar}
				toggleSidebar={toggleSidebar}
			/>
			{showSidebar && <Sidebar showSidebar={showSidebar}/>}
			<Component {...pageProps} />
			<Footer>GamblingCompanyLLC - est. 2023</Footer>

			<Modal show={showSignUpModal} onClose={() => { setShowSignUpModal(false) }} title='Sign Up'>
				<RegisterForm onSubmit={handleRegister} >
					<label htmlFor='email'>Email</label>  
					<input type='email' name='email' onChange={(e) => {setRegisterEmail(e.target.value)}} />
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' onChange={(e) => {setRegisterPassword(e.target.value)}} />
					<button type='submit'>Sign Up</button>
				</RegisterForm>
			</Modal>      

			<Modal show={showLoginModal} onClose={() => { setShowLoginModal(false) }} title='Log In'>
				<LoginForm onSubmit={handleLogin}>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' onChange={(e) => {setLoginEmail(e.target.value)}} />
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' onChange={(e) => {setLoginPassword(e.target.value)}} />
					<button type='submit'>Log In</button>
				</LoginForm>
				<button onClick={signInWithGoogle}>Sign In With Google</button>
				<button onClick={signInWithFacebook}>Sign In With Facebook</button>
			</Modal>

			<Modal show={showLogoutModal} onClose={() => { setShowLogoutModal(false) }} title='Sign Out'>
				<LogoutForm onSubmit={handleLogout}>
					<h4>User Logged in: {user.currentUser ? user.currentUser.email : 'Not Logged in'}</h4>
					<button>Sign Out</button>
				</LogoutForm>
			</Modal>
		</ThemeProvider>
	)
}
