import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import { BLACK, GRAY, LIGHTORANGE, orange, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
const {width, height} = Dimensions.get('window');

const PracticeSet = () => {
  return (
    <View style={styles.mainContaianer}>
      <Text style={styles.headingText}>SSC CHSL (T-1 & T-2) Exam 2024 Practice Sets</Text>
      <ImageBackground source={ImagePath.starbackground2} style={styles.image} resizeMode='contain' tintColor={"pink"}>
<Image source={ImagePath?.practiceSetImage} style={styles.practiceSetImage}/>
      </ImageBackground>
      <View style={styles.testButtons}>
<Text style={styles.fullTest}>
3 Full Tests
</Text>
<Text style={styles.fullTest}>
5 Chapter Tests
</Text>
      </View>
      <Text style={styles.bookCodeText}>Your Book Code is UNLOCKED Now. You check it on your DASHBOARD</Text>
    </View>
  )
}

export default PracticeSet

const styles = StyleSheet.create({

    image: {
        resizeMode: 'contain',
        height: height * 0.25,
        width: width/1.05 ,
        backgroundColor:WHITE,
        alignSelf:"center",
       justifyContent:"center",

      
       
        // top:0
    },
    mainContaianer:{
        flex:1,
        backgroundColor:WHITE,
        width:width/1.05,
        padding:"5%",
        marginVertical:"5%",
        elevation:5,
        alignSelf:"center",
        borderRadius:10,
        // paddingBottom:height*0.01
    },
    headingText:{
        color:BLACK,
        fontSize:width*0.035,
        fontFamily:IsidoraSemiBold,
        marginVertical:"5%  ",
        width:width/2,
        lineHeight:height*0.018
        // lineHeight:18
        
    },
    practiceSetImage:{
        resizeMode:"stretch",
        height:height/3.8,
        width:width/2.2,
        // backgroundColor:"red",
        marginLeft:"3%",
        // position:"absolute"

    },
    testButtons:{
        flexDirection:"row",
        marginVertical:"5%"
    },
    fullTest:{
color:orange,
borderWidth:1,
paddingVertical:"1%",
paddingHorizontal:"5%",
borderRadius:5,
backgroundColor:"#fceaaf",
borderColor:orange,
marginRight:"5%"
    },
    bookCodeText:{
        color:GRAY,
        fontFamily:IsidoraMedium,
        fontSize:width*0.03
        // lineHeight:20        // marginTop:"5%"
    }
})