import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import AdminSidebar from '../../components/adminSidebar'
import Sidebar from '../../components/sidebar'
import Tabs from '../../components/tabs'

const Page = styled.div`
	min-height: calc(100vh - 30px);
	display: flex;
	flex-direction: column;

`

const AdminHeader = styled.section`
  width: 100%;
  height: 400px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`


export default function AdminPage() {

	const router = useRouter()
  
	return (
		<Page>
			<Head>
				<title>Admin </title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AdminHeader>
				<h1>Admin Dashboard</h1>
			</AdminHeader>

			<Sidebar/>

      
		</Page>
	)
}
