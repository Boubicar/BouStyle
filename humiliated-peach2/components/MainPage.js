import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Header, Input } from 'react-native-elements';
import { Icon, ButtonGroup, Tabs, Tab } from 'react-native-elements';
import Modal from 'react-native-modal';
import Grid from './Grid';
import SneakerSale from './SneakerSale';
import Cart from './Cart';
import SellingShoes from './SellingShoes';
import Search from './Search';
import ProfilPage from './ProfilPage';
import Favorites from './Favorites';

// import {ProfileIcon} from './Components/ProfileIcon';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  state = {
    isModalVisible: false,
  };
  constructor() {
    super();
    global.itemSale = [
      {
        make: 'Timberland',
        model: 'Waterproof Chukka',
        size: '6 US M',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4626549_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '180$',
      },
      {
        make: 'Timberland',
        model: 'Amherst High Top',
        size: '7 US M',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4625033_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '105$',
      },
      {
        make: 'Doc Martens',
        model: 'Combs II',
        size: '12 US M',
        img:
          'https://littleburgundy.blob.core.windows.net/images/products/1_142040_FS.jpg',
        comment: '',
        price: '115$',
      },
      {
        make: 'Doc Martens',
        model: 'Lexington',
        size: '9 US M',
        img:
          'https://littleburgundy.blob.core.windows.net/images/products/1_141608_FS.jpg',
        comment: '',
        price: '185$',
      },
    ];
    global.inCart = [];
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'LATEST TREND',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={<Cart />}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            <Grid />
          </ScrollView>
        </View>
      </View>
    );
  }
}

class StoreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'STORE PLACE',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={<Cart />}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            <SneakerSale/>
          </ScrollView>
        </View>
      </View>
    );
  }
}
class SellingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'SELLING PAGE',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={<Cart />}
        />
        <View
          style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            <SellingShoes />
          </ScrollView>
        </View>
      </View>
    );
  }
}
class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'SEARCH PAGE',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={<Cart />}
        />
        <View
          style={{ flex: 1, justifyContent: 'stretch', alignItems: 'stretch' }}>
          <ScrollView>
            <Search />
          </ScrollView>
        </View>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: 'black' }}
          leftComponent={{ icon: '', color: '#fff' }}
          centerComponent={{
            text: 'PROFILE PAGE',
            style: { color: '#fff', fontSize: 25 },
          }}
          rightComponent={<Cart />}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            <ProfilPage />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const home = <Text>Home</Text>;

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarOptions: { showIcon: true, labelStyle: { color: 'grey' } },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color="black" />
      ),
    },
  },
  Store: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarOptions: { showIcon: true, labelStyle: { color: 'grey' } },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="store" size={30} color="black" />
      ),
    },
  },
  Selling: {
    screen: SellingScreen,
    navigationOptions: {
      tabBarOptions: { showIcon: true, labelStyle: { color: 'grey' } },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pricetag" type="ionicon" size={30} color="black" />
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarOptions: { showIcon: true, labelStyle: { color: 'grey' } },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" type="ionicon" size={30} color="black" />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarOptions: { showIcon: true, labelStyle: { color: 'grey' } },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={30} color="black" />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // centerArea:{
  //       flex:4,
  //      // backgroundColor: 'red',
  //       justifyContent: 'center',
  //       textAlign: 'center',

  // },
  // bottomArea:{
  //       flex: 0.5,
  //       justifyContent: "flex-end",
  //       width: '100%',
  //       height: 35,
  //       backgroundColor: 'black',
  // },
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
