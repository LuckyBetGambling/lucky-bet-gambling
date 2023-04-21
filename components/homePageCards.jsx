import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


const CardContainer = styled.div`
  background-color: ${({theme}) => theme.secondary};
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  margin: 20px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
`

const CardImage = styled(Image)`
  object-fit: cover;
  height: 300px;
  width: 100%;
`

const CardTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 0.5rem;
  text-align: center; 
  letter-spacing: 2.5px;
  text-shadow: -1px 1px 0 #FFBF00, 1px 1px 0 #FFBF00, 1px -1px 0 #FFBF00, -1px -1px 0 #FFBF00;
`

const CardContent = styled.div`
  padding: 10px;
`

const CardSummary = styled.h5`
  font-size: 16px;
  margin: 0;
  color: #fff;
`

const CardDescription = styled.p`
  font-size: 14px;
  margin: 16px 0;
  line-height: 1.4;
  color: ${({theme}) => theme.primary};
  font-weight: 200;
`

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  background-color: #1475e1;
  border: none;
  border-radius: 8px;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`



export default function HomePageCard({href, imageSrc, imageAlt, title, summary, description, buttonText }){


	return(
		<Link href={href}>
			<CardContainer>
				<CardTitle>{title}</CardTitle>
				<CardImage src={imageSrc} alt={imageAlt} width={400} height={300} />
				<CardContent>
					<CardSummary>{summary}</CardSummary>
					<CardDescription>{description}</CardDescription>
					<CardButton>{buttonText}</CardButton>
				</CardContent>
			</CardContainer>
		</Link>
  
	)
}


