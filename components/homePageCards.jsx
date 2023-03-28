import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  margin: 2rem;
  

  &:hover {
    transform: scale(1.05);
  }
`

const CardImage = styled(Image)`
  object-fit: cover;
  height: 300px;
`

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0.5rem;
`

const CardContent = styled.div`
  padding: 10px;
`

const CardSummary = styled.h5`
  font-size: 16px;
  margin: 0;
  color: #777777;
`

const CardDescription = styled.p`
  font-size: 14px;
  margin: 16px 0;
  line-height: 1.4;
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
`



export default function HomePageCard({href, imageSrc, imageAlt, title, summary, description, buttonText }){


	return(
		<Link href={href}>
			<CardContainer>
				<CardTitle>{title}</CardTitle>
				<CardImage src={imageSrc} alt={imageAlt} width={400} height={200} />
				<CardContent>
					<CardSummary>{summary}</CardSummary>
					<CardDescription>{description}</CardDescription>
					<CardButton>{buttonText}</CardButton>
				</CardContent>
			</CardContainer>
		</Link>
  
	)
}


