import React from 'react';
import {SafeAreaView} from 'react-native';
import Test from './components/Test';
import User from './components/User';

const App = () => (
  <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Test />
    <User />
  </SafeAreaView>
)

export default App;