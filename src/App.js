import { useState } from 'react';
import './App.css';

// Component

const studentsData = [
  {
    id: Math.random(),
    username: 'Vương Hồng Quyết',
    hobbies: 'Bong da, cau long',
    courses: ['Java', 'PHP', 'React', 'Nodejs', 'Fullstack'],
    phone: '0362050424',
  },
  // {
  // 	id: Math.random(),
  // 	username: 'Nguyễn Anh Tài',
  // 	phone: '0338089200',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Phùng Văn Duy',
  // 	phone: '0911183701',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Nguyễn Quang Huy',
  // 	phone: '0976736018',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Nguyễn Xuân Kỳ',
  // 	phone: '0865997380',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Phạm Quốc Trường',
  // 	phone: '0818300154',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Vũ Tiến Thành',
  // 	phone: '0985462373',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Đoàn Quang Tịnh',
  // 	phone: '0336183665',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'BÙI TUẤN THẠCH',
  // 	phone: '0869647269',
  // },
  // {
  // 	id: Math.random(),
  // 	username: 'Lê Đắc Lực',
  // 	phone: '0966689312',
  // },
];
const ACTION_ADD = 'ADD';
const ACTION_EDIT = 'EDIT';
const ACTION_DELETE = 'DELETE';

const App = () => {
  const [students, setStudents] = useState(studentsData);
  const [studentUsername, setStudentUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [hobbies, setHobbies] = useState('');
  const options = ['Java', 'PHP', 'React', 'Nodejs', 'Fullstack'];
  const [courses, setCourses] = useState([]);

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [id, setId] = useState(NaN);
  const [action, setAction] = useState(ACTION_ADD);

  const fillForm = ({ username, phone, hobbies, courses }) => {
    setStudentUsername(username);
    setPhone(phone);
    setHobbies(hobbies);
    setCourses(courses);
  };
  const clearForm = () => {
    fillForm({ username: '', phone: '', hobbies: '', courses: [] });
  };

  const handleCheckboxChange = (value) => {
    if (courses.includes(value)) {
      setCourses(courses.filter((val) => val !== value));
    } else {
      setCourses([...courses, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === ACTION_ADD) {
      // add
      addStudentHandler();
    } else if (action === ACTION_EDIT) {
      // edit
      handleSaveChange();
    }
  };
  const addStudentHandler = () => {
    const newStudent = {
      id: Math.random(),
      username: studentUsername,
      phone,
      hobbies,
      courses,
    };

    const studentExisted = students.find((std) => std.phone === phone);
    // previousState students
    if (!studentExisted) {
      setStudents([...students, newStudent]);
      // alert(`Successfully!!!!`)
    } else {
      alert(`Phone number đã tồn tại!`);
    }

    clearForm();
  };

  const editStudent = (id, newValue) => {
    setStudents(
      students.map((std) => {
        if (std.id === id) return { id, ...newValue };
        else return std;
      })
    );
  };
  const handleSaveChange = () => {
    editStudent(id, {
      username: studentUsername,
      phone,
      hobbies,
      courses,
    });
    setId(NaN);
    setAction(ACTION_ADD);
    clearForm();
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((std) => std.id !== id));
  };

  const handleYes = () => {
    // Handle the "Yes" action from dialog
    setIsOpenDialog(false);
    deleteStudent(id);
    setId(NaN);
    setAction(ACTION_ADD);
  };

  const handleNo = () => {
    // Handle the "No" action from dialog
    setIsOpenDialog(false);
    setId(NaN);
    setAction(ACTION_ADD);
  };

  return (
    <div className='app'>
      <div className='student-form'>
        <form action='' onSubmit={handleSubmit}>
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
            <input
              id='phone'
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='form-controls'>
            <label htmlFor='hobbies'>Hobbies</label>
            <input
              id='hobbies'
              type='text'
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </div>
          <div className='form-controls'>
            <label>Courses:</label>
            <div className='checkbox-group'>
              {options.map((option) => (
                <label key={option}>
                  {option}
                  <input
                    type='checkbox'
                    value={option}
                    checked={courses.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className='form-actions'>
            <button className='submit'>
              {!isNaN(id) && action === ACTION_EDIT
                ? 'Save change'
                : 'Add New Student'}
            </button>
          </div>
        </form>
      </div>
      <div className='students'>
        {students.length > 0 ? (
          students.map((student, idx) => {
            return (
              <div className='students-student' key={student.id}>
                <div className='students-student__content'>
                  <span>{student.username}</span>
                  <span>{student.phone}</span>
                  <span>{student.hobbies}</span>
                  <span>{student.courses.join(', ')}</span>
                </div>

                <i
                  className='fa-regular fa-pen-to-square'
                  onClick={() => {
                    setAction(ACTION_EDIT);
                    setId(student.id);
                    fillForm(student);
                  }}
                ></i>
                <i
                  className='fa-solid fa-trash'
                  onClick={() => {
                    if (!isNaN(id)) clearForm();
                    setAction(ACTION_DELETE);
                    setId(student.id);
                    setIsOpenDialog(true);
                  }}
                ></i>
              </div>
            );
          })
        ) : (
          <p className='text-center'>No student available</p>
        )}
      </div>
      <dialog open={isOpenDialog}>
        <p>Are you sure you want to proceed?</p>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </dialog>
    </div>
  );
};

export default App;
