import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  AllAdvert,
  ChatPage,
  MortgageBanker,
  MyAdvert,
  PastTransaction,
  Profile,
  PropertyAgent,
  Register,
  SellingGuide,
} from '../pages';

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fb645c',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name={'Search you Advertisement'}
        component={AllAdvert}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'search'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'My Advert'}
        component={MyAdvert}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'document-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'ChatPage'}
        component={ChatPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'chatbubbles-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'Past Transaction'}
        component={PastTransaction}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'bar-chart-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'Selling Guide'}
        component={SellingGuide}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'newspaper-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'Mortgage Banker'}
        component={MortgageBanker}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'cash-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'Property Agents'}
        component={PropertyAgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'business-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'person-circle-outline'}
              size={25}
              color={focused ? '#fb645c' : 'grey'}
            />
          ),
          headerShown: false, 
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenu;
