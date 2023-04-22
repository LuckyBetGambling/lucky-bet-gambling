import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	padding: 20px 30px;
	width: 750px;
	background-color: white;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
	align-items: center;	
	min-height: 60vh;
`


const Balance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`
// 
const BalanceContainer = styled.div`
  background-color:#E6E6E6;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`


const Money = styled.div`
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const BalanceText = styled.div`
    font-size: 2.5rem;
	font-weight: bold;
	margin: 1rem 0;
`


const Button = styled.button`
    flex: 1;
    margin: 1rem 0;
    width: 100%;
    border-radius: 4px;
    padding: 15px;
    border: none;
    background-color: ${ ({theme}) => theme.secondary};
    color: ${ ({theme}) => theme.accent};
	font-weight: 900;

    &:hover {
        background-color: ${ ({theme}) => theme.accent};
        color: ${ ({theme}) => theme.secondary};
		cursor: pointer;
    }
`


const RecentTransactions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

const Title = styled.div`
	font-size: 2.5rem;
	font-weight: bold;
	margin: 1rem 0;
	text-align: center;
`


const StatsTables = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    background-color: white;
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

/**
 * Wallet section shows 
 * @param {boolean} show - boolean that determines if the modal is visible
 * @param {funtion} onClose - callback function that will handle closing the modal
 * @param {component} children - content we wish to display inside the modal
 * @param {string} title - title of the modal 
 * @returns 
 */
const WalletSection = () => {

	return (
		
		<Container>
			<Balance>
				<BalanceText>Balance </BalanceText>
				<BalanceContainer>
					<Money>$30.00</Money>
					<Button>Add Funds</Button>
					<Button>Withdraw Funds</Button>
				</BalanceContainer>
			</Balance>
						
			<RecentTransactions>
				<Title>Transactions</Title>
				<StatsTables>
					<RaceBoardTable>
						<RaceBoardHead>
							<RaceBoardBodyRow>
								<RaceBoardHeadCell>Date</RaceBoardHeadCell>
								<RaceBoardHeadCell>Type</RaceBoardHeadCell>
								<RaceBoardHeadCell>Amount</RaceBoardHeadCell>
							</RaceBoardBodyRow>
						</RaceBoardHead>

						<RaceBoardBody>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
							<RaceBoardBodyRow>
								<RaceBoardBodyCell>4/19/2023</RaceBoardBodyCell>
								<RaceBoardBodyCell>Deposit</RaceBoardBodyCell>
								<RaceBoardBodyCell>$500</RaceBoardBodyCell>
							</RaceBoardBodyRow>
						</RaceBoardBody>
					</RaceBoardTable>
				</StatsTables> 
			</RecentTransactions>

		</Container>
	)
}

export default WalletSection