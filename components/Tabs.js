import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createMaterialTopTabNavigator,
  } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'
import Dashboard from './Dashboard'
import NewDeck from './NewDeck'
import DeckView from './DeckView'


  const router = {
    History: {
      screen: Dashboard,
      defaultNavigationOptions: {
        title: 'Dashboard',
        headerTintColor: purple,
        headerStyle: {
          backgroundColor: white,
        },
      },
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor }) =>
          Platform.OS === 'ios' && <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
  
      },
    },
    AddEntry: {
        screen: NewDeck,
        defaultNavigationOptions: {
          title: 'Add Deck',
          headerTintColor: purple,
          headerStyle: {
            backgroundColor: white,
          },
        },
        navigationOptions: {
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ tintColor }) =>
            Platform.OS === 'ios' && <FontAwesome name="plus-square" size={30} color={tintColor} />
        },
      },
    };
  
    const navigationOptions = {
      tabBarOptions: {
        showIcon: true,
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
          padding: 10,
          height: Platform.OS === 'ios' ? 60 : 'auto',
          fontSize: 18,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      },
    };
  
    const Tabs =
      Platform.OS === 'ios'
        ? createBottomTabNavigator(router, navigationOptions)
        : createMaterialTopTabNavigator(router)
  
  const MainNavigator = createStackNavigator({
          Home: {
            screen: Tabs,
            navigationOptions: {
              header: null,
            },
          },
          DeckView: {
            screen: DeckView,
            navigationOptions: {
              headerTintColor: white,
              headerStyle: {
                backgroundColor: purple,
              }
            }
          }
        })
  
  export default createAppContainer(MainNavigator);