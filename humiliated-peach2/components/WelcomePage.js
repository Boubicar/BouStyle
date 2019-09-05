import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    headerVisible: false,
    header: null,
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'BOUSTYLE',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={{ text: 'Help', style: { color: '#fff'} }}
        />

        <View
          style={{
            fllex: 1,
            justifyContent: 'stretch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Image
            source={{ uri: 'http://clipart-library.com/img/2102499.png' }}
            style={{
              width: 350,
              height: 350,
              resizeMode: 'contain',
              marginTop: 10,
            }}
          />
        </View>
        <View style={styles.centerArea}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Already a member?
          </Text>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={styles.button}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            If not
          </Text>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
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
  // headerArea:{
  //       flex:1,
  //       backgroundColor: 'black',
  //       height: 250,
  // },
  centerArea: {
    flex: 4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'black',
    

  },
  button: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 7,
    padding: 15,

  },
});
