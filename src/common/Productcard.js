import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREYTEXT, orange, RED, WHITE } from '../values/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import index from '../Screen/Auth/Login';
import { ImagePath } from '../values/ImagePath';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
let isTablet = DeviceInfo.isTablet();

const Productcard = ({ item ,onPress,customStyles,styleC}) => {
  return (
   ! isTablet?
    <View style={[styles.main,{...customStyles}]}>
      <View style={styles.outercontainer}>
        <View style={styleC?styles.innercontainer1:styles.innercontainer}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>20%</Text>
          </View>
          <View style={styles.parentVector}>
            <TouchableOpacity >
              <AntDesign name="hearto" style={styles.heartIcon} size={height/40} color='#353C41' />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={ImagePath.share} style={styles.shareimage}/>
              {/* <AntDesign name="sharealt" style={styles.heartIcon} size={18} color='black' /> */}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Image
          source={{ uri: item?.thumbnail }}
          style={styles.image}
        />
        <View style={styles.detail}>
          <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{item?.name}</Text>
          <View style={styles.discountparent}>
            <Text style={styles.discount}>Rs.{item?.price}</Text>
            <Text style={styles.rate}>Rs.{item?.discounted_price}</Text>
            <Image source={ImagePath.arrowimage1} style={styles.arrow}/>
           
          </View>
        </View>
        <View style={styles.lineShadow}/>
        <View style={[styles.lockcart,{marginVertical:styleC?'6%':'6%',marginBottom:styleC?null:'8.5%',   }]}>
                <TouchableOpacity style={styles.cart}>
                <Image source={ImagePath?.cart} style={styles.cartimage}/>

                    <Text style={styles.cartText}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buy}>
                  
                    {/* <AntDesign name='lock' size={height/75} color={WHITE} /> */}
                    <Image source={ImagePath?.bag} style={styles.bagimage}/>
                    <Text style={styles.buytext}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
    </View>
    :
    <View style={[styles.mainTab,{...customStyles}]}>
    <View style={styles.outercontainer}>
      <View style={styleC?styles.innercontainer1:styles.innercontainerTab}>
        <View style={styles.discountBadgeTab}>
          <Text style={styles.discountBadgeTextTab}>20%</Text>
        </View>
        <View style={styles.parentVector}>
          <TouchableOpacity >
            <AntDesign name="hearto" style={styles.heartIcon} size={height/50} color='#353C41' />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={ImagePath.share} style={styles.shareimageTab}/>
            {/* <AntDesign name="sharealt" style={styles.heartIcon} size={18} color='black' /> */}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Image
        source={{ uri: item?.thumbnail }}
        style={styles.imageTab}
      />
      <View style={styles.detail}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleTab}>{item?.name}</Text>
        <View style={styles.discountparent}>
          <Text style={styles.discount}>Rs.{item?.price}</Text>
          <Text style={styles.rate}>Rs.{item?.discounted_price}</Text>
          <Image source={ImagePath.arrowimage1} style={styles.arrowTab}/>
         
        </View>
      </View>
      <View style={styles.lineShadow}/>
      <View style={[styles.lockcart,{marginVertical:styleC?'6%':'6%',marginBottom:styleC?null:'8.5%',   }]}>
              <TouchableOpacity style={styles.cart}>
              <Image source={ImagePath?.cart} style={styles.cartimageTab}/>

                  <Text style={styles.cartText}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buy}>
                
                  {/* <AntDesign name='lock' size={height/75} color={WHITE} /> */}
                  <Image source={ImagePath?.bag} style={styles.bagimageTab}/>
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
    width: width / 2.4,
    shadowColor: GRAY,
    borderRadius: width*0.027,
    marginHorizontal:width*0.008,
    marginVertical: '2%',
    paddingTop:"2%",
    
  },
  mainTab: {
    backgroundColor: WHITE,
    width: width / 3.8,
    shadowColor: GRAY,
    borderRadius: width*0.015,
    marginHorizontal:width*0.008,
    marginVertical: '2%',
    paddingTop:"2%",

    
  },
  outercontainer: {
    // width: width / 2.22,
    // marginBottom: '3%',
    // backgroundColor: 'white',
    
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:'3%',
    paddingHorizontal:"1%",
  },
  innercontainerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:'3%',
    paddingHorizontal:"1%",
    
  },
  bagimage:{
    height:height*0.015,
    width:width*0.02,
   
    resizeMode:"contain"
  },
  bagimageTab:{
    height:height*0.011,
    width:width*0.018,
   
    resizeMode:"contain"
  },
  innercontainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:'3%',
    paddingHorizontal:"1%"
  },
  discountBadge: {
    height: height*0.018,
    width: width*0.09,
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width *0.056,
    marginLeft: '4%'
  },
  discountBadgeTab: {
    height: height*0.014,
    width: width*0.06,
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width *0.056,
    marginLeft: '4%'
  },
  discountBadgeText: {
    color: WHITE,
    fontSize: width*0.022,
    fontFamily:IsidoraBold
  },
  discountBadgeTextTab: {
    color: WHITE,
    fontSize: width*0.015,
    fontFamily:IsidoraBold
  },
  parentVector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red'
  
    // paddingVertical: 1
  },
  image: {
    height: height / 5.17,
    width: width / 3.3,
    resizeMode: 'cover',
    marginVertical: '0.5%',
    alignSelf: 'center',
    borderWidth:1,
    borderColor:GRAY
    
  },
  imageTab: {
    height: height / 5.5,
    width: width / 5,
    resizeMode: 'stretch',
    marginVertical: '0.5%',
    alignSelf: 'center',
    borderWidth:1,
    borderColor:GRAY
    
  },
  detail: {
    marginLeft: '1%',
    // borderBottomWidth:1,
    paddingBottom:height*0.008,
    borderBottomColor:LIGHTGRAY2
  },
  lineShadow:{
    height: 1,
    backgroundColor:LIGHTGRAY, // Box background
    shadowColor:BLACK, // Shadow color
    shadowOffset: { width: 0, height: 0}, // Shadow position
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 0.1, // Shadow blur radius
    elevation: 1, 


  },
  title: {
    fontSize: width*0.028,
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    lineHeight:height*0.018,
    marginLeft:width*0.02,
    marginTop:height*0.005,
    width:width*0.38
  },
  titleTab: {
    fontSize: width*0.015,
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    lineHeight:height*0.012,
    marginLeft:width*0.02,
    marginTop:height*0.005,
    width:width*0.2
  },
  discountparent: {
    flexDirection: 'row',
    marginTop:'4%',
    alignItems:'center',
    justifyContent:"space-between",
    paddingHorizontal:isTablet?width*0.02:"5%"
  },
  discount: {
    fontSize:isTablet? width*0.02:width*0.033,
    fontFamily: IsidoraMedium,
    color:LIGHTGREYTEXT,
    textDecorationLine: 'line-through',
    // marginLeft:width*0.004
   
  },
  rate: {
    fontSize:isTablet? width*0.02:width*0.033,
    fontFamily: IsidoraBold,
    color: orange,
    right:width*0.017
  },

  heartIcon: {
    // paddingHorizontal: '1%',
   
  },
  shareimageTab:{
    height:height/50,
    width:width/15,
    resizeMode:"contain",
    
    
      },
  shareimage:{
height:height/40,
width:width/10,
resizeMode:"contain",


  },
  arrow:{
    resizeMode:"contain",
    height:width*0.035,
    width:width*0.035,
    marginRight:"3%"
   //  backgroundColor:"red"
   },
   arrowTab:{
    resizeMode:"contain",
    height:width*0.02,
    width:width*0.02,
    marginRight:"3%"
   //  backgroundColor:"red"
   },
  cart: {
    flexDirection: 'row',
    borderWidth: 1,
    // paddingVertical: "4%",
    height:isTablet?height*0.028:height*0.035,

    // paddingVertical:width*0.019,
    borderColor:LIGHTGREYTEXT,
    borderRadius:isTablet?width*0.005:width*0.01,

    alignItems: 'center',
    backgroundColor:WHITE,
    // width:width/5.5,
    justifyContent:"space-evenly",
    width:isTablet? width*0.11: width/5.7,
    paddingHorizontal:width*0.005,

   
},
cartimage:{
  height:height*0.015,
  width:width*0.026,
//    backgroundColor:'red',
  resizeMode:"contain"
},
cartimageTab:{
  height:height*0.015,
  width:width*0.02,
//    backgroundColor:'red',
  resizeMode:"contain"
},
buy: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:LIGHTGREYTEXT,
    // paddingVertical: '4%',
    borderRadius:isTablet?width*0.005:width*0.01,
    // paddingVertical:width*0.019,
    height:isTablet?height*0.028:height*0.035,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor:LIGHTGREYTEXT,
    // width:width/5.2
    width:isTablet? width*0.11: width/5.7,
    paddingHorizontal:width*0.01,
},
lockcart: {
    flexDirection: 'row',
    // marginVertical: '6%',
    alignItems:'center',
    justifyContent:"space-evenly",
    paddingHorizontal:width*0.005,

},
buytext: {
    color: WHITE,
    fontSize:isTablet? width*0.013: width*0.022,
    fontFamily:IsidoraSemiBold,
    // marginRight:"5%"
},
cartText: {
  fontSize:isTablet? width*0.013: width*0.022,

    color:BLACK,
    fontFamily:IsidoraSemiBold,
    
},
// line:{
//   width:width/2.2,
//   backgroundColor:LIGHTGRAY2,
//   height:height*0.002,
//   marginVertical:'5%',
//   alignSelf:'center',
//   marginHorizontal:'10%'
// }
});

export default Productcard



