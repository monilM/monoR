import React from "react";
import { connect } from "react-redux";
import {
  decreaseCounterAction,
  increaseCounterAction
} from "@monorepo/components/src/counter/counter.action";
class Counter extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100vh"
        }}
      >
        <h2 style={{ fontSize: 18 }}>Counter</h2>
        <div>
          <button
            style={{ marginLeft: 15 }}
            onClick={this.props.reduxDecreaseCounter}
          >
            -
          </button>
          <span style={{ marginLeft: 15, marginRight: 15 }}>
            {this.props.counter}
          </span>
          <button onClick={this.props.reduxIncreaseCounter}> + </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State:");
  console.log(state);
  // Redux Store --> Component
  return {
    counter: state.counter.counter
  };
};

const mapDispatchToProps = dispatch => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounterAction()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounterAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
