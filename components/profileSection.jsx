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
	padding: 15px;
	background-color: ${ ({theme}) => theme.secondary};
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
  background-color: #f8f8f8;
  text-transform: uppercase;
`

const RaceBoardHeadCell = styled.th`
  padding: 12px;
  text-align: center;
  font-weight: bold;
`

const RaceBoardBody = styled.tbody``

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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
	padding-top: 15px;
	text-align: center;
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
					{editMode ? 
						<RegisterForm onSubmit={() => {
							updateUser(userObj, auth)
						}} >
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' onChange={(e) => {setName(e.target.value)}} />
							<label htmlFor='addy'>Address</label>
							<input type='text' name='addy' onChange={(e) => {setAddress(e.target.value)}} />
							<label htmlFor='photo'>Profile Photo</label>
							<input type='file' accept="image/*" name='photo' onChange={(e) => {console.log(e)}}/>
							<button type='submit'>Confirm Edits</button>

						</RegisterForm> :
						<>
							<div>
								{user.name ? <h1>{user.name}</h1> : 'N/A'}
							</div>
							<div>
								{user.email ? <h4>email: {user.email}</h4> : null}
							</div>
							<div>
								{user.email ? <div>Address: {user.address}</div> : null}
							</div>
						</>
					}
					<button onClick={(e) => {setEditMode(!editMode)}}>Edit</button>
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