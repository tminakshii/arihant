import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { BLACK, DARKGRAY, GRAY, orange, ratingcolor, WHITE } from '../values/Colors'
import Button from './Button'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DeviceInfo from 'react-native-device-info'
const isTablet=DeviceInfo.isTablet()
const{width,height}=Dimensions.get('window')
const GuideCard = ({item}) => {
  return (

    <View style={styles.maincontainer}>
        <Image source={item.image} style={styles.image}/>
        <View style={styles.sidebox}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.exam}>{item.exam}</Text>
            <View style={styles.ratingbox}>
            <Text style={styles.rating}>{item.rating}{' '}</Text>
            <Stars
                        default={item.rating}
                        count={5}
                        half={true}
                        disabled
                        fullStar={
                          <Icon
                            name={'star'}
                            size={isTablet?width*0.024:14}
                            color={ratingcolor}
                            style={[styles.myStarStyle]}
                          />
                        }
                        emptyStar={
                          <Icon
                            name={'star-outline'}
                            size={isTablet?width*0.024:14}
                            color={ratingcolor}
                            style={[
                              styles.myStarStyle,
                              styles.myEmptyStarStyle,
                            ]}
                          />
                        }
                        halfStar={
                          <Icon
                            name={'star-half'}
                            size={isTablet?width*0.024:14}
                            color={ratingcolor}
                            style={[styles.myStarStyle]}
                          />
                        }
                      />
            <Text style={styles.ratingno}> {item.ratingno} rating</Text>
            </View>
            {isTablet?
         <View style={styles.bottomContainer}>
         <View style={styles.pricebox}>
             <Text style={styles.price}>Rs.{item.price}</Text>
             <Text style={styles.disprice}>Rs.{item.discountprice}</Text>
             
         </View>
         <View style={styles.buttonbox}>
             <Button
             text={'ADD TO CART'}
             customStyles={styles.button}
             textStyle={styles.textstyle}/>
             <Button
             text={'BUY NOW'}
             customStyles={styles.button2}
             textStyle={styles.textstyle2}/>
         </View>
         </View>:null    
        }
        {!isTablet &&
            <View style={styles.pricebox}>
                <Text style={styles.price}>Rs.{item.price}</Text>
                <Text style={styles.disprice}>Rs.{item.discountprice}</Text>
                
            </View>
            }
        {!isTablet &&
            <View style={styles.buttonbox}>
                <Button
                text={'ADD TO CART'}
                customStyles={styles.button}
                textStyle={styles.textstyle}/>
                <Button
                text={'BUY NOW'}
                customStyles={styles.button2}
                textStyle={styles.textstyle2}/>
            </View>
            }
        </View>
    </View>
  )
}

export default GuideCard

const styles = StyleSheet.create({
    maincontainer:{
        width:width,
        height:isTablet?height*0.165:height*0.16,
        flexDirection:'row',
        alignItems:'flex-start',
        marginLeft:width*0.075,
        marginBottom:"2%",
        paddingHorizontal:isTablet?'3%':null,
        // elevation:5,
        // shadowOffset:{width:0,height:3},
        // shadowColor:GRAY,
        // shadowOpacity:0.3,
        // backgroundColor:'red',
        marginTop:'1%'
    },
    image:{
        resizeMode:isTablet?'stretch':'stretch',
        height:isTablet?height*0.16:height*0.16,
        width:isTablet?width*0.23:width*0.25,
        // backgroundColor:"yellow"
    },
    heading:{
        fontFamily:IsidoraSemiBold,
        color:DARKGRAY,
        fontSize:isTablet?width*0.027:width*0.035,
        // marginTop:height*0.015
    },
    exam:{
        marginTop:height*0.002,
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:isTablet?width*0.022:width*0.025
    },
    ratingbox:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.005
    },
    sidebox:{
        marginLeft:width*0.02,
        // marginTop:isTablet?0:0,
        height:'100%'
    },
    ratingno:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.024:width*0.035,
        color:DARKGRAY,
        marginLeft:isTablet?'2%':"10%"
    },
    rating:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.024:width*0.035,
        color:DARKGRAY
    },
    pricebox:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:isTablet?0:height*0.025,
        marginBottom:isTablet?'2%':0,
        marginLeft:isTablet?'1%':null
    },
    bottomContainer:{
        position:'absolute',
        bottom:0
    },
    price:{
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:isTablet?width*0.024:width*0.035,
        textDecorationLine:'line-through',
        marginRight:width*0.06
    },
    disprice:{
        fontFamily:IsidoraBold,
        color:orange,
        fontSize:isTablet?width*0.024:width*0.035,
    },
    textstyle:{
        color:WHITE,
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.022:width*0.033
    },
    button:{
        backgroundColor: orange,
        borderRadius:isTablet?width*0.05:20,
        width:isTablet?width/4:width / 3.2,
        justifyContent: 'center',
       paddingVertical:0,
    //    marginTop:height*0.01,
       height:isTablet?height*0.035:height*0.04

    },
    textstyle2:{
        color:BLACK,
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.022:width*0.033
    },
    button2:{
        borderWidth: 1,
        borderColor: GRAY,
        borderRadius:isTablet?width*0.05:20,
        width:isTablet?width/4:width / 3.2,
        justifyContent: 'center',
        paddingVertical:0,
        // marginTop:0,
        height:isTablet?height*0.035:height*0.04,
        backgroundColor:WHITE
    },
    buttonbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:isTablet?width*0.515:width*0.65,
    },
    })