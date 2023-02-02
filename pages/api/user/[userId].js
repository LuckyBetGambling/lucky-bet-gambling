/* eslint-disable import/no-anonymous-default-export */
import db from '../../../services/db'

export default async (req, res) => {
	const { userId } = req.query

	try {
		if (req.method === 'PUT') {
			await db.collection('users').doc(userId).update({
				...req.body,
				updated: new Date().toISOString(),
			})
		} else if (req.method === 'GET') {
			const doc = await db.collection('users').doc(userId).get()
			if (!doc.exists) {
				res.status(404).end()
			} else {
				res.status(200).json(doc.data())
			}
		} else if (req.method === 'DELETE') {
			await db.collection('users').doc(userId).delete()
		}
		res.status(200).end()
	} catch (e) {
		console.error(e)
		res.status(400).end()
	}
}