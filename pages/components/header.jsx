import React from "react";
import styled from "styled-components";
import LinkButton from "./linkButton";
import Link from 'next/link'

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  background-color: red;
  padding: 15px;
  position: fixed;
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
`

const NavActions = styled.div`
  background-color: green;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

/**
 * Side Scrolling container for games
 * @param {array} items - array of game objects
 * @param {string} title - title of this section of games
 * @returns 
 */
const Header = ({ title, wallet, currentUser, signUpCallback, loginCallback }) => {

    return (
        <Wrapper>
            <Title>
                <Link href='/'>{title}</Link>
            </Title>
            <Wallet>${wallet}</Wallet>
            <NavActions>
            <button onClick={() => signUpCallback()}>Sign Up</button>
            <button onClick={() => loginCallback()}>Log In</button>
            {currentUser && <LinkButton path={`/user/${currentUser.userId}`} title='Profile' />}
            </NavActions>
        </Wrapper>
    );

};

export default Header;