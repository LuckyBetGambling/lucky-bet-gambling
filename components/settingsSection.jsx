import React, { useState } from 'react'
import styled from 'styled-components'
import { logoutUser, deleteUser, updateUserPassword } from '../services/auth-manager'

const Container = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 750px;
	min-height: 60vh;
`

const OptionsWrapper = styled.div`
	display: flex;
	margin-top: 1rem;
	min-height: 600px;
	width: 100%;
`


const OptionsCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	flex: 2;
	border-radius: 8px;
	margin: 10px;
	padding: 15px;
	background-color: ${ ({theme}) => theme.secondary};	
	max-width: 50%;
	width: 150px;
	max-height: 100%;

	& > *:not(:first-child) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

`

const FormCard = styled.div`
	display: ${({ display }) => display ? 'flex' : 'none'};
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	flex: 2;
	border-radius: 8px;
	margin: 10px;
	padding: 15px;
	background-color: ${({ theme }) => theme.secondary};
	max-width: 50%;
	max-height: 100%;
`

const Option = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px;
	
`

const Button = styled.button`
	background-color:  ${({theme}) => theme.accent};
	color: ${({theme}) => theme.primary};
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	border-radius: 8px;
	padding: 14px 20px;
	margin-top: 1.2rem;
	border: none;
	cursor: pointer;
	width: 250px;

	&:hover {
        outline: 0;
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.primary};
        box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    }
`

const Label = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 10px;
`

const Title = styled.h1`
	padding-top: 15px;
	text-align: center;
`

const UpdatePasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 100%;

  label {
	font-size: 1.2rem;
    margin-bottom: 5px;
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

const VerifyEmailForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 3rem;

	label {
		font-size: 1.2rem;
		margin-bottom: 5px;
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
	margin-top: 3rem;
	align-items: center;
	width: 100%;

	h4{
		color: #FFF;
		font-size: 1.2rem;
		margin-bottom: 5px;
		text-align: center;
	}
`

const DeleteForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	align-items: center;
	width: 100%;

	h4{
		color: #FFF;
		font-size: 1.2rem;
		margin-bottom: 5px;
		text-align: center;
	}
`

const SettingsSection = ({auth, user, themeCallback}) => {
	const [activeOption, setActiveOption] = useState(null)
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
			
			<OptionsWrapper>
				<OptionsCard>
					<Title>User Settings</Title>
					<Option>
						<Button onClick={() => setActiveOption(activeOption === 0 ? null : 0)}>
							{activeOption === 0 ? 'Cancel' : 'Edit Password'} </Button>
          			</Option>

					  <Option>
						<Button onClick={() => setActiveOption(activeOption === 1 ? null : 1)}>
							{activeOption === 1 ? 'Cancel' : 'Verify Email'} </Button>
          			</Option>

					  <Option>
						<Button onClick={() => setActiveOption(activeOption === 2 ? null : 2)}>
							{activeOption === 2 ? 'Cancel' : 'Sign Out'} </Button>
          			</Option>

					  <Option>
						<Button onClick={() => setActiveOption(activeOption === 3 ? null : 3)}>
							{activeOption === 3 ? 'Cancel' : 'Delete User'} </Button>
          			</Option>

					<Option>
						<Button onClick={() => themeCallback()}>Change Theme</Button>
					</Option>					
				</OptionsCard>

				
				<FormCard display={'flex'}>
					<Title>Edit Settings</Title>
					{activeOption === 0 && (
						<UpdatePasswordForm onSubmit={handlePasswordChange}>
							<label htmlFor='currentPassword' >Enter Current Password</label>
							<input type='password' placeholder='Password' name='currentPassword' onChange={(e) => {setCurrentPassword(e.target.value)}} />
							<label htmlFor='newPassword' placeholder='Password'>Enter New Password</label>
							<input type='password' placeholder='Password' name='newPassword' onChange={(e) => {setNewPassword(e.target.value)}} />
							<Button type='submit'>Update Password</Button>
						</UpdatePasswordForm> 
					)}

					{activeOption === 1 && (
						<VerifyEmailForm>
							<label htmlFor='verifyEmail'>Enter Current Email</label>
							<input type='email' placeholder='someone@gmail.com' name='verifyEmail'/>
							<Button>Verify Email</Button>
						</VerifyEmailForm> 
					)}

					{activeOption === 2 && (
						<LogoutForm onSubmit={() => {
							logoutUser(auth)
						}}>
							<h4>Current User: {auth.currentUser ? auth.currentUser.email : 'Not Logged in'}</h4>
							<Button>Sign Out</Button>
						</LogoutForm> 
					)}

					{activeOption === 3 && (
						<DeleteForm onSubmit={() => {
							deleteUser(userObj, auth)
						}}> 
							<h4>Current User: {auth.currentUser ? auth.currentUser.email : 'Not Logged in'}</h4>
							<Button>Delete User</Button>
						</DeleteForm> 
					)}
				</FormCard>
				
			</OptionsWrapper>
		</Container>
	)
} 

export default SettingsSection

