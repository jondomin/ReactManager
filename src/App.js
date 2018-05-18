import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';

class App extends Component {
  state = { }
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>Hello!M</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
