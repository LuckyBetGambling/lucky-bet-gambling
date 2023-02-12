import React, { useState } from 'react'
import styled from 'styled-components'
import SideScroller from './sidescroller'
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
  min-height: calc(100vh - 30px);
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


const OptionContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GameTitleBet = styled.div`
    display: flex;
    margin: 1rem 1rem 2rem 1rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 1000px;
    height: 4rem;
    background-color: #0f212e;
    color: #FFF;
    border-radius: 10px;
`


// const styles = theme => ({
//     root: {
//       color: theme.palette.,
//       fontSize: 32,
//     },
//   });
  
  


const sampleGames = [
	{id: 1, content: <p>Hello</p>}, 
	{id: 2, content: <p>World</p>}, 
	{id: 3, content: <p>!</p>},
	{id: 4, content: <p>Hello</p>}, 
	{id: 24, content: <p>World</p>}, 
	{id: 33, content: <p>!</p>},
	{id: 15, content: <p>Hello</p>}, 
	{id: 25, content: <p>World</p>}, 
	{id: 332, content: <p>!</p>},
	{id: 12, content: <p>Hello</p>}, 
	{id: 27, content: <p>World</p>}, 
	{id: 38, content: <p>!</p>},
]



export default function GameComponent({GameTitle, GameProvider, gameSrc}){

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
		<GameContainer>
			<GameCard>
				<GameVideo 
					src={gameSrc} 
					alt={GameTitle}
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

			<OptionContainer>
				<GameTitleBet>
					<h2 style={{padding: '0 0.3rem 0 1rem'}} >{GameTitle}</h2>
					<span style={{color: '#b1bad3'}}>{GameProvider}</span>
                   
				</GameTitleBet>

				<SideScroller 
					items={sampleGames} 
					title='Recommended Games' 
				/>
                
			</OptionContainer>
		</GameContainer>
      
	)
};
  
  