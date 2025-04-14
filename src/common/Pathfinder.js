import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spread } from 'axios'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, orange, WHITE } from '../values/Colors'
import { VELOCITY_EPS } from 'react-native-reanimated/lib/typescript/animation/decay/utils'
import Button from './Button'
const { width, height } = Dimensions.get('window')
const Pathfinder = ({ item }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headbox}>
                <Image source={item?.spark} style={styles.spark} />
                <Text style={styles.title}>{item?.title}</Text>
            </View>
            <Text style={styles.test}>{item?.test}</Text>
            <Text style={styles.heading}>{item?.heading}</Text>
            <View style={styles.outerbox}>
            <View style={styles.innerbox}>
                <Image source={item?.list}  style={styles.imageicon}/>
                <View>
                <Text style={styles.text}>{item?.testno} Test</Text>
                <Text style={styles.sol}>{item?.solution} </Text>
                </View>
            </View>
           
           <View style={styles.innerbox}>
                <Image source={item?.analysicon} style={styles.imageicon}/>
                <Text style={styles.text}>{item?.analys}</Text>
            </View>
            <View style={styles.innerbox}>
                <Image source={item?.infinityicon}  style={styles.imageicon}/>
                <Text style={styles.text}>{item?.infinity}</Text>
            </View>
            <View style={styles.innerbox}>
                <Image source={item?.mobile}  style={styles.imageicon}/>
                <Text style={styles.text}>{item?.access}</Text>
            </View>
           </View>
           <View style={styles.underbox}>
            <View style={styles.langbox}>
                <Image source={item?.enicon} style={styles.langicon}/>
                <Text style={styles.lang}>{item?.lang}</Text>
            </View>
            <View style={styles.langbox}>
            <Image source={item?.calender} style={styles.langicon}/>
            <Text style={styles.lang}>{item?.time}</Text>
            </View>
            
           </View>
           <Button
           text={'BUY NOW'}
           customStyles={styles.button}
           textStyle={styles.btntext}/>
        </View>
    )
}

export default Pathfinder

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: WHITE,
        paddingTop: height * 0.02,
        paddingHorizontal: width * 0.035,
        width: width /1.08,
        elevation:3,
        borderRadius: width*0.03,
         overflow:'hidden',
         marginVertical:height*0.02,
         alignSelf:"center",
        

    },
    headbox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: height * 0.015,
        borderBottomColor: GRAY
    },
    spark: {
        resizeMode: 'contain',
        height: height * 0.035,
        width: width * 0.07,
        borderRadius: 3,
        // backgroundColor:'red'
    },
    title: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.036,
        marginLeft: width * 0.025
    },
    test: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.036,
        marginTop:height*0.01
    },
    heading: {
        fontFamily: IsidoraMedium,
        color: GRAY,
        fontSize: width * 0.03,
        lineHeight:height*0.018,
        marginTop:height*0.002
    },
    imageicon:{
        resizeMode:'contain',
        height:height*0.027,
        width:width*0.043,
        // backgroundColor:'red'
    },
    innerbox:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:height*0.006
    },
    text:{
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:width*0.03,
        marginLeft:width*0.018,
        
    },
    sol:{
        fontFamily:IsidoraMedium,
        color:GRAY,
        fontSize:width*0.03,
        marginLeft:width*0.018

    },
    outerbox:{
        marginTop:height*0.01,
        borderBottomWidth:1,
        borderBottomColor:GRAY,
        paddingBottom:height*0.01
    },
    underbox:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.015
        
    },
    lang:{
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:width*0.03,
        marginLeft:width*0.02
    },
    langicon:{
        resizeMode:'contain',
        height:height*0.022,
        width:width*0.044,
        // backgroundColor:'red'
    },
    langbox:{
        flexDirection:'row',
        alignItems:'center',
        width:width*0.4
    },
    button:{
        backgroundColor:orange,
        width:width*0.42,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:height*0.01,
        borderRadius:width*0.2
    },
    btntext:{
        fontFamily:IsidoraSemiBold,
        color:WHITE,
        fontSize:width*0.03
    }

})