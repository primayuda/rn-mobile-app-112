import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const UserMap = () => {
  return (
    <View>
      <Image source={require('../assets/MockupLight.png')} style={styles.imageContainer} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
});

export default UserMap;