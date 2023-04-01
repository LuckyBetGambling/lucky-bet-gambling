import Head from 'next/head'
import styled from 'styled-components'
import { Fragment } from 'react'


const Page = styled.div`
  min-height: calc(100vh - 30px);
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Sports(){

	return(
		<Fragment>
			<Page>
				<h1>Sports</h1>
			</Page>
		</Fragment>
        
	)
}