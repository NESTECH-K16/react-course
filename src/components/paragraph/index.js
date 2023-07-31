import { useState } from 'react'

import classes from './paragraph.module.css'
// Controlled component
// stateful

const Paragraph = (props) => {
	const content = props.content
	const contentText = `All props values was received ${props.color} + ${props.backgroundColor}`

	const increaseNumber = () => {
		const newNumber = props.number + 1
		props.increaseNumber(newNumber)
	}

	return (
		<div className='bordered'>
			<div
				className={classes.para}
				style={{ color: props.color, backgroundColor: props.backgroundColor, marginBottom: 20 }}>
				<p>{content}</p>
			</div>
			<span className='number'>{props.number}</span>
			<button onClick={increaseNumber}>Click Me!</button>
		</div>
	)
}

export default Paragraph

