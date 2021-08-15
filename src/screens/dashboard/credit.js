/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react'
 import { Text, View, StyleSheet } from 'react-native'
 
 const Credit = (props) => {
 
   return (
     <View style = {styles.container}>
     <Text> Credit </Text>
   </View>
   );
 }
  
 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FCFCFC',
      flexDirection: 'column',
    },
  });
  
  export default Credit;
