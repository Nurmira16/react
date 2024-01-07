import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "hey" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: "run" });
  }

  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <>
        <h1 onClick={this.handleClick}>{this.state.value}</h1>
      </>
    );
  }
}

export default ClassComp;
