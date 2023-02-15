import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.div`
    display: flex;
    height: 100%;
    width: 60px;
    background-color:  ${({theme}) => theme.alt};
    color:  ${({theme}) => theme.secondary};
    justify-content: center;
    align-items: center;
`

/**
 * Styled button that links to a provided page
 * @param {string} path - path of page we wish to jump to
 * @param {string} title - title of the page we're jumping to
 * @returns 
 */
const LinkButton = ({ title, path }) => {

	return (
		<Link href={path} passHref>
			<Button >{title}</Button>
		</Link>
	)

}

export default LinkButton