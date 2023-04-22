import React, { useState } from 'react'
import styled from 'styled-components'
import { updateUser } from '../services/auth-manager'
import GameCard from './gameCard'
import { sampleGames } from '../utils/sampleData'

const Container = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	width: 750px;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
`

const Container1 = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const UserCard = styled.div`
	flex: 1;
	border-radius: 8px;
	margin: 10px;
	padding: 0 15px 15px 15px;
	background-color: ${ ({theme}) => theme.secondary};
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    display: inline;
	margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
	display: inline;

  }
`


const UpdateUserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  label {
	font-size: 1.2rem;
    margin-bottom: 5px;
  }

  input:not([type="file"]) {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  input[type="file"] {
    box-shadow: none;
	margin-bottom: 1rem;
	
  }

`

const FavoritesCard = styled.div`
	flex: 2;
	border-radius: 8px;
	margin: 10px;
	background-color: ${ ({theme}) => theme.secondary};
`

const FavoritesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Stats = styled.div`
	width: 730px;
	background-color: ${ ({theme}) => theme.secondary};
	border-radius: 8px;
	margin: 10px;
`

const StatsTables = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 2rem;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	overflow: hidden;
`


const RaceBoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const RaceBoardHead = styled.thead`
  background-color: #ddd;
  text-transform: uppercase;
`

const RaceBoardHeadCell = styled.th`
  padding: 12px;
  text-align: center;
  font-weight: bold;
`

const RaceBoardBody = styled.tbody`
	tr:nth-child(odd) {
		background-color: #f8f8f8;
	}
`

const RaceBoardBodyRow = styled.tr``

const RaceBoardBodyCell = styled.td`
  padding: 12px;
  text-align: center;
`

const Square = styled.div`
  width: calc(50% - 10px);
  height: 200px;
  display: flex;
`

const Title = styled.h1`
	padding-top: 15px;
	text-align: center;
`

const Button = styled.button`
	background-color:  ${({theme}) => theme.accent};
	color: ${({theme}) => theme.primary};
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	border-radius: 8px;
	padding: 10px 20px;
	margin-top: 10px;
	border: none;
	cursor: pointer;

	&:hover {
        outline: 0;
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.primary};
        box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    }
`

/**
 * Profile section that allows for updates of profile information as well as regular viewing
 * @param {boolean} show - boolean that determines if the modal is visible
 * @param {funtion} onClose - callback function that will handle closing the modal
 * @param {component} children - content we wish to display inside the modal
 * @param {string} title - title of the modal 
 * @returns 
 */
const ProfileSection = ({ user, auth }) => {

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
			<Container1>
				<UserCard>
					<Title>User Details</Title>
					{editMode ? 
						<UpdateUserForm onSubmit={() => {
							updateUser(userObj, auth)
						}} >
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' onChange={(e) => {setName(e.target.value)}} />
							<label htmlFor='addy'>Address</label>
							<input type='text' name='addy' onChange={(e) => {setAddress(e.target.value)}} />
							<label htmlFor='photo'>Profile Photo</label>
							<input type='file' accept="image/*" name='photo' onChange={(e) => {console.log(e)}}/>
							<Button type='submit'>Confirm Edits</Button>

						</UpdateUserForm> :
						<UserInfoContainer>
							<span>Username: {user.name ? <p>{user.name}</p> : null}</span>
							<span>Email: {user.email ? <p>{user.email}</p> : null}</span>
							<span>Address: {user.address ? <p>{user.address}</p> : null}</span>
						</UserInfoContainer>
					}
					<Button onClick={(e) => {setEditMode(!editMode)}}>{editMode ? 'Cancel' : 'Update User'}</Button>

					
				</UserCard>
				<FavoritesCard>
					<Title>Favorite Games</Title>
					<FavoritesContainer>
						<Square>
							<GameCard item={sampleGames[0]} shape='wide'/>
						</Square>
						<Square>
							<GameCard item={sampleGames[1]} shape='wide'/>
						</Square>
						<Square>
							<GameCard item={sampleGames[2]} shape='wide'/>
						</Square>
						<Square>
							<GameCard item={sampleGames[3]} shape='wide'/>
						</Square>
					</FavoritesContainer>
				</FavoritesCard>
				<Stats>
					<Title>Recent Games</Title>
					<StatsTables>
						<RaceBoardTable>

							<RaceBoardHead>
								<RaceBoardBodyRow>
									<RaceBoardHeadCell>Game</RaceBoardHeadCell>
									<RaceBoardHeadCell>Win/Loss</RaceBoardHeadCell>
									<RaceBoardHeadCell>Wagered</RaceBoardHeadCell>
									<RaceBoardHeadCell>Prize</RaceBoardHeadCell>
								</RaceBoardBodyRow>
							</RaceBoardHead>

							<RaceBoardBody>

								<RaceBoardBodyRow>
									<RaceBoardBodyCell>Another Game</RaceBoardBodyCell>
									<RaceBoardBodyCell>WIN</RaceBoardBodyCell>
									<RaceBoardBodyCell>$500</RaceBoardBodyCell>
									<RaceBoardBodyCell>$10,000</RaceBoardBodyCell>
								</RaceBoardBodyRow>

								<RaceBoardBodyRow>
									<RaceBoardBodyCell>Another Game</RaceBoardBodyCell>
									<RaceBoardBodyCell>WIN</RaceBoardBodyCell>
									<RaceBoardBodyCell>$350</RaceBoardBodyCell>
									<RaceBoardBodyCell>$8,000</RaceBoardBodyCell>
								</RaceBoardBodyRow>

								<RaceBoardBodyRow>
									<RaceBoardBodyCell>Another Game 2</RaceBoardBodyCell>
									<RaceBoardBodyCell>WIN</RaceBoardBodyCell>
									<RaceBoardBodyCell>$295</RaceBoardBodyCell>
									<RaceBoardBodyCell>$6,000</RaceBoardBodyCell>
								</RaceBoardBodyRow>

								<RaceBoardBodyRow>
									<RaceBoardBodyCell>Dick Blasters</RaceBoardBodyCell>
									<RaceBoardBodyCell>LOSS</RaceBoardBodyCell>
									<RaceBoardBodyCell>$250</RaceBoardBodyCell>
									<RaceBoardBodyCell>-$250</RaceBoardBodyCell>
								</RaceBoardBodyRow>

								<RaceBoardBodyRow>
									<RaceBoardBodyCell>Another Game</RaceBoardBodyCell>
									<RaceBoardBodyCell>LOSS</RaceBoardBodyCell>
									<RaceBoardBodyCell>$150</RaceBoardBodyCell>
									<RaceBoardBodyCell>-$150</RaceBoardBodyCell>
								</RaceBoardBodyRow>

							</RaceBoardBody>
						</RaceBoardTable>
					</StatsTables> 
				</Stats>
			</Container1> 
			
		</Container>
	)
}

export default ProfileSection