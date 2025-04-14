import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LIGHTBLUE, LIGHTORANGE, LIGHTORANGE2, WHITE } from '../values/Colors'
import { ImagePath } from '../values/ImagePath'
const{width,height}=Dimensions.get('window')
const boxwidth=width*0.8
const RecommendedCard = () => {
  return (
    <View style={styles.maincardcontainer}>
        <View style={styles.logobox}>
        <Image source={ImagePath.arihantlogo} style={styles.logo}/>
      </View>
        <View style={styles.incard}>
        <View>
        <Text>RecommendedCard</Text>
        <Text>RecommendedCard</Text>
      <Text>RecommendedCard</Text>
        </View>
        
      <ImageBackground source={ImagePath.starbackground} style={styles.backgroundimage}>
      
    

        </ImageBackground>  
        </View>
    </View>
  )
}

export default RecommendedCard

const styles = StyleSheet.create({
    maincardcontainer:{
        width:boxwidth,
        alignSelf:'center',
        backgroundColor:LIGHTORANGE,
        paddingHorizontal:boxwidth*0.06
        
        
    },
    incard:{
        flexDirection:'row',
        alignItems:'center',
    },
    backgroundimage:{
        resizeMode:'contain',
        width:boxwidth*0.55,
        alignSelf:'flex-end',
        height:height*0.09,
        // backgroundColor:"red"
        // flex:1,
        // justifyContent:'space-between',
        // position:'absolute',
        // left:boxwidth*0.45,
        // top:height*0.02
    },
    logobox:{
        height:boxwidth*0.1,
        width:boxwidth*0.1,
        borderRadius:boxwidth*0.1/2,
        backgroundColor:WHITE,
        alignItems:"center",
        justifyContent:'center',
        alignSelf:'flex-end',
        position:'absolute',
        // top:0
        
        // marginBottom:25
        
    },
    logo:{
        resizeMode:"contain",
        height:height*0.025,
        width:boxwidth*0.047,
        // backgroundColor:'red',
        // alignSelf:'center'

    }
})