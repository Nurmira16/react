import { Component } from "react";

// const Input = (props) => {
//   return <input {...props}></input>;
// };
// export default Input;

class Input extends Component {
  render() {
    const { ...props } = this.props;
    return <input {...props}></input>;
  }
}

export default Input;
