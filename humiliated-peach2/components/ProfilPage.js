import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Header, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Favorites from './Favorites';
import { Avatar } from 'react-native-elements';
import YourSale from '../YourSale';
export default class ProfilPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Avatar
          style={styles.avatar}
          size="large"
          rounded
          title="User"
          onPress={() => alert('This user')}
          activeOpacity={0.7}
        />
        <View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>User1</Text>
              <Text style={styles.info}>First Name:</Text>
              <Text style={styles.info}>Last Name:</Text>
              <Text style={styles.info}>User:</Text>
              <Button
                buttonStyle={styles.buttonContainer1}
                title="Log Out"
                titleStyle={{ color: 'black' }}
              />
              <View style={styles.buttonContainer}>
                <Icon
                  iconStyle={{ marginRight: 10, fontWeight: 700 }}
                  name="ios-pricetag"
                  type="ionicon"
                  size={20}
                  color="red"
                />
                <Text>My Sales</Text>
              </View>
              <View style={{ width: '100%' }}>
                <YourSale />
              </View>
              <View style={styles.buttonContainer}>
                <Icon
                  iconStyle={{ marginRight: 10, fontWeight: 700 }}
                  name="ios-star"
                  type="ionicon"
                  size={20}
                  color="rgb(255,223,0)"
                />
                <Text>My Favorites</Text>
              </View>
              <View>
                <Favorites />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    borderRadius: 90,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginBottom: 15,
  },
  body: {
    marginTop: 40,
    width: '100%'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    color: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  buttonContainer1: {
    marginTop: 10,
    height: 45,
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
