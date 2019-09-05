import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import Favorites from './components/Favorites';
import Icon from 'react-native-elements';

const AppNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    headerMode: 'none',
    navigationOptions: {
      // headerVisible: false,
      // headerTitle:
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'LOGIN',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white', fontSize: 25 },
      headerLeftContainerStyle: { color: 'white' },
      headerTintColor: 'white',
      headerRight: (
        <Button
          onPress={() => alert('This is a help button!')}
          title="Help"
          color="#fff"
        />
      ),
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Register',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white', fontSize: 25 },
      headerLeftContainerStyle: { color: 'white' },
      headerTintColor: 'white',
      headerRight: (
        <Button
          onPress={() => alert('This is a help button!')}
          title="Help"
          color="#fff"
        />
      ),
    },
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      header: null,
      // headerTitle:
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      header: null,
      // headerTitle:
    },
  },
});

export default createAppContainer(AppNavigator);
