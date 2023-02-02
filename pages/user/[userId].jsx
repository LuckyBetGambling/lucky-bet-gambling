import Head from 'next/head'
import { useRouter } from 'next/router'
import db from '../../services/db'
import styled from 'styled-components'
import Tabs from '../../components/tabs'
import ProfileSection from '../../components/profileSection'

const Page = styled.div`
  margin-bottom: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfileHeader = styled.section`
  width: 100%;
  height: 400px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const ProfilePicture = styled.div`
  height: 250px;
  width: 250px;
  background-color: Lime;
  border-radius: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 100px;
  color: red;
`

const TabContainer = styled.div`
  transform: translateY(-5%);
`

const Wallet = styled.div`
  background-color: Lime;
  height: 100%;
`

const Statistics = styled.div`
  background-color: orange;
  height: 100%;
`

const Transactions = styled.div`
  background-color: magenta;
  height: 100%;
`

const Settings = styled.div`
  background-color: yellow;
  height: 100%;
`

const Profile = (props) => {

	const router = useRouter()
	const { user } = props
  
	const tabs = [
		{
			name: 'Profile',
			content: <ProfileSection user={user} />
		},
		{
			name: 'Wallet',
			content: <Wallet />
		},
		{
			name: 'Statistics',
			content: <Statistics />
		},
		{
			name: 'Transactions',
			content: <Transactions />
		},
		{
			name: 'Settings',
			content: <Settings />
		}
	]

	if (router.isFallback) {
		return (
		  <div>loading</div>
		)
	  } else {
		if (user) {
			return (
				<Page>
					<Head>
						<title>Profile </title>
						<meta name="description" content="Generated by create next app" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<ProfileHeader>
						<ProfilePicture>
							{user.providerData ? null : user.email[0].toUpperCase()}
						</ProfilePicture>
					</ProfileHeader>

					<TabContainer>
						<Tabs tabs={tabs} path={router.pathname} />
					</TabContainer>
			
				</Page>
			)
		}
		else {
			<div>How did you even get here lmao</div>
		}
	}
}

export const getStaticPaths = async () => {
	const users = await db.collection('users').get()
	const paths = users.docs.map(user => ({
	  params: {
			userId: user.data().uid
	  }
	}))
	return {
	  paths,
	  fallback: true
	}
}
  
export const getStaticProps = async (context) => {
	const { userId } = context.params
	const res = await db.collection('users').where('uid', '==', userId).get()
	const user = res.docs.map(user => user.data())
	if (user.length) {
	  return {
			props: {
		  		user: user[0]
			}
	  }
	} else {
	  return {
			props: {}
	  }
	}
}
  
export default Profile