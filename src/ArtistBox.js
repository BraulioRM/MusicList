
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




export default class ArtistBox extends Component {



  render() {

    //console.warn('el nombre', this.props.artist.comments)

    const {image, name, likes, comments} = this.props.artist


    return (
     
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri:image}}/>
          <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>

      
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox:{
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .9,
    
    shadowOffset:{
    height: 1,
    width: -2,
    }
    
  },
  info:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  name:{
    fontSize: 20,
    marginTop: 10
  },
  row: {

    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40
  },
  iconContainer:{
    flex:1,
    alignItems: 'center'
  },
  count:{
    color: 'gray'
  }
  
})
