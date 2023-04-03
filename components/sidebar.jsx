import styled from 'styled-components'
import { SidebarData } from '../utils/SidebarData'
import { useState, Fragment } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

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

      ${({ isExpanded }) =>
		isExpanded &&
      `
      & > svg:last-child {
        transform: rotate(270deg);
      }
    `}  
`

const SidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`

const SidebarTitle = styled.div`
    flex: 70%;
`

// for the dropdown categories
const NestedList = styled.ul`
    list-style-type: none;
    padding: 0;
`

const SidebarDropdown = styled.ul`
    padding: 0;
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
        color: ${({ theme }) => theme.secondary};
        background-color: ${({ theme }) => theme.alt};
        cursor: pointer;
    }
`

const SidebarSeparator = styled.div`
  height: 2px;
  width: 100%;
  background-color: #b1bad3;
  margin: 8px 0;

`

export default function Sidebar() {

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
		<SidebarContainer>
			<SidebarList>
				{SidebarData.map((val, index) => {
					const isExpanded = expandedItems.includes(index)

					return(
						<Fragment key={index}>


							<SidebarRow onClick={() => handleItemClick(index)} isExpanded={isExpanded}>
								<SidebarIcon>{val.icon}</SidebarIcon>
								<SidebarTitle>{val.title}</SidebarTitle>

								{val.categories && <KeyboardArrowLeftIcon />}

							</SidebarRow>

							{isExpanded && val.categories && (
								<Fragment>
									<SidebarDropdown>
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
									<SidebarSeparator/>
								</Fragment>
							)}
						</Fragment>
					)
				})}
			</SidebarList>

		</SidebarContainer>
	)
}
