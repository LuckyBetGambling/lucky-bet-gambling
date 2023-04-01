import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball'
import WestIcon from '@mui/icons-material/West'

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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
  width: 200px;
`

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  color: ${({theme}) => theme.text};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`


const SidebarButton = styled.div`
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
 * @param {object} userData - object containing current logged in user's data
 * @param {function} signUpCallback - callback to open sign up modal
 * @param {function} loginCallback - callback function to open log in modal
 * @param {function} sidebarCallback - callback function to open sidebar
 * @returns 
 */
const Header = ({ title, wallet, userData, signUpCallback, loginCallback, logoutCallback, themeCallback, toggleSidebar}) => {

	return (
		<Wrapper>
			<SidebarContainer>
				<Link href='/casino'>
					<IconContainer>
						<CasinoRoundedIcon/>
						<span>Casino</span>
					</IconContainer>
				</Link>
				<Link href='/sports'>
					<IconContainer>
						<SportsBaseballIcon/>
						<span>Sports</span>
					</IconContainer>
				</Link>
				<SidebarButton onClick={toggleSidebar}>
					<span>
						<WestIcon/>
					</span>
				</SidebarButton>
			</SidebarContainer>
			<Title>
				<Link href='/'>{title}</Link>
			</Title>
			{userData.currentUser && <Wallet>${wallet}</Wallet>}
			<NavActions>
				{!userData.currentUser && <button onClick={() => signUpCallback()}>Sign Up</button>}
				{!userData.currentUser && <button onClick={() => loginCallback()}>Log In</button>}
              
              
				{(userData.currentUser && userData.isAdmin) && <LinkButton path={'/admin'} title='Admin' />}
				{userData.currentUser && <LinkButton path={`/user/${userData.currentUser.uid}`} title='Profile' />}
				{userData.currentUser && <button onClick={() => logoutCallback()}>Log Out</button>}
				<button onClick={() => themeCallback()}>Theme</button>
			</NavActions>
		</Wrapper>
	)

}

export default Header