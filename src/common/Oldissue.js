import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {ImagePath} from '../values/ImagePath';
import {BLACK, DARKGRAY, GRAY, LIGHTORANGE, orange, ratingcolor} from '../values/Colors';
import {IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold} from '../values/Fonts';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
const isTablet=DeviceInfo.isTablet()

const Oldissue = ({item}) => {
  const ratingContent =item?.rating
  return (
    <View style={isTablet?styles.maincontainerTab:styles.maincontainer}>
      <Image source={ImagePath.Book} style={isTablet?styles.bookimgTab:styles.bookimg} />
      <View style={{marginLeft:"3%",height:isTablet?height*0.23:null}}>
{
  isTablet &&         <View style={styles.oldissue}>
  <Text style={styles.oldissueText}>Old Issue</Text>
</View>
}
<View style={isTablet?styles.aboutContainetTab:styles.aboutContainer}>
      <Text style={styles.heading}>22 Years(2023-2002) JEE Main</Text>
      <Text style={styles.chapterwise}>
        (Chapterwise - Topicwise Solved Papers Mathematics)
      </Text>
      <Text style={styles.paperback}>Paperback - 8 April 2024</Text>
      <Text style={styles.by}>
        by
        <Text style={styles.name}> {item?.author} </Text>
        <Text style={styles.authername}>(Author)</Text>
      </Text>
      <View style={styles.ratingcontainer}>
        <Text style={styles.ratingbox}>{ratingContent?.toFixed(2)} </Text>
        <Stars
          default={item.rating}
          half={true}
          disabled
          fullStar={
            <Icon
              name={'star'}
              size={isTablet?width*0.02:15}
              color={ratingcolor}
              style={[styles.myStarStyle]}
            />
          }
          emptyStar={
            <Icon
              name={'star-outline'}
              size={isTablet?width*0.02:15}
              color={ratingcolor}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <Icon
              name={'star-half'}
              size={isTablet?width*0.02:15}
              color={ratingcolor}
              style={[styles.myStarStyle]}
            />
          }
        />

        <Text style={styles.ratingnumber}>{item.no_of_ratings} ratings</Text>
      </View>

      <View style={styles.pricecontainer}>
        <Text style={styles.price}>Rs. 510</Text>
        <Text style={styles.pricers}>
          Rs.<Text style={styles.discount}> 395/-</Text>
        </Text>
      </View>
      </View>
      </View>
    </View>
  );
};

export default Oldissue;

const styles = StyleSheet.create({
  maincontainer: {
    marginTop:"2%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  aboutContainetTab:{
    height:height*0.197
  },

  maincontainerTab: {
    // marginTop:"2%",
    marginLeft:"4%",
    flexDirection:"row"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bookimg: {
    resizeMode: 'contain',
    height: undefined,
    aspectRatio:5.5/7,
    // backgroundColor:"red",
    width: width * 0.65,
  },
  bookimgTab: {
    resizeMode: 'stretch',
    height: height*0.23,
    // aspectRatio:5.5/7,
    // backgroundColor:"red",
    width: width * 0.26,
  },
  heading: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.03:width * 0.047,
    // fontSize:17,
    color: DARKGRAY,
    marginTop: isTablet?null:'5%',
  },
  chapterwise: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.025:width * 0.035,
    color: DARKGRAY,
    lineHeight: height * 0.03,
    width:width/1.1
    // backgroundColor:"red"
  },
  paperback: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.025:width * 0.035,
    color: DARKGRAY,
    // marginTop: '1%'
  },

  by: {
    fontFamily: IsidoraMedium,
    color: BLACK,
    fontSize: isTablet?width * 0.021:width * 0.029,
    // fontSize:11,
    marginVertical: '1%',
  },
  name: {
    fontFamily: IsidoraSemiBold,
    paddingHorizontal: '2%',
    fontSize: isTablet?width * 0.021:width * 0.031,

    color: orange,
  },
  ratingbox: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.021:width * 0.031,
    color: DARKGRAY,
  },
  ratingcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },
  ratingnumber: {
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet? width * 0.02: width * 0.025,
    color: DARKGRAY,
    marginLeft: '2%',
  },
  authername: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.021:width * 0.03,
    color: DARKGRAY,
    marginLeft: '2%',
  },
  price: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize:isTablet? width * 0.025: width * 0.030,
  },
  pricers: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: isTablet?width * 0.025:width * 0.035,
    marginLeft: '6%',
  },
  discount: {
    fontFamily: IsidoraBold,
    color: orange,
    fontSize: isTablet?width * 0.025:width * 0.035,

  },
  pricecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position:isTablet?'absolute':null,
    bottom:isTablet?'0%':null
  },
  oldissue:{
    backgroundColor:LIGHTORANGE,
    height:height*0.02,
    width:width*0.13,
borderRadius:width*0.03,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"2%"
  },
  oldissueText:{
    fontFamily:IsidoraBold,
    color:orange,
    fontSize:isTablet?width*0.017:null
  }
});
