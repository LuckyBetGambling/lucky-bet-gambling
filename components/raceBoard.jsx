import styled from 'styled-components'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
    padding: 20px;
    background-color: ${({theme}) => theme.secondary};
	border-radius: 15px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
`
const Title = styled.h3`
    font-weight: 900;
	text-align: center;
    font-size: 30px;
    text-transform: uppercase;
	text-shadow: -1px 1px 0 #FFBF00, 1px 1px 0 #FFBF00, 1px -1px 0 #FFBF00, -1px -1px 0 #FFBF00;
	letter-spacing: 5px;
`


const RaceBoardTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  width: 800px;
`

const RaceBoardHead = styled.thead`
	background-color: ${({theme}) => theme.secondary};
  	text-transform: uppercase;
`

const RaceBoardHeadCell = styled.th`
  padding: 12px;
  text-align: center;
  font-weight: bold;
`

const RaceBoardBody = styled.tbody`
	tr:nth-child(odd) {
		background-color: rgba(0,0,0,0.5);
	}
`

const RaceBoardBodyRow = styled.tr``

const RaceBoardBodyCell = styled.td`
  padding: 12px;
  text-align: center;
  color: #FFF;
`

export default function RaceBoard() {
	return (
		<Wrapper>
			<Title>Race Leaderboard</Title>
			<RaceBoardTable>
				<RaceBoardHead>
					<RaceBoardBodyRow>
						<RaceBoardHeadCell>Rank</RaceBoardHeadCell>
						<RaceBoardHeadCell>User</RaceBoardHeadCell>
						<RaceBoardHeadCell>Wagered</RaceBoardHeadCell>
						<RaceBoardHeadCell>Prize</RaceBoardHeadCell>
					</RaceBoardBodyRow>
				</RaceBoardHead>

				<RaceBoardBody>

					<RaceBoardBodyRow>
						<RaceBoardBodyCell>1</RaceBoardBodyCell>
						<RaceBoardBodyCell>Participant A</RaceBoardBodyCell>
						<RaceBoardBodyCell>$500</RaceBoardBodyCell>
						<RaceBoardBodyCell>$10,000</RaceBoardBodyCell>
					</RaceBoardBodyRow>

					<RaceBoardBodyRow>
						<RaceBoardBodyCell>2</RaceBoardBodyCell>
						<RaceBoardBodyCell>Participant B</RaceBoardBodyCell>
						<RaceBoardBodyCell>$350</RaceBoardBodyCell>
						<RaceBoardBodyCell>$8,000</RaceBoardBodyCell>
					</RaceBoardBodyRow>

					<RaceBoardBodyRow>
						<RaceBoardBodyCell>3</RaceBoardBodyCell>
						<RaceBoardBodyCell>Participant C</RaceBoardBodyCell>
						<RaceBoardBodyCell>$295</RaceBoardBodyCell>
						<RaceBoardBodyCell>$6,000</RaceBoardBodyCell>
					</RaceBoardBodyRow>

					<RaceBoardBodyRow>
						<RaceBoardBodyCell>4</RaceBoardBodyCell>
						<RaceBoardBodyCell>Participant D</RaceBoardBodyCell>
						<RaceBoardBodyCell>$250</RaceBoardBodyCell>
						<RaceBoardBodyCell>$4,000</RaceBoardBodyCell>
					</RaceBoardBodyRow>

					<RaceBoardBodyRow>
						<RaceBoardBodyCell>5</RaceBoardBodyCell>
						<RaceBoardBodyCell>Participant E</RaceBoardBodyCell>
						<RaceBoardBodyCell>$150</RaceBoardBodyCell>
						<RaceBoardBodyCell>$3,000</RaceBoardBodyCell>
					</RaceBoardBodyRow>
          
				</RaceBoardBody>
			</RaceBoardTable>
		</Wrapper>
	)
};
