import React, { useState } from 'react'
import styled from 'styled-components'
// import icons
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import StarIcon from '@mui/icons-material/Star'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'


const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: #1a2c38;
  min-height: cal(100vh - 30px);
`

const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 600px;
  background-color: orange;
  border-radius: 16px;
`

const GameVideo = styled.iframe`
    height: 90%;
    border-radius: 10px 10px 0 0;
`

const GameControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: grey;
    height: 10%;
    width: 100%;
    border-radius: 0 0 10px 10px;
`

const IconContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

const ToggleContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function GameComponent({gameTitle, gameSrc}){

	const [iconIsOpen, setIconIsOpen] = useState(false)

	// here you would write the functions
	function toggleIcons() {
		if (iconIsOpen){
			setIconIsOpen(false)
			// return document.body.classList.remove("icon--open")
            
		}
		else{
			setIconIsOpen(true)
			// document.body.classList += "icon--open"
			alert('icon has been given event by user')
		}
        
	}
    
	return (
		
		<GameCard>
			<GameVideo 
				src={gameSrc} 
				alt={gameTitle}
				id='game'
				frameBorder='0'
				allowFullScreen
			/>
			<GameControls>
				<IconContainer>
					<FullscreenIcon
						className='game-card-fullScreen'
						onClick={toggleIcons}
					/>
					<FitScreenIcon
						className='game-card-wideScreen'
						onClick={toggleIcons}
					/>
					<AutoGraphIcon
						className='game-card-betStats'
						onClick={toggleIcons}
					/>
					<StarIcon
						className='game-card-favorite'
						onClick={toggleIcons}
					/>
				</IconContainer>
				<LogoContainer>
					<h3>LuckyBet</h3>
				</LogoContainer> 
				<ToggleContainer>
					<span>Fun Play</span>
					<ToggleOnIcon
						onClick={toggleIcons}
						style={{fontSize: '2.5rem'}}
					/>
					<span>Real Play</span>
				</ToggleContainer>   
			</GameControls>
		</GameCard>
	)
};
  
  