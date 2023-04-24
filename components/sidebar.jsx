import styled from 'styled-components'
import { SidebarData } from '../utils/SidebarData'
import { useState, Fragment } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import SportsCasinoIcon from './sportsCasinoIcon'

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 40px;
    right: 200px;
    color: ${({theme}) => theme.primary};
    background-color:  ${({theme}) => theme.secondary};
    max-width: 255px;
    min-height: 100%;
    z-index: 69;
    transform: ${ ({showSidebar}) => showSidebar ? 'translateX(0)' : 'translateX(-205px)'};
    transition: transform 400ms ease-in-out;
    padding: 15px 0px;
    border-right-color: ${({theme}) => theme.accent};;
    border-right-width: 4px;
    border-right-style: solid;
    font-weight: 600;
    letter-spacing: 0.5px;
`

const SidebarList = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;
    pointer-events: ${ ({showSidebar}) => showSidebar ? 'all' : 'none'};
    opacity: ${ ({showSidebar}) => showSidebar ? '1' : '0'};
    transition: opacity 700ms ease-in-out, height 1s ease;
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
    
    & > svg:last-child {
        transition: transform 400ms ease-in-out;
    }

    &:hover > svg:last-child {
        color: ${ ({theme}) => theme.primary};
    }

    &:hover {
        background-color: ${({theme}) => theme.accent};
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    &:hover div {
        color: ${ ({theme}) => theme.primary};
    }

      ${({ isExpanded, theme }) =>
		isExpanded && `
            & > svg:last-child {
                transform: rotate(-90deg);
                transition: transform 400ms ease-in-out;
                color: ${isExpanded ? theme.accent : theme.primary};
            }
            
            border: 1px solid ${theme.accent};            
    `}  
`

const SidebarIcon = styled.div`
padding-left: 23px;
padding-right: 10px;
    display: grid;
    place-items: center;
    color: ${ ({isExpanded, theme}) => isExpanded ? theme.accent : theme.primary};
`

const SidebarTitle = styled.div`
flex: 1;
    color: ${ ({isExpanded, theme}) => isExpanded ? theme.accent : theme.primary};
`

const Split = styled.hr`
    border: 1px solid ${({theme}) => theme.secondary};
`

const SidebarDropdown = styled.ul`
    padding: 0;
    background-color: rgba(0,0,0,0.25);in-out;
    pointer-events: ${ ({isExpanded}) => isExpanded ? 'all' : 'none'};
    height: ${ ({isExpanded}) => isExpanded ? '100%' : '0'};
    opacity: ${ ({isExpanded}) => isExpanded ? '1' : '0'};
    transition: opacity 650ms ease-in-out, height 650ms 0ms;
`

const SidebarDropdownItem = styled.li`
    height: 3rem;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    &:hover {
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        background-color: ${({theme}) => theme.accent};
        color: ${({theme}) => theme.primary};
    }
`

const SidebarTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    margin-bottom: 10px;
`


const SidebarButton = styled.button`
  display: flex;
  padding: 20px 20px;
  justify-content: center;
  border-radius: 50px;
  margin: 0 5px;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({theme}) => theme.secondary};
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.accent};
    color: ${({theme}) => theme.primary};
    
  }

  &:hover svg {
    color: ${({theme}) => theme.primary};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  svg {
    font-size: 30px;
    color: ${({showSidebar, theme}) => showSidebar ? theme.primary : theme.accent};
  }
`

const MenuOpen = styled(MenuOpenIcon)`
  transition: transform 400ms ease-in-out;
  transform: ${({ rotate  }) => (rotate === 'true' ? 'rotate(0deg)' : 'rotate(180deg)')};
`

const SubMenuArrow = styled(KeyboardArrowLeftIcon)`
  margin-right: 10px;
  height: 30px;
  width: 30px;
`

export default function Sidebar({showSidebar, toggleSidebar}) {

	const [expandedItems, setExpandedItems] = useState([])

	const handleItemClick = (index) => {
		if (expandedItems.includes(index)) {
			setExpandedItems((prevState) =>
				prevState.filter((item) => item !== index)
			)
		} else {
			setExpandedItems((prevState) => [...prevState, index])
			if (!SidebarData[index].categories && SidebarData[index].link) {
				window.location.pathname = SidebarData[index].link
			}
		}
	}



	return (
		<SidebarContainer showSidebar={showSidebar}>
			<SidebarTopContainer>
				<SportsCasinoIcon
					href='/casino'
					title='Casino'
				/>

				<SportsCasinoIcon
					href='/sports'
					title='Sports'
				/>
                
				<SidebarButton onClick={toggleSidebar} showSidebar={showSidebar}>
					<MenuOpen rotate={showSidebar.toString()} />
				</SidebarButton>
			</SidebarTopContainer>
			<Split />
			<SidebarList showSidebar={showSidebar}>
				{SidebarData.map((val, index) => {
					const isExpanded = expandedItems.includes(index)

					return(
						<Fragment key={index}>
							<SidebarRow onClick={() => handleItemClick(index)} isExpanded={isExpanded}>
								<SidebarIcon isExpanded={isExpanded}>{val.icon}</SidebarIcon>
								<SidebarTitle isExpanded={isExpanded}>{val.title}</SidebarTitle>

								{val.categories && <SubMenuArrow />}
							</SidebarRow>

							{val.categories && (
								<Fragment>
									<SidebarDropdown isExpanded={isExpanded}>
										{val.categories.map((category, index) => (
											<SidebarDropdownItem
												key={index}
												onClick={() => {
													window.location.pathname =
                                                        category.link
												}}
											>
												<SidebarIcon>{category.icon}</SidebarIcon>
												<SidebarTitle>{category.title}</SidebarTitle>
											</SidebarDropdownItem>
										))}
									</SidebarDropdown>
								</Fragment>
							)}
						</Fragment>
					)
				})}
			</SidebarList>

		</SidebarContainer>
	)
}
