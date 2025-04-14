import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GRAY, LIGHTORANGE, orange, WHITE, RED, DARKGRAY, LIGHTGRAY, LIGHTGRAY2, BLACK, LIGHTGRAY3, LIGHTGREYTEXT } from '../values/Colors'
import Orders from '../Screen/Orders'
import { ImagePath } from '../values/ImagePath'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFValue, ScreenRatio } from '../values/Ratio'
import DeviceInfo from 'react-native-device-info'
let isTablet = DeviceInfo.isTablet();

const { width, height } = Dimensions.get('window')
const TestseriesCard = ({ item, index }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.card}> 

            <View style={[styles.courseContainer, { backgroundColor: index % 2 === 0 ? "#FFA800" : RED }]}>
                <View style={styles.courseicon}>
                    <Image source={ImagePath.courseicon} style={styles.icon} />
                </View>
                <View style={styles.ehcontainer}>
                    <View style={[styles.Econtainer, { backgroundColor: index % 2 === 0 ? orange : DARKGRAY }]}>
                        <Text style={styles.text}>E</Text>
                    </View>
                    <View style={[styles.Hcontainer, { backgroundColor: index % 2 === 0 ? orange : DARKGRAY }]}>
                        <Text style={styles.text}>H</Text>
                    </View>
                </View>
            </View>
            <View style={styles.testseriesDetail}>
                <Text style={styles.packagename}>{item.package_name}</Text>
                <Text style={styles.examname} ellipsizeMode='tail' numberOfLines={2}>{item.exam_name}</Text>
                {/* {item.exam_name2&&<Text style={styles.examname2}  numberOfLines={1}>{item.exam_name2}{' '} </Text>} */}
                {/* <Text style={styles.examname1}  numberOfLines={1}>{item.exam_name1}</Text> */}
                <View style={styles.totaltestcontainer}>
                    <View style={styles.totalno}>
                        <Text style={styles.totalquentity}>{item.total_tests}</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totaltext}>Total Test</Text>
                    </View>
                </View>
                <View style={styles.freecontainer}>
                    <Text style={styles.freeAttemp}> Attempt a test for free</Text>
                    <Image source={ImagePath.arrowimage1} style={styles.arrow}/>
                </View>
            </View>
            <View style={styles.pricecontainer}>
                <Text style={styles.beforediscount}>Rs.{item.price}</Text>
                <Text style={styles.afterdiscount}>Rs.{item.discounted_price}</Text>
                <Text style={styles.discountpercent}>{item.discount_percentage}% off</Text>
            </View>
            <View style={styles.lockcart}>
                <TouchableOpacity style={styles.cart}>
                    {/* <AntDesign name='shoppingcart' size={height/67} color={DARKGRAY} />
                     */}
                <Image source={ImagePath?.cart} style={styles.cartimage}/>

                    <Text style={styles.cartText}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buy}>
                <Image source={ImagePath?.bag} style={styles.bagimage}/>

                    <Text style={styles.buytext}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default TestseriesCard

const styles = StyleSheet.create({
    card: {
        width:isTablet? width / 3.8:width / 2.4,
        // height: height*0.312,
        marginBottom: '2%',
        borderRadius: isTablet?width * 0.013:width * 0.027,
        marginHorizontal: width*0.02,
        // backgroundColor:"red",
        backgroundColor: WHITE,
        paddingBottom:isTablet?height*0.012:height*0.012,
        // borderWidth:0.2,
        borderColor:LIGHTGRAY3,
        borderWidth:1,
        overflow:"hidden" 
    },
    courseContainer: {
        height: isTablet ?height*0.038:height*0.065,
        flexDirection: 'row',
        // borderTopLeftRadius: width * 0.023,
        // borderTopRightRadius:  width * 0.023,
    },
    courseicon: {
        height:isTablet? height*0.04: height*0.058,
        width: isTablet? height*0.04: height*0.058,
        // position:'absolute',
        borderRadius:height*0.06/2,
        backgroundColor: WHITE,
        marginLeft: '5%',
        marginTop:isTablet? '7%': '9%',
        elevation: 4,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000", // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow's x and y offsets
        shadowOpacity: 0.2,
        // shadowRadius: 3, 
    },
    icon: {
        resizeMode: 'contain',
        height:isTablet?height*0.022:height*0.05,
        width:isTablet?height*0.022:width*0.06
    },
    ehcontainer: {
        flexDirection: 'row',
        marginTop: '5%',
        position:'absolute',
        right:'10%'
    },
    bagimage:{
        height:isTablet?height*0.01:height*0.015,
        width:isTablet?width*0.01:width*0.02,
       
        resizeMode:"contain"
      },
      cartimage:{
        height:isTablet?height*0.01:height*0.015,
        width:isTablet?width*0.02:width*0.026,
    //    backgroundColor:'red',
        resizeMode:"contain"
      },
    Econtainer: {
        height: isTablet?height/59:height/40,
        width: isTablet?height/59:height/40,
        borderRadius: height/20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:'10%'

    },
    Hcontainer: {
        height: isTablet?height/59:height/40,
        width: isTablet?height/59:height/40,
        borderRadius: height/20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width*0.012:width*0.025,
        color: WHITE,
    },
    testseriesDetail: {
        // marginTop: height*0.03,
        marginLeft: '5%',
        paddingTop:'10%'
        // backgroundColor:'red',
    },
    totaltestcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom:2,
        borderRadius:isTablet?width* 0.02:10,
        overflow:"hidden",
        marginTop:isTablet?null:'5%'
        // borderWidth:1
        // right: 1
    },
    packagename: {
        color: LIGHTGREYTEXT,
        fontFamily: IsidoraMedium,
        fontSize: isTablet?RFValue(5):RFValue(7.5),
        marginTop:isTablet?height*0.008:null,
        // lineHeight:height*0.02
    },
    examname: {
        color: DARKGRAY,
        fontFamily: IsidoraBold,
        fontSize: isTablet?width*0.02:width*0.035,
        width: isTablet?width / 4.5:width / 2.6,
        lineHeight:isTablet? height*0.015: height*0.019,
        height:isTablet?height * 0.04:height * 0.04,

    },
    examname1:{
        color: '#6F757C',
        fontFamily: IsidoraMedium,
        fontSize: isTablet?RFValue(5):RFValue(7.5),
        marginBottom:'7%',
        lineHeight: isTablet?height*0.01:height*0.019,
        // backgroundColor:"red"
        // width: width / 2.6,
    },
    examname2:{
        color: DARKGRAY,
        fontFamily: IsidoraBold,
        fontSize: RFValue(9),
        // marginBottom:'7%',
        lineHeight: height*0.019,
    },
    totalquentity: {
        color: WHITE,
        fontFamily: IsidoraBold,
        fontSize: isTablet?width*0.015:width*0.025,
        paddingHorizontal:isTablet?width*0.018: '6%',
        // paddingVertical: '1.5%',

    },
    totaltext: {
        color: BLACK,
        fontFamily: IsidoraMedium,
        fontSize: isTablet?width*0.015:width*0.025,
        paddingHorizontal: isTablet?width*0.01:'3.5%',
        // paddingVertical: isTablet?height*0.003:'1.5%'
    },
    totalno: {
        backgroundColor: DARKGRAY,
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10,
        // paddingVertical: '0.5%'
        height:isTablet?height * 0.018:height * 0.02,
        alignItems:"center",
        justifyContent:"center"


    },
    total: {
        backgroundColor: LIGHTGRAY2,
        borderTopRightRadius:isTablet?width* 0.02:10,
        borderBottomRightRadius:isTablet?width* 0.02:10,
        height:isTablet?height * 0.018:height * 0.02,
         alignItems:"center",
        justifyContent:"center"
    },
    freecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:'6%',
        paddingRight:isTablet?width*0.02:width*0.03,
        // backgroundColor:"red"
    },
    arrow:{
     resizeMode:"contain",
     height:isTablet?width*0.022:width*0.038,
     width:isTablet?width*0.022:width*0.038,
    //  right:0,
    },
    freeAttemp: {
        fontFamily: IsidoraMedium,
        fontSize:isTablet?width*0.018: width*0.026,
        color: GRAY,
        right:width * 0.003
    },
    beforediscount: {
        textDecorationLine: 'line-through',
        fontFamily: IsidoraMedium,
        fontSize: isTablet?width*0.02:width*0.033,
        color: DARKGRAY,

    },
    afterdiscount: {
        fontFamily: IsidoraBold,
        fontSize: isTablet?width*0.02:width*0.033,

        color: orange,
        // marginLeft: '6%'
    },
    discountpercent: {
        fontFamily: IsidoraMedium,
        fontSize: isTablet?width*0.015:width*0.023,

        color: GRAY,
        // marginLeft: '15%',
        // justifyContent:"flex-end"
    },
    pricecontainer: {
        flexDirection: 'row',
        alignItems:'center',
        borderTopWidth: 1,
        borderColor: "#E7DEE3",
        marginTop: '6%',
        padding:'3%',
        paddingHorizontal:isTablet?width * 0.015:'5%',
        justifyContent:"space-between"
    },
    cart: {
        flexDirection: 'row',
        borderWidth: 1,
        height:isTablet?height*0.025:height*0.035,
        borderColor:DARKGRAY,
        borderRadius:isTablet? width*0.005: width*0.01,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:WHITE,
        justifyContent:'space-evenly',
        width:isTablet? width/9: width/5.7,
        paddingHorizontal:width*0.005,
    },
    buy: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:DARKGRAY,
        // paddingVertical:"4%",
        // paddingVertical:width*0.016,
        height:isTablet?height*0.025:height*0.035,


        borderRadius:isTablet? width*0.005: width*0.01,
        // paddingVertical:width*0.016,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:DARKGRAY,
        // width:width/5.5,
        width:isTablet?width/9:width/5.7,

        paddingHorizontal:width*0.01,

        // justifyContent:"space-around"
    },
    lockcart: {
        flexDirection: 'row',
        marginTop: "1.5%",
        alignItems:'center',
        justifyContent:'space-evenly',
        // paddingHorizontal:'4%',
        paddingHorizontal:width*0.005,
        // marginVertical:"2%"
        // marginRight:"2%"
    },
    buytext: {
        color: WHITE,
        fontSize:isTablet? width*0.013: width*0.022,
        fontFamily:IsidoraSemiBold,
        marginLeft:"5%"
    },
    cartText: {
        fontSize:isTablet? width*0.013: width*0.022,
        
        color:BLACK,
        fontFamily:IsidoraSemiBold,
    }

})
