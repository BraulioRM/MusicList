/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 
 <ArtistBox artist={artist}/>
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  
} from 'react-native';

import ArtistBox from './ArtistBox'
import {getArtists} from './Api-client'


export default class ArtistDetailView extends Component {
   
  render() {
    const isAndroid = Platform.OS === 'android'

    const artist = this.props.artist
  
  
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70
  },
  image: {
    width: 150,
    height: 150
  }
  
});