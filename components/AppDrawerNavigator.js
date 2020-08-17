import {createDrawerNavigator} from 'react-navigation-drawer';
import customSideBarMenu  from './customSideBarMenu';
import BarterScreen from '../screens/BarterScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen
    },
  MyBarters:{
      screen : BarterScreen,
    },
    Setting : {
      screen : SettingScreen
    }
},
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })