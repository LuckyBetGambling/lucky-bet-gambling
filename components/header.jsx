import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'
import ProfileDropdown from './profileDropdown'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball'
import MenuOpen from '@mui/icons-material/MenuOpen'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color:  ${({theme}) => theme.secondary};
  padding: 15px 0px;
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
  padding-right: 15px;
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  width: 200px;
  margin-left: 0.2rem;
`

// new CSS for casino and sports buttons
const PillContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: ${({theme}) => theme.accent};
  
  &:hover {
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;
    background-color: ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
  }
`
const PillLink = styled(Link)`
  text-decoration: none;
`

const CasinoIcon = styled(CasinoRoundedIcon)`
  margin-right: 0;
`

const SportsIcon = styled(SportsBaseballIcon)`
  margin-right: 0;
`

const PillText = styled.span`
  font-size: 1rem;
`


const SidebarButton = styled.button`
  display: flex;
  border-radius: 20px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.accent};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};

    svg{
      color: ${({theme}) => theme.primary};
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    svg {
      font-size: 20px;
      color: ${({theme}) => theme.accent};
    }
  }
`

const HeaderButton = styled.button`
  background-color:  ${({theme}) => theme.accent};
  color: ${({theme}) => theme.primary};
  font-size: 16px;
  border: 2px solid ;
  cursor: pointer;
  min-width: 90px;
  width: max-content;
 
  outline: 0;
  appearance: none;
  padding: 0px 12px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 400;
  height: 36px;
  transition: all 150ms ease-out 0s;
  
  &:hover {
    
      color: ${({theme}) => theme.accent};
      background-color: ${({theme}) => theme.secondary};
      box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.accent} 0px 0px 0px 3px;
  }
`

const MenuOpenIcon = styled(MenuOpen)`
  transition: transform 5s ease-in-out;
  transform: ${({ showSidebar }) => (showSidebar ? 'rotate(0deg)' : 'rotate(180deg)')};
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
			{!showSidebar && <SidebarContainer>
				<SidebarButton onClick={toggleSidebar}>
					<span>
						<MenuOpenIcon showSidebar={showSidebar}/>
					</span>
				</SidebarButton>
			</SidebarContainer>
        
			}
			{showSidebar && 
        <SidebarContainer>
        	<PillLink href='/casino'>
        		<PillContainer>
        			<CasinoIcon />
        			<PillText>Casino</PillText>
        		</PillContainer>
        	</PillLink>

        	<PillLink href='/sports'>
        		<PillContainer>
        			<SportsIcon />
        			<PillText>Sports</PillText>
        		</PillContainer>
        	</PillLink>

        	<SidebarButton onClick={toggleSidebar}>
        		<span>
        			<MenuOpenIcon showSidebar={showSidebar}/>
        		</span>
        	</SidebarButton>
			  </SidebarContainer>
			}
			
			<Title>
				<Link href='/'>{title}</Link>
			</Title>
			<NavActions>
				{!userData.currentUser && <HeaderButton onClick={() => signUpCallback()}>Sign Up</HeaderButton>}
				{!userData.currentUser && <HeaderButton onClick={() => loginCallback()}>Log In</HeaderButton>}
				{(userData.currentUser && userData.isAdmin) && <HeaderButton>
					<LinkButton path={'/admin'} title='Admin' />
				</HeaderButton>}
				{userData.currentUser && <ProfileDropdown uid={userData.currentUser.uid} logoutCallback={logoutCallback} themeCallback={themeCallback} />}
				
			</NavActions>
		</Wrapper>
	)

}

export default Header