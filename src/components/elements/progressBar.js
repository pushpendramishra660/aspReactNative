import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  import ProgressBarAnimated from 'react-native-progress-bar-animated';

import TriangleCorner from './triangle';

const ProgressBar = ({
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
      <View style={{justifyContent: 'center',width:wp('90%'),borderRadius:wp('2%'),
      overflow:'hidden'}}>
        <View
          style={{
            width: '100%',
            height: getheight,
            backgroundColor:getBackgroundColor,
            
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            backgroundColor:getCompletedColor,
            position:'absolute',
            
          }}>
        </View>
      </View>
  );
};
export default ProgressBar;