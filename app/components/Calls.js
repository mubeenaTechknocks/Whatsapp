import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 FlatList,
 ActivityIndicator,
 TouchableOpacity,
 ScrollView,
 Alert,
 Image,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Call extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "Adarsheeee",   date:"     (2) 6 minutes ago",  video:false, image:"https://bootdey.com/img/Content/avatar/avatar7.png"}, 
        {id:2,  name: "Adarsheeee",  date:"     (5) Yesterday", time:'10:55 pm', video:false,   image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Afrooz Techknocks", date:"     Yesterday", time:'4:35 am', video:false,   image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Adarsheee", date:"     Yesterday", time:'3:44 pm ', video:false,  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Afrooz Techknocks",   date:"     (4)Yesterday", time:'03:08 pm', video:false, incoming:false,  image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Afrooz Techknocks",   date:"     (3)Yesterday", time:'01:27 pm', video:false,  image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Adarsheeee",   date:"     Yesterday", time:'01:23 pm', video:false,   image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "Sangeetha Techknocks",   date:"     Yesterday", time:'12:50 pm', video:false,  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Sreelakshmi Techknocks",   date:"     Yesterday", time:'11:45 am', video:false, image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Adarshee",   date:"     Yesterday", time:'09:2am', video:false,  image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }

  renderItem = ({item}) => {
    var callIcon = "https://img.icons8.com/color/48/000000/phone.png";
    if(item.video == true) {
      callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
    }
    var callType = "https://img.icons8.com/android/2x/26e07f/outgoing-call.png";
    
     if(item.incoming == true){
       callType = "https://icons8.com/icon/xb686YBrMfRR/outgoing-call.png";
     }
     
    
    
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Image style={[styles.icon, {marginLeft:-5, marginRight:5, width:14, height:14}]} source={{uri: callType}} />
              
          
              <Text style={styles.time}>{item.date} {item.time}</Text>
            </View>
          </View>
          <Image style={[styles.icon, { marginRight: 50 }]} source={{uri: callIcon}}/>
          
        
        </View>
      </TouchableOpacity>
    );
  }

  
  render() {
  return (
    <View style={{ flex: 1 }} >
      <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id.toString();
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
    borderColor: '#777',
    backgroundColor: '#101d25',
    borderBottomWidth: 0.9,
    padding: 15,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 600,

  },
  pic: {
    borderRadius: 25,
    width: 54,
    height: 54,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#777',
    fontSize: 17,

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

  },
  icon:{
    height: 28,
    width: 28, 
    left: 20,
  }
});


module.exports = Call