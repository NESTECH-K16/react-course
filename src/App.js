import './App.css'
import Paragraph from './components/paragraph/index'

// Component
const App = () => {
	//

	// return <p className='para'>{number}</p>
	// self close
	return (
		<>
			<Paragraph color='lightcoral' backgroundColor='white' />
			<Paragraph color='salmon' backgroundColor='black' />
		</>
	)
}

export default App

