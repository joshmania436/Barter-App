import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {DrawerItems} from 'react-native-drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class customSideBarMenu extends React.Component{
    render(){
        return(
            <View style ={{flex:1}}>
                <DrawerItems {...this.props}/>
                <View  style ={{flex:1,justifyContent:'flex-end,'}}>
                    <TouchableOpacity style ={{justifyContent:'center',padding:10,height:20}}
                        onPress={()=>{
                            this.props.navigation.navigate('Welcome Screen')
                            firebase.auth().signOut();
                        }}>
                            <Text> Logout </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}