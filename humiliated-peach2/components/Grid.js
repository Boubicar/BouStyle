import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card, Image, Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import CompleteFlatList from 'react-native-complete-flatlist';


export default class Grid extends Component {
  state = {
    isModalVisible: false,
  };
  constructor(items) {
    super();
    global.items = [
      {
        make: 'Adidas',
        model: 'NMD',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4206190_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '180$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Adidas',
        model: 'UltraBoost',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4206183_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '279$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Adidas',
        model: 'Yeezy Boost 350',
        size: '',
        img:
          'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Beluga-2pt0/Images/Adidas-Yeezy-Boost-350-V2-Beluga-2pt0/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256',
        comment: '',
        price: '300$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Nike',
        model: 'Air Vapormax',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4206279_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '299$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Nike',
        model: 'AirMax Ultra Moire',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4205645_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '199$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Nike',
        model: 'Huarache',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4208209_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '149$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Nike',
        model: 'Air Presto',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4208473?wid=300&hei=300&fmt=png-alpha',
        comment: '',
        price: '119$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Nike',
        model: 'Magistas',
        size: '',
        img:
          'https://soccerreviewsforyou.com/wp-content/uploads/2014/04/magista-fg.jpg',
        comment: '',
        price: '179$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Puma',
        model: 'Clyde Court',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4101968_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '109$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Puma',
        model: 'RS-X',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4206211_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '109$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Puma',
        model: 'Storm Origin',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4206530_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '169$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Puma',
        model: 'Ignite Flash',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4205787_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '89$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Puma',
        model: 'Suede Classic',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4520719_fr?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '79$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Jordan',
        model: 'Retro 1 OG',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4106506_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '179$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Jordan',
        model: 'Retro 11 Low IE',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/41018681_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '199$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Jordan',
        model: 'Retro 4 Toro Bravo',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/6265638?wid=300&hei=300&fmt=png-alpha',
        comment: '',
        price: '299$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Jordan',
        model: 'Retro 3',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4106636_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '249$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Jordan',
        model: 'Retro 9',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4106370_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '279$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Vans',
        model: 'SK8 HI',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4520094_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '79$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Vans',
        model: 'Old Skool',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '80$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Vans',
        model: 'Authentic',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4523454_fr?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '49$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Vans',
        model: 'Classic Slip On',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/6579738_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '80$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Vans',
        model: 'Style 36',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/6579782_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '85$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Timberland',
        model: '6inch Premium 640 Below Boots',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4625056_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '285$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Timberland',
        model: '6inch Premium WaterProof Boots',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4625037_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '285$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Timberland',
        model: 'Groveton Chukka',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4626497_fr?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '149$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Timberland',
        model: 'Waterproof Chukka Boots',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4626549_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '180$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Timberland',
        model: 'Amherst High Top',
        size: '',
        img:
          'https://images.footlocker.com/is/image/EBFL2/4625033_a1?wid=640&hei=640&fmt=png-alpha',
        comment: '',
        price: '105$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Doc Martens',
        model: 'Combs II',
        size: '',
        img:
          'https://littleburgundy.blob.core.windows.net/images/products/1_142040_FS.jpg',
        comment: '',
        price: '115$',
        favorite: 'false',
        inCart: 'false',
      },
      {
        make: 'Doc Martens',
        model: 'Lexington',
        size: '',
        img:
          'https://littleburgundy.blob.core.windows.net/images/products/1_141608_FS.jpg',
        comment: '',
        price: '185$',
        favorite: 'false',
        inCart: 'false',
      },
    ];
    global.favorite = [];
  }

  addItemFavorite (make, model, img, price)  {
    var maketest = String(make);
    var modeltest = String(model);
    var imgtest = String(img);
    var pricetest = String(price);
    let newfavoriteItem = {
      'make': maketest,
      'model': modeltest,
      'img': imgtest,
      'price': pricetest
    };
    global.favorite.push(newfavoriteItem);
    alert(global.favorite);
  }

  render() {
    return (
      <FlatGrid
        itemDimension={130}
        items={global.items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View style={[styles.itemContainer]}>
              <Image source={{ uri: item.img }} style={styles.itemImg} />
              <View>
                <Text style={styles.itemName}>{item.make}</Text>
                <Text style={styles.itemName}>{item.model}</Text>
                <Text style={styles.itemName}>{item.price}</Text>
                <Button
                  icon={
                    <Icon
                      name="ios-star"
                      type="ionicon"
                      size={15}
                      color="rgb(255,223,0)"
                    />
                  }
                  onPress={() =>
                    this.addItemFavorite(
                      item.make,
                      item.model,
                      item.img,
                      item.price
                    )
                  }
                  title="Add to favorite"
                  titleStyle={{ color: 'white', fontSize: 10 }}
                  buttonStyle={{
                    borderRadius: 0,
                    marginTop: 10,
                    width: 100,
                    backgroundColor: 'black',
                    borderWidth: 0.25,
                    borderColor: 'grey',
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
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
    justifyContent: 'flex-end',
    padding: 15,
    height: 350,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  itemImg: {
    resizeMode: 'contain',
    width: 150,
    height: 200,
  },
  // fullImageStyle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100%',
  //   width: '98%',
  //   resizeMode: 'contain',
  // },
});
