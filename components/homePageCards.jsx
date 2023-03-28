import Link from 'next/link'
import Image from 'next/image'


export default function HomePageCard({href, imageSrc, imageAlt, title, summary, description, buttonText }){


	return(
		<Link href={href}>
			<h2>{title}</h2>
			<div>
				<Image src={imageSrc} alt={imageAlt} width={300} height={200} />
				<h5>{summary}</h5>
				<p>{description}</p>
				<button>{buttonText}</button>
			</div>
		</Link>
  
	)
}

