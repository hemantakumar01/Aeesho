import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {act} from 'react';
import {Theame} from '../constants/colorsTheams';
const items = [
  {
    id: 1,
    title: 'All',
    active: true,
  },
  {
    id: 2,
    title: 'Women',
    active: false,
  },
  {
    id: 3,
    title: 'Men',
    active: false,
  },
  {
    id: 4,
    title: 'Kids',
    active: false,
  },
  {
    id: 5,
    title: 'Accessories',
    active: false,
  },
  {
    id: 6,
    title: 'Shoes',
    active: false,
  },
  {
    id: 7,
    title: 'Sale',
    active: false,
  },
];
const Tabs = () => {
  const [state, setState] = React.useState(items);
  const handelPress = (index: number) => {
    const newItems = state.map((item, i) => {
      if (i === index) {
        return {...item, active: true};
      } else {
        return {...item, active: false};
      }
    });
    setState(newItems);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#A0A0A0',
        marginVertical: 5,
      }}>
      {state.map((item, index) => (
        <Pressable
          className="px-3 flex-row g"
          key={item.id}
          style={{
            borderBottomWidth: item.active ? 2 : 0,
            borderBottomColor: Theame.lightprimary,
          }}
          onPress={() => handelPress(index)}>
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
  },
});
