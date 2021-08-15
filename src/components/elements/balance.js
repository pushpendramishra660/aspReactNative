import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Balance = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.available_balance}>Available balance</Text>
      <View style={styles.balance_container}>
        <Text style={styles.amountTitle}>S$</Text>
        <Text style={styles.amount}>{props.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'column',
    paddingLeft: wp('4%'),
  },
  available_balance: {
    fontSize: wp('4%'),
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Medium,
  },
  amount: {
    fontSize: wp('6%'),
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Bold,
    marginLeft: wp('3%'),
  },
  amountTitle: {
    fontFamily: Fonts.Metropolis_Bold,
    fontSize: wp('3.5%'),
    color: Colors.white,
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('1%'),
    backgroundColor: Colors.malachite,
    borderRadius: wp('1%'),
  },
  balance_container: {
    paddingVertical: wp('3%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Balance;
