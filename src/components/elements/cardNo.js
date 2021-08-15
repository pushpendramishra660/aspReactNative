import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/index';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardNo = props => {
    console.log(wp('3%'))
  return (
    <View style={styles.container}>
      {props.card.split(' ').map(str => (
        <Text style={styles.card} key={str}>
          {str}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: wp('60%'),
    marginTop: wp('8%'),
  },
  card: {
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: wp('4%'),
  },
});

export default CardNo;
