import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Theame} from '../constants/colorsTheams';
import ProductCard from '../components/ProductCard';
import {Product} from '../constants/ProductsTypes';
import {ProductData} from '../api/ProductData';
const ProductsSearchResultScreen = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-1  border-y border-gray-400">
        <Pressable className="flex-row items-center gap-1 border-r flex-1 px-2 py-2 border-gray-400">
          <FontAwesome5 name="sort" size={24} color={Theame.textSecondary} />
          <Text className="text-gray-700" style={styles.text}>
            Sort
          </Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-1 border-r flex-1 px-2 py-2 border-gray-400">
          <Text className="text-gray-700 " style={styles.text}>
            Category
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Theame.textSecondary}
            style={{marginLeft: -7}}
          />
        </Pressable>
        <Pressable className="flex-row items-center gap-1 border-r flex-1 px-2 py-2 border-gray-400">
          <Text className="text-gray-700" style={styles.text}>
            Gender
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Theame.textSecondary}
          />
        </Pressable>
        <Pressable className="flex-row items-center gap-1  flex-1 px-2 py-2 border-gray-400">
          <FontAwesome5 name="filter" size={20} color={Theame.textSecondary} />

          <Text className="text-gray-700" style={styles.text}>
            Filter
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductsSearchResultScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
  },
});
