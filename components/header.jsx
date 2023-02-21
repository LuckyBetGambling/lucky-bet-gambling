import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color:  ${({theme}) => theme.secondary};
  padding: 15px;
  position: fixed;
  z-index: 68;
`

const Wallet = styled.div`
  flex: 1;
  border: 1px solid orange;
  display: flex;
  align-items: center; 
  justify-content: center;
`

const Title = styled.h1`
  flex: 1;
  border: 1px solid maroon;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavActions = styled.div`
  border: 1px solid green;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 1px solid blue;
`

const SidebarButton = styled.button`
  border: none;
  font-size: 2rem;
  background-color: ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.alt};
  
  &:hover {
    cursor: pointer;
  }
`

/**
 * Generic header component that will live on every page
 * @param {array} wallet - ammount of money the player has
 * @param {string} title - title for header
 * @param {object} currentUser - object containing current logged in user's data
 * @param {function} signUpCallback - callback to open sign up modal
 * @param {function} loginCallback - callback function to open log in modal
 * @param {function} sidebarCallback - callback function to open sidebar
 * @returns 
 */
const Header = ({ title, wallet, currentUser, signUpCallback, loginCallback, logoutCallback, themeCallback, toggleSidebar}) => {

	return (
		<Wrapper>
			<SidebarContainer>
				<SidebarButton onClick={toggleSidebar}>Sidebar</SidebarButton>
			</SidebarContainer>
			<Title>
				<Link href='/'>{title}</Link>
			</Title>
			{currentUser && <Wallet>${wallet}</Wallet>}
			<NavActions>
				{!currentUser && <button onClick={() => signUpCallback()}>Sign Up</button>}
				{!currentUser && <button onClick={() => loginCallback()}>Log In</button>}
              
              
				{currentUser && <LinkButton path={'/admin'} title='Admin' />}
				{currentUser && <LinkButton path={`/user/${currentUser.uid}`} title='Profile' />}
				{currentUser && <button onClick={() => logoutCallback()}>Log Out</button>}
				<button onClick={() => themeCallback()}>Theme</button>
			</NavActions>
		</Wrapper>
	)

}

export default Header