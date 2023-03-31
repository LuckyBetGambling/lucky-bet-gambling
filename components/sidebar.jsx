import styled from 'styled-components'
import { SidebarData } from '../utils/SidebarData'
import { useState, Fragment } from 'react'


const SidebarContainer = styled.div`
    background-color:  ${({theme}) => theme.secondary};
    max-width: 200px;
    min-height: 100%;
    position: fixed;
    top: 4.2rem;
    left: 0;
    bottom: 40px;
    right: 200px;
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

    &:hover {
        color: ${({ theme }) => theme.secondary};
        background-color: ${({ theme }) => theme.alt};
        cursor: pointer;
    }
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
		}
	}



	return (
		<SidebarContainer>
			<SidebarList>
				{SidebarData.map((val, index) => {
					const isExpanded = expandedItems.includes(index)

					return(
						<Fragment key={index}>
							<SidebarRow onClick={() => handleItemClick(index)}>
								<SidebarIcon>{val.icon}</SidebarIcon>
								<SidebarTitle>{val.title}</SidebarTitle>
							</SidebarRow>

							{isExpanded && val.categories && (
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
							)}
						</Fragment>
					)
				})}
			</SidebarList>

		</SidebarContainer>
	)
}


{/* <SidebarRow key={key} onClick={() => { window.location.pathname = val.link }}>
<SidebarIcon>{val.icon}</SidebarIcon>
<SidebarTitle>{val.title}</SidebarTitle>
</SidebarRow> */}