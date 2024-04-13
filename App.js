/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

import 'firebase/firestore';

const App = () => {
  useEffect(() => {
    getToken();
  });
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const getToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <Text>Notification</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
