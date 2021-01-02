import React, { Component } from 'react';
import {
  Title,
  Button,
  Icon,
  Text,
  View,
  
} from 'native-base';


import { StatusBar, StyleSheet, Image, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Profile extends Component {
 
      
  render() {
    <StatusBar backgroundColor="#151e25" barStyle="light-content"/>
    return(
       
    
      
    <View >
      <View style={{height:hp('10%'),backgroundColor:'#232d36'}}>
     
           <Button transparent>
             <Icon type="MaterialIcons" active name="arrow-back" style={{marginTop:15,fontSize: 24, color: '#fff'}} />
             <Title style={{flex:1,marginLeft: 20,marginTop:15, fontSize: 20, color: '#fff'}}>
         Profile
         </Title>
           </Button> 
     </View>
     <View style= { styles.setResponsive }>
        <View>
        <TouchableHighlight style={ styles.setImgContainer }>
            <Image style={ styles.image } source={require("./assets/img.jpg")}   />
            </TouchableHighlight> 
            <Icon type="MaterialIcons" active name="camera_ait" style={styles.icon} onPress={}/>
            </View>
       
              <Button transparent>
                <Icon type="MaterialIcons" active name="person" style={{ marginLeft: 25, fontSize: hp('4%'), color: '#808080'}} />
                <Title style={{marginLeft: 18, fontSize: hp('2.2%'), color: '#808080'}}>
            Name
            </Title>
            <Icon type="MaterialIcons" active name="create" style={{marginLeft:200, fontSize: hp('3%'), color: '#0eb39c'}} />
           
              </Button>
              <Text style={{marginLeft: 85, marginBottom: 13, fontSize: hp('2.6%'), color: '#fff'}}>
            Blum
            </Text>
            <Text style={{marginLeft: 85, fontSize: hp('1.8%'), color: '#808080'}}>
            This is not your username or pin. This name  
            </Text>
            <Text style={{marginLeft: 85, marginBottom:10, fontSize: hp('1.8%'), color: '#808080'}}>
            will be visible to your WhatsApp contacts.  
            </Text>
              <View
                style={{
                  borderBottomColor: '#585858',
                  borderBottomWidth: 0.5,
                  marginLeft: 85,
                  //marginRight: 5,
                  //color: '#808080',
                }}
              />
              <Button transparent>
                <Icon type="MaterialIcons" active name="info" style={{marginLeft: 25, fontSize: hp('4%'), color: '#808080'}} />
                <Title style={{marginLeft: 18,fontSize: hp('2.3%'), color: '#808080'}}>
            About
            </Title>
            <Icon type="MaterialIcons" active name="create" style={{ marginLeft:200, fontSize: hp('3%'), color: '#0eb39c'}} />
            
              </Button>
              <Text style={{marginLeft: 85, marginBottom: 13, fontSize: hp('2.6%'), color: '#fff'}}>
            Hey! WhatsApp!
            </Text>
              <View
                  style={{
                  borderBottomColor: '#585858',
                  borderBottomWidth: 0.5,
                  marginLeft: 85,
                  //marginRight: 20
                }}
              />
              <Button transparent>
                <Icon type="MaterialIcons" active name="call" style={{marginLeft: 25, fontSize: hp('4%'), color: '#808080'}} />
                <Title style={{marginLeft: 18, fontSize: hp('2.3%'), color: '#808080'}}>
            Phone
            </Title>
              </Button>
              <Text style={{marginLeft: 85, marginBottom: 13, fontSize: hp('2.6%'), color: '#fff'}}>
            0123456789
            </Text>
            </View>
            </View>
          
    );
  }
}
const styles = StyleSheet.create({
  setResponsive: {
    height: hp('100%'), // 100% of height device screen
    width: wp('100%'),
    backgroundColor: '#151e25',
    
    
  },
  image: {
    height: hp('25%'),
    width: hp('25%'),
    borderRadius: hp('12.5%'), 
    marginTop: 25,
    alignSelf: 'center',
    marginLeft: 13,
  },
  icon: {
    backgroundColor: '#0eb39c',
    
    flexDirection:'row',
    position:'absolute',
    alignItems: 'center',
  justifyContent: 'space-between',
    top:125,
    right:90,
   
    width: hp('7%'),
    height:hp('7%'),
    borderRadius: hp('3.5%'),
    
   }
});
module.exports = Profile
