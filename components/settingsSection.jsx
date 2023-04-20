import React, { useState } from 'react'
import styled from 'styled-components'
import { logoutUser, deleteUser, updateUserPassword } from '../services/auth-manager'

const Container = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	width: 750px;
`

const Container1 = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const UserCard = styled.div`
	flex: 1;
	border-radius: 8px;
	margin: 10px;
	padding: 15px;
	background-color: ${ ({theme}) => theme.secondary};
`

const ThemeCard = styled.div`
    flex: 2;
    border-radius: 8px;
    margin: 10px;
    padding: 15px;
    background-color: ${ ({theme}) => theme.secondary};
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`
const LogoutForm = styled.form`
  display: flex;
  flex-direction: column;
`

const DeleteForm = styled.form`
  display: flex;
  flex-direction: column;
`

const SettingsSection = ({auth, user, themeCallback}) => {
	const [editPassword, setEditPassword] = useState(false)
	const [editSignOut, setEditSignOut] = useState(false)
	const [deleteMode, setDeleteMode] = useState(false)
	// not sure if I should be creating useState variable to store password or get it somewhere else
	const [newPassword, setNewPassword] = useState('')
	const [currentPassword, setCurrentPassword] = useState('')

	const userObj = {
		...user
	}

	// apparently I need to find some way to pass in tenantId into here to update my password
	const handlePasswordChange = async (e) => {
		e.preventDefault()
		const success = await updateUserPassword(auth, newPassword, currentPassword)
		if (success) {
		  console.log('password successfully updated')
		} else {
		  console.log('error')
		}
	  }
	  

	return(
		<Container>
			<h2>User Settings</h2>
			<Container1>
				<UserCard>
					{editPassword &&
						<RegisterForm onSubmit={handlePasswordChange}>

							<label htmlFor='currentPassword' placeholder='Password'>Current Password</label>
							<input type='password' name='currentPassword' onChange={(e) => {setCurrentPassword(e.target.value)}} />

							<label htmlFor='newPassword' placeholder='Password'>Password</label>
							<input type='password' name='newPassword' onChange={(e) => {setNewPassword(e.target.value)}} />
                            
							<button type='submit'>Update Password</button>

						</RegisterForm> 
					}
					<button onClick={(e) => {setEditPassword(!editPassword)}}>{editPassword ? 'Back' : 'Go edit Password'}</button>

					{editSignOut && 
						<LogoutForm onSubmit={() => {
							logoutUser(auth)
						}}>
							<h4>User Logged in: {user.name ? user.name : 'Not Logged in'}</h4>
							<button>Sign Out</button>
						</LogoutForm> 
					}

					<button onClick={(e) => {setEditSignOut(!editSignOut)}}>{editSignOut ? 'Back' : 'Go to Sign Out'}</button>

					{deleteMode &&
						<DeleteForm onSubmit={() => {
							deleteUser(userObj, auth)
						}}> 
							<h4>User Logged in: {user.name ? user.name : 'Not Logged in'}</h4>
							<button>Delete User</button>
						</DeleteForm> 
					}

					<button onClick={(e) => {setDeleteMode(!deleteMode)}}>{deleteMode ? 'Back' : 'Go delete User'}</button>
                    

				</UserCard>

				<ThemeCard>
					<p>Want to change change theme?</p>
					<button onClick={() => themeCallback()}>Change Theme</button>
				</ThemeCard>

                
			</Container1>
		</Container>
	)

} 

export default SettingsSection