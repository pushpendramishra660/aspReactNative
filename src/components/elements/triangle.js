import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const TriangleCorner = (props) => {
    return <View style={[styles.triangleCorner, props.style]} />;
  };
  
  const styles = StyleSheet.create({
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: "red",
        transform: [{ rotate: "270deg" }],

      },
  });


  export default TriangleCorner;