import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import { tabNames } from '../pages/user/[userId]'

const DropdownBtn = styled.div`
    background-color:  ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border: 2px solid ${({theme}) => theme.accent};
    cursor: pointer;
    box-sizing: border-box;

    align-items: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    max-width: 95px;
    padding: 0 25px;
    
  height: 36px;
    position: relative;

    &:hover {
        box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
        outline: 0;
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.secondary};
        box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    }

    &:hover > div {
        opacity: 1;
        visibility: visible;
        transform: translate(0%, 1px);
        transition: ease-in 250ms;
    }
`

const DropdownContent = styled.div`
    background-color: ${({theme}) => theme.secondary};
    box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    top: 40px;
    opacity: 0;
    transition: ease-out 500ms;
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 98px;
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme.accent};
    color: ${({theme}) => theme.accent};
`


const DropdownButton = styled.button`
    color: ${({theme}) => theme.accent};
    background-color: transparent;
    font-size: 1em;
    border: 2px solid ;
    cursor: pointer;
    min-width: 90px;
    
    outline: 0;
    appearance: none;
    padding: 0px 12px;
    border: 0px solid transparent;
    border-radius: 4px;
    text-decoration: none;
    box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px;
    font-weight: 400;
    height: 36px;
    transition: all 150ms ease-out 0s;
    
    &:hover {
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.secondary};
        box-shadow: ${({theme}) => theme.secondary} 0px 2px 3px, ${({theme}) => theme.accent} 0px 0px 0px 3px;
    }
`


export default function ProfileDropdown({uid, themeCallback, logoutCallback}){
    
	return (
		
		<DropdownBtn>
            Profile
			<DropdownContent>
				{tabNames.map(
					(tab) => {
						return <DropdownButton key={tab}>
							<LinkButton path={`/user/${uid}?tab=${tab}`} title={tab} />
						</DropdownButton>
					}
				)}
				<DropdownButton onClick={() => logoutCallback()}>Log Out</DropdownButton>
				<DropdownButton onClick={() => themeCallback()}>Theme</DropdownButton>
			</DropdownContent>
		</DropdownBtn>
	)
};
  
  