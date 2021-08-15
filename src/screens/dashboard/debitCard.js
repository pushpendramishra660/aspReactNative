/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/index';
import {Balance, Header} from '../../components/index';
import CardContainer from '../../components/containers/cardContainer';

const DebitCard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Home'} />
      <Balance amount={'2,000'} />
      <CardContainer navigation = {props.navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.downriver,
    flexDirection: 'column',
  },
});

export default DebitCard;
