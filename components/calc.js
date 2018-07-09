import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
          <View style={styles.tablineActive}></View>
          <View style={styles.tabline}></View>
          <View style={styles.tabline}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#33AFE9'
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
    }
  });