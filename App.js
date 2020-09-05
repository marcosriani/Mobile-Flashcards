// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { setLocalNotification } from './utils/helpers';

// Navigator
import MainNavigator from './navigation/MainNavigator';
import { Constants } from 'react-native-unimodules';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from './middleware';
import reducer from './reducers';

// Redux Store
const store = createStore(reducer, middleware);

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default class App extends Component {
  ComponentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar
            backgroundColor='lightskyblue'
            barStyle='light-content'
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
