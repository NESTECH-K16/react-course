import { useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/index'

// Component
const App = () => {
	// state cua element
	// const [state, setState] = useState(initialState)

	const [year, setYear] = useState('2023') //[number,  callback] camel case username =
	const [greetingClass, setGreetingClass] = useState(`Chào mừng lớp fullstack K16-2023`)
	const [listingIntro, setListingIntro] = useState(``)
	// two way binding
	const renderIntro = () => {
		let introStr = ''
		if (year === '2023') {
			introStr = `Danh sách học sinh không phải là của các khoá 2022, 2021`
		} else if (year === '2022') {
			introStr = `Danh sách học sinh không phải là của các khoá 2023, 2021`
		} else {
			introStr = `Danh sách học sinh không phải là của các khoá 2023, 2022`
		}
		// setListingIntro(introStr)
		return introStr
	}

	const onChangeHandler = (event) => {
		console.log('Change in Select...', event.target.value)
		setYear(event.target.value) // ham bat dong bo

		if (event.target.value === '2023') {
			setListingIntro(`Danh sách học sinh không phải là của các khoá 2022, 2021`)
		} else if (event.target.value === '2022') {
			setListingIntro(`Danh sách học sinh không phải là của các khoá 2023, 2021`)
		} else {
			setListingIntro(`Danh sách học sinh không phải là của các khoá 2023, 2022`)
		}
	}

	return (
		<>
			<p className='heading'>Render UI</p>
			<span className='year-current'>{year}</span>
			{/* TWO WAY binding */}
			<select value={year} onChange={onChangeHandler}>
				<option value='2023'>2023</option>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
			</select>
			<p className='result'>{greetingClass}</p>
			<p className='result'>{renderIntro()}</p>
			{/* <p className='result'>{listingIntro}</p> */}

			{/* <Paragraph color='salmon' backgroundColor='black' content='Paragraph number 2' showInBody={false} /> */}
		</>
	)
}

export default App

