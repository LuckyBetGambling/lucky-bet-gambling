import React from 'react'
import Link from 'next/link'

/**
 * Styled button that links to a provided page
 * @param {string} path - path of page we wish to jump to
 * @param {string} title - title of the page we're jumping to
 * @returns 
 */
const LinkButton = ({ title, path }) => {

	return (
		<Link href={path} passHref>
			{title}
		</Link>
	)

}

export default LinkButton