import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer}  from 'react-navigation'

export default class App extends React.Component{
  render (){
    return(
    <AppContainer/>
    )
    }
  }
const AppNavigator = createBottomTabNavigator({
  FB: {screens:fb},
  IN: {screens:In},
  })

  const AppContainer = createAppContainer(AppNavigator)
