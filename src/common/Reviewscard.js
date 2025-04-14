import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2, LIGHTORANGE, orange, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import { ImagePath } from '../values/ImagePath'
import DeviceInfo from 'react-native-device-info'
const isTablet=DeviceInfo.isTablet()

const { width, height } = Dimensions.get('window')

const Reviewscard = ({ item, index }) => {
    return (
        // Use ImageBackground only when index is 2, otherwise use View with backgroundColor
        index == 1 ? (
            <ImageBackground source={ImagePath.background1} borderRadius={8} resizeMode='cover' style={isTablet?styles.cardTab:styles.card}>
                <View style={styles.cardtext}>
                    {
                        item.topperin &&
                    <Text style={styles.topin}>{item.topperin}</Text>

                    }
                    {/* <Text style={styles.toppername}>{item.name}</Text> */}
                    <Text style={styles.journey1}>All in One 11 & 12 Books</Text>
                    <Text style={styles.journey2}>All in One Series from Class 11th - 12th.</Text>
                    <TouchableOpacity style={styles.watchcontainer}>
                        <View style={styles.button}>
                        <Entypo name='controller-play' size={isTablet?width*0.03:width*0.066}color={WHITE} style={styles.sidearrow} />
                        </View>
                        <Text style={styles.watchtext}>Watch Now</Text>
                    </TouchableOpacity>
                </View>
                <Image source={item.image} style={styles.topperimage} />
            </ImageBackground>
        ) : (
            <View style={[isTablet?styles.cardTab:styles.card, { backgroundColor: index % 2 == 0 ? LIGHTORANGE : LIGHTGRAY2 }]}>
                <View style={styles.cardtext}>
                    <Text style={styles.topin}>{item.topperin}</Text>
                    {
                        index == 1 ? (
                            <>
                                <Text style={styles.toppername2}>{item.name}</Text>
                                
                            </>
                        ) : (
                            <>
                                <Text style={styles.toppername}>{item.name}</Text>
                                <Text style={styles.journey}>Watch real stories from topper about their transformative journey</Text>
                            </>
                        )
                    }
                    <TouchableOpacity style={styles.watchcontainer}>
                        <View style={styles.button}>
                            <Entypo name='controller-play' size={isTablet?width*0.025:width*0.066} color={WHITE} style={styles.sidearrow} />
                        </View>
                        <Text style={styles.watchtext}>Watch Now</Text>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={item?.background} resizeMode='contain' style={styles.backgroundImage}>
                    <Image source={item.image} style={styles.topperimage} />
                </ImageBackground>
            </View>
        )
    )
}

export default Reviewscard

const styles = StyleSheet.create({
    card: {
        width: width / 1.1,
        marginBottom: '5%',
        borderRadius: width*0.025,
        marginHorizontal: '2%',
        shadowColor: GRAY,
        elevation: 10,
        backgroundColor: WHITE,
        flexDirection: 'row',
        paddingVertical: '4%',
        alignItems: 'center',
        overflow:"hidden"
    },
    cardTab: {
        width: width / 2,
        height:height*0.16,
        // marginBottom: '5%',
        borderRadius:isTablet? width*0.01: width*0.025,
        marginHorizontal: width*0.02,
        shadowColor: GRAY,
        elevation: 10,
        backgroundColor: WHITE,
        flexDirection: 'row',
        // paddingVertical: '1%',
        alignItems: 'center',
        overflow:"hidden"
    },
    cardtext: {
        width:isTablet? width / 4: width / 2,
        height:isTablet?height*0.16:null,
        marginTop:isTablet?'10%':null,
        paddingLeft: '5%',
        flexDirection:'column',
    },
    watchcontainer: {
        marginTop:isTablet? null: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:"red",
        position:isTablet?'absolute':null,
        bottom:isTablet?"25%":null,
        left:isTablet?"10%":null
    },
    button: {
        height: isTablet?height * 0.025:height * 0.0384,

        width: isTablet?height * 0.025:height * 0.0384,
        borderRadius: height * 0.0384 / 2,
        backgroundColor: orange,
        justifyContent: 'center',
        paddingLeft:"2%"

    },
    topperimage: {
        height: isTablet?height * 0.1:height * 0.15,
        width: isTablet?width / 3.5:width / 2.4,
        resizeMode: 'contain',
        // backgroundColor:"red",
        // top:"5%"
        // alignContent:"center"
        // alignSelf:"center"
    },
    backgroundImage: {
        height: isTablet?height * 0.1:height * 0.15,
        width: isTablet?width / 3.5:width / 2.4,
        resizeMode: 'contain',
    },
    topin: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        // width:width/2,
        lineHeight:isTablet?height*0.013:height*0.020,
        width:isTablet?width*0.25:width*0.6,
        fontSize:isTablet?width*0.017:null,
        marginTop:isTablet?"2%":null
        // backgroundColor:"red"
    },
    toppername: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: isTablet?width * 0.023:width * 0.041,
        // fontSize: 15,
        paddingTop:isTablet? '5%': '8%',
    },
    toppername2: {
        fontFamily: IsidoraSemiBold,
        color: BLACK,
        fontSize: isTablet?width * 0.02:width * 0.03,
        width: width / 2,
        lineHeight: height*0.025,
        marginBottom: '10%',
    },
    journey: {
        fontFamily: IsidoraMedium,
        color: GRAY,
        fontSize: isTablet?width * 0.016:width * 0.03,
        width:isTablet?width*0.28:null,
        // fontSize:13,
        marginTop:isTablet?null:'2%',
        lineHeight: isTablet?height * 0.015:height * 0.018,
        // backgroundColor:"red"
    },
    journey1: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: isTablet?width * 0.02:width * 0.04,

        // fontSize:15,
        lineHeight:isTablet? height * 0.018: height * 0.022,
        width: width / 2,
        marginBottom: isTablet?null:'2%',
        marginTop:isTablet?"4%":"15%"
    },
    journey2: {
        fontFamily: IsidoraMedium,
        color: WHITE,
        fontSize: isTablet?width * 0.017:width * 0.03,
        // fontSize:11,
        lineHeight: height * 0.018,
        width: width / 3 ,

    },
    watchtext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: isTablet?width * 0.02:width * 0.038,
        marginHorizontal: '5%',
    },
    sidearrow: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
})
