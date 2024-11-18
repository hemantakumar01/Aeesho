import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Product} from '../constants/ProductsTypes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Theame} from '../constants/colorsTheams';

type Props = PropsWithChildren<{
  title: string;
  data: Product[];
  navigation: any;
}>;
const ProductCrousal = ({title, data, navigation}: Props) => {
  return (
    <View>
      <View
        style={{marginHorizontal: 10}}
        className=" flex-row justify-between items-center">
        <Text style={styles.title}>{title}</Text>
        <Pressable className="flex-row items-center gap-2">
          <Text style={styles.seeAll}>See All</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color={'white'}
            style={{backgroundColor: Theame.lightprimary, borderRadius: 50}}
          />
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 10, marginLeft: 10}}>
        {data.map((item, index) => (
          <Pressable
            onPress={() => navigation.navigate('Details', item)}
            key={index}
            style={{
              width: 150,
              borderWidth: 1,
              borderColor: '#A0A0A0',
              borderRadius: 7,
            }}>
            <Image style={styles.image} source={{uri: item?.thumbnail}} />
            <Text style={styles.text}>{item?.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductCrousal;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    objectFit: 'contain',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    paddingVertical: 10,
  },
  seeAll: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    color: Theame.lightprimary,
  },
});
