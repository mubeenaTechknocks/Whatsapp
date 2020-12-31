import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 FlatList,
  TouchableOpacity,Image,
  ActivityIndicator,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { List, ListItem, SearchBar,Avatar,ScrollView,SafeAreaView } from "react-native-elements";

import Icon from 'react-native-vector-icons/MaterialIcons';



export  default  class Chats extends Component{

  constructor(props) {
    super(props);
    this.state = {
      details:[
        {
          id:'1',
          name: 'Amy Farha',
          avatar_url: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          subtitle: 'HOW ARE YOU',
          time:'22:02',

        },
        {
          id:'2',
          name: 'Chris Jackson',
          avatar_url: 'https://picsum.photos/id/237/200/300',
          subtitle: 'hello',
          time:'22:00',
        },
        {
          id:'3',
          name: 'Micheal',
          avatar_url: 'https://picsum.photos/seed/picsum/200/300',
          subtitle: 'YEA',
          time:'21:45'
        },
        {
          id:'4',
          name: 'Andrew',
          avatar_url: 'https://picsum.photos/200/300?grayscale',
          subtitle: 'come on',
          time:'21:40'
        },
         {
          id:'5',
          name: 'Seba',
          avatar_url: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
          subtitle: 'mmMM',
          time:'21:38'
        },
        {
          id:'6',
          name: 'Azim',
          avatar_url: 'https://picsum.photos/200/300/?blur=2',
          subtitle: 'WILL DO IT',
          time:'20:07'
        },
        {
          id:'7',
          name: 'Saha',
          avatar_url: 'https://picsum.photos/200/300',
          subtitle: 'SURE',
          time:'18:55'
        },
        {
          id:'8',
          name: 'Ashu',
          avatar_url: 'https://picsum.photos/200/300?grayscale',
          subtitle: 'MAY BE',
          time:'18:10'
        },
        {
          id:'9',
          name: 'Zahir',
          avatar_url: 'https://bootdey.com/img/Content/avatar/avatar4.png',
          subtitle: 'nooo',
          time:'17:34'
        },
        {
          id:'10',
          name: 'Dani',
          avatar_url: 'https://bootdey.com/img/Content/avatar/avatar4.png',
          subtitle: 'i ll be there',
          time:'16:09'
        },
        {
          id:'11',
          name: 'Haro',
          avatar_url: 'https://bootdey.com/img/Content/avatar/avatar4.png',
          subtitle: 'k',
          time:'16:00'
        },
      ]
    };
  }

  renderItem = ({item}) => {
    
    return (
     
        <View style={styles.row}>
          <View style={{width:wp('17%')}}>
          <Image source={{ uri: item.avatar_url}} style={styles.pic} />
          </View>
          <View>
          <View style={{ width:wp('100'),flexDirection:"row"}}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
              </View>
              
              <Text style={styles.tme}>{item.time} </Text>
              
              </View>
            <View style={styles.end}>
             <Text style={styles.msg}>{item.subtitle} </Text>
              
            </View>
          </View>
</View>
     
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }
      } >
        <FlatList 
          extraData={this.state}
          data={this.state.details}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#101d25',
    borderBottomWidth: wp('0.05%'),
    padding: hp('2%'),

  },

  pic: {
    borderRadius: wp('7%'),
    width: wp('14%'),
    height: hp('7%'),
  },
  nameContainer: {
    justifyContent:'flex-start',
    width: wp('50%'),
    
  },

  nameTxt: {
    marginLeft:('2%'),
    fontWeight: '600',
    color: 'white',
    fontSize: 15,
    alignItems:'flex-end'

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  msg: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
    marginLeft:hp('0.5%'),
  },
    tme: {
      fontWeight: '400',
      color: '#666',
      fontSize: 12,
      marginLeft:hp('9%'),
      
    
  

  },

});

module.exports = Chats