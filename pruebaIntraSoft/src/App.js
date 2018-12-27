

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import ComponentLogin from './componets/login';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import ComponentSearch from './componets/search';
import AppNavigator from './routes/routes';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render() {
    return(
      <AppContainer />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },

});
