import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.accent};
  background-color:  ${({theme}) => theme.secondary};
  box-shadow: 0 -3px 10px 3px rgba(0,0,0,0.5);
  font-weight: 200;
  font-style: italic;
  letter-spacing: 2px;
  font-size: 13px;
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