import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { DARKGRAY, GRAY, LIGHTGRAY2, orange, ratingcolor, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts';
const { width, height } = Dimensions.get('window');
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const Reviews = ({ ReviewData, customStyle,Modelwidth,inModal=true }) => {
    return (
        <View style={[styles.maincontainer, { ...customStyle }]}>
                          {isTablet?<Text style={styles.reviewcardtext}>Reviews</Text>:null}
            <View style={styles.starbox}>
                <Stars
                    default={4.1}
                    half={true}
                    disabled
                    fullStar={<Icon name={'star'} size={isTablet?width *0.0288:width *0.0418} color={ratingcolor} style={[styles.myStarStyle]} />}
                    emptyStar={<Icon name={'star-outline'} size={isTablet?width *0.0288:width *0.0418} color={ratingcolor} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                    halfStar={<Icon name={'star-half'} size={isTablet?width *0.0288:width *0.0418} color={ratingcolor} style={[styles.myStarStyle]} />}
                />
                <Text style={styles.ratingtext}>4.1 out of 5 stars</Text>
            </View>
            <Text style={styles.Totalrating}>3,782 ratings</Text>
         
            {ReviewData.map((item, index) => {
                return (
                <View style={[styles.reviewbox]}>
                    <Text style={styles.rating}>{item.rating} star</Text>
                    <Progress.Bar progress={item.ratingNumber} width={Modelwidth ?width /1.9 :isTablet?width / 4.3:width / 1.45}
                        height={isTablet?height*0.026:height*0.036} color={orange} borderColor={GRAY} borderWidth={isTablet?0.9:0.5} style={Modelwidth?{marginLeft:0}:styles.bar} />
                    <Text style={[styles.ratingpercentage,{width: inModal?'9%':'10%',}]}>{item.ratingpercentage}%</Text>
                </View>)
            })}

        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    maincontainer: {
        marginBottom: height * 0.02
    },
    reviewbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height * 0.006,
        justifyContent: 'flex-start', // Aligns items with equal space
        paddingHorizontal: '3%',
    },
    rating: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.02:width * 0.032,
        color: DARKGRAY,
        // width: '10%', // Ensures all ratings (e.g., '1 star', '5 star') take up the same width
        textAlign: 'left', // Aligns the text to the right for better alignment with the bar
        // backgroundColor:"red",
        width:isTablet?width*0.07:width*0.1
    },
    ratingpercentage: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.017:width * 0.033,
        color: DARKGRAY,
        textAlign: 'right', // Aligns the text to the left for consistency
    },
    bar: {
     marginLeft:isTablet?0:'2%' // Adds margin to separate the bar from the text
    },
    starbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2%',
        marginBottom: height * 0.01
    },
    ratingtext: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.022:width * 0.032,
        color: DARKGRAY,
        marginLeft: isTablet?'6%':'5%'
    },
    Totalrating: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.022:width * 0.032,
        color: DARKGRAY,
        marginLeft: '3%',
        marginBottom: isTablet?'5%':'3%'
    },
     reviewcardtext: {
            fontFamily: IsidoraSemiBold,
            fontSize:isTablet?width * 0.032:width * 0.046,
            // fontSize: 17,
            color: DARKGRAY,
            marginLeft:isTablet?'3%':null,
            borderTopWidth:isTablet?0:1,
            borderTopColor:LIGHTGRAY2,
            paddingBottom:isTablet?0:"2%",
            marginBottom:isTablet?'4%':null
        },
});
