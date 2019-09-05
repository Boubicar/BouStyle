import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const userInfo = { userName: 'Admin', password: '12345' };

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  async signIn() {
    const { navigate } = this.props.navigation;
    if (
      userInfo.userName === this.state.userName &&
      userInfo.password == this.state.password
    ) {
      alert('Logged In ');
      navigate('MainPage');
      //this.navigate('MainPage');
    } else {
      alert('Wrong UserName or Password');
    }
  }

  functionCombine() {
    this.signIn();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerArea}>
          <Input
            placeholder="Enter User Name"
            containerStyle={{
              marginBottom: 20,
              width: 350,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            onChangeText={userName => this.setState({ userName })}
            value={this.state.userName}
          />
          <Input
            placeholder="Password"
            containerStyle={{
              width: 350,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            onPress={() => this.functionCombine()}
            title="Login"
            type="outline"
            buttonStyle={{
              marginLeft: 50,
              marginRight: 50,
              marginTop: 100,
              marginBottom: 20,
              borderColor: 'black',
            }}
            titleStyle={{ color: 'black' }}
          />
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
  centerArea: {
    flex: 4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
  },
  // welcomeFont: {
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  // },
  // button: {
  //      marginLeft: 50,
  //      marginRight: 50,
  //      marginTop: 20,
  //      marginBottom: 20,
  //      borderColor: 'black',
  // }
});
