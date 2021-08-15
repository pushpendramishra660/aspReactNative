import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const Arrow = (props) => {
  return (
    <View style={[styles.container, {... props.style}]}>
      <FontAwesome name="arrow-circle-up" size={30} color={ props.color ? props.color : Colors.malachite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  },
});

export default Arrow;
