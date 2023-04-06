import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import GameCard from './gameCard'


const Wrapper = styled.div`
    padding: 20px;
    background-color: ${({theme}) => theme.secondary};
`

const Title = styled.h3`
    font-weight: 800;
`

const SideScrollingContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 200px;
    margin-bottom: 20px;
    width: 800px;
    -webkit-overflow-scrolling: touch;
    background-color: green;
    margin: 20px;
`




/**
 * Side Scrolling container for games
 * @param {array} items - array of game objects
 * @param {string} title - title of this section of games
 * @returns 
 */
const SideScroller = ({ items, title, content }) => {

	return (
		<Wrapper>
			<Title>
				<Link href={`/casino/group/${title}`}>{title}</Link>
			</Title>
			<SideScrollingContainer>
				{items.map(
					(item) => {
						return (
							<GameCard key={item.id} id={item.id} content={item.content} />
						)
					} 
				)}
			</SideScrollingContainer>
		</Wrapper>
	)

}

export default SideScroller