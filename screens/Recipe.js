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

import {Viewers} from '../components';

import {SIZES, FONTS, COLORS, icons} from '../constants';

const HEADER_HEIGHT = 350;

const RecipeCreatorCardInfo = ({selectedRecipe}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.transparentBlack9,
      borderRadius: SIZES.radius,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {/* Profile Photo */}
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
        }}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{width: 40, height: 40, borderRadius: 20}}
        />
      </View>

      {/* Labels */}
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
          Recipe By:
        </Text>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>

      {/* Button */}

      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}>
        <Image
          source={icons.rightArrow}
          style={{width: 15, height: 15, tintColor: COLORS.lightGreen1}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Recipe = ({navigation, route}) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  React.useEffect(() => {
    let {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderHeaderBar = () => (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingBottom: 10,
      }}>
      {/* Screen Overlay */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.black,
          opacity: scrollY.interpolate({
            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
            outputRange: [0, 1],
          }),
        }}
      />

      {/* Header Bar Title */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 10,
          opacity: scrollY.interpolate({
            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                outputRange: [50, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
          Recipe By
        </Text>
        <Text style={{color: COLORS.white2, ...FONTS.h3}}>
          {selectedRecipe?.author?.name}
        </Text>
      </Animated.View>

      {/* Back Button */}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          backgroundColor: COLORS.transparentBlack5,
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>

      {/* bookmark button */}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
        }}>
        <Image
          source={
            selectedRecipe?.bookmark ? icons.bookmarkFilled : icons.bookmark
          }
          style={{width: 30, height: 30, tintColor: COLORS.darkGreen}}
        />
      </TouchableOpacity>
    </View>
  );

  const renderRecipeCardHeader = () => (
    <View
      style={{
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: -1000,
        paddingTop: 1000,
      }}>
      {/* Background Image */}
      <Animated.Image
        source={selectedRecipe?.image}
        resizeMode="contain"
        style={{
          height: HEADER_HEIGHT,
          width: '200%',
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [2, 1, 0.75],
              }),
            },
          ],
        }}
      />

      {/* Recipe Card Section */}

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 30,
          right: 30,
          height: 80,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 170, 250],
                outputRange: [0, 0, 100],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
      </Animated.View>
    </View>
  );

  const renderRecipeInfo = () => (
    <View
      style={{
        flexDirection: 'row',
        height: 130,
        width: SIZES.width,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
      }}>
      {/* Recipe */}
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
        <Text style={{marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4}}>
          {selectedRecipe?.duration} | {selectedRecipe?.serving} serving
        </Text>
      </View>

      {/* Viewers */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Viewers viewersList={selectedRecipe?.viewers} />
      </View>
    </View>
  );

  const renderIngredientHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: SIZES.radius,
        marginBottom: SIZES.padding,
      }}>
      <Text style={{flex: 1, ...FONTS.h3}}>Ingredients</Text>
      <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
        {selectedRecipe?.ingredients.length} items
      </Text>
    </View>
  );

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
        ListHeaderComponent={
          <View>
            {renderRecipeCardHeader()}
            {renderRecipeInfo()}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image source={item.icon} style={{height: 40, width: 40}} />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.body3}}>{item.description}</Text>
            </View>
            <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
              <Text style={{...FONTS.body3}}>{item.quantity}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />

      {/* Header Bar */}
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
