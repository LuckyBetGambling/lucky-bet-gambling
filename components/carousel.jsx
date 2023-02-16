import React from 'react'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import styled from 'styled-components'

// TODO: Create better looking left/rghtIcons
const Left = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Carouse1 = ({carouselItems, title, styles}) => {

	return (
		<section>
			<header>
				{title}
			</header>
			<Carousel
				isLoop={true}
				hasIndexBoard={false}
				hasMediaButton={false}
				hasMediaButtonAtMax='bottomLeft'
				hasSizeButton={false}
				hasDotButtons='bottom'
				hasThumbnails={false}
				shouldSwipeOnMouse={false} // for selecting text
				shouldMinimizeOnSwipeDown={false} 
				style={{ userSelect: 'text', backgroundColor: 'inherit', ...styles }}
				leftIcon={<Left>back</Left>}
				rightIcon={<Right>next</Right>}
			>
				{carouselItems.map(
					(item) => {
						return item
					}
				)}
			</Carousel>

		</section>
	)
}

export default Carouse1