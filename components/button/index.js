import classes from './button.module.css'
const Button = ({ text = 'Button', style = {} }) => {
  console.log(style)
  return (
    <button className={classes.btn} style={style}>
      {text}
    </button>
  )
}
export default Button
