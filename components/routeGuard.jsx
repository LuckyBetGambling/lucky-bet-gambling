import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './userContext'

export default function RouteGuard({ children }) {
	const router = useRouter()
	const [authorized, setAuthorized] = useState(true)

	const {authUser, loading} = useAuth()
	const privatePaths = '/user'
	const adminPath = '/admin'

	const url = router.asPath

	useEffect(
		() => {
			if( !loading && !authUser && url.includes(privatePaths)) {
				console.log(loading, authUser, privatePaths)
				setAuthorized(false)
				router.push('/')
			}
			else if ( !loading && authUser?.uid != 'WsVhDmCACLgef68pkaSi2z1iZ2M2' && url.includes(adminPath)) {
				setAuthorized(false)
				router.push('/')
			}
			
		}, [loading, authUser, url]
	)

	return (authorized && children)
}