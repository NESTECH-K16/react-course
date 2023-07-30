import classes from './button.module.css'
const Button = ({ text = 'Button', style = {}, onClick = () => { } }) => {
  console.log(style)
  return (
    <button className={classes.btn} style={style} onClick={onClick}>
      {text}
    </button>
  )
}
export default Button
