import React, { useState } from 'react'
import styled from 'styled-components'
import { SidebarData } from '../utils/sidebarData'


const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2F4050;
    width: 300px;
    min-height: cal(100vh - 30px);
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
    border: 1px solid black;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #293846;
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
				{SidebarData.map((val, key) => {
					<SidebarRow key={key} onClick={() => { window.location.pathname = val.link }}>
						<SidebarIcon>{val.icon}</SidebarIcon>
						<SidebarTitle>{val.title}</SidebarTitle>
						  </SidebarRow>
				})}
			</SidebarList>
		</SidebarContainer>
	)
}
