import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import GameComponent from '../../../components/gameComponent'
import SideScroller from '../../../components/sidescroller'
import { sampleGames } from '../../../utils/sampleData'

const Page = styled.div`
	background-color: #1a2c38;
	min-height: calc(100vh - 30px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 5rem;
	padding-bottom: 3rem;
`

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: #1a2c38;
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
    height: 4rem;
    background-color: #0f212e;
    color: #FFF;
    border-radius: 10px;
`

const GamePage = (props) => {

	return (
		<Page>
			<Head>
				<title>Game</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<GameContainer>
				<GameComponent 
					gameTitle={props.title}
					gameSrc={props.id}
				/>
				<OptionContainer>
					<GameTitleBet>
						<h2 style={{padding: '0 0.3rem 0 1rem'}} >{props.title}</h2>
						<span style={{color: '#b1bad3'}}>{props.provider}</span>
				
					</GameTitleBet>

					<SideScroller 
						items={sampleGames} 
						title='Recommended Games' 
					/>
				
				</OptionContainer>
			</GameContainer>

		</Page>
	)
}

export const getStaticPaths = async () => {
	return {
	  paths: [],
	  fallback: true
	}
}

export const getStaticProps = async (context) => {
	const props = context.params

	return {
		props: props
	}
}


export default GamePage