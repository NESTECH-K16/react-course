import { useState } from 'react'
import './App.css'
import Button from './components/button'

// Component
const App = () => {
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({
    width: '200px',
    height: '100px',
    backgroundColor: 'blue',
    fontSize: '32px',
    borderRadius: '16px',
  })
  const [style3, setStyle3] = useState({
    width: '250px',
    height: '120px',
    backgroundColor: 'orange',
    fontSize: '42px',
    borderRadius: '24px',
  })

  const changeStyle = () => {
    setStyle1((previousState) => {
      return {
        ...previousState,
        backgroundColor: 'blue',
        color: 'black',
        width: '120px',
      }
    })
    setStyle2((previousState) => {
      return {
        ...previousState,
        backgroundColor: 'red',
        color: 'orange',
        width: '150px',
      }
    })
    setStyle3((previousState) => {
      return {
        ...previousState,
        backgroundColor: 'black',
        width: '300px',
        borderRadius: '8px',
      }
    })
  }

  return (
    <div>
      <Button text='Button 1' style={style1} />
      <Button text='Button 2' style={style2} />
      <Button text='Button 3' style={style3} />
      <Button onClick={changeStyle}>Change Style</Button>
    </div>
  )
}

export default App
