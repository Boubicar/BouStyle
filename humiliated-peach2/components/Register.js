import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {Header,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.centerArea}>
        <Input  placeholder='Enter User Name' containerStyle={{ marginBottom:20, width:350, marginRight:"auto", marginLeft: "auto"}}></Input>
        <Input  placeholder='Enter First Name' containerStyle={{ marginBottom:20, width:350, marginRight:"auto", marginLeft: "auto"}}></Input>
        <Input  placeholder='Enter Last Name' containerStyle={{ marginBottom:20, width:350, marginRight:"auto", marginLeft: "auto"}}></Input>
        <Input placeholder='Password' containerStyle={{marginBottom:20 ,width:350, marginRight:"auto", marginLeft: "auto"}} secureTextEntry={true}></Input>
        <Input placeholder='Repeat Password' containerStyle={{ width:350, marginRight:"auto", marginLeft: "auto"}} secureTextEntry={true}></Input>
          <Button title = "Sign Up" type="outline" buttonStyle={{marginLeft: 50, marginRight: 50,marginTop: 100,marginBottom: 20,
           borderColor:'black'}} titleStyle={{color:'black'}}> </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'center', 
           
      },
      // headerArea:{
      //       flex:1, 
      //       backgroundColor: 'azure',
      // },
      centerArea:{
            flex:1, 
           // backgroundColor: 'red',
            justifyContent: 'center',
            textAlign: 'center',            
            
      } 

}); 
