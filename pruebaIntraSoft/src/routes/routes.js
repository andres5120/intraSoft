
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ComponentLogin from '../componets/login';
import { createStackNavigator, createAppContainer, StackNavigator} from 'react-navigation';
import ComponentSearch from '../componets/search';
import ComponentLook from '../componets/Listado';

const AppNavigator = createStackNavigator(
    {
        Home: ComponentLogin,
        Details: ComponentSearch,
        Profile:  ComponentLook
    },
    {
        initialRouteName: 'Home'
    }
  );
  export default createAppContainer(AppNavigator);

 