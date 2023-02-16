import React, { useState } from 'react'
import styled from 'styled-components'
import { SidebarData } from '../utils/sidebarData'
import Row from './row'

const SidebarContainer = styled.div`
    background-color:  ${({theme}) => theme.secondary};
    max-width: 250px;
    height: 100%;
    margin: 0;
    padding: 0;
`

const SidebarList = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;
`

const SidebarRow = styled.li`
    width: 100%;
    height: 60px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({theme}) => theme.secondary};
        background-color: ${({theme}) => theme.alt};
        cursor: pointer;
      }
`

const SidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`

const SidebarTitle = styled.div`
    flex: 70%;
`

export default function Sidebar(){

	// const [sidebarOpen, setSidebarOpen] = useState(false);

	// function toggleSidebar() {
	// 	setSidebarOpen(!sidebarOpen);
	// }

	return(
		<SidebarContainer>
			<SidebarList>
				{SidebarData.map((row, idx) => (
					<Row key={idx} title={row.title} link={row.link}/>
				))}


				{/* {SidebarData.map((val, key) => {
					return (
						<SidebarRow key={key} onClick={() => { window.location.pathname = val.link }}>
							<SidebarIcon>{val.icon}</SidebarIcon>
							<SidebarTitle>{val.title}</SidebarTitle>
						</SidebarRow>
					)
				})} */}
			</SidebarList>

		</SidebarContainer>
	)
}
