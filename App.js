import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <WelcomeScreen/>
      </View>
    )
  }
}