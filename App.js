import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import MainNavigator from './components/Tabs'
import MobileStatusBar from './components/Statusbar'
import { purple } from './utils/colors'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MobileStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App