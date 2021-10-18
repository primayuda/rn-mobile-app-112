import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class DisasterNotification extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"KEBAKARAN",
              text: "Kebakaran di Semanggi",
          },
          {
              title:"GEMPA BUMI",
              text: "Gempa Skala 5.4 Richter di Tasikmalaya",
          },
          {
              title:"KECELAKAAN",
              text: "Tabrakan beruntun di Tol Jagorawi",
          },
          {
              title:"BANJIR",
              text: "Banjir di Pluit",
          },
          {
              title:"PERAMPOKAN",
              text: "Perampokan di Depok",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <TouchableOpacity>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.text}</Text>
          </View>
        </TouchableOpacity>
        )
    }

    render() {
        return (
          
            <View style={styles.container}>
              
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  autoplay={true}
                  loop={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          
        );
    }
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection:'row', 
    justifyContent: 'center', 
    position: 'absolute', 
    bottom: 15 
  },
  itemContainer: {
    backgroundColor:'floralwhite',
    borderRadius: 5,
    height: 100,
    padding: 20,
    marginLeft: 25,
    marginRight: 25, 
  },
  itemTitle: {
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 5,
  },
  itemDescription: {
    textAlign: 'justify',
  },
});
