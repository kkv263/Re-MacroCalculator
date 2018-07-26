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
            <View style={styles.infoCategory}>
            <View>
              <Image style={{width:32, height:35, marginTop:10}} source={require('../assets/gendericon.png')}></Image>
            </View>
            <View>
              <Text style={{color:'white'}}>Male</Text>
              <Text style={{color:'white'}}>Gender</Text>
            </View>
          </View>
          <View style={styles.infoCategory}>
          <View>
              <Image style={{width:32, height:35, marginTop:10}} source={require('../assets/calicon.png')}></Image>
            </View>
            <View>
              <Text style={{color:'white'}}>21</Text>
              <Text style={{color:'white'}}>Age</Text>
            </View>
          </View>
          <View style={styles.infoCategory}>
          <View>
              <Image style={{width:32, height:45, marginTop:10}} source={require('../assets/heighticon.png')}></Image>
            </View>
            <View>
              <Text style={{color:'white'}}>5 ft</Text>
              <Text style={{color:'white'}}>Height</Text>
            </View>
          </View>
          <View style={styles.infoCategory}>
          <View>
              <Image style={{width:35, height:35, marginTop:15}} source={require('../assets/weighticon.png')}></Image>
            </View>
            <View>
              <Text style={{color:'white'}}>180lbs</Text>
              <Text style={{color:'white'}}>Weight</Text>
            </View>
          </View>
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
      flexDirection: 'row',
      flexGrow: 1,
      flexBasis: '50%',
      height: '50%',
      justifyContent: 'space-around',
      borderBottomWidth:1,
      borderColor: 'white',
   },
    infoContainer: {
      flexDirection:'row',
      flexWrap: 'wrap',
      height: 130,
    }
  });