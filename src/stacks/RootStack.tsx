import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import HomeTabStack from './tabs/HomeTabStack';
import CategoriesTabs from './tabs/CategoriesTabs';
import OrderTabs from './tabs/OrderTabs';
import AccountsTabs from './tabs/AccountsTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenIconSize, Theame} from '../constants/colorsTheams';
import FontsAwsome from 'react-native-vector-icons/FontAwesome5';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {/* All Tabs Starts From Here */}

      <Stack.Screen name="Home" component={TabsStack} />
      {/* The Bellow includes All Screens which are not included in Tabs and thoes not have Tab bars in it  */}
      <Stack.Screen
        name="Details"
        component={ProductDetailsScreen}
        options={{title: 'Product Details'}}
      />
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const TabsStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Theame.lightprimary,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'OpenSans-SemiBold',
        },
      }}>
      <Tabs.Screen
        name="HomeTabs"
        component={HomeTabStack}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <FontsAwsome
              name="home"
              size={HomeScreenIconSize}
              color={focused ? Theame.lightprimary : Theame.textSecondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CategoriesTabs"
        component={CategoriesTabs}
        options={{
          headerShown: false,
          title: 'Categories',
          tabBarIcon: ({focused}) => (
            <FontsAwsome
              name="vest"
              size={HomeScreenIconSize}
              color={focused ? Theame.lightprimary : Theame.textSecondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="OrderTabs"
        component={OrderTabs}
        options={{
          headerShown: false,
          title: 'My Orders',
          tabBarIcon: ({focused}) => (
            <FontsAwsome
              name="box-open"
              size={HomeScreenIconSize}
              color={focused ? Theame.lightprimary : Theame.textSecondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="AccountsTabs"
        component={AccountsTabs}
        options={{
          headerShown: false,
          title: 'Account',

          tabBarIcon: ({focused}) => (
            <FontsAwsome
              name="user"
              size={HomeScreenIconSize}
              color={focused ? Theame.lightprimary : Theame.textSecondary}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
export default RootStack;

const styles = StyleSheet.create({});
