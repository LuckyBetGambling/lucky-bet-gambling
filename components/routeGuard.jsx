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
				setAuthorized(false)
				router.push('/')
			}
			else if ( !loading && authUser?.uid != 'kQOKspTFzxYsA4AyGRjACkMB1aP2' && (
				url.includes(privatePaths) || url.includes(adminPath)
			)) {
				setAuthorized(false)
				router.push('/')
			}
		}, [loading, authUser, url]
	)

	return (authorized && children)
}