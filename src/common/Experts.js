import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, orange, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import DeviceInfo from 'react-native-device-info'
const { width, height } = Dimensions.get('window')
const isTablet=DeviceInfo.isTablet()
const Experts = ({ item ,index}) => {

  return (

    <View style={styles.main}>
<View style={[
    {
      width:isTablet?width*0.2:width*0.375,
    height: isTablet?width*0.2:width*0.375,
    borderRadius:width*0.375/2,
      alignSelf: 'center',
      // elevation: isTablet?0:6,
      shadowColor:BLACK,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      // shadowRadius: 4,
    },
    index==0 && {
      // elevation: 5,
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  ]}>
<Image source={item.image} style={styles.expertimage} />

</View>
      <View style={styles.aboutExperts}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
        <Text style={styles.about}>{item.about}</Text>
        <Text style={styles.text}>—</Text>
      </View>
    </View>
  )
}

export default Experts

const styles = StyleSheet.create({
  main: {
    // backgroundColor: "red",
    // paddingVertical: 14
  },
  expertimage: {
    width:isTablet?width*0.2:width*0.375,
    height:isTablet?width*0.2:width*0.375,
    borderRadius:width*0.375/2,
    resizeMode: 'contain',
    borderWidth:0.15,
    borderColor:LIGHTGRAY2,
    // backgroundColor:WHITE,
    alignSelf: 'center',
    // elevation:5
    
  },
  aboutExperts: {
    marginTop:'10%',
    paddingLeft:width*0.05,
    width: isTablet?width / 3.5:width / 2.2,
    
  },
  imagecontainer:{ 
     width:width*0.3,
    height: width*0.3,
    borderRadius:width*0.3/2,
    resizeMode: 'contain',
    // backgroundColor:WHITE,
    alignSelf: 'center',
    elevation:5,
    shadowColor:'rgba(0,0,0,0.5)'
    },
  name: {
    fontFamily: IsidoraBold,
    fontSize: isTablet?width*0.025:width*0.034,
    color: orange,
    marginBottom:height*0.005
    // alignSelf:'center'
  },
  designation: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width*0.02:width*0.028,
    color: GRAY
  },
  about: {
    fontFamily: IsidoraMedium,
    fontSize: isTablet?width*0.015:width*0.025,
    width:isTablet?width*0.2:null,
    color: GRAY,
    lineHeight: isTablet?height*0.015:height*0.02,
    // alignSelf: 'center'

  },
  text: {
    fontSize: width*0.1,
    color: orange,
    // backgroundColor:"red",
  marginLeft:"-1.5%"
  }

})