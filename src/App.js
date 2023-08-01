import { useState } from 'react'
import './App.css'

const App = () => {
	const [buttonStyles, setButtonStyles] = useState([
	  {
		backgroundColor: "red",
		borderRadius: "5px",
		fontSize: "16px"
	  },
	  {
		backgroundColor: "green",
		borderRadius: "10px",
		fontSize: "18px"
	  },
	  {
		backgroundColor: "blue",
		borderRadius: "15px",
		fontSize: "20px"
	  }
	]);
  
	const handleButtonClick = () => {
	  setButtonStyles([
		{
		  backgroundColor: getRandomColor(),
		  borderRadius: getRandomBorderRadius(),
		  fontSize: getRandomFontSize()
		},
		{
		  backgroundColor: getRandomColor(),
		  borderRadius: getRandomBorderRadius(),
		  fontSize: getRandomFontSize()
		},
		{
		  backgroundColor: getRandomColor(),
		  borderRadius: getRandomBorderRadius(),
		  fontSize: getRandomFontSize()
		}
	  ]);
	}
  
	const getRandomColor = () => {
	  const colors = ["red", "green", "cyan", "orange", "violet", "black"];
	  return colors[Math.floor(Math.random() * colors.length)];
	};
  
	const getRandomBorderRadius = () => {
	  const borderRadius = ["0px", "5px", "7px", "10px", "15px"];
	  return borderRadius[Math.floor(Math.random() * borderRadius.length)];
	};
  
	const getRandomFontSize = () => {
	  const fontSizes = ["14px", "16px", "18px", "20px"];
	  return fontSizes[Math.floor(Math.random() * fontSizes.length)];
	};
  
	return (
	  <div className="app-container">
		<div className="button-container">
		  <button style={buttonStyles[0]}>Button 1</button>
		  <button style={buttonStyles[1]}>Button 2</button>
		  <button style={buttonStyles[2]}>Button 3</button>
		</div>
		<button className="change-button" onClick={handleButtonClick}>
		  Change Style
		</button>
	  </div>
	);
  };

export default App

