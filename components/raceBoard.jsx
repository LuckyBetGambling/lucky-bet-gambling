import styled from 'styled-components'

const RaceBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 2rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 800px;
  overflow: hidden;
`

const RaceBoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

export default function RaceBoard(){
	return (
		<RaceBoardWrapper>
			<h2>Race Board</h2>
			<RaceBoardTable>

				<RaceBoardHead>
					<RaceBoardHeadCell>Rank</RaceBoardHeadCell>
					<RaceBoardHeadCell>User</RaceBoardHeadCell>
					<RaceBoardHeadCell>Wagered</RaceBoardHeadCell>
					<RaceBoardHeadCell>Prize</RaceBoardHeadCell>
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
		</RaceBoardWrapper>
	)
};
