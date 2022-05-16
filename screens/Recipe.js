import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import {set} from 'react-native-reanimated';

import {SIZES, FONTS, COLORS, icons} from '../constants';

const HEADER_HEIGHT = 350;

const Recipe = ({navigation, route}) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  React.useEffect(() => {
    let {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Recipe</Text>
    </View>
  );
};

export default Recipe;
