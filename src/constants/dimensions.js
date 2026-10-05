import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isTablet: width >= 768,
  statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 44,
  bottomBarHeight: 74,
};

export default dimensions;
