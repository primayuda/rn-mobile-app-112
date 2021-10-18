import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const UserMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let latitude = -6.5761009;
  let longitude = 106.8095802250028;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    console.log(latitude);
    console.log(longitude);
  }
  return (
    <View style={styles.container}>

      <MapView
          style={styles.mapContainer}
          provider={PROVIDER_GOOGLE}
          // initialRegion={{
          //   latitude: -6.5761009,
          //   longitude: 106.8095802250028,
          //   latitudeDelta: 0.015,
          //   longitudeDelta: 0.01,
          // }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
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