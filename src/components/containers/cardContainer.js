import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors,Navigations} from '../../constants/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Components from '../index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardConatiner = ({
  navigation
}) => {
  console.log(navigation)
  return (
    <ScrollView style={{overflow: 'visible'}}>
      <View style={styles.container}>
        <View style={{top: -hp('10%')}}>
          <Components.Card />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.Account />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.TopUp
            title={'Top-up account'}
            detail={'Deposit money to your account to use with card'}
          />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.WeeklySpendLimit onPress = {() => {navigation.navigate(Navigations.DebitCard.SPENDING_LIMIT)}}
            title={'Weekly spending limit'}
            detail={'Your weekly spending limit is S$ 5,000'}
          />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.WeeklySpendLimit
            title={'Freeze Card'}
            detail={'Your Debit card is currently active'}
          />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.TopUp
            title={'Get a new card'}
            detail={'This deactivates your current debit card'}
          />
        </View>
        <View style={{top: -hp('10%')}}>
          <Components.TopUp
            title={'Deactivated cards'}
            detail={'Your previously deactivated cards'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    width: wp('100%'),
    marginTop: hp('10%'),
    borderTopLeftRadius: wp('6.4%'),
    borderTopRightRadius: wp('6.4%'),
  },
});

export default CardConatiner;
