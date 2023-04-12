import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import GameCard from './gameCard'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import ArrowRight from '@mui/icons-material/ArrowRight'

const Title = styled.h3`
    font-weight: 900;
	text-align: center;
    padding-bottom: 20px;
    font-size: 30px;
    text-transform: uppercase;
	text-shadow: -1px 1px 0 #FFBF00, 1px 1px 0 #FFBF00, 1px -1px 0 #FFBF00, -1px -1px 0 #FFBF00;
	letter-spacing: 5px;
`
const SideScrollingContainer = styled.div`
    display: flex;
    height: 250px;
    width: 800px;
    -webkit-overflow-scrolling: touch;
	box-shadow: inset 6px 15px 10px 0 rgba(0, 0, 0, 0.4);
	position: relative;
	border-radius: 15px;
`

const Wrapper = styled.div`
	margin: 10px;
    padding: 20px;
    background-color: ${({theme}) => theme.secondary};
	border-radius: 15px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
`

const Overlay = styled.div`
	border-radius: 15px;
	position: absolute;
	background: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(9,9,121,0) 5%, rgba(9,9,121,0) 95%, rgba(0,0,0,0.4) 100%);
	top:0;
	left:0;
	width: 100%;
	height:100%;
	color:black;
	text-align: center;
	z-index: 10;
	pointer-events: none;	
`

const Slides = styled.div`
	display: flex;
    flex-wrap: nowrap;
    overflow: auto;
	scroll-behavior: smooth;
	background: rgba(0,0,0,0.2);
	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	  }
`

const LeftScroll = styled.button`
	opacity: 0;
	position: absolute;
	top:40%;
	left:1%;
	height: 50px;
	z-index: 11;
    width: 50px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
	border: none;
	transition: opacity .3s ease-in-out;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`

const RightScroll = styled.button`
	opacity: 0;
	position: absolute;
	top: 40%;
	right: 1%;
	height: 50px;
	z-index: 11;
	width: 50px;
	border-radius: 50px;
	background-color: white;
	display: flex;
	align-items: center;
	border: none;
	justify-content: center;
	
	transition: opacity .3s ease-in-out;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}
	
`

/**
 * Side Scrolling container for games
 * @param {array} items - array of game objects
 * @param {string} title - title of this section of games
 * @returns 
 */
const SideScroller = ({ items, title }) => {

	const scrollLeft = () => {
		slider.current.scrollLeft -= 550
	}


	const scrollRight = () => {
		slider.current.scrollLeft += 550
	}


	const slider = React.createRef()

	return (
		<Wrapper>
			<Title>
				<Link href={`/casino/group/${title}`}>
					{title}
				</Link>
			</Title>
			<SideScrollingContainer>
				<Overlay />
				<LeftScroll onClick={scrollLeft}>
					<ArrowLeft />
				</LeftScroll>
				<RightScroll onClick={scrollRight}>
					<ArrowRight />
				</RightScroll>
				<Slides ref={slider}>
					{items.map(
						(item, index) => {
							return (
								<GameCard key={index} item={item}/>
							)
						} 
					)}
				</Slides>
			</SideScrollingContainer>
		</Wrapper>
	)

}

export default SideScroller

