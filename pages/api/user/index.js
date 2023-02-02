/* eslint-disable import/no-anonymous-default-export */
import db from '../../../services/db'

export default async (req, res) => {
	try {
		const { uid } = req.body
		const users = await db.collection('users').get()
		const usersData = users.docs.map(user => user.data())

		if (usersData.some(user => user.uid === uid)) {
			res.status(400).end()
		} else {
			const { id } = await db.collection('users').doc(uid).set({
				...req.body,
				created: new Date().toISOString(),
			})
			res.status(200).json({ id })
		}
	} catch (e) {
		res.status(400).end()
	}
}