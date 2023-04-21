import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 40px;
	width: 750px;
    min-height: 60vh;
	background-color: white;
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
`

const Balance = styled.div`
    flex: 10;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Money = styled.div`
    flex: 1;
    width: 50%;
    text-align: center;
    align-self: center;
    font-size: xxx-large;
    font-weight: 900;
`

const RecentTransactions = styled.div`
    flex: 1;
    width: 50%;
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

const Title = styled.h1`
	padding-bottom: 15px;
	text-align: center;
`

const Button = styled.button`
    flex: 1;
    margin: 10px;
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

const BalanceText = styled.div`
    font-size: 15px;
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
			<Button>Add Funds</Button>
			<Balance>
				<Money>
					<BalanceText>
                        Current Balance:
					</BalanceText>
                    $30.00
				</Money>
				<RecentTransactions>
					<Title>Recent Transactions</Title>
					<StatsTables>
						<RaceBoardTable>

							<RaceBoardHead>
								<RaceBoardBodyRow>
									<RaceBoardHeadCell>Date</RaceBoardHeadCell>
									<RaceBoardHeadCell>Deposit / Withdraw</RaceBoardHeadCell>
									<RaceBoardHeadCell>Ammount</RaceBoardHeadCell>
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
			</Balance>
			<br />
			<Button>Withdraw Funds</Button>
		</Container>
	)
}

export default WalletSection