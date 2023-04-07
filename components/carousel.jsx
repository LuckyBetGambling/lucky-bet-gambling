import React from 'react'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import styled from 'styled-components'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import ArrowRight from '@mui/icons-material/ArrowRight'

const Left = styled.div`
	opacity: 0.2;
	height: 50px;
	width: 50px;
	border-radius: 50px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0.5px solid rgba(0,0,0,0.5);
	transition: opacity .3s ease-in-out;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`

const Right = styled.div`
	opacity: 0.2;
	height: 50px;
	width: 50px;
	border-radius: 50px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0.5px solid rgba(0,0,0,0.5);
	transition: opacity .3s ease-in-out;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`

const ShowcaseItem = styled.div`
	height: 300px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px;
	margin: 20px
`

const GamePicture = styled.div`
	height: 250px;
	min-width: 50%;
	margin: 20px;
	transform: translateX(15%);
	flex: 0 0 auto;
	background: linear-gradient(43deg, rgb(255, 36, 186), rgb(0, 209, 185));
	color: white;
	font-weight: bold;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;   

`

const GameDescription = styled.div`
	height: 270px;
	transform: translateX(-15%);
	width: 50%;
	background-color: ${({theme}) => theme.accent};
	border-radius: 15px;
	z-index: 1;
	padding: 20px;
	margin: 20px;
	color: white;
`

const Carouse1 = ({carouselItems, styles}) => {

	return (
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
			leftIcon={<Left>
				<ArrowLeft />
			</Left>}
			rightIcon={<Right>
				<ArrowRight />
			</Right>}
		>
			{carouselItems.map(
				(item) => {
					return <ShowcaseItem key={item}>
						<GamePicture>{item.title}</GamePicture>
						<GameDescription>{item.description}</GameDescription>
					</ShowcaseItem>
				}
			)}
		</Carousel>
	)
}

export default Carouse1