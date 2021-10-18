import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ReportStack = createNativeStackNavigator();

function PhotoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photo Laporan!</Text>
    </View>
  );
}

function ReportTypeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Report Type screen</Text>
      <Button
        title="Photo Laporan"
        onPress={() => navigation.navigate('Photo')}
      />
    </View>
  );
}

export default function Report() {
  return (
    // <ReportStack.Navigator>
    //   <ReportStack.Screen name="TypeLaporan" component={ReportTypeScreen} />
    //   <ReportStack.Screen name="Photo" component={PhotoScreen} />
    // </ReportStack.Navigator>
    <View><Text>Report Screen</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
