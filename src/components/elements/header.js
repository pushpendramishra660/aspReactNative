import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Arrow from './arrow';

const Header = props => {
  console.log(wp('6.5%'));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Arrow style={styles.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('8%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
  },
  title: {
    fontSize: wp('6.5%'),
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Bold,
  },
  arrow: {
    position: 'absolute',
    top: 2,
    right: wp('4%'),
  },
});

export default Header;
