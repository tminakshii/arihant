import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, LIGHTBLUE, LIGHTGRAY, LIGHTGRAY2, LIGHTPURPLE2, orange, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { data } from '../values/Utility'
import Button from './Button'
import { buildCreateSlice } from '@reduxjs/toolkit'
const { width, height } = Dimensions.get('window')
const SolutionCard2 = ({ item }) => {
    return (
        <View style={Platform.OS=="android"? styles.maincontainer:styles.maincontainerios}>
        <View style={styles.headerbox}>
                <Image source={item?.iconimage} style={styles.iconimage} />
                <Text style={styles.headtext}>{item?.heading}</Text>

            </View>
            <Text style={styles.distext} numberOfLines={4}>{item?.discription}</Text>
            <View style={styles.aboutbox}>
                <Text style={styles.abouttext} numberOfLines={2}>{item?.about}</Text>
            </View>
            <View style={styles.discountpercentbox}>
                <Image source={item?.percent} style={styles.percenticon} />
                <Text style={styles.off} numberOfLines={2}>{item?.off}</Text>
                <View style={styles.languageContainer}>

                <Text style={styles.Etext}>E</Text>
                </View>
                <View style={styles.languageContainer}>

<Text style={styles.Etext}>H</Text>
</View>
            </View>
            <View style={styles.pricebox}>
                <Text style={styles.price}>₹ <Text style={styles.pricecut}>{item?.price} /-</Text></Text>
                <Text style={styles.disprice}>₹ {item?.dis} /-</Text>
            </View>
            <Button
            text={'BUY NOW'}
            customStyles={styles.button}
            textStyle={styles.btntext}/>



        </View>
    )
}

export default SolutionCard2

const styles = StyleSheet.create({
    maincontainer: {
        width: width * 0.44,
        backgroundColor: WHITE,
        borderRadius: width * 0.003,
        elevation: 5,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.025,
        borderRadius:width*0.03,
        overflow:'hidden',
        marginVertical:height*0.01,
        marginHorizontal:width*0.01,
        height:height*0.36

    },
    maincontainerios: {
        width: width * 0.44,
        backgroundColor: WHITE,
        borderRadius: width * 0.003,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.025,
        borderRadius:width*0.03,
        // overflow:'hidden',
        marginVertical:height*0.01,
        marginHorizontal:width*0.01,
        height:height*0.35,
        shadowColor: GRAY,
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.15, 

    },
    headerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1.5,
        paddingBottom: height * 0.01,
        borderBottomColor: LIGHTGRAY2
    },
    headtext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.033
    },
    iconimage: {
        resizeMode: 'contain',
        height: height * 0.032,
        width: width * 0.052,
        // backgroundColor:'red'
    },
    distext: {
        fontFamily: IsidoraMedium,
        color: GRAY,
        fontSize: width * 0.026,
        lineHeight: height * 0.018,
        marginTop: height * 0.01
    },
    aboutbox: {
        paddingHorizontal: width * 0.03,
        backgroundColor: LIGHTBLUE,
        borderRadius: 8,
        paddingVertical: height * 0.005,
        marginTop: height * 0.015
    },
    abouttext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.028,
        lineHeight: height * 0.018
    },
    discountpercentbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: height * 0.007
    },
    percenticon: {
        resizeMode: 'contain',
        height: height * 0.025,
        width: width * 0.05,
        // backgroundColor:"red"
    },
    off: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.025,
        lineHeight: height * 0.016,
        width: width * 0.22,

    },
    languageContainer:{
        backgroundColor: orange,
        borderRadius: width * 0.045 / 2,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        height: width * 0.045,
        width: width * 0.045,

    },
    Etext: {
        color: WHITE,
     
        
        fontSize: width * 0.025,

    },
    Htext: {
        color: WHITE,
      
        fontSize: width * 0.025

    },
    pricebox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.01

    },
    price: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.03,
    },
    pricecut: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.035,
        textDecorationLine:'line-through'
    },
    disprice: {
        fontFamily: IsidoraBold,
        color: DARKGRAY,
        fontSize: width * 0.035,
        marginLeft: width * 0.065

    },
    btntext:{
        color:WHITE,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.038
    },
    button:{
        backgroundColor:orange,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width*0.1,
        paddingVertical:height*0.007,
        marginTop:height*0.02,
        // marginBottom:0
    }


})