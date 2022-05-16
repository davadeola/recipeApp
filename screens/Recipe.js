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

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
