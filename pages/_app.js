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
import RouteGuard from '../components/routeGuard'
import FacebookIcon from '@mui/icons-material/Facebook'

const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	  	font-weight: bold;
	}
	  
	input {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	}
  
`

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		font-weight: bold;
	}
	
	input {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	}
`

const LogoutForm = styled.form`
	display: flex;
	flex-direction: column;

	h4{
		color: #FFF;
		font-size: 1.2rem;
		margin-bottom: 10px;
	}
`

const Button = styled.button`
	background-color:  ${({theme}) => theme.accent};
	color: ${({theme}) => theme.primary};
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	border-radius: 8px;
	padding: 10px 20px;
	margin-bottom: 5px;
	border: none;
	cursor: pointer;

	&:hover {
        outline: 0;
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.primary};
        box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    }
`

const SocialMediaButtons = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  color: #535353;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
  max-width: 220px;
  white-space: nowrap;
  line-height: 1;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    vertical-align: middle;
  }

  &:hover {
    background-color: #EAEAEA;
  }
`

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
`

const FacebookButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: #3b5998;
	color: #FFF;
	font-size: 15px;
	font-weight: 500;
	text-align: center;
	padding: 12px 24px;
	border-radius: 6px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	width: 100%;
	max-width: 220px;
	white-space: nowrap;
	line-height: 1.2;
	height: 48px;

	svg {
		margin-right: 8px;
		vertical-align: middle;
	}

	&:hover {
		background-color: #2d4373;
	}
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
		currentUser: auth.currentUser,
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
		await logoutUser(auth)
		setIsAdmin(false)
		setShowLogoutModal(false)
		// Send user back to home page
		window.location.pathname = '/'
	}

	// function for toggling sidebar
	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	console.log('Auth: ',auth)
	console.log('Current User: ', user)

	return (
		<RouteGuard auth={auth} isAdmin={isAdmin}>
			<ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Header 
					title='LUCKY BET' userData={user} 
					signUpCallback={() => setShowSignUpModal(true)} 
					loginCallback={() => setShowLoginModal(true)}
					logoutCallback={() => setShowLogoutModal(true)}
					themeCallback={() => toggleTheme()}
					showSidebar={showSidebar}
					toggleSidebar={toggleSidebar}
				/>
				{showSidebar && <Sidebar showSidebar={showSidebar}/>}
				<Component
					themeCallback={() => toggleTheme()}
					auth={auth} 
					{...pageProps} 
				/>
				<Footer>GamblingCompanyLLC - est. 2023</Footer>

				<Modal show={showSignUpModal} onClose={() => { setShowSignUpModal(false) }} title='Sign Up'>
					<RegisterForm onSubmit={handleRegister} >
						<label htmlFor='email'>Enter your Email</label>  
						<input type='email' placeholder='someone@gmail.com' name='email' onChange={(e) => {setRegisterEmail(e.target.value)}} />
						<label htmlFor='password'>Enter your Password</label>
						<input type='password' placeholder='password' name='password' onChange={(e) => {setRegisterPassword(e.target.value)}} />
						<Button type='submit'>Sign Up</Button>
					</RegisterForm>
				</Modal>      

				<Modal show={showLoginModal} onClose={() => { setShowLoginModal(false) }} title='Log In'>
					<LoginForm onSubmit={handleLogin}>
						<label htmlFor='email'>Enter your Email</label>
						<input type='email' name='email' placeholder='someone@gmail.com' onChange={(e) => {setLoginEmail(e.target.value)}} />
						<label htmlFor='password'>Enter your Password</label>
						<input type='password' name='password' placeholder='password' onChange={(e) => {setLoginPassword(e.target.value)}} />
						<Button type='submit'>Log In</Button>
					</LoginForm>

					<SocialMediaButtons>
						<GoogleButton onClick={signInWithGoogle}>
							<span>
								<GoogleIcon src="/images/googleIcon.svg" alt="Google Icon" style={{marginRight: '8px'}} />
								Sign in with Google
							</span>
						</GoogleButton>
						<FacebookButton onClick={signInWithFacebook}>
							<FacebookIcon/>
							Continue with Facebook
						</FacebookButton>
					</SocialMediaButtons>
				</Modal>

				<Modal show={showLogoutModal} onClose={() => { setShowLogoutModal(false) }} title='Sign Out'>
					<LogoutForm onSubmit={handleLogout}>
						<h4>User Logged in: {user.currentUser ? user.currentUser.email : 'Not Logged in'}</h4>
						<Button>Sign Out</Button>
					</LogoutForm>
				</Modal>
			</ThemeProvider>
		</RouteGuard>
	)
}
