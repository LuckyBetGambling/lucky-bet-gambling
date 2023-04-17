import React, { useState } from 'react'
import styled from 'styled-components'
import { updateUser, logoutUser, deleteUser } from '../services/auth-manager'

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

const SettingsSection = ({auth, user, themeCallback}) => {

	const [editPassword, setEditPassword] = useState(false)
	const [editSignOut, setEditSignOut] = useState(false)
	// not sure if I should be creating useState variable to store password or get it somewhere else
	const [password, SetPassword] = useState('')

	const userObj = {
		...user,
		password: password
	}

	return(
		<Container>
			<h2>User Settings</h2>
			<Container1>
				<UserCard>
					{editPassword ? 
						<RegisterForm onSubmit={() => {
							updateUser(userObj, auth)
						}} >
							<label htmlFor='password' placeholder='Password'>Password</label>
							<input type='password' name='password' onChange={(e) => {SetPassword(e.target.value)}} />
                            
							<button type='submit'>Confirm Edits</button>

						</RegisterForm> :
						<>
							<div>
                                
							</div>
						</>
					}
					<button onClick={(e) => {setEditPassword(!editPassword)}}>Go edit Password</button>

					{editSignOut ? 
						<LogoutForm onSubmit={() => {
							logoutUser(auth)
						}}>
							<h4>User Logged in: {user.name ? user.name : 'Not Logged in'}</h4>
							<button>Sign Out</button>
						</LogoutForm> : 
						<>
							<div>
                            
							</div>
						</>
					}

					<button onClick={(e) => {setEditSignOut(!editSignOut)}}>Go to Sign Out</button>
                    

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