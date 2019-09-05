import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.headerArea}></View>
        <Text style = {styles.welcomeFont}>  Welcome to the GOAT app  </Text>
        
        <View style = {styles.centerArea}>
          <Text style = {{textAlign: "center", width :350 ,fontSize: 15,fontWeight: 'bold'}}> Already a member? </Text>
          <Button title = "Sign In" type="outline" style={styles.button}> </Button>
          <Text style={{textAlign: "center", width :350,fontSize: 15,fontWeight: 'bold' }}> If not  </Text>
          <Button title = "Sign Up" type="outline" style={styles.button}> </Button>  
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
           backgroundColor: 'white',
      },
      headerArea:{
            flex:1, 
            backgroundColor: 'azure',
      },
      centerArea:{
            flex:4, 
           // backgroundColor: 'red',
            justifyContent: 'center',
            textAlign: 'center',            
            
      },
      welcomeFont: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
      }, 
      button: {
           marginLeft: 50, 
           marginRight: 50,
           marginTop: 20,
           marginBottom: 20,
      } 

}); 
