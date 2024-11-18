import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Product} from '../constants/ProductsTypes';
type Props = PropsWithChildren<{
  item: Product;
  navigation: any;
}>;
const ProductCard = ({item, navigation}: Props) => {
  return (
    <Pressable
      className=" border-gray-300 border"
      onPress={() => navigation.navigate('Details', item)}>
      <Image
        className="w-full h-40"
        source={{uri: item.thumbnail}}
        loadingIndicatorSource={{uri: item.thumbnail}}
      />
      <View className="px-2 pb-2 justify-between">
        <Text style={[styles.text, styles.title]}>
          {item.title.length > 20
            ? item.title.slice(0, 20) + '...'
            : item.title}
        </Text>
        <View className="flex-row gap-3 items-center">
          <Text style={[styles.text, styles.price]}>₹{item.price}</Text>
          <Text style={[styles.text, styles.text]}>
            {item.discountPercentage}% off
          </Text>
        </View>
        <Text style={[styles.text, {marginVertical: 6}]}>Free Delivery</Text>
        <View className="flex-row gap-3 items-center">
          <Text style={[styles.text, styles.rating]}>{item.rating} ⭐</Text>
          <Text style={[styles.text, styles.text]}>
            ({item.stock}) Available
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  title: {
    fontSize: 13,
    paddingVertical: 10,
  },
  rating: {
    backgroundColor: 'green',
    color: 'white',
    paddingVertical: 7,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
