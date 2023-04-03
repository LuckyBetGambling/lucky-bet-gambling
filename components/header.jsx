import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'
import ProfileDropdown from './profileDropdown'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball'
import WestIcon from '@mui/icons-material/West'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color:  ${({theme}) => theme.secondary};
  padding: 15px 35px;
  padding-left: 0px;
  position: fixed;
  z-index: 68;
  padding-left: 0;
`
const Title = styled.h1`
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavActions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
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
  color: ${({theme}) => theme.accent};
  
  &:hover {
    cursor: pointer;
  }
`



/**
 * Generic header component that will live on every page
 * @param {string} title - title for header
 * @param {object} userData - object containing current logged in user's data
 * @param {function} signUpCallback - callback to open sign up modal
 * @param {function} loginCallback - callback function to open log in modal
 * @param {function} sidebarCallback - callback function to open sidebar
 * @returns 
 */
const Header = ({ title, wallet, userData, signUpCallback, loginCallback, logoutCallback, themeCallback, showSidebar, toggleSidebar}) => {

	return (
		<Wrapper>
			{!showSidebar && <SidebarButton onClick={toggleSidebar}>
				<span>
					<WestIcon/>
				</span>
			</SidebarButton>
			}
			{showSidebar && 
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
			}
			
			<Title>
				<Link href='/'>{title}</Link>
			</Title>
			<NavActions>
				{!userData.currentUser && <button onClick={() => signUpCallback()}>Sign Up</button>}
				{!userData.currentUser && <button onClick={() => loginCallback()}>Log In</button>}
              
              
				{(userData.currentUser && userData.isAdmin) && <LinkButton path={'/admin'} title='Admin' />}
				{userData.currentUser && <ProfileDropdown uid={userData.currentUser.uid} logoutCallback={logoutCallback} themeCallback={themeCallback} />}
				
			</NavActions>
		</Wrapper>
	)

}

export default Header