import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// import Call API
import call from 'react-native-phone-call';

//Constants
import Colors from '../constants/Colors';

//Components
import HelpChoices from '../components/HelpChoices';
import DisasterNotification from '../components/DisasterNotification';
import UserMap from '../components/UserMap';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <HelpChoices />
    
      <TouchableOpacity 
        style={styles.emergencyButton}
        onPress={() => {
          const args = {
            number: '112',
            prompt: true
          };
          call(args).catch(console.error)
        }}
      >
      <Text style={styles.buttonText}>Hubungi 112</Text>
      </TouchableOpacity>
      <UserMap />
      <DisasterNotification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emergencyButton: {
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: Colors.attention,
    borderWidth: 1,
    borderColor: Colors.attention,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 24, 
    textAlign: 'center',
  },
});
