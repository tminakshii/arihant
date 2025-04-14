import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ImagePath } from '../values/ImagePath';
import { BLACK, GRAY, LIGHTGRAY, LIGHTGRAY2, RED, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()
const VideoCourses = ({ item }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageContainer}>
        <Image style={styles.videoCoursesImage} source={item.imageUrl} />
        <TouchableOpacity style={styles.playButtonView}>
          <Image style={styles.playButton} source={item.playButtonUrl} />
        </TouchableOpacity>
        <Text style={styles.imageHeading1}>{item.subname}</Text>
        <Text style={styles.imageHeading}>{item.ImageHeading}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.heading}>{item.heading1}</Text>
        <Text style={styles.heading}>{item.heading2}</Text>
        <Text style={styles.heading2}>{item.heading3}</Text>
        <View style={styles.deiscriptionArrow}>
          <Text style={styles.description}>{item.description}</Text>

          <Image source={ImagePath.arrowimage1} style={styles.arrow}/>

        </View>
      </View>
    </View>
  );
};

export default VideoCourses;

const styles = StyleSheet.create({
  mainView: {
    // marginHorizontal: '0.8%',
    marginHorizontal:width*0.02,
    borderRadius: isTablet?width*0.015:width*0.03,
    marginBottom: "5%",
    borderWidth: 1,
    borderColor: LIGHTGRAY2,
    overflow: 'hidden',
    // backgroundColor: WHITE,
    paddingBottom:isTablet?0:height*0.005,
    // height:height*0.305,
    width:isTablet?width/3.6:width/2.45
  },
  imageContainer: {
    height:isTablet?height*0.15:height*0.14,
    width:isTablet?width*0.32:width*0.41,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    alignSelf:'center',
    // backgroundColor:"red"
  },
  videoCoursesImage: {
    width: isTablet?'95%':'100%',
    height:isTablet? '85%': '90%',
    resizeMode: "stretch",
    // backgroundColor:"red"
  },



  playButtonView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: width*0.2,
    borderColor: WHITE,
    borderWidth: 1,
    bottom: isTablet?'25%':'13%',
    right:isTablet? 40: 10,
    height: isTablet?height*0.02:height*0.03,
    width: isTablet?height*0.02:height*0.03,

  },
  playButton: {
    height: isTablet?height*0.015:height*0.02,
    width: isTablet?width*0.014:width*0.025,
    resizeMode: 'contain',
  },
  imageHeading: {
    position: 'absolute',
    top:isTablet? '20%': '27%',
    left:isTablet?"9%":"6%",
    color: WHITE,
    fontFamily:IsidoraBold,
    fontSize: isTablet?height*0.008:height*0.0115,
    width: isTablet?width / 9:width / 4.5,
    lineHeight:isTablet?height*0.01:height*0.0148,
    textAlign:"left",
    paddingHorizontal: '2%',
    // borderRadius: 5,
  },
  imageHeading1: {
    position: 'absolute',
    top: isTablet?'8%':'15%',
    left: isTablet?"8%":"5%",
    color: WHITE,
    fontFamily:IsidoraBold,
    fontSize: isTablet?height*0.012:height*0.016,
    width: width / 3,
    lineHeight:height*0.018,
    textAlign:"left",
    paddingHorizontal: '3%',
    borderRadius: 5,
  },
  textView: {
    paddingHorizontal:8,
    justifyContent:'space-around',
    // backgroundColor: "red",
    paddingVertical:height*0.009,
    marginTop:-height*0.014,
    // backgroundColor:RED
  },
  heading: {
    fontSize: isTablet?width*0.018:width*0.028,
    fontFamily: IsidoraBold,
    color: GRAY,
    // marginBottom: '4%',
    width: width / 2.6,
    lineHeight:isTablet?height*0.013:height*0.018,
    // backgroundColor:"red"
    // marginHorizontal:'3%'
    // marginLeft:'3%'
  },
  heading2: {
    fontSize: isTablet?width*0.02:width*0.028,
    fontFamily: IsidoraBold,
    color: GRAY,
    marginBottom: '4%',
    width: width / 2.6,
    lineHeight:height*0.018,
    // backgroundColor:"red"
    // marginHorizontal:'3%'
    // marginLeft:'3%'
  },
  description: {
    fontSize:isTablet?width*0.015:width*0.023 ,
    color: GRAY,
    fontFamily:IsidoraMedium,
    width: isTablet?width / 4.5:width / 3.2,
    lineHeight:isTablet?height*0.012:height*0.015,
    // backgroundColor:"red"
    //  marginHorizontal:'3%'

  },
  arrow: {
    resizeMode:"contain",
     height:isTablet?width*0.025:width*0.036,
     width:isTablet?width*0.025:width*0.036,
     bottom:isTablet?0:height*0.001,
     right:1,
    position:"absolute"
  },
  deiscriptionArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:isTablet?-5:-1,
    justifyContent: 'space-between'

  }
});
