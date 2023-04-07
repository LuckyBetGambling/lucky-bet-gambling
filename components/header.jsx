import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'
import ProfileDropdown from './profileDropdown'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import SportsCasinoIcon from './sportsCasinoIcon'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color:  ${({theme}) => theme.secondary};
  padding: 15px 0px;
  position: fixed;
  z-index: 68;
  box-shadow: 0 -6px 15px 10px rgba(0,0,0,0.5);
`
const Title = styled.h1`
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFBF00;
  text-shadow: -1px 1px 0 #f00, 1px 1px 0 #F00, 1px -1px 0 #F00, -1px -1px 0 #F00;
  font-size: 30px;
  letter-spacing: 2.5px;
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

const SidebarButton = styled.button`
  display: flex;
  border-radius: 20px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.secondary};
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
      color: ${({theme}) => theme.primary};
    }
  }
`

const MenuOpen = styled(MenuOpenIcon)`
  transition: transform 1s ease-in-out;
  transform: ${({ rotate  }) => (rotate === 'true' ? 'rotate(0deg)' : 'rotate(180deg)')};
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
  transition: all 0.2s ease-out;
  
  &:hover {
    
      color: ${({theme}) => theme.accent};
      background-color: ${({theme}) => theme.secondary};
      box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.accent} 0px 0px 0px 3px;
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
			{!showSidebar && <SidebarContainer>
				<SidebarButton onClick={toggleSidebar} showSidebar={showSidebar}>
					<span>
						<MenuOpen rotate={showSidebar.toString()}/>
					</span>
				</SidebarButton>
			</SidebarContainer>
        
			}
			{showSidebar && 
        <SidebarContainer>

        	<SportsCasinoIcon
        		href='/casino'
        		title='Casino'
        	/>

        	<SportsCasinoIcon
        		href='/sports'
        		title='Sports'
        	/>
        	
        	<SidebarButton onClick={toggleSidebar} showSidebar={showSidebar}>
        		<span>
        			<MenuOpen rotate={showSidebar.toString()} />
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