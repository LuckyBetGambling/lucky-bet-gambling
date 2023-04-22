import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'

export const TabHead = styled.div`
  display: flex;
  background: none;
`
export const TabContainer = styled.div`
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.51);
  border-radius: 14px;
`
export const TabBody = styled.div`
`
export const Tab = styled.div`
  padding: 1em;
  text-align: center;
  background: ${({ theme, selected }) => (selected ? theme.accent : theme.secondary)};
  color:  ${({ theme, selected }) => (selected ? theme.primary : theme.accent)};
  flex: 1; 
  font-weight: 900;
  letter-spacing: 1px;
  
  &:first-child {
	border-top-left-radius: 14px;
  }

  &:last-child {
	border-top-right-radius: 14px;
  }

  &:hover {
	cursor: pointer;
  }
`

/**
 * Component that contans mutiple tabs for profile page
 * @param {router} router - nextJS router to add tabs to history but not navigate new page
 * @param {object[]} tabs - array of tab objects
 * @param {string} path - path for routes to start from
 * @returns 
 */
const Tabs = ({ router, tabs, path }) => {

	const [currentTab, setCurrentTab] = useState(tabs[0].name)

	// TODO: Need to refactor tabs to be more use case agnostic and need 
	//       to clean up query after dismount
	const {
		query: { userId }
	} = router

	const isSelected = (tabName) => {
		return currentTab == tabName
	}

	return (
		<TabContainer>
			<TabHead>
				{tabs.map(
					(tab) => {
						return <Tab key={tab.name} selected={isSelected(tab.name)} onClick={() => {setCurrentTab(tab.name)}}>
							<Link href={{ pathname: `${path}`, query: {userId: userId, tab: tab.name}}} shallow passHref>
								<div>{tab.name}</div>
							</Link>
						</Tab>
					}
				)}
			</TabHead>
			<TabBody>
				{tabs.map(
					(tab) => {
						return  (
							<React.Fragment key={tab.name} >
								{isSelected(tab.name) && tab.content}
							</React.Fragment>
						)
					}
				)}
			</TabBody>
		</TabContainer>
	)
}

export default withRouter(Tabs)