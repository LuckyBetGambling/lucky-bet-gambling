import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`

/** Generic footer that lives on every page
* @param {component} children - child components to go inside of the footer
* @returns 
*/
const Footer = ({ children }) => {

	return (
		<Wrapper>
			{children}
		</Wrapper>
	)

}

export default Footer