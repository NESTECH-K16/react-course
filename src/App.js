import { useEffect, useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/index'
// import Header from './components/layout/Header'
import Header from './components/layout/Header'
import { styled } from 'styled-components'

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

const StyledButton = styled.button`
	height: 44px;
	line-height: 44px;
	border-radius: 4px;
	border: none;
	padding: 0 24px;
	font-size: 24px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.5s ease;
`

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
	color: ${(props) => props.color};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;
`

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
	const [name, setName] = useState()
	const [course, setCourse] = useState('')
	const [formName, setFormName] = useState('Create Form')
	const [studentNeedUpdate, setStudentNeedUpdate] = useState('')
	const [users, setUsers] = useState([])
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		console.log('Run on the first time ...')
		const getUsers = async () => {
			try {
				const data = await fetch(`http://localhost:8000/users`)
				const users = await data.json()
				setUsers(users)
				console.log('data', await data.json())
			} catch (error) {}
		}

		getUsers()
	}, [timer])

	useEffect(() => {
		setTimeout(() => {
			const newTimer = timer + 1
			setTimer(newTimer)
		}, 3000)
	}, [timer])

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

	const formSubmitHandler = (e) => {
		e.preventDefault()
		if (formName === 'EDIT') {
			const newStudent = {
				id: studentNeedUpdate,
				username: studentUsername,
				phone,
				course,
			}
			// const studentsUpdated = [...students]

			// const currentStudentIdx = students.findIndex((std) => std.id === studentNeedUpdate.id)
			// studentsUpdated[currentStudentIdx] = newStudent
			// console.log('studentsUpdated', studentsUpdated)
			// setStudents([...studentsUpdated])

			const studentUpdated = students.map((std) => {
				if (std.id === studentNeedUpdate) {
					return { ...newStudent }
				}
				return std
			})

			setStudents(studentUpdated)
		} else {
			const newStudent = {
				id: Math.random(),
				username: studentUsername,
				phone,
				course,
			}
			const studentExisted = students.find((std) => std.phone === phone)
			if (!studentExisted) {
				setStudents([...students, newStudent])
			} else {
			}
		}

		setStudentUsername('')
		setPhone('')
	}

	const deleteHandler = (studentId) => {
		console.log('Id of student', studentId)
		const newStudentsUpdated = students.filter((std) => std.id !== studentId)
		alert(`Are u sure ?`)
		setStudents([...newStudentsUpdated])
	}

	const courseChangeHandler = (e) => {
		console.log(e)
		setCourse(e.target.value)
	}

	const editHandler = (id) => {
		// const newStudent = {}
		const currentStudentIdx = students.findIndex((std) => std.id === id)

		// students[currentStudentIdx] = newStudent
	}

	return (
		<div className='app'>
			{console.log('students', students)}
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
				{console.log('timer', timer)}
				{JSON.stringify(users)}
				<p className='form-heading'>{formName}</p>
				<form action='' onSubmit={formSubmitHandler}>
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
					<div className='course'>
						<p>Course?</p>
						<div className='flex gap-24'>
							<div className='flex'>
								<label htmlFor='yes'>JAVA</label>
								<input
									type='radio'
									name='course'
									id='yes'
									value='java'
									onChange={courseChangeHandler}
									checked={course === 'java'}
								/>
							</div>
							<div className='flex'>
								<label htmlFor='no'>NODE</label>
								<input type='radio' name='course' id='no' value='node' checked={course === 'node'} />
							</div>
							<div className='flex'>
								<label htmlFor='yes'>REACT JS</label>
								<input type='radio' name='course' id='yes' value='react' checked={course === 'react'} />
							</div>
							<div className='flex'>
								<label htmlFor='no'>PHP</label>
								<input type='radio' name='course' id='no' value='php' checked={course === 'php'} />
							</div>
						</div>
					</div>

					<div className='form-actions'>
						<Button $primary color='#000'>
							Add New Student
						</Button>
					</div>
				</form>
			</div>
			<div className='students'>
				{students.length > 0 ? (
					students.map((student, idx) => {
						return (
							<div className='students-student' key={student.id}>
								<span>{student.username}</span> <br />
								<span>{student.course}</span> <br />
								<span>{student.phone}</span>
								<i
									className='fa-solid fa-pen-to-square'
									onClick={() => {
										editHandler(student.id)
										setFormName('EDIT')
										const { username, phone, course } = student
										setStudentUsername(username)
										setPhone(phone)
										setCourse(course)
										setStudentNeedUpdate(student.id)
									}}></i>
								<i className='fa-solid fa-trash cursor-pointer' onClick={() => deleteHandler(student.id)}></i>
							</div>
						)
					})
				) : (
					<p className='text-center'>No student available</p>
				)}
			</div>
			<Paragraph />
		</div>
	)
}

export default App

