import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Icon, Image } from 'react-native-elements';
import Payement from './Payement';
import { FlatGrid } from 'react-native-super-grid';

export default class Cart extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          icon={<Icon name="shopping-cart" size={15} color="white" />}
          title="Cart"
          onPress={this.toggleModal}
          buttonStyle={{ backgroundColor: 'transparent' }}
        />
        <Modal style={{ padding: 15 }} isVisible={this.state.isModalVisible}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 700 }}>Your Cart</Text>
            <FlatGrid
              itemDimension={130}
              items={global.inCart}
              // staticDimension={300}
              // fixed
              // spacing={20}
              renderItem={({ item, index }) => (
                <View>
                  <Text>{item.make}</Text>
                  <Text>{item.model}</Text>
                  <Text>{item.price}</Text>
                  <Text style={{ fontSize: 10 }}>{item.size}</Text>
                  <Button
                    buttonStyle={{ backgroundColor: 'red' }}
                    titleStyle={{ color: 'white' }}
                    title="Remove"
                    icon={
                      <Icon
                        name="remove-circle"
                        size={15}
                        color="white"
                        style={{ marginLeft: 5, marginRight: 10 }}
                      />
                    }
                  />
                </View>
              )}
            />
            <View>
              <Button
                buttonStyle={{
                  marginTop: 10,
                  backgroundColor: '#28a745',
                  width: '100%',
                  marginBottom: 10,
                }}
                titleStyle={{ color: 'white' }}
                title="CheckOut"
              />
              <Button
                buttonStyle={{
                  marginTop: 10,
                  backgroundColor: 'black',
                  width: '100%',
                  marginBottom: 10,
                }}
                title="Close"
                onPress={this.toggleModal}
                titleStyle={{ color: 'white' }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
