/*
 * @flow
 * TODO: value * ratio difference between Android and iOS is of 2 value;
 * 16 in iOS is equals to 14 in android but this need to be verify.
 */

import { Dimensions, Platform, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

const hpR = size => hp(size);

const ratio = (iosSize, androidSize) =>
  Platform.select({
    // ios: scaleVertical(iosSize),
    ios: androidSize || iosSize,
    android: androidSize || iosSize,
  });

const generatedFontSize = (iosFontSize, androidFontSize) =>
  Platform.select({
    ios: scale(iosFontSize),
    android: androidFontSize || iosFontSize,
  });

const NAVBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default {
  ratio,
  screenWidth,
  screenHeight,
  hpR,
  vw,
  vh,
  generatedFontSize,
  smallMargin: ratio(8),
  baseMargin: ratio(16),
  doubleBaseMargin: ratio(32),
  statusBarHeight: STATUSBAR_HEIGHT,
  hairLineWidth: StyleSheet.hairlineWidth,
  horizontalLineHeight: StyleSheet.hairlineWidth,
  navBarHeight: NAVBAR_HEIGHT + STATUSBAR_HEIGHT,
  tabBarHeight: 49, // Default tab bar height in iOS 10 (source react-navigation)
  borderRadius: ratio(4),
  borderWidth: ratio(1),
  defaultUIHeight: ratio(44),
  icon: {
    tiny: ratio(8),
    small: ratio(16),
    normal: ratio(24), // Default tab icon size (source react-navigation)
    medium: ratio(32),
    large: ratio(40),
    xLarge: ratio(50),
    xxLarge: ratio(60),
    xxxLarge: ratio(100),
  },
  image: {
    small: ratio(20),
    medium: ratio(40),
    large: ratio(60),
    coverWidth: screenWidth,
    coverHeight: screenWidth / 2,
  },
};
