import { useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/index'

// Component
const App = () => {
	const [number, setNumber] = useState(0)

	return (
		<>
			<Paragraph
				color='lightcoral'
				backgroundColor='white'
				content='Paragraph number 1'
				showInBody={true}
				number={number}
				increaseNumber={setNumber}
			/>

			{/* <Paragraph color='salmon' backgroundColor='black' content='Paragraph number 2' showInBody={false} /> */}
		</>
	)
}

export default App

