import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ReceiverDetailsScreen from '../screens/RecieverDetailsScreen'
import NotificationScreen from '../screens/NotificationsScreen'



export const StackNavigator = createStackNavigator({
  BarterList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Notification : {
     screen : NotificationScreen,
     navigationOptions:{
       headerShown : false
     }
   }
 },


  {
    initialRouteName: 'BarterList'
  }
);