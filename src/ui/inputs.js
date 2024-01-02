import classes from "../style.module.css";
const Input = (props) => {
  return <input className={classes.inputCustom} {...props}></input>;
};
export default Input;
