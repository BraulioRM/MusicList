/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 
 <ArtistBox artist={artist}/>
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  
} from 'react-native';

import ArtistList from './ArtistList'
import {getArtists} from './Api-client'


import {Scene, Router} from 'react-native-router-flux';

import LoginView from './LoginView'
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'

class MusicList extends React.Component {
  render() {
    return <Router>
      <Scene key="login" component={LoginView} hideNavBar/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar = {false} />
      </Scene>
    </Router>
  }
}







AppRegistry.registerComponent('MusicList', () => MusicList);