import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {Colors, Fonts} from '../../constants/index';

import Arrow from './arrow';
import CardNo from './cardNo';

const Card = props => {
  return (
    <React.Fragment>
      <View onTouchStart={(e) => {console.log('touchMove',e.nativeEvent)}} 
        style={{
          position: 'absolute',
          top: -wp('9%'),
          right: 0,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          paddingHorizontal:wp('2%'),
          paddingVertical:wp('2%'),
          borderTopLeftRadius:wp('2%'),
          borderTopRightRadius:wp('2%'),
          zIndex:-10
        }}>
        <Entypo name="eye" size={30} color={Colors.malachite} />
        <Text style={{color: Colors.malachite,marginLeft:wp('1%')}}>Hide card number</Text>
      </View>
   
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Arrow color={Colors.white} />
          <Text style={styles.aspire}>aspire</Text>
        </View>
        <Text style={styles.name}>Mark Henry</Text>
        <CardNo card={'5647 3411 2413 2020'} />
        <View style={styles.infoContainer}>
          <Text style={[styles.info, {marginRight: wp('8%')}]}>
            Thru: 12/20
          </Text>
          <Text style={styles.info}>CVV: 456</Text>
        </View>
        <View style={styles.innerContainer}>
          <FontAwesome name="cc-visa" size={30} color={Colors.white} />
        </View>
      </View>
      <TouchableOpacity style={{
          position: 'absolute',
          top: -wp('9%'),
          right: 0,
          width:wp('30%'),
          height:hp('3%'),
          zIndex: 1,
        }}
        onPress = {() => alert('show')}
        ></TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    paddingVertical: wp('4%'),
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: wp('4%'),
    backgroundColor: Colors.malachite,
    borderRadius: wp('3%'),
  },
  title: {
    fontSize: wp('6.5%'),
    color: Colors.white,
    fontFamily: Fonts.Metropolis_Bold,
  },
  aspire: {
    fontFamily: Fonts.Metropolis_BoldItalic,
    fontSize: wp('3%'),
    marginLeft: 2,
    color: Colors.white,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: wp('3%'),
  },
  name: {
    color: Colors.white,
    fontSize: wp('6%'),
    fontFamily: Fonts.Metropolis_Bold,
    width: '90%',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: wp('3%'),
    marginTop: wp('5%'),
    marginBottom: wp('4%'),
  },
  info: {
    color: Colors.white,
    fontSize: wp('3%'),
    fontFamily: Fonts.Metropolis_SemiBold,
  },
});

export default Card;
