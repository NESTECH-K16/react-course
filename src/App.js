import './App.css'

function App() {
	const age = 14

	const renderContentFollowByAge = () => {
		if (age > 19) {
			return 1
		} else {
			return 2
		}
	}
  
	return (
		<div className='App'>
			<p>Hello React App</p>
			<a href='#'>Hello React App</a>
			<span className='age'>{age}</span>
			<br />
			{/* <span>{renderContentFollowByAge()}</span> */}
			{age > 19 ? 1 : age > 17 ? 2 : 3}
		</div>
	)
}

export default App

