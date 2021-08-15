/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react'
 import { Text, View,StyleSheet } from 'react-native'
 
 const Profile = () => {
 
   return (
     <View style = {styles.container}>
     <Text> Profile </Text>
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

  export default Profile;
