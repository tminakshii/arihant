import { View, Text, Dimensions, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const{height,width}=Dimensions.get('window')

const SwiperCommon = ({imagecontainer,children}) => {
  
  return (
    <View style={[styles.container,{...imagecontainer}]}>
      <Swiper 
          // autoplay={true}
          autoplayTimeout={2.3}
          showsPagination={false}
         
        >
          {children}
          
        </Swiper>
         </View>
  )
}

export default SwiperCommon
const styles = StyleSheet.create({
  container:{
    width:width,
    // height:height
  },
    
})