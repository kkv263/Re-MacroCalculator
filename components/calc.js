import React, { Component } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: '3%', marginBottom: '2%'}}>
          <Image style={{width:30, height:30, }} source={require('../assets/calcicon.png')}></Image>
          <Image style={{width:30, height:30, }} source={require('../assets/circicon.png')}></Image>
          <Image style={{width:23, height:30, }} source={require('../assets/noteicon.png')}></Image>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <View style={styles.tablineActive}>
          </View>
          <View style={styles.tabline}>
          </View>
          <View style={styles.tabline}>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoCategory}></View>
          <View style={styles.infoCategory}></View>
          <View style={styles.infoCategory}></View>
          <View style={styles.infoCategory}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#33AFE9',
    },
    tabline: {
      width:'32%',
      height:1,
      backgroundColor: 'white',
      opacity:0.5
    },
    tablineActive: {
      width:'32%',
      height:5,
      backgroundColor: 'white',
      opacity:0.5
    },
    infoCategory: {
      flex:1,
      flexGrow: 1,
      flexBasis: '50%',
      height: '50%',
   },
    infoContainer: {
      flexDirection:'row',
      flexWrap: 'wrap',
      height: 130,
      borderBottomWidth:1,
      borderColor: 'white',
      opacity:0.5
    }
  });