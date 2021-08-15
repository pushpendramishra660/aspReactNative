/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Constants from '../../constants/index';
import {DetailHeader} from '../../components/index';

const SpendingLimit = props => {
  const [text, onChangeText] = React.useState('');
  console.log(wp('3%'));
  return (
    <SafeAreaView style={styles.container}>
      <DetailHeader
        title={'Spending limit'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Text style={styles.title}>Spending limit</Text>
      <View
        style={{
          width: wp('100%'),
          backgroundColor: Constants.Colors.white,
          borderTopLeftRadius: wp('6.4%'),
          borderTopRightRadius: wp('6.4%'),
          flexDirection: 'column',
          marginTop: wp('10%'),
          height: hp('80%'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp('8%'),
            paddingHorizontal: wp('3%'),
          }}>
          <Image source={Constants.Images.limit} />
          <Text
            style={{marginLeft: wp('3%'), color: Constants.Colors.downriver}}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.balance_container}>
          <Text style={styles.amountTitle}>S$</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={text}
            placeholder=""
            editable={false}
          />
        </View>
        <Text
          style={{
            marginLeft: wp('3%'),
            color: '#22222266',
            fontFamily: Constants.Fonts.Metropolis_Medium,
            fontSize: wp('2.5%'),
            marginTop: wp('4%'),
          }}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: wp('4%'),
            paddingHorizontal: wp('6%'),
          }}>
          <TouchableOpacity
            onPress={() => onChangeText('5,000')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(32, 209, 103, 0.2)',
              borderRadius: wp('1%'),
            }}>
            <Text
              style={{
                color: Constants.Colors.malachite,
                fontFamily: Constants.Fonts.Metropolis_SemiBold,
                paddingHorizontal: wp('5%'),
                paddingVertical: wp('3%'),
              }}>
              S$ 5,000
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeText('10,000')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(32, 209, 103, 0.2)',
              borderRadius: wp('1%'),
            }}>
            <Text
              style={{
                color: Constants.Colors.malachite,
                fontFamily: Constants.Fonts.Metropolis_SemiBold,
                paddingHorizontal: wp('5%'),
                paddingVertical: wp('3%'),
              }}>
              S$ 10,000
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeText('20,000')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(32, 209, 103, 0.2)',
              borderRadius: wp('1%'),
            }}>
            <Text
              style={{
                color: Constants.Colors.malachite,
                fontFamily: Constants.Fonts.Metropolis_SemiBold,
                paddingHorizontal: wp('5%'),
                paddingVertical: wp('3%'),
              }}>
              S$ 20,000
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: wp('50%'),
            height: hp('5%'),
            backgroundColor:
              text.length > 0 ? Constants.Colors.malachite : '#EEEEEE',
            position: 'absolute',
            bottom: wp('8%'),
            alignSelf: 'center',
            borderRadius: hp('5%') / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Constants.Colors.white,
              fontFamily: Constants.Fonts.Metropolis_SemiBold,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Constants.Colors.downriver,
    flexDirection: 'column',
  },
  title: {
    fontSize: wp('6.5%'),
    color: Constants.Colors.white,
    fontFamily: Constants.Fonts.Metropolis_Bold,
    width: wp('90%'),
    marginTop: wp('4%'),
  },
  available_balance: {
    fontSize: wp('4%'),
    color: Constants.Colors.white,
    fontFamily: Constants.Fonts.Metropolis_Medium,
  },
  amount: {
    fontSize: wp('6%'),
    color: Constants.Colors.white,
    fontFamily: Constants.Fonts.Metropolis_Bold,
    marginLeft: wp('3%'),
  },
  amountTitle: {
    fontFamily: Constants.Fonts.Metropolis_Bold,
    fontSize: wp('3.5%'),
    color: Constants.Colors.white,
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('1%'),
    backgroundColor: Constants.Colors.malachite,
    borderRadius: wp('1%'),
  },
  balance_container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: wp('3%'),
    marginTop: wp('3%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: wp('2%'),
  },
  input: {
    height: wp('4%'),
    borderWidth: 0,
    color: Constants.Colors.mineShaft,
    width: wp('70%'),
    fontFamily: Constants.Fonts.Metropolis_Bold,
    paddingLeft: wp('4%'),
  },
});

export default SpendingLimit;
