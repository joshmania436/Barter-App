import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import customSideBarMenu from './customSideBarMenu'
import BarterScreen from '../screens/BarterScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyBarters:{
      screen : BarterScreen,
    },
  Notifications :{
    screen : NotificationScreen
  },
    Settings : {
      screen : SettingScreen
    }
},
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })