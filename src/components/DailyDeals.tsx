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
type Props = PropsWithChildren<{
  title: string;
  data: Product[];
  navigation: any;
}>;
const DailyDeals = ({title, data, navigation}: Props) => {
  return (
    <View className="px-3">
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 10}}>
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
            <Image style={styles.image} source={{uri: item?.images[0]}} />
            <Text style={styles.text}>{item?.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default DailyDeals;

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
});
