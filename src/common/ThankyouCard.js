import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts'
import { BACKGROUNDLIGHTGRAY, DARKGRAY, GRAY, LIGHTBLUE, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, orange, WHITE } from '../values/Colors'
import Button from './Button'
const {width,height}=Dimensions.get('window')
const ThankyouCard = () => {
  return (
    <View style={styles.maincontainer}>
        <Image source={ImagePath.thankyouemoji} style={styles.emoji}/>
        <Text style={styles.thank}>Thankyou!</Text>
        <Text style={styles.payment}>Payment done successfully</Text>
        <Text style={styles.order}>Your order has been placed. Confirmation will be sent to your emall.</Text>
        <Text style={styles.review}>Reviw or edit your delivery preferences</Text>
        <Text style={styles.review}>You will be redirected to the home page shortly or click here to return to the home page.</Text>
        <View style={styles.buttonbox}>
                <Button
                    text={'Continue Shopping'}
                    customStyles={styles.button1}
                    textStyle={styles.btntext1}
                  
                     />
                <Button
                    text={'Start Test Series'}
                    customStyles={styles.button2}
                    textStyle={styles.btntext2} />
            </View>
    </View>
  )
}

export default ThankyouCard

const styles = StyleSheet.create({
    maincontainer:{
        alignItems:'center',
        paddingTop:height*0.035,
        paddingBottom:height*0.02,
        paddingHorizontal:width*0.05,
        backgroundColor:BACKGROUNDLIGHTGRAY
    },
    emoji:{
        resizeMode:'center',
        height:height*0.16,
        width:width*0.28,

    },
    thank:{
        fontFamily:IsidoraBold,
        color:GRAY,
        fontSize:width*0.048,
        textAlign:'center',
        marginTop:height*0.025

       
    },
    payment:{
        fontFamily:IsidoraSemiBold,
        color:DARKGRAY,
        fontSize:width*0.04,
        textAlign:'center',

        
    },
    order:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        fontSize:width*0.036,
        lineHeight:height*0.02,
        textAlign:'center',
        marginTop:height*0.01
    },
    review:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        fontSize:width*0.03,
        textAlign:'center',
        marginVertical:height*0.006
},
button1:{
    padding:0,
    backgroundColor:WHITE,
    width:width*0.43,
    borderWidth:1,
    borderColor:GRAY,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    height:height*0.05

},
button2:{
    padding:0,
    backgroundColor:orange,
    width:width*0.43,
    borderWidth:1,
    borderColor:orange,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    height:height*0.05

},
btntext1:{
    color:DARKGRAY,
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.035
},
btntext2:{
    color:WHITE,
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.035
},
buttonbox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:width*0.91
}
})