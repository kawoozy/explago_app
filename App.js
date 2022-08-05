import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 20,
  },
});

export default App;
