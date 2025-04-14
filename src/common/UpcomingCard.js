import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTORANGE,
  LIGHTPURPLE,
  LIGHTPURPLE2,
  orange,
  RED,
  WHITE,
} from '../values/Colors';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  IsidoraBold,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../values/Fonts';
const {width, height} = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from './Button';
import { ImagePath } from '../values/ImagePath';
import DeviceInfo from 'react-native-device-info';

const isTablet=DeviceInfo.isTablet()
const UpcomingCard = ({item, isupcomingcard = false, isbestseller = false}) => {
  return (
    <View style={isbestseller ? styles.card2 : styles.card}>
      {isbestseller && (
        <>
          <View style={styles.selllercontianer}>
            <Image source={item.imageSrc} style={styles.imagebest} />
            <View style={styles.writtenbox}>
              <Text style={styles.successtext}>{item?.successText}</Text>
              <Text style={styles.titletext}>{item?.title}</Text>
              <Text style={styles.subtitletext}>{item?.subtitle}</Text>
              {item?.features?.map((it, ind) => {
                return (
                  <View style={styles.featurebox}>
                    <AntDesign
                      name="plussquareo"
                      size={width * 0.03}
                      color={DARKGRAY}
                    />
                    <Text style={styles.featuretext}>{it}</Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.ratingbox}>
              <Stars
                default={item.rating}
                half={true}
                disabled
                fullStar={
                  <Icon
                    name={'star'}
                    size={width * 0.03}
                    color={orange}
                    style={[styles.myStarStyle]}
                  />
                }
                emptyStar={
                  <Icon
                    name={'star-outline'}
                    size={width * 0.03}
                    color={orange}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <Icon
                    name={'star-half'}
                    size={width * 0.03}
                    color={orange}
                    style={styles.myStarStyle}
                  />
                }
              />
              <Text style={styles.reviewnotext}>( 8 Reviews )</Text>
            </View>
          </View>
          <View style={styles.bestpricebox}>
            <Text style={styles.bestpricetext}>Rs {item.price}</Text>
            <Text style={styles.bestdiscpricetext}>
              Rs {item.discountedPrice}
            </Text>
          </View>
          <View style={styles.bestbuttonbox}>
            <Button
              text={'Explore'}
              customStyles={styles.explorebtn}
              textStyle={styles.explorebtntext}
            />
            <Button
              text={'Buy now'}
              customStyles={styles.buybtn}
              textStyle={styles.buybtntext}
            />
          </View>
        </>
      )}
      {isupcomingcard && (
        <>
          <View style={styles.ratingCardContainer}>
            <TouchableOpacity style={styles.preOrder}>
              <Text style={styles.preOrderText}>Pre-order now</Text>
            </TouchableOpacity>
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.wishlisht}>
                <AntDesign
                  name="hearto"
                  style={styles.heartIcon}
                  size={isTablet?width * 0.03:width * 0.05}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.share}>
              <Image source={ImagePath.share} style={styles.shareimage}/>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.upcomingImageContainer}>
            <Image
              source={{uri: item?.thumbnail}}
              style={styles.upcomingImage}
            />
            <View style={styles.upcomingDetails}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.upcomingName}>
                {item?.name}
              </Text>
              <Text style={styles.upcomingBookDetails}>
                A preparatory guide for the civil services aspirants
              </Text>
              <View style={styles.priceparent}>
                <Text style={styles.price}>Rs. {item?.discounted_price}</Text>
              <Image source={ImagePath?.Arrow3} style={styles.arrow}/>
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default UpcomingCard;

const styles = StyleSheet.create({
  card: {
    width: isTablet?width / 2.2:width / 1.3,
    // height:height*0.21,
    borderRadius:isTablet?width*0.01:width*0.02,
    marginHorizontal: isTablet?0:width * 0.02,
    marginLeft: isTablet?width * 0.02:0,

    shadowColor: GRAY,
    // elevation: 8,
    backgroundColor: WHITE,
    paddingVertical: height * 0.012,
    borderWidth: 1,
    borderColor: LIGHTGRAY2,
    marginBottom: '4%',
    overflow:'hidden',
    paddingHorizontal: isTablet?width * 0.02:width * 0.02,
  },
  card2: {
    width: width / 1.3,
    // height:height*0.515,
    borderRadius: width*0.015,
    marginHorizontal: width * 0.02,
    shadowColor: GRAY,
    elevation: 8,
    backgroundColor: WHITE,
    paddingTop: height * 0.01,
    // borderWidth: 0.5,
    
    borderColor: GRAY,
    paddingBottom: height * 0.012,
    marginBottom: '5%',
    // overflow: 'hidden',
    paddingHorizontal: width * 0.02,
    shadowColor:GRAY,
    shadowOffset:{width:0,height:5},
    shadowOpacity: 0.15, 
  },
  upcomingImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shareimage:{
    height:isTablet?height/60:height/40,
    width:isTablet?width/20:width/10,
    resizeMode:"contain",
    
    
      },
  upcomingImage: {
    width: isTablet?width * 0.13:width * 0.23,
    height: isTablet?height * 0.1:height * 0.145,
    resizeMode: 'contain',
    // backgroundColor:"red"
    // marginTop: '1%'
  },
  upcomingName: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.018:width * 0.036,
    width:isTablet?width*0.26:null,
    lineHeight:isTablet? height * 0.015: height * 0.022,
  },
  upcomingDetails: {
    width: width / 2.2,
    height:isTablet?height*0.1:null,
    marginLeft:isTablet?width*0.01:null
  },
  upcomingBookDetails: {
    color: GRAY,
    fontFamily: IsidoraMedium,
    fontSize: isTablet?width * 0.017:width * 0.03,
    width:isTablet?width*0.3:null,

    marginVertical: isTablet?"1%":'4%',
    // marginBottom:"4%",
    lineHeight: isTablet?height * 0.012:height * 0.02,
  },
  priceparent: {
    flexDirection: 'row',
    marginTop:isTablet?0:0,
    position:isTablet?'absolute':null,
    bottom:isTablet?0:null,
    width:isTablet?'100%':null,
    alignItems: 'center',
    justifyContent:"space-between",
    // backgroundColor:"green"
  },
  price: {
    color: orange,
    fontSize: isTablet?width * 0.02:width * 0.035,
    fontFamily: IsidoraBold,
  },
  arrow: {
    resizeMode:"contain",
    height:isTablet?height*0.015:height*0.02,
    width:isTablet?height*0.015:height*0.02,
    right:isTablet?width*0.2:width*0.02,
    // bottom:isTablet?height*0.02:height*0.005,
    // backgroundColor:"red",
    zIndex:999
  },
  ratingCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: width * 0.02,
    paddingLeft:!isTablet?width*0.01:null
    // backgroundColor:"red"
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:"1%",
    justifyContent: 'space-between',
  },
  preOrder: {
    backgroundColor: LIGHTORANGE,
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: '5%',
    // paddingVertical: '1.2%',
    // paddingVertical:"1%",
  },
  preOrderText: {
    color: orange,
    fontFamily: IsidoraBold,
    fontSize:isTablet? width * 0.015: width * 0.025,
    marginVertical:"2.5%",
    paddingHorizontal:"4%",

  },
  wishlisht: {
    // marginRight: '5%',
  },
  selllercontianer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: height * 0.03,
    marginTop: height * 0.015,
  },
  imagebest: {
    height:isTablet? height * 0.06: height * 0.12,
    width: isTablet?width * 0.1:width * 0.187,
    resizeMode: 'contain',
    // backgroundColor:"red",
    alignSelf:"flex-start",
    borderTopLeftRadius:width*0.015,
    borderTopRightRadius:width*0.015,

    marginLeft: width * 0.032,
  },
  featurebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  writtenbox: {
    marginLeft: width * 0.03,
    marginTop:"1%"
  },
  successtext: {
    color: orange,
    fontSize: width * 0.035,
    fontFamily: IsidoraSemiBold,
    marginTop: '5%',
  },
  titletext: {
    color: GRAY,
    fontSize: width * 0.036,
    fontFamily: IsidoraBold,
    marginTop: height * 0.01,
  },
  subtitletext: {
    color: GRAY,
    fontSize: width * 0.04,
    fontFamily: IsidoraBold,
    // marginTop: height * 0.002,
    marginBottom: height * 0.01,
  },
  featuretext: {
    color: DARKGRAY,
    fontSize: width * 0.03,
    fontFamily: IsidoraMedium,
    marginLeft: width * 0.01,
  },
  bestpricebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    borderTopWidth: 0.5 ,
    borderColor: GRAY,
    paddingTop: height * 0.02,
    // backgroundColor:"green"
  },
  bestpricetext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.036,
    color: GRAY,
    textDecorationLine: 'line-through',
  },
  bestdiscpricetext: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.041,
    color: orange,
    marginLeft: width * 0.04,
  },
  bestbuttonbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    marginHorizontal:'5%'
  },
  explorebtntext: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.032,
    textAlign: 'center',
    // paddingVertical:height*0.01
  },
  buybtntext: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.032,
  },
  explorebtn: {
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: width * 0.05,
    width: width * 0.3,
    // height:height*0.045,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHTPURPLE2,
    borderWidth: 0.5,
  },
  buybtn: {
    backgroundColor: orange,
    borderRadius: width * 0.05,
borderWidth:1,
borderColor:orange,
    width: width * 0.3,
    // height:height*0.045,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor:'red'
    marginHorizontal: '4.5%',
    marginTop: '3%',
    // backgroundColor: 'red',
    marginBottom:-height*0.01
  },
  reviewnotext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: DARKGRAY,
    marginLeft: '2%',
  },
  myStarStyle: {
    // borderWidth:1
  },
});
