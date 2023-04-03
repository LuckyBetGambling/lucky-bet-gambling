import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'

const DropdownBtn = styled.div`
    background-color:  ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border: 2px solid ${({theme}) => theme.accent};
    cursor: pointer;
    box-sizing: border-box;

    align-items: center;
    border-radius: 8px;
    display: flex;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;

    &:hover {
        box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
        outline: 0;
    }

    &:hover > div {
        opacity: 1;
        visibility: visible;
        transform: translate(0%, 1px);
        transition: ease-in 250ms;
    }
`

const DropdownContent = styled.div`
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    top: 40px;
    opacity: 0;
    transition: ease-out 500ms;
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 98px;
    border-radius: 8px;
`


export default function ProfileDropdown({uid, themeCallback, logoutCallback}){
    
	return (
		
		<DropdownBtn>
            Profile
			<DropdownContent>
				
				<LinkButton path={`/user/${uid}?tab=Profile`} title='Profile' />
				<LinkButton path={`/user/${uid}?tab=Wallet`} title='Wallet' />
				<LinkButton path={`/user/${uid}?tab=Statistics`} title='Statistics' />
				<LinkButton path={`/user/${uid}?tab=Transactions`} title='Transactions' />
				<LinkButton path={`/user/${uid}?tab=Settings`} title='Settings' />
				<button onClick={() => logoutCallback()}>Log Out</button>
				<button onClick={() => themeCallback()}>Theme</button>

			</DropdownContent>
		</DropdownBtn>
	)
};
  
  