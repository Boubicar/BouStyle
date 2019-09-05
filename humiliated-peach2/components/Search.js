import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  Platform,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Header, Input } from 'react-native-elements';
import { Icon, Image } from 'react-native-elements';
import CompleteFlatList from 'react-native-complete-flatlist';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  cell = (data, index) => {
    const item = data.cleanData ? data.cleanData : data;

    console.log(data.cleanData);
    console.log(
      'data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data'
    );

    console.log('this is index number : ' + index);

    console.log(item + ' this is original data');

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
          padding: 15,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 7,
        }}>
        <Text
          style={{
            fontWeight: 700,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.make}
        </Text>
        <Text
          style={{
            fontWeight: 700,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.model}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.price}
        </Text>
        <Text
          style={{
            fontWeight: 700,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.size}
        </Text>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <CompleteFlatList
          searchKey={['make', 'model', 'price', 'comment', 'img']}
          highlightColor="yellow"
          pullToRefreshCallback={() => {
          //  alert('refreshing');
          }}
          data={global.items}
          ref={c => (this.completeFlatList = c)}
          renderSeparator={null}
          renderItem={this.cell}
          onEndReached={() => console.log('reach end')}
          onEndReachedThreshold={0}
          searchBarBackgroundStyles={{ flex: 1 }}
          placeholder="Make your search in our database"
        />
      </View>
    );
  }
}
