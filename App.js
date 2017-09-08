import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      location: '',
      loading: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Food"
        onChangeText={(text) => this.setState({ food: text })}
        value={this.state.food}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: 'gainsboro'
  },
});
