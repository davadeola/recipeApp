import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';
import {CategoryCard} from '../components';

const Home = ({navigation}) => {
  const renderHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        alignItems: 'center',
        height: 80,
      }}>
      <View style={{flex: 1}}>
        <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>
          Hello David Adeola
        </Text>
        <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
          What do you want to cook today?
        </Text>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Image
          source={images.UserProfile1}
          style={{width: 40, height: 40, borderRadius: 20}}
        />
      </TouchableOpacity>
    </View>
  );

  const renderSearchBar = () => (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
      }}>
      <Image
        source={icons.search}
        style={{width: 20, height: 20, tintColor: COLORS.gray}}
      />
      <TextInput
        style={{
          marginLeft: SIZES.radius,
          ...FONTS.body3,
        }}
        placeholderTextColor={COLORS.gray}
        placeholder="Search Recipes"
      />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CategoryCard
            categoryItem={item}
            containerStyle={{
              marginHorizontal: SIZES.padding,
            }}
            onPress={() => navigation.navigate('Recipe', {recipe: item})}
          />
        )}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
          </View>
        }
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
