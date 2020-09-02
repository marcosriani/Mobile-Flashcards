// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import Score from '../components/Score';
import DeckDetail from '../components/DeckDetail';
import Settings from '../components/Settings';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack navigator
const DecksStack = createStackNavigator();
const AddDeckStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const DecksStackScreen = () => (
  <DecksStack.Navigator>
    <DecksStack.Screen
      name='Decks'
      component={DeckList}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <DecksStack.Screen
      name='DeckDetail'
      component={DeckDetail}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <DecksStack.Screen
      name='AddCard'
      component={AddCard}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <DecksStack.Screen
      name='Quiz'
      component={Quiz}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <DecksStack.Screen
      name='Score'
      component={Score}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </DecksStack.Navigator>
);

const AddDeckStackScreen = () => (
  <AddDeckStack.Navigator>
    <AddDeckStack.Screen
      name='AddDeck'
      component={AddDeck}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </AddDeckStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name='Settings'
      component={Settings}
      options={{
        headerStyle: {
          backgroundColor: 'lightskyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </SettingsStack.Navigator>
);

// Tab Navigator
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        shifting: true,
        navigationOptions: {
          header: null,
        },
      }}
      activeColor={Platform.OS === 'ios' ? 'dodgerblue' : 'blue'}
      inactiveColor='gray'
      barStyle={{
        backgroundColor: Platform.OS === 'ios' ? 'lightskyblue' : 'purple',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      }}
    >
      <Tab.Screen
        name='Decks'
        component={DecksStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-bookmarks' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Add Deck'
        component={AddDeckStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='plus-square' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-speedometer' size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
);

export default MainNavigator;
