import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Switch, TouchableOpacity} from 'react-native';
import * as Constants from '../../constants/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WeeklySpendLimit = props => {
  const [enable, setEnable] = useState(false);

  return (
    <TouchableOpacity onPress = {props.onPress} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: wp('8%'),
          maxWidth:wp('93%'),
          justifyContent:'space-between'
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
              width:wp('70%')
            }}>
            {props.detail}
          </Text>
        </View>
        <Switch
          trackColor={{false: '#DDDDDD', true: '#01D167'}}
          thumbColor={enable ? '#FFFFFF' : '#FFFFFF'}
          ios_backgroundColor="#DDDDDD"
          onValueChange={value => {
            setEnable(value);
          }}
          value={enable}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: wp('93%'),
  },
});

export default WeeklySpendLimit;
