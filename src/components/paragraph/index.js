import React from 'react'
import classes from './paragraph.module.css'

const Paragraph = (props) => {
	console.log('props', props)
	console.log('props color', props.color)
	console.log('props background color', props.backgroundColor)

	// {
	//   color: 'blue',
	//   backgroundColor: 'red'
	// }
	// console.log('classes', classes)

	return (
		<>
			<div
				className={classes.para}
				style={{ color: props.color, backgroundColor: props.backgroundColor, marginBottom: 20 }}>
				Paragraph
			</div>
			<button className={classes.btn}>Click Me!</button>
		</>
	)
}

export default Paragraph

