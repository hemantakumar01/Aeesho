import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { RootStackParamList } from '../App';
import {Theame} from '../constants/colorsTheams';

type Props = NativeStackScreenProps<any, 'Details'>;
const width = Dimensions.get('window').width;
const ProductDetailsScreen = ({navigation, route}: Props) => {
  const product = route.params;

  return (
    <View className="flex-1 bg-white">
      <View className=" flex-row justify-between items-center px-4 py-4 border-b border-gray-300">
        <MaterialIcon name="arrow-back" size={24} />
        <View className="flex-row gap-3 items-center">
          <MaterialIcon name="search" size={24} color={'blue'} />
          <MaterialIcon name="favorite" size={24} color={'#FF3031'} />
          <FontAwesome5
            name="cart-plus"
            size={22}
            color={Theame.lightprimary}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <Carousel
            loop
            width={width}
            height={width * 1.2}
            autoPlay={true}
            data={product?.images}
            scrollAnimationDuration={1500}
            renderItem={({item, index}: any) => (
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: item}}
                />
              </View>
            )}
          />
        </View>
        <View
          className="flex-row justify-between  items-center gap-3"
          style={{padding: 10}}>
          <Text
            style={[styles.text, {fontSize: 14, fontFamily: 'OpenSans-Bold'}]}
            className="flex-1"
            ellipsizeMode="tail"
            numberOfLines={2}>
            {product?.title}
          </Text>
          <View className="flex-row gap-4 ">
            <Pressable className="  items-center">
              <MaterialIcon
                name="favorite"
                size={24}
                color={Theame.textSecondary}
              />
              <Text style={[styles.text]}>Wishlist</Text>
            </Pressable>
            <Pressable className=" items-center">
              <MaterialIcon
                name="share"
                size={24}
                color={Theame.textSecondary}
              />
              <Text style={[styles.text]}>Share</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <Text style={[styles.text, styles.price]}>₹{product?.price}</Text>
          <Text style={[styles.text, {color: Theame.green, marginTop: 5}]}>
            only ({product?.stock}) Available, hurry up 😍
          </Text>
          <Text style={[styles.text, {color: Theame.gray, marginTop: 5}]}>
            Free Delivery
          </Text>
          <View className="flex-row gap-3 items-center mt-3">
            <Text style={[styles.text, styles.rating]}>
              {product?.rating} ⭐
            </Text>
            <Text style={[styles.text, styles.text]}>
              ({product?.rating}) Available
            </Text>
          </View>
        </View>
        {/* <DailyDeals data={product} title="Daily Deals" navigation={navigation} /> */}
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    color: Theame.textPrimary,
  },
  price: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
  rating: {
    backgroundColor: Theame.green,
    color: 'white',
    paddingVertical: 7,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
