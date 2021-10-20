import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

//Constants
import Colors from '../constants/Colors';

// Local components
import CustomSlider from '../components/CustomSlider';

const emergencyOptionOne = [
  {
    id: '0',
    image: require('../assets/noun_drown.png'),
    text: 'Tenggelam',
  },
  {
    id: '1',
    image: require('../assets/noun_car_crash.png'),
    text: 'Kecelakaan',
  },
  {
    id: '2',
    image: require('../assets/noun_disaster.png'),
    text: 'Bencana',
  },
];

const emergencyOptionTwo = [
  {
    id: '3',
    image: require('../assets/noun_Lightning.png'),
    text: 'Listrik'
  },
  {
    id: '4',
    image: require('../assets/noun_Fire.png'),
    text: 'Kebakaran'
  },
];

const quickInformations = [
      {
        id: '0',
        image: require('../assets/Choking.png'),
        description: 'Pertolongan pertama untuk tersedak'
      },
      {
        id: '1',
        image: require('../assets/Choking1.png'),
        description: 'Letakkan tangan di punggung korban pada posisi antara tulang belikat dan pukul punggung korban'
      },
      {
        id: '2',
        image: require('../assets/Choking3.png'),
        description: 'Rangkul korban dari belakang dan katupkan tangan di bawah ulu hati'
      },
      {
        id: '3',
        image: require('../assets/Choking4.png'),
        description: 'Hentakkan sebanyak 5 kali berturut-turut'
      },
];

export default function Emergency() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {emergencyOptionOne.map((item) => {
          return (
            <View key={item.id}>
              <TouchableOpacity>
                <Avatar.Icon
                  size={60}
                  color={Colors.foreground}
                  icon={item.image}
                  style={{ backgroundColor: Colors.background }}
                />
              </TouchableOpacity>
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttonRow}>
        {emergencyOptionTwo.map((item) => {
          return (
            <View key={item.id}>
              <TouchableOpacity>
                <Avatar.Icon
                  size={60}
                  color={Colors.foreground}
                  icon={item.image}
                  style={{ backgroundColor: Colors.background }}
                />
              </TouchableOpacity>
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </View>
      
        <Text style={{fontWeight: 'bold'}}>Quick Information</Text>
        <CustomSlider data={quickInformations} />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 10,
    width: '80%',
  },
  circleImage: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    tintColor: Colors.foreground,
  },
  description: {
    textAlign: 'center',
  },
  cardStyle: {
    flexDirection: 'row',
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: Colors.background,
  },
  cardTextTitle: {
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  cardText: {
    marginLeft: 30,
    textAlign: 'justify',
  },
  cardImage: {
    width: 75,
    height: 75,
    tintColor: Colors.foreground,
  },
});
