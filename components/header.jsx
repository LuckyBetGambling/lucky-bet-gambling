import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import Link from 'next/link'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color: red;
  padding: 15px;
  position: fixed;
  z-index: 68;
`

const Wallet = styled.div`
  flex: 1;
  background-color: orange;
  display: flex;
  align-items: center; 
  justify-content: center;
  color: #00FF00;
`

const Title = styled.h1`
  flex: 1;
  background-color: maroon;
  text-align: center;
`

const NavActions = styled.div`
  background-color: green;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

/**
 * Generic header component that will live on every page
 * @param {array} wallet - ammount of money the player has
 * @param {string} title - title for header
 * @param {object} currentUser - object containing current logged in user's data
 * @param {function} signUpCallback - callback to open sign up modal
 * @param {function} loginCallback - callback function to open log in modal
 * @returns 
 */
const Header = ({ title, wallet, currentUser, signUpCallback, loginCallback, logoutCallback }) => {

	return (
		<Wrapper>
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
			</NavActions>
		</Wrapper>
	)

}

export default Header