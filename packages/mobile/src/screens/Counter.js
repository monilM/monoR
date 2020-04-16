import React from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  decreaseCounterAction,
  increaseCounterAction,
} from '@monorepo/components/src/counter/counter.action';
// Screen Dimensions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

// Screen: Counter
class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  //   render() {
  //     return (
  //       <SafeAreaView style={styles.container}>
  //         <Text style={styles.counterTitle}>Counter</Text>
  //         <View style={styles.counterContainer}>
  //           <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
  //             <Text style={styles.buttonText}>+</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </SafeAreaView>
  //     );
  //   }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  console.log('State:');
  console.log(state);
  // Redux Store --> Component
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = dispatch => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounterAction()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounterAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//export default Counter;
