import { useEffect, useState } from 'react'
import './Notification.scss'

const Notification = ({ success, message }) => {

	const [type, setType] = useState('')

	useEffect(() => {
		setType(success ? 'success' : 'error')
	}, [success])

	return (
		<div className={`notification-container ${type}`}>
			{message}
		</div>
	)
}

export default Notification