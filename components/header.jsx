import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'
import ProfileDropdown from './profileDropdown'
import { useAuth } from './userContext'
import { useRouter } from 'next/router'

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

const HeaderButton = styled.button`
  font-weight: 600;
  letter-spacing: 0.5px;
  font-style: oblique;
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
  height: 36px;
  transition: all 0.2s ease-out;
  
  &:hover {
    
      color: ${({theme}) => theme.accent};
      background-color: ${({theme}) => theme.secondary};
      box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.accent} 0px 0px 0px 3px;
  }
`

const Spacer = styled.div`
  flex: 2;
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
const Header = ({ title, signUpCallback, loginCallback, logoutCallback, themeCallback}) => {


	const {authUser} = useAuth()
	const router = useRouter()

	console.log(authUser)

	return (
		<Wrapper>
			<Spacer />
			<Title>
				<Link href='/'>{title}</Link>
			</Title>
			<NavActions>
				{!authUser && <HeaderButton onClick={() => signUpCallback()}>Sign Up</HeaderButton>}
				{!authUser && <HeaderButton onClick={() => loginCallback()}>Log In</HeaderButton>}
				{(authUser && authUser.uid == 'kQOKspTFzxYsA4AyGRjACkMB1aP2') && <HeaderButton onClick={() => {
					router.push('/admin?tab=Manage+Team')
				}}>
					<LinkButton path={'/admin?tab=Manage+Team'} title='Admin' />
				</HeaderButton>}
				{authUser && <ProfileDropdown uid={authUser.uid} logoutCallback={logoutCallback} themeCallback={themeCallback} />}
				
			</NavActions>
		</Wrapper>
	)

}

export default Header