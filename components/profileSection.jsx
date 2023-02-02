import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  background-color: yellow;
  height: 100%;
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`

/**
 * Profile section that allows for updates of profile information as well as regular viewing
 * @param {boolean} show - boolean that determines if the modal is visible
 * @param {funtion} onClose - callback function that will handle closing the modal
 * @param {component} children - content we wish to display inside the modal
 * @param {string} title - title of the modal 
 * @returns 
 */
const ProfileSection = ({ user }) => {

	const [editMode, setEditMode] = useState(false)
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')

	const userObj = {
		...user,
		name: name,
		address: address
	}

	return (
		<Container>
			<button onClick={(e) => {setEditMode(!editMode)}}>Edit</button>
			{editMode ? 
				<RegisterForm onSubmit={() => {
					axios.put(`/api/user/${user.uid}`, {
						...userObj
					})
				}} >
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' onChange={(e) => {setName(e.target.value)}} />
					<label htmlFor='addy'>Address</label>
					<input type='text' name='addy' onChange={(e) => {setAddress(e.target.value)}} />
					<button type='submit'>Confirm Edits</button>

				</RegisterForm> :
				<>
					
					<div>
						{user.name ? <div>Display Name: {user.name}</div> : 'N/A'}
					</div>
					<div>
						{user.email ? <div>Email: {user.email}</div> : null}
					</div>
				</> 
			}
		</Container>
	)
}

export default ProfileSection