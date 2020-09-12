import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import customSideBarMenu from './customSideBarMenu'
import BartersScreen from '../screens/BarterScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import {Icon} from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon
      name ="home" 
      type='font-awesome-5'
      />
    }
    },
  MyBarters:{
      screen : BartersScreen,
      navigationOptions:{
        drawerIcon:<Icon
         name ='box' 
         type='font-awesome-5'
         />
      }
    },
  Notifications :{
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon
       name="bell" 
       type ="font-awesome" 
       />
    }
  },
    Settings : {
      screen : SettingScreen,
      navigationOptions:{
        drawerIcon : <Icon 
        name="cog" 
        type ="font-awesome-5" 
        />
      }
    }
},
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
