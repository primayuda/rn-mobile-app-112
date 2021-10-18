import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const UserMap = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/MockupLight.png')} style={styles.imageContainer} /> */}
      <MapView
          style={styles.mapContainer}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -6.576082664311965,
            longitude: 106.81006149978741,
            latitudeDelta: 0.015,
            longitudeDelta: 0.01,
          }}
          region={{
            latitude: -6.576082664311965,
            longitude: 106.81006149978741,
            latitudeDelta: 0.015,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
        />
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
  mapContainer: {
    width: 300,
    height: 300,
  },
});

export default UserMap;