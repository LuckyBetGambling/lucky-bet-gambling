import Image from 'next/image'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
    height: calc(100vh - 40px);
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 46px;
    text-shadow: 0px 3px maroon;
    font-weight: 900;
    background: linear-gradient(45deg, #f0b000 45px, transparent 45px)64px 64px, linear-gradient(45deg, #f0b000 45px, transparent 45px,transparent 91px, #2c2c2c 91px, #2c2c2c 135px, transparent 135px), linear-gradient(-45deg, #f0b000 23px, transparent 23px, transparent 68px,#f0b000 68px, #f0b000 113px,transparent 113px,transparent 158px,#f0b000 158px);
    background-size: 128px 128px;
    background-color: #2c2c2c;
    color: red;
`

const Sticky = styled.div`
    width: 450px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
`

export default function Custom404() {
	return <NotFoundContainer>
		<Sticky>
            COMING SOON...
			<br />
            UNDER CONSTRUCTION
			<Image 
				priority 
				src='/images/construction-cone.svg' 
				height={96}
				width={96}
				alt='Under Construction' 
			/>
		</Sticky>
		
	</NotFoundContainer>
}
  