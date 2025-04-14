import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2, orange, RED, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
const{width,height}=Dimensions.get('window')

const CrackExambanner = () => {
  return (
    <View style={styles.maincontainer}>
        <ImageBackground source={ImagePath.roundedsmallbackground} borderRadius={width*0.015} style={styles.backgroundimg} imageStyle={styles.backimg}>
        <TouchableOpacity style={styles.pauseicon}>
            <Entypo name='controller-play' size={width*0.1} color={RED}/>
         </TouchableOpacity>
         <Image source={ImagePath.teachermale2} style={styles.teacherimg}/>
         
        </ImageBackground>
       <View style={styles.ehbox}>
       <View style={styles.languageContainer}>

<Text style={styles.etext}>E</Text>
</View>
<View style={styles.languageContainer}>

<Text style={styles.htext}>H</Text>
</View>
       </View>
      <Text style={styles.crackexamtext}>Crack<Text style={styles.jee}> JEE Exam </Text>with Arihant Plus</Text>
      <Text style={styles.familiarize}>Familiarize with the structure, sections and type of questions</Text>
      <View style={styles.outerbox}>
        <View style={styles.innerbox}>
          <TouchableOpacity style={styles.rightcircle}>
            <Feather name='check' size={width*0.02}/>
          </TouchableOpacity>
          <Text style={styles.gettext}>Live Chat</Text>
        </View>
        <View style={styles.innerbox}>
        <TouchableOpacity style={styles.rightcircle}>
            <Feather name='check' size={width*0.02}/>
          </TouchableOpacity>
          <Text style={styles.gettext}>Get your Doubts Cleared</Text>
        </View>
      </View>
    </View>
  )
}

export default CrackExambanner

const styles = StyleSheet.create({
    backgroundimg:{
        resizeMode:'contain',
        height:height*0.22,
        // backgroundColor:'red',
        width:width*0.84,
        // borderRadius:width*0.015,
        paddingRight:width*0.04,
        flexDirection:'row',
        marginRight:width*0.02
        // borderWidth:1
        
    },
    
    maincontainer:{
        // width:width*0.87,
        paddingBottom:height*0.015,

    },
    teacherimg:{
        resizeMode:'contain',
        width:width*0.42,
        height:height*0.16,
        marginLeft:'auto',
        marginTop:'auto',
        // backgroundColor:"red"x
    },
    pauseicon:{
        height:width*0.13,
        width:width*0.13,
        borderRadius:width*0.13/2,
        backgroundColor:WHITE,
        justifyContent:'center',
        alignItems:"center",
        alignSelf:"center",
        left:"40%",
        paddingLeft:width*0.015
        // marginTop:height*0.08,
        // marginLeft:width*0.32

    },
    languageContainer:{
      backgroundColor: DARKGRAY,
      borderRadius: width * 0.05 / 2,
      justifyContent:"center",
      alignItems:"center",
      overflow:"hidden",
      height: width * 0.05,
      width: width * 0.05,
      marginRight:width*0.01,
      
  
  },
    ehbox:{
      flexDirection:'row',
      alignItems:"center",
      marginVertical:height*0.01
    },
    etext:{
      color:WHITE,
      fontSize:width*0.023,
    // fontWeight:"600",

      // fontFamily:IsidoraSemiBold
    },
    htext:{
      color:WHITE,
      fontSize:width*0.023,
    fontWeight:"600",
      // fontFamily:IsidoraSemiBold,
      // marginLeft:width*0.01
    },
    crackexamtext:{
      fontFamily:IsidoraSemiBold,
      color:DARKGRAY,
      fontSize:width*0.052,
      width:width*0.6,
      // backgroundColor:"red",
      lineHeight:height*0.032,

    },
    jee:{
      color:orange
    },
    familiarize:{
      color:GRAY,
      fontFamily:IsidoraMedium,
      fontSize:width*0.027
    },
    outerbox:{
      flexDirection:'row',
      alignItems:"center",
      marginTop:height*0.015,
      width:width*0.55,
      justifyContent:"space-between"
    },
    innerbox:{
      flexDirection:'row',
      alignItems:"center"
    },
    gettext:{
      fontFamily:IsidoraMedium,
      fontSize:width*0.027,
      color:BLACK,
      marginLeft:width*0.01
    },
    rightcircle:{
      backgroundColor:orange,
      height:width*0.032,
      width:width*0.032,
      borderRadius:width*0.032/2,
      justifyContent:'center',
      alignItems:'center'
    }
})