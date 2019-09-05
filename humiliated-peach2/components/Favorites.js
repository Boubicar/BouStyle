import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Image, Icon, Button } from 'react-native-elements';

export default class Favorites extends Component {
  constructor(){
    super();
    this.state = {
        showView: true,
      }
  }
   removeView(){
       this.setState({
         showView: false
       });
       alert("Item removed with success")
    }
  render() {
    
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          Here is the list of your favorite Sneakers
        </Text>
        <FlatGrid
          itemDimension={130}
          items={global.favorite}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <View>
            <View>{this.state.showView &&  (
            <View style={[styles.itemContainer]} >
              <Image source={{ uri: item.img }} style={styles.itemImg} />
                <Text style={styles.itemName}>{item.make}</Text>
                <Text style={styles.itemName}>{item.model}</Text>
                <Text style={styles.itemName}>{item.price}</Text>
                <Button
                  icon={
                    <Icon
                      name="remove-circle"
                      size={15}
                      color="white"
                      style={{ marginLeft: 5, marginRight: 7 }}
                    />
                  }
                  title="Remove"
                  onPress={() => this.removeView()}
                  buttonStyle={{
                    marginTop: 10,
                    backgroundColor: 'red',
                    width: 125,
                    height: 40,
                  }}
                  titleStyle={{ fontSize: 15, color: 'white' }}
                />
                </View>
            )}
                </View>
                </View>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'stretch',
    padding: 15,
    height: 350,
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 175,
  },
  itemName: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  itemImg: {
    resizeMode: 'contain',
    width: 150,
    height: 200,
  },
});
