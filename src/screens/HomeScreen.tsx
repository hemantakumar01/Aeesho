import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {allProductsData, DailyDealData, ProductData} from '../api/ProductData';

import Tabs from '../components/Tabs';
import {Theame} from '../constants/colorsTheams';
import {Product} from '../constants/ProductsTypes';
import ProductsSearchResultScreen from './ProductsSearchResultScreen';
import CategoriesCrousal from '../components/CategoriesCrousal';
import ProductCrousal from '../components/ProductCrousal';
import DailyDeals from '../components/DailyDeals';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({route, navigation}: any) => {
  const [data, setData] = React.useState<Product[]>([]);
  const [dailyDeals, setDailyDeals] = React.useState<Product[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const getProducts = async () => {
    setLoading(true);
    const response = await allProductsData({limit: 10, page: page});

    setProducts([...products, ...response.products]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    getProducts();
  }, [page]);
  const getData = async () => {
    const response = await ProductData(10);
    setData(response.products);
  };

  const getDailyDeals = async () => {
    const response = await DailyDealData({limit: 10});

    setDailyDeals(response.products);
  };
  useEffect(() => {
    getData();
    getDailyDeals();
  }, []);
  useEffect(() => {
    getProducts();
  }, []);
  const loadmore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Theame.primary} />

      <FlatList
        ListHeaderComponent={() => (
          <View style={{}}>
            <View className="flex-row justify-between items-center px-4 py-3">
              <View className="flex-row items-center gap-2">
                <Image
                  className="w-12 h-12 rounded-full shadow-black"
                  style={{resizeMode: 'contain'}}
                  source={{
                    uri: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png',
                  }}
                />
                <View>
                  <Text
                    className="font-poppins"
                    style={{fontSize: 13, fontFamily: 'OpenSans-Regular'}}>
                    Hello
                  </Text>
                  <Text style={{fontSize: 13, fontFamily: 'OpenSans-SemiBold'}}>
                    +91 123456789
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-4">
                <MaterialIcons name="favorite" size={22} color={'#FF3031'} />
                <MaterialIcons
                  name="notifications"
                  size={22}
                  color={'#F4C724'}
                />
                <FontAwesome5
                  name="cart-plus"
                  size={20}
                  color={Theame.lightprimary}
                />
              </View>
            </View>
            <View className="px-4 py-1 relative">
              <TextInput
                placeholder="Search by Keyword or Product...."
                style={styles.input}
                placeholderTextColor={'#A0A0A0'}
              />
              <MaterialIcons
                name="search"
                size={22}
                color={'#A0A0A0'}
                style={{position: 'absolute', top: 12, left: 25}}
              />
              <MaterialIcons
                name="mic"
                size={22}
                color={'#A0A0A0'}
                style={{position: 'absolute', top: 12, right: 25}}
              />
              <FontAwesome5
                name="camera"
                size={22}
                color={'#A0A0A0'}
                style={{position: 'absolute', top: 11, right: 55}}
              />
            </View>
            <Tabs />
            <CategoriesCrousal />

            <View>
              <Image
                source={{
                  uri: 'https://images.meesho.com/images/banners/118576/ex5pb.gif',
                }}
                style={{resizeMode: 'contain', width: '100%', height: 150}}
              />
            </View>
            <ProductCrousal
              data={data}
              title="Recently Viewed"
              navigation={navigation}
            />
            <DailyDeals
              data={dailyDeals}
              title="Daily Deals"
              navigation={navigation}
            />
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'OpenSans-SemiBold',
                margin: 10,
              }}>
              Products For You
            </Text>
            <ProductsSearchResultScreen />
          </View>
        )}
        data={products}
        renderItem={({item}) => (
          <ProductCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        onEndReached={loadmore}
        ListFooterComponent={() =>
          loading && (
            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={'large'} color={Theame.lightprimary} />
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 40,
  },
});
