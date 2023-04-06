import styled from 'styled-components'
import Link from 'next/link'

const CardWrapper = styled(Link)`
    text-decoration: none;
    margin-right: 10px;
    display: flex;
    align-items: center;
    
`

const Card = styled.div`
    flex: 0 0 auto;
    border: 2px solid red;
    width: 150px;
    height: 175px;
    background: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function GameCard({id, content}){

	return(
		<CardWrapper key={id} href={`/casino/games/${id}`}>
			<Card>{content}</Card>
		</CardWrapper>
	)
}


