import styled from 'styled-components'
import { adminSidebarData } from '../utils/adminSidebarData'

const SidebarContainer = styled.div`
    background-color: #2F4050;
    width: 300px;
    height: 100vh;
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

export default function AdminSidebar() {


	return (
		<SidebarContainer>
			<SidebarList>
				{adminSidebarData.map((val, key) => {
					return (
						<SidebarRow key={key} onClick={() => { window.location.pathname = val.link }}>
							<SidebarIcon>{val.icon}</SidebarIcon>
							<SidebarTitle>{val.title}</SidebarTitle>
						</SidebarRow>
					)
				})}
			</SidebarList>

		</SidebarContainer>
	)
}
