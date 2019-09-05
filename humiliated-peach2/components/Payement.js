import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { Component,ScrollView} from 'react';
import { CheckBox,Button, Divider,Input} from 'react-native-elements'; 


export default class Payement extends Component {

  
  render() {
    return ( 
         <View>
           <View>
           <Text style={{marginBottom:10,marginTop:10, marginLeft: 7}}>Select a Payment method</Text>
           <Divider style={{backgroundColor: 'black'}}/>
           <CheckBox
              title='Visa'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              //checked={this.state.checked}
              containerStyle={{width:150 }}
            />
            <CheckBox
              title='MasterCard'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              //checked={this.state.checked}
              containerStyle={{width:150 }}
            />
            <CheckBox
              title='Paypal'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              //checked={this.state.checked}
              containerStyle={{width:150 }}
            />
           <Divider style={{backgroundColor: 'black'}}/>
           </View>
           <View>
            <Input placeholder='Full Name on Card' containerStyle={{marginBottom:10}}/>
            <Input
              placeholder='Credit Card Number'
               rightIcon={{ type: 'material', name: 'credit-card'}}
               containerStyle ={{ paddingLeft:'auto',paddingRight:'auto' ,marginBottom:10}}
            />
            <View style={{flexDirection:'row'}}>
               <View style={{width:150}}>
               <Input placeholder='CVV' containerStyle={{marginBottom:10}}/>
               </View>
               <View style={{width:195}}>
               <Input placeholder='Exp Date' containerStyle={{marginBottom:10}}/> 
               </View>
            </View>
           
           </View>
           
           <View>
             <Button title = "Submit" type="outline" buttonStyle={{marginLeft: 50, marginRight: 50,marginTop: 100,marginBottom: 20,
           borderColor:'black'}} titleStyle={{color:'black'}} /> 
           </View>
         </View> 
         

    
    );
  }
}

