import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RouteGuard({ auth, isAdmin, children }) {
	const router = useRouter()
	const [authorized, setAuthorized] = useState(false)

	useEffect(() => {
		// on initial load - run auth check 
		authCheck(router.asPath)

		// on route change complete - run auth check 
		router.events.on('routeChangeComplete', authCheck)

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off('routeChangeComplete', authCheck)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function authCheck(url) {
		// redirect to login page if accessing a private page and not logged in 
		const privatePaths = '/user'
		const adminPath = '/admin'
		if ( auth.currentUser == null && 
            (url.includes(privatePaths) || url.includes(adminPath)) 
		) {
			console.log('XXX')
			setAuthorized(false)
			router.push({
				pathname: '/'
			})
		} 
		else if (!isAdmin && url.includes(adminPath)) {
            
			console.log('YYY')
			setAuthorized(false)
			router.push({
				pathname: '/'
			})
		}
		else {
			setAuthorized(true)
		}
	}

	return (authorized && children)
}