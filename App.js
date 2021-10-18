import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// Import components

// Import constants
import Colors from './constants/Colors';

//Import Screens
import HomeScreen from './Screens/Home';
import ReportScreen from './Screens/Report';
import EmergencyScreen from './Screens/Emergency';
import ProfileScreen from './Screens/Profile';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style='auto' />
        <Tab.Navigator 
          style={styles.tabContainer}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: Colors.background },
          }}
        >
          <Tab.Screen
          name="Beranda"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={Colors.foreground} size={26} />
            ),
          }}
        />
          <Tab.Screen 
          name="Laporkan" 
          component={ReportScreen}
          options={{
            tabBarLabel: 'Laporkan',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="camera" color={Colors.foreground} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="P3K" 
          component={EmergencyScreen} 
          options={{
            tabBarLabel: 'P3K',
            tabBarIcon: () => (
              <FontAwesome5 name="first-aid" color={Colors.foreground} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Akun" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Akun',
            tabBarIcon: () => (
              <MaterialIcons name="account-circle" color={Colors.foreground} size={26} />
            ),
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 20,
  },
});
