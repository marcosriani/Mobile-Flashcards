// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Settings from './components/Settings';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'react-native-unimodules';

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

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
      activeColor={Platform.OS === 'ios' ? 'green' : 'red'}
      inactiveColor='gray'
      barStyle={{
        backgroundColor: Platform.OS === 'ios' ? 'pink' : 'purple',
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
        component={DeckList}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-bookmarks' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Add Deck'
        component={AddDeck}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='plus-square' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-speedometer' size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Decks' component={Tabs} />
        <Stack.Screen
          name='Add Deck'
          component={AddDeck}
          options={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'purple',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <UdaciStatusBar backgroundColor='pink' barStyle='light-content' />
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  statusBar: {
    backgroundColor: 'red',
  },
});
