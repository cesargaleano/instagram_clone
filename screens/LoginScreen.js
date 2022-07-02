import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Login} from '../components/login/Login';

export const LoginScreen = () => {
  return (
    <SafeAreaView>
    <Login />
    </SafeAreaView>
  )
}
