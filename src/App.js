import { useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/index'
// import Header from './components/layout/Header'
import Header from './components/layout/Header'

// Component

const studentsData = [
	// {
	// 	id: Math.random(),
	// 	username: 'Vương Hồng Quyết',
	// 	phone: '362050424',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Nguyễn Anh Tài',
	// 	phone: '338089200',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Phùng Văn Duy',
	// 	phone: '911183701',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Nguyễn Quang Huy',
	// 	phone: '0976736018',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Nguyễn Xuân Kỳ',
	// 	phone: '865997380',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Phạm Quốc Trường',
	// 	phone: '818300154',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Vũ Tiến Thành',
	// 	phone: '985462373',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Đoàn Quang Tịnh',
	// 	phone: '336183665',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'BÙI TUẤN THẠCH',
	// 	phone: '869647269',
	// },
	// {
	// 	id: Math.random(),
	// 	username: 'Lê Đắc Lực',
	// 	phone: '966689312',
	// },
]

const App = () => {
	// state cua element
	// const [state, setState] = useState(initialState)
	const [students, setStudents] = useState(studentsData)

	const [year, setYear] = useState('2023') //[number,  callback] camel case username =
	const [greetingClass, setGreetingClass] = useState(`Chào mừng lớp fullstack K16-2023`)
	const [listingIntro, setListingIntro] = useState(``)
	const [username, setUsername] = useState('')
	const [isChecked, setIsChecked] = useState(false)

	const [studentUsername, setStudentUsername] = useState('')
	const [phone, setPhone] = useState('')

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

	const changeUsernameHandler = (e) => {
		setUsername(e.target.value)
	}

	const hobbiesChangeHandler = (e) => {
		console.log(`e.target.value`, e.target.checked)
		setIsChecked(e.target.checked)
	}

	const addStudentHandler = (e) => {
		e.preventDefault()
		const newStudent = {
			id: Math.random(),
			username: studentUsername,
			phone,
		}

		const studentExisted = students.find((std) => std.phone === phone)
		// previousState students
		if (!studentExisted) {
			setStudents([...students, newStudent])
			// alert(`Successfully!!!!`)
		} else {
			// alert(`Học sinh đã tồn tại!`)
		}

		setStudentUsername('')
		setPhone('')
	}

	return (
		<div className='app'>
			{/* <p className='heading'>Render UI</p>
			<span className='year-current'>{year}</span>
			<input className='username-input' type='text' value={username} onChange={changeUsernameHandler} /> <br />
			<textarea name='' id='' cols='30' rows='10'></textarea>
			<div>
				<label htmlFor='hobby'>Code</label>
				<input id='hobby' type='checkbox' value={isChecked} onChange={hobbiesChangeHandler} />
			</div>
			<select value={year} onChange={onChangeHandler}>
				<option value='2023'>2023</option>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
			</select>
			<p className='result'>{greetingClass}</p>
			<p className='result'>{`Học sinh ${username} không thuộc ${renderIntro()}`}</p>
			{username ? <p className='result'>{`${username} ${isChecked ? 'đã' : 'chưa'} có kinh nghiệm lập trình!`}</p> : ''} */}
			<div className='student-form'>
				<form action='' onSubmit={addStudentHandler}>
					<div className='form-controls'>
						<label htmlFor='username'>Username</label>
						<input
							id='username'
							type='text'
							value={studentUsername}
							onChange={(e) => setStudentUsername(e.target.value)}
						/>
					</div>
					<div className='form-controls'>
						<label htmlFor='phone'>Phone</label>
						<input id='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
					</div>
					<div className='form-actions'>
						<button className='submit'>Add New Student</button>
					</div>
				</form>
			</div>
			<div className='students'>
				{students.length > 0 ? (
					students.map((student, idx) => {
						return (
							<div className='students-student' key={student.id}>
								<span>{student.username}</span> <br />
								<span>{student.phone}</span>
								<i className='fa-solid fa-trash'></i>
							</div>
						)
					})
				) : (
					<p className='text-center'>No student available</p>
				)}
			</div>
		</div>
	)
}

export default App

