import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './components/Tabs'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}

export default App