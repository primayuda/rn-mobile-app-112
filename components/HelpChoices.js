import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

import Colors from '../constants/Colors';

export default function helpChoices() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Perlu bantuan apa ?
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => alert('Calling Ambulance!')}>
          <Avatar.Icon
            size={60}
            color={Colors.foreground}
            icon={require('../assets/noun_Ambulance.png')}
            style={{ backgroundColor: Colors.background }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Calling Hospital!')}>
        <Avatar.Icon
          size={60}
          color={Colors.foreground}
          icon={require('../assets/noun_red_cross.png')}
          style={{ backgroundColor: Colors.background }}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Calling Firefighter!')}>
        <Avatar.Icon
          size={60}
          color={Colors.foreground}
          icon={require('../assets/noun_firefighter.png')}
          style={{ backgroundColor: Colors.background }}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Calling Police!')}>
        <Avatar.Icon
          size={60}
          color={Colors.foreground}
          icon={require('../assets/noun_Police.png')}
          style={{ backgroundColor: Colors.background }}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    width: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
