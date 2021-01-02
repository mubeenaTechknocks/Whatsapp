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
import Icon from 'react-native-vector-icons/FontAwesome';
//import { StyleProvider } from 'native-base';


export  default  class Status extends Component{

  constructor(props) {
    super(props);
    this.appu ={
      profile:[
        {
          id:'1',
          name: 'My status',
          avatar_url: 'https://1.bp.blogspot.com/-qO9bqDQNWd8/XmoZjU3DQyI/AAAAAAAAPbE/lw6f5hImQCAmuag03TVr9184ZJCIp4rSQCLcBGAsYHQ/w347/Funny%2BWhatsapp%2BDP%2B%25281%2529.jpg',
          subtitle: 'Tap to add status update'
          
        }
      ]
    },
    this.state = {
      details:[
        {
          id:'1',
          name: 'Arjuin Eee Toch',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-31.jpg',
          subtitle: '11 minutes ago'
        },
        {
          id:'2',
          name: 'Johann Sch',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-30.jpg',
          subtitle: '14 minutes ago'
        },
        {
          id:'3',
          name: 'Linz',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-32.jpg',
          subtitle: '16 minutes ago'
        },
        {
          id:'4',
          name: 'Nihara Cheechi',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-18-180x180.png',
          subtitle: '17 minutes ago'
        },
        {
          id:'5',
          name: 'Tej Speak My News',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-13-180x180.jpg',
          subtitle: '31 minutes ago'
        },
        {
          id:'6',
          name: 'SWETHA',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-11.jpg',
          subtitle: '51 minutes ago'
        },
        {
          id:'7',
          name: 'Prayana Moon Maam',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-27-180x180.jpg',
          subtitle: 'Today, 8:55 am'
        },
        {
          id:'8',
          name: 'Sheethal',
          avatar_url: 'http://www.newsshare.in/wp-content/uploads/2/Profile-WhatsApp-DP-19-180x180.jpg',
          subtitle: 'Today, 8:55 am'
        },
      ]
    };
  }

  renderItem = ({item}) => {
    
    return (

        <View style={styles.row}>
    
          <Image source={{ uri: item.avatar_url}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
             
              <Text style={styles.time}>{item.subtitle} </Text>
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
          extraData={this.appu}
          data={this.appu.profile}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
          <Icon name="plus-circle" color="#1EBEA5" size={23} style={{ position: 'absolute', top: 50, left: 55 }} />
        {<Text style={styles.logoText}>Recent updates</Text>}
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
    flexDirection: 'row',
    justifyContent:'flex-start',
   
    width: wp('270%'),
  },
  nameTxt: {
    marginLeft:('2%'),
    fontWeight: '600',
    color: 'white',
    fontSize: 15,

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
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
    marginLeft:hp('3%'),

  },
  logoText: {
    color: "#A9A9A9",
    fontSize: hp('1.5%'),
    alignItems: "flex-start",
    marginLeft: hp('2%'),
    marginTop:hp('1%'),
    marginBottom:hp('1%')
  },
  profile:{
    borderRadius: wp('7%'),
    width: wp('14%'),
    height: hp('7%')

  },
  add:{
color: "#1EBEA5",
alignSelf:"flex-end",
position:"absolute",
marginLeft:40,
bottom:-5,
width:20,
fontSize:20
  }
});

module.exports = Status
