import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';

//Constants
import Colors from '../constants/Colors';

const typeOfEmergencies = [
  {
    id: '0',
    icon: require('../assets/noun_disaster.png'),
    title: 'Bencana Alam'
  },
  {
    id: '1',
    icon: require('../assets/noun_criminal.png'),
    title: 'Kejahatan'
  },
  {
    id: '2',
    icon: require('../assets/noun_Fire.png'),
    title: 'Kebakaran'
  },
  {
    id: '3',
    icon: require('../assets/noun_car_crash.png'),
    title: 'Kecelakaan'
  },
  {
    id: '4',
    icon: require('../assets/noun_red_cross.png'),
    title: 'Kejadian Medis'
  },

]

export default function Report() {
  return (
    <View style={styles.container}>
      {typeOfEmergencies.map((item) => {
        return (
          
          <Card.Title
            key={item.id}
            title={item.title}
            left={(props) => <Avatar.Icon {...props} icon={item.icon} size={50} color={Colors.foreground} style={styles.cardIcon} />}
            right={(props) => <IconButton {...props} icon="details" onPress={() => {}} />}

          />
          
        )
      })}
      <TouchableOpacity style={styles.nextButton}>
      <Text style={styles.buttonText}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    flex: 1,
    top: 10,
  },
  cardIcon: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.foreground,
  },
  nextButton : {
    backgroundColor: Colors.attention,
    padding: 10,
    width: 300,
    position: 'absolute',
    bottom: 40,
    borderWidth: 1,
    borderColor: Colors.attention,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  }
})
