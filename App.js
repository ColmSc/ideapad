import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/login-form';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import config from './config';
import AppNavigation from './src/navigation';

export default class App extends React.Component {
  componentDidMount() {
      firebase.initializeApp(config);        
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk) );
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
