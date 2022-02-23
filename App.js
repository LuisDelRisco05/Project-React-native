import React from 'react';
import { StyleSheet, SafeAreaView  } from 'react-native';
import NotificationsScreen from './src/screens/NotificationsScreen';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <NotificationsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
