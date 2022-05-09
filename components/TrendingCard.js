import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {SIZES, FONTS, icons, COLORS} from '../constants';

const TrendingCard = ({containerStyle, recipeItem, onPress}) => (
  <TouchableOpacity
    style={{
      height: 350,
      width: 250,
      marginTop: SIZES.radius,
      marginRight: 20,
      borderRadius: SIZES.radius,
      ...containerStyle,
    }}
    onPress={onPress}>
    <Image
      source={recipeItem.image}
      resizeMode="cover"
      style={{
        width: 250,
        height: 350,
        borderRadius: SIZES.radius,
      }}
    />

    <View
      style={{
        position: 'absolute',
        top: 20,
        left: 15,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
        backgroundColor: COLORS.transparentGray,
        borderRadius: SIZES.radius,
      }}>
      <Text style={{color: COLORS.white, ...FONTS.h4}}>
        {recipeItem.category}
      </Text>
    </View>
  </TouchableOpacity>
);

export default TrendingCard;
