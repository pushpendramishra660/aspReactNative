import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import * as Constants from '../../constants/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TopUp = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: wp('8%'),
        }}>
        <Image source={Constants.Images.insight} />
        <View style={{flexDirection: 'column', marginLeft: wp('2%')}}>
          <Text
            style={{
              fontFamily: Constants.Fonts.Metropolis_Medium,
              fontSize: wp('3.5%'),
              color: Constants.Colors.mineShaft,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              fontFamily: Constants.Fonts.Metropolis_Medium,
              fontSize: wp('3.5%'),
              color: Constants.Colors.alto,
              marginTop: wp('2%'),
            }}>
            {props.detail}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: wp('93%'),
  },
});

export default TopUp;
