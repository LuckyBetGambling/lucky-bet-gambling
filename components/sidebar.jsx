import styled from 'styled-components'
import { SidebarData } from '../utils/SidebarData'


const SidebarContainer = styled.div`
    background-color:  ${({theme}) => theme.secondary};
    max-width: 200px;
    min-height: 100%;
    position: fixed;
    top: 4.2rem;
    left: 0;
    bottom: 40px;
    right: 200px;
    z-index: 420000000000000000000000;
`

const SidebarList = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;
`

const SidebarRow = styled.li`
    width: 100%;
    height: 3rem;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({theme}) => theme.secondary};
        background-color: ${({theme}) => theme.accent};
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

export default function Sidebar() {


	return (
		<SidebarContainer>
			<SidebarList>
				{SidebarData.map((val, key) => {
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
