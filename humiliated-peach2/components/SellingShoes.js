import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native';
import { Button} from 'react-native-elements';
import { Header, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
// import ImagePicker from 'react-native-image-picker';

export default class SellingShoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.make =  [{
      value: 'Adidas',
    }, {
      value: 'Nike',
    }, {
      value: 'Puma',
    },{
      value: 'Timberland',
    },{
      value: 'Jordan',
    },{
      value: 'Doc Martens',
    },{
      value: 'Vans',
    }];
    this.model =  [{
      value: 'model 1',
    }, {
      value: 'model 2',
    }, {
      value: 'model 3',
    },{
      value: 'model 4',
    },{
      value: 'model 5',
    },{
      value: 'model 6',
    },{
      value: 'model 7',
    }];
    this.size =  [{
      value: '4 M US',
    }, {
      value: '5 M US',
    }, {
      value: '6 M US',
    },{
      value: '7 M US',
    },{
      value: '8 M US',
    },{
      value: '9 M US',
    },{
      value: '10 M US',
    },{
      value: '11 M US',
    },{
      value: '12 M US',
    },{
      value: '13 M US',
    }
    ];

  }

  render() {
    return (
      <View >
        <View style={styles.centerArea} >
          <Text style={{padding:15, marginBottom:10,marginTop:10,fontSize:30, fontWeight: 500}}>Selling Form</Text>
          <Text style={{padding: 15,width: 350,marginBottom:10, fontSize:20}}>Please fill the form bellow to sell your shoe</Text>
          <View>
          <Dropdown
        label='Make'
        data={this.make}
      />
          </View>
          <View>
        <Dropdown
            label='Model'
            data={this.model}
          />
          </View>
          <View>
          <Dropdown
            label='Model'
            data={this.size}
          />
          </View>
          <View style={{marginTop: 20,}}>
          <Text style={{padding: 15, marginBottom:10, fontSize:30, fontWeight:500}}>Asking Price</Text>
          <Input
            keyboardType="numeric"
            onChangeText={text => this.onChanged(text)}
            value={this.state.myNumber}
            maxLength={10} //setting limit of input
            placeholder="Asking Price"
            containerStyle={{
              marginTop: 10,
              width: 350,
              marginRight: 'auto',
              marginLeft: 'auto',
              borderColor: 'black',
              border: 1
            }}
          ></Input>
            </View>
            <View>
          <Text style={{padding:15}}> Upload a picture</Text>
        
            <Icon iconStyle={{}} reverse name="cloud-upload" />
          
          <Text style={{padding:15}}>Leave a description here</Text>

          <Input style={{width: 350, height:30, marginTop: 10, marginBottom:10}} placeholder="Write a description here"></Input>
            </View>
          <Button
            title="Submit"
            type="outline"
            buttonStyle={{
              borderWidth:0.5,
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
              marginBottom: 10,
              borderColor: 'black',
              backgroundColor:'white'
            }}
            titleStyle={{ color: 'black', }}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // flexDirection: 'column',
  //   // justifyContent: 'space-between',
  // },
  // // headerArea:{
  // //       flex:1,
  // //       backgroundColor: 'azure',
  // // },
  centerArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    // backgroundColor: 'red',
    textAlign: 'center',
  },
});
