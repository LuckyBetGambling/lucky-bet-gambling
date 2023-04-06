import styled from 'styled-components'
import Link from 'next/link'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball'



const PillContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: ${({theme}) => theme.primary};
  
  &:hover {
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    background-color: ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
  }
`
const PillLink = styled(Link)`
  text-decoration: none;
`

const CasinoIcon = styled(CasinoRoundedIcon)`
  margin-right: 0;
`

const SportsIcon = styled(SportsBaseballIcon)`
  margin-right: 0;
`

const PillText = styled.span`
  font-size: 1rem;
`


export default function SportsCasinoIcon({title, href}){

	return(
        
		<PillLink href={href}>
			<PillContainer>
				{href === '/casino' && <CasinoIcon />}
				{href === '/sports' && <SportsIcon />}
                
				<PillText>{title}</PillText>
			</PillContainer>
		</PillLink>
	)

        
    
}