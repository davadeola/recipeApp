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
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
