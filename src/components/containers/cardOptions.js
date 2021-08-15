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
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: wp('100%'),
  }
});

export default Account;
