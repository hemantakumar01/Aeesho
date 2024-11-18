import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {crousalDataOne} from '../constants/colorsTheams';

const CategoriesCrousal = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 10, paddingLeft: 10, marginVertical: 10}}>
      {crousalDataOne.map((item, index) => (
        <Pressable key={index}>
          <Image source={{uri: item.img}} style={styles.image} />
          <Text style={styles.text}>
            {item.title.length > 10
              ? item.title.slice(0, 7) + '...'
              : item.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategoriesCrousal;

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    objectFit: 'contain',
    borderRadius: 100,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },
});
