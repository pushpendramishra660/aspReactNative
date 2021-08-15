import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../constants/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Arrow from './arrow';

const DetailHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {()=> props.onPress()}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={30}
          color={Colors.white}
        />
      </TouchableOpacity>
      <Arrow style={styles.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('5%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%')
  },
  title: {
    fontSize: wp('6.5%'),
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Bold,
  },
  arrow: {
    right: wp('4%'),
  },
});

export default DetailHeader;
