import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, images, SIZES, FONTS} from '../constants';

const Login = ({navigation}) => {
  const renderHeader = () => (
    <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
      <ImageBackground
        source={images.loginBackground}
        style={{flex: 1, justifyContent: 'flex-end'}}
        resizeMode="cover"></ImageBackground>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />
      {/* Header */}

      {renderHeader()}
    </View>
  );
};

export default Login;
