import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './components/Tabs'
import MobileStatusBar from './components/Statusbar'
import { purple } from './utils/colors'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MobileStatusBar backgroundColor={purple} barStyle='light-content' />
        <MainNavigator />
      </View>
    );
  }
}

export default App