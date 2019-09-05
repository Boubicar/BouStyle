import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Image, Icon, Button } from 'react-native-elements';

export default class SneakerSale extends Component {
  constructor(){
    super();
  }
  addItemCart (make, model, img, price,size)  {
    var maketest = String(make);
    var modeltest = String(model);
    var imgtest = String(img);
    var pricetest = String(price);
    var sizetest = String(size);
    let newCartItem = {
      'make': maketest,
      'model': modeltest,
      'img': imgtest,
      'price': pricetest,
      'size': sizetest
    };
    global.inCart.push(newCartItem);
    alert(global.inCart);
  }
  render() {

    return (
      <FlatGrid
        itemDimension={130}
        items={global.itemSale}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer]}>
            <Image source={{ uri: item.img }} style={styles.itemImg} />
            <View>
              <Text style={styles.itemName}>{item.make}</Text>
              <Text style={styles.itemName}>{item.model}</Text>
              <Text style={styles.itemName}>{item.price}</Text>
              <Text style={{fontSize:10}}>{item.size}</Text>
              <Button
                icon={<Icon name="add-shopping-cart"size={15} color="white" style={{marginLeft:5}} />}
                title="Add to cart"
                onPress={() =>
                    this.addItemCart(
                      item.make,
                      item.model,
                      item.img,
                      item.price,
                      item.size
                    )
                  }
                buttonStyle={{ marginTop:10,backgroundColor:'#28a745',width:125, height:40}}
                titleStyle={{fontSize:15,color: 'white'}}
              />
            </View>
          </View>
        )}
      />
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
