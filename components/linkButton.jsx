import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.div`
    display: flex;
    height: 100%;
    min-width: 60px;
    background-color:  ${({theme}) => theme.accent};
    color:  ${({theme}) => theme.secondary};
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
    }
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