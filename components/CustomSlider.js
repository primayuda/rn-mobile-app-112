import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import CarouselItem from './CarouselItem';
import CustomPaging from './CustomPaging';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
export default function CustomSlider({ data }) {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    onSnapToItem: (index) => setSlideIndex(index),
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View>
      <Carousel
        ref={carouselRef}
        {...settings}
        /*         onSnapToItem={(index) => setSlideIndex(index)} */
        /*  loop={true}
        autoplay={true}
        lockScrollWhileSnapping={true} */
      />
      <CustomPaging data={data} activeSlide={slideIndex} />
    </View>
  );
}
