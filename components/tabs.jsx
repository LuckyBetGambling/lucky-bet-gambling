import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'

export const TabHead = styled.div`
  display: flex;
  background: black;
`
export const TabContainer = styled.div`
  width: 80vw;
  height: 80vh;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`
export const TabBody = styled.div`
  height: 100%;
`
export const Tab = styled.div`
  padding: 1em;
  text-align: center;
  background: ${({ theme, selected }) => (selected ? theme.accent : theme.secondary)};
  color:  ${({ theme, selected }) => (selected ? theme.primary : theme.accent)};
  flex: 1; 
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

	const [currentTab, setCurrentTab] = useState(router.query?.tab)

	const isSelected = (tabName) => {
		return currentTab == tabName
	}

	useEffect(
		() => {
			setCurrentTab(router.query?.tab)
		}, [router.query.tab]
	)

	return (
		<TabContainer>
			<TabHead>
				{tabs.map(
					(tab) => {
						return <Tab key={tab.name} selected={isSelected(tab.name)} 
							onClick={() => {
								setCurrentTab(tab.name)
								router.push(`/user/${router?.query?.userId}?tab=${tab.name}`, null, { shallow: true })
							}}>
							{tab.name}
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