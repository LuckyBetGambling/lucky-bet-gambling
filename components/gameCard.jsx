import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const CardWrapper = styled(Link)`
    text-decoration: none;
    padding: 20px;
    display: flex;
    align-items: center;
`

const Card = styled.div`
    flex: 0 0 auto;
    width: 200px;
    height: 100%;
    background: linear-gradient(43deg, rgb(255, 36, 186), rgb(0, 209, 185));
    color: white;
    font-weight: bold;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;   

    &:hover {
        transform: scale(1.15);
    }
    
    &:hover > .hover-content {
        opacity: 1;
        visibility: visible;
    }
    

`
const HoverContent = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`

const HoverTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`

const HoverProvider = styled.div`
    font-size: 14px;
`



export default function GameCard({item}){

	return(
		<CardWrapper href={{
			pathname: `/casino/games/${item.identifier2}`,
			query: {
				id: item.identifier2,
				title: item.title,
			}
		}}>
			<Card>
				{item.title}
				<HoverContent className="hover-content">
					<HoverTitle>{item.title}</HoverTitle>
					<FontAwesomeIcon icon={faArrowRight} size="2x" />
					<HoverProvider>{item.provider}</HoverProvider>
				</HoverContent>
                
			</Card>
		</CardWrapper>
	)
}