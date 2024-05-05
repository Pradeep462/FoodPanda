import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    const count1 = this.state.count1;
    return (
      <div className="user">
        <h2>{name}</h2>
        <h2>Creating this food panda app to lerne react</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          click to update count
        </button>
        <h3>count: {count1}</h3>
      </div>
    );
  }
}

export default UserClass;
