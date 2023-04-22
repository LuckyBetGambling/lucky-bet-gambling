import React from 'react'
import styled from 'styled-components'
import LinkButton from './linkButton'
import { tabNames } from '../pages/user/[userId]'
import { useRouter } from 'next/router'

const DropdownBtn = styled.div`
    background-color:  ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
    border: 2px solid ${({theme}) => theme.accent};
    cursor: pointer;
    box-sizing: border-box;
    font-weight: 600;
    letter-spacing: 0.75px;

    align-items: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    max-width: 95px;
    padding: 0 25px;
    
    transition: all 0.2s ease-out;
    
    height: 36px;
    position: relative;

    &:hover {
        outline: 0;
        color: ${({theme}) => theme.accent};
        background-color: ${({theme}) => theme.primary};
        box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
    }

    &:hover > div {
        opacity: 1;
        visibility: visible;
        transform: translate(0%, 1px);
        transition: ease-in 250ms;
    }
`

const DropdownContent = styled.div`
    background-color: ${({theme}) => theme.primary};
    box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.primary} 0px 0px 0px 3px;
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
    border: 0px solid ${({theme}) => theme.accent};
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.75px;
    height: 36px;
    transition: all 150ms ease-out 0s;
    
    &:hover {
        color: ${({theme}) => theme.primary};
        background-color: ${({theme}) => theme.secondary};
        box-shadow:  ${({theme}) => theme.primary} 0px 2px 3px, ${({theme}) => theme.accent} 0px 0px 0px 3px;
    }
`


export default function ProfileDropdown({uid, themeCallback, logoutCallback}){
    
	const router = useRouter()
    
	return (
		
		<DropdownBtn>
            Profile
			<DropdownContent>
				{tabNames.map(
					(tab) => {
						return <DropdownButton key={tab} onClick={() => {
							router.push(`/user/${uid}?tab=${tab}`)
						}}>
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
  
  