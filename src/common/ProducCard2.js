import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2, LIGHTGRAY3, orange, WHITE } from '../values/Colors';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImagePath } from '../values/ImagePath';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()
const { width, height } = Dimensions.get('window');

const Productcard2 = ({ item, onPress, customStyles,index }) => {
  return (
    <View style={[isTablet?styles.mainTab:styles.main, { ...customStyles }]}>
      <View style={styles.outercontainer}>
        <View style={styles.innercontainer}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>20%</Text>
          </View>
          <View style={styles.parentVector}>
            <TouchableOpacity>
              <AntDesign name="hearto" style={styles.heartIcon} size={isTablet?width * 0.03:width * 0.0555} color='black' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={ImagePath.share} style={styles.shareimage} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Image source={{ uri: item?.thumbnail }} style={styles.image} />
          <View style={styles.detail}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{item?.name}</Text>
            <View style={styles.discountparent}>
              <Text style={styles.discount}>Rs.{item?.price}</Text>
              <Text style={styles.rate}>Rs.{item?.discounted_price}</Text>
              <Image source={ImagePath.arrowimage1} style={styles.arrow}/>
             
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.lockcart}>
            <TouchableOpacity style={styles.cart}>
              {/* <AntDesign name='shoppingcart' size={width *0.0334} color={DARKGRAY} /> */}
              <Image source={ImagePath?.cart} style={styles.cartimage}/>

              <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buy}>
              {/* <AntDesign name='lock' size={width *0.0338} color={WHITE} /> */}
              <Image source={ImagePath?.bag} style={styles.bagimage}/>

              <Text style={styles.buytext}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: WHITE,
    width: width /1.75, // Adjusted for responsiveness
    shadowColor: GRAY,
    elevation: 5,
    borderRadius:width*0.025,
    marginHorizontal: height * 0.012,
    paddingHorizontal: width * 0.02,
    // marginLeft: width * 0.04,
    marginVertical: height * 0.02,
    shadowColor:GRAY,
    shadowOffset:{width:3,height:5},
    shadowOpacity: 0.15, 
  },
  mainTab: {
    backgroundColor: WHITE,
    width: width /3.5, // Adjusted for responsiveness
    shadowColor: GRAY,
    elevation: 5,
    borderRadius:isTablet?width*0.015:width*0.025,
    marginLeft: height * 0.012,
    marginRight: height * 0.005,

    paddingHorizontal:isTablet? width * 0.01: width * 0.02,
    // marginLeft: width * 0.04,
    marginVertical: height * 0.02,
    shadowColor:GRAY,
    shadowOffset:{width:3,height:5},
    shadowOpacity: 0.15, 
  },
  outercontainer: {
    // backgroundColor: 'white',
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: isTablet?height * 0.01:height * 0.02,
  },
  discountBadge: {
    height: isTablet?height * 0.015:height * 0.025,
    width:isTablet? width * 0.07: width * 0.15,
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.0251,
    marginLeft: width * 0.01,
  },
  discountBadgeText: {
    color: WHITE,
    fontSize: isTablet?width * 0.015:width * 0.03,
    fontFamily: IsidoraSemiBold,
  },
  parentVector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:"3%"
  },
  image: {
    height: isTablet?height * 0.17:height * 0.25, // Adjusted height for responsiveness
    width: isTablet?width * 0.22:width * 0.40, // Adjusted width for responsiveness
    resizeMode: 'cover',
    marginVertical:isTablet? height * 0.01: height * 0.02,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: BLACK,
    backgroundColor:"red"
  },
  detail: {
    marginLeft: width * 0.02,
    // borderBottomWidth:1,
    // borderColor:LIGHTGRAY2,
    // paddingBottom:height*0.012
  },
  bagimage:{
    height:isTablet?height*0.01:height*0.018,
    width:isTablet?width*0.025:width*0.025,
   
    resizeMode:"contain"
  },
  cartimage:{
    height:isTablet?height*0.01:height*0.018,
    width:isTablet?width*0.025:width*0.035,
   
    resizeMode:"contain"
  },
  title: {
    fontSize:isTablet? width * 0.02: width * 0.035,
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    lineHeight: isTablet?height * 0.015:height * 0.02,
    marginTop:isTablet? null: height * 0.005,
  },
  discountparent: {
    flexDirection: 'row',
    marginTop: height * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: width * 0.03,
  },
  discount: {
    fontSize: isTablet?width * 0.02:width * 0.032,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    textDecorationLine: 'line-through',
  },
  rate: {
    fontSize: isTablet?width * 0.023:width * 0.035,
    fontFamily: IsidoraBold,
    color: orange,
    marginRight:isTablet?"10%":"30%"
  },
  heartIcon: {
    paddingHorizontal: width * 0.02,
  },
  shareimage: {
    height: isTablet?height * 0.018:height * 0.025,
    width: isTablet?width * 0.03:width * 0.07,
    resizeMode: "contain",
    // backgroundColor:"red"
  },
  arrow:{
    resizeMode:"contain",
    height:isTablet?width*0.027:width*0.04,
    width:isTablet?width*0.027:width*0.04,

   //  backgroundColor:"red"
   },
  cart: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: isTablet?height * 0.005:height * 0.010,

    borderRadius: isTablet?width*0.004:width*0.008,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: WHITE,
    width:isTablet? width * 0.12: width * 0.24,
  },
  buy: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: isTablet?height * 0.005:height * 0.010,
    borderRadius: isTablet?width*0.004:width*0.008,

    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: DARKGRAY,
    width:isTablet? width * 0.12: width * 0.24,

    paddingHorizontal:width*0.02
    // marginBottom:"5%"
  },
  lockcart: {
    flexDirection: 'row',
    // marginTop: height * 0.02,
    alignItems: 'center',
    justifyContent: "space-around",
    marginBottom:"5.9%",

    // backgroundColor:"red"
  },
  buytext: {
    color: WHITE,
    fontSize: isTablet?width * 0.015:width * 0.03,
    fontFamily: IsidoraSemiBold,
  },
  cartText: {
    fontSize: isTablet?width * 0.015:width * 0.03,

    color: BLACK,
    fontFamily: IsidoraSemiBold,
  },
  line: {
    width: '108%',
    backgroundColor: LIGHTGRAY2,
    height: height * 0.002,
    marginVertical:isTablet? height * 0.01: height * 0.015,
    alignSelf: 'center',
  }
});

export default Productcard2;
