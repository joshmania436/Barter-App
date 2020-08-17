import * as React from 'react'
import {Text,View,StyleSheet,TextInput,Alert,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {ListItem} from 'react-native-elements' 
import MyHeader from '../components/MyHeader'
 
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            allRequests:[]
        }
        this.requestRef =null
    }
    getAllRequests=()=>{
        this.requestRef =db.collection('excahnge_requests')
        .onSnapshot((snapshot)=>{
            var allRequests =snapshot.docs.map(document=>document.data())
            this.setState({
                allRequests:allRequests
            })
        })
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem
            key ={i}
            title ={item.item_name}
            subtitle={item.description}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style ={styles.Btn}>
                <Text style ={{color:'white'}}> View </Text>
            </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    render(){
        return(
            <View>
                 <MyHeader title ='BarterApp'/>
                 <FlatList
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                data={this.state.allRequests}/>
            </View>
        )
    }
}