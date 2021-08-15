import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors, Fonts} from '../../constants/index';
import ProgressBar from '../elements/progressBar';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Account = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.debit_card_limit}>Debit card spending limit</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.spent}>$345</Text>
          <Text
            style={[
              styles.balance,
              {
                marginHorizontal: wp('2%'),
              }
            ]}>
            |
          </Text>
          <Text style={styles.balance}>$5000</Text>
        </View>
      </View>
      <ProgressBar
        height={15}
        backgroundColor={Colors.progress}
        completedColor={Colors.malachite}
        percentage={'65%'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: wp('100%'),
  },
  debit_card_limit: {
    color: Colors.mineShaft,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: wp('3.5%'),
  },
  spent: {
    color: Colors.malachite,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: wp('3.5%'),
  },
  balance: {
    color: Colors.accountColor,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: wp('3.5%'),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    marginTop: wp('7%'),
    marginBottom: wp('2%'),
  },
  balanceContainer: {
    flexDirection: 'row',
  },
});

export default Account;
