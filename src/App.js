import { useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/index'
// import Header from './components/layout/Header'
import Header from './components/layout/Header'

// Component

const studentsData = []

const App = () => {
	const [students, setStudents] = useState(studentsData)

	const [year, setYear] = useState('2023') //[number,  callback] camel case username =
	const [greetingClass, setGreetingClass] = useState(`Chào mừng lớp fullstack K16-2023`)
	const [listingIntro, setListingIntro] = useState(``)
	const [username, setUsername] = useState('')
	const [isChecked, setIsChecked] = useState(false)

	const [studentUsername, setStudentUsername] = useState('')
	const [phone, setPhone] = useState('')

	const [isEditing, setIsEditing] = useState(false);
	const [editedStudentId, setEditedStudentId] = useState(null);
	const [editedUsername, setEditedUsername] = useState('');
	const [editedPhone, setEditedPhone] = useState('');



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

		if (studentUsername.trim() === '' || phone.trim() === '') {
			alert('Hãy nhập thông tin');
			return;
		}

		const usernamePattern = /^[a-zA-Z\u00C0-\u024F\s]+$/;
  		if (!usernamePattern.test(studentUsername)) {
    		alert('Username chỉ chứa các ký tự');
    		return;
  		}
		const phonePattern = /^\d+$/;
		if (!phonePattern.test(phone)) {
			alert('Phone chỉ chứa các số');
			return;
		}

		const newStudent = {
			id: Math.random(),
			username: studentUsername,
			phone,
		}

		const studentExisted = students.find((std) => std.phone === phone)
		// previousState students
		if (!studentExisted) {
			setStudents([...students, newStudent])
			alert(`Successfully!!!!`)
		} else {
			alert(`Học sinh đã tồn tại!`)
		}

		setStudentUsername('')
		setPhone('')
	}

	const editStudentHandler = (id) => {
		const student = students.find((std) => std.id === id);
  		setEditedStudentId(id);
  		setEditedUsername(student.username);
  		setEditedPhone(student.phone);
  		setIsEditing(true);
	}

	const removeStudentHandler = (id) => {
		const updatedStudents = students.filter((student) => student.id !== id);
  		setStudents(updatedStudents);
	}

	const saveChangeHandler = (studentId) => {
		const updatedStudents = students.map((student) => {
		  	if (student.id === studentId) {
				return {
			  		...student,
			  		username: editedUsername,
			  		phone: editedPhone,
				};
		  	}
		  	return student;
		});
		setStudents(updatedStudents);
		setIsEditing(false);
	};
	  

	return (
		<div className='app'>
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
          						{isEditing && editedStudentId === student.id ? (
            						<div>
              							<input type='text' value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)} />
              							<input type='text' value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
              							<button onClick={() => saveChangeHandler(student.id)}>Lưu</button>
              							<button onClick={() => setIsEditing(false)}>Hủy</button>
            						</div>
          						) : (
            						<>
              							<span>{student.username}</span> 
              							<span>{student.phone}</span>
										<div className='icons'>
              								<i 
												className='fa-solid fa-pen' 
												onClick={() => editStudentHandler(student.id)}
												title='Edit'
											></i>
              								<i 
												className='fa-solid fa-trash' 
												onClick={() => removeStudentHandler(student.id)}
												title='Delete'	
											></i>
										</div>
									</>
          						)}
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

