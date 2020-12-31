import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 FlatList,
  ActivityIndicator,StatusBar, 
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { List, ListItem, SearchBar } from "react-native-elements";


import Icon from 'react-native-vector-icons/MaterialIcons';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import Calls from './app/components/Calls'  
import Status from './app/components/Status'
import Chats from './app/components/Chats'





export default class reactwhatsapp extends Component {
  
  render() {
  return (
  <View style={styles.mainContainer}>
       <StatusBar backgroundColor="#1C1C1E" barStyle="light-content" />
   <View style={styles.headerContainer}>
    <View style={styles.leftHeaderContainer}>
    <Text style={styles.logoText}>WhatsApp</Text>
    </View>
    <View style={styles.rightHeaderContainer}>
    <Icon name="search" color='#fff' size={23} style={{padding:hp('1%')}} />
   <Icon name="call" color='#fff' size={23} style={{padding:hp('1%')}} />
   <Icon name="more-vert" color='#fff' size={23} style={{padding:hp('1%')}}/>
    </View>
   </View>
   <View style={styles.contentContainer}>
   <ScrollableTabView
      tabBarUnderlineColor="#232d36"
      tabBarUnderlineStyle={{backgroundColor: "#1EBEA5"}}
      tabBarBackgroundColor ="#232d36"
      tabBarActiveTextColor="#1EBEA5"
      tabBarInactiveTextColor="#A9A9A9"
      >
       <Calls tabLabel="CALLS" {...this.props} />
       <Chats tabLabel="CHATS" {...this.props} />
       <Status tabLabel="STATUS" {...this.props} />
     </ScrollableTabView>
   </View>
  </View>
  );
  }
 }
 const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: '#101d25',
      height: hp('1%')
   },
   headerContainer: {
     
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#232d36",
      alignItems:"center",
      paddingRight: hp('1%'),
      paddingBottom: hp('0.001%'),
      paddingTop: hp('0.001'),
      height:hp('7%')
   },
   leftHeaderContainer: {
      alignItems: "flex-start",
      flexDirection: "row"
   },
   rightHeaderContainer: {
      alignItems: "flex-end",
      flexDirection: "row"
   },
   contentContainer: {
      flex: 6,
   },
   logoText: {
      color: "#A9A9A9",
      fontSize: hp('2.7%'),
      alignItems: "flex-start",
      marginLeft: hp('2%')
   },
   item: {
     padding: hp('1%'),
     marginVertical: hp('2%'),
     marginHorizontal: hp('2%'),
   },
   title: {
     fontSize: hp('2%'),
   },
 });
AppRegistry.registerComponent('reactwhatsapp', () => reactwhatsapp);