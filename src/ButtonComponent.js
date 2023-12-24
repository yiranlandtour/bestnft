import React from "react";

class ButtonComponent extends React.Component {
  handleButtonClick = () => {
    alert("Button clicked!"); // 在这里可以执行你的逻辑
  };

  render() {
    return (
      <button onClick={this.handleButtonClick}>Click Me</button>
    );
  }
}

export default ButtonComponent;
