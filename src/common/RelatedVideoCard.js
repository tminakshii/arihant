import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import { DARKGRAY, GRAY, orange, RED, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
const {height,width}=Dimensions.get('window')
const RelatedVideoCard = ({item}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.upperbox}>
        <View style={styles.headtextbox}>
        <View style={styles.upper}>
        <Image source={ImagePath.RoundLogo} style={styles.logo}/>
      <Text style={styles.indiatext}>India's No. 1 Test Portal</Text>
      </View>
      
      <View style={styles.headerunder}>
      <Text style={styles.exam}>{item.exam}</Text>
      <Text style={styles.examline}>{item.examline}</Text>
      </View>
        </View>
        <Image source={item.image} style={styles.image}/>
      </View>
      <Text style={styles.pyq}>{item.pyq}</Text>
      <Text style={styles.dis}>{item.dis}</Text>
      <TouchableOpacity style={styles.watchbox}>
      <Ionicons name='caret-forward-circle-outline' size={width*0.05} color={RED}/>
        <Text style={styles.watch}>{item.watchnow}</Text>
       
      </TouchableOpacity>

    </View>
  )
}

export default RelatedVideoCard

const styles = StyleSheet.create({
  maincontainer:{
    backgroundColor:WHITE,
    width:width*0.7,
    marginHorizontal:width*0.02,
    borderRadius:width*0.02,
    overflow:'hidden',
    elevation:5,
    marginTop:"2%",
    shadowColor: GRAY, // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Offset for shadow
    shadowOpacity: 1, // Opacity of shadow
    // shadowRadius: width / 20, 
    // borderWidth:1
  },
 
  logobox:{
    justifyContent:'center',
    alignContent:'center',
    // backgroundColor:WHITE,
    // height:width*0.07,
    // width:width*0.07,
    // borderRadius:width*0.07/2
  },
  logo:{
    height:height*0.03,
    resizeMode:"contain",
    width:height*0.03,
    alignSelf:'center'
  },
  upperbox:{
    backgroundColor:orange,
    flexDirection:'row',
    alignItems:'center',
    // position:"relative",
    // borderTopLeftRadius:width*0.02,
    // borderTopRightRadius:width*0.02,
    // overflow:"hidden",
    // borderRadius:width*0.02,
    // borderBottomEndRadius:0,
    // borderBottomStartRadius:0,
    // height:height*0.12
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    zIndex:0
    
  
    // justifyContent:'center'
  },
  upper:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  indiatext:{
    color:WHITE,
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.03,
    marginLeft:width*0.02
  },
  exam:{
    fontFamily:IsidoraBold,
    color:WHITE,
    fontSize:width*0.042,
    // fontSize:15,

    marginTop:height*0.025
  },
  examline:{
    fontFamily:IsidoraSemiBold,
    color:WHITE,
    fontSize:width*0.031,
    // fontSize:13,

  },
  image:{
    resizeMode:'contain',
    height:width*0.2,
    width:width*0.2,
    marginTop:height*0.04,
    marginLeft:width*0.025,
    // overflow:"hidden"
    // backgroundColor:'red'
    
    
  },
  headtextbox:{
    width:width*0.38,
    marginLeft:width*0.04,
    justifyContent:'space-between',
    // backgroundColor:"red"
    
  },
  pyq:{
    fontFamily:IsidoraSemiBold,
    color:DARKGRAY,
    fontSize:width*0.034,
    // fontSize:13,

    marginHorizontal:width*0.04,
    lineHeight:height*0.021,
    marginTop:height*0.014,
    
  },
  dis:{
    fontFamily:IsidoraMedium,
    color:GRAY,
    fontSize:width*0.031,
    marginLeft:width*0.04,
    lineHeight:height*0.021,
    marginTop:height*0.014,
    width:width*0.55
  },
  watch:{
    fontFamily:IsidoraSemiBold,
    color:DARKGRAY,
    fontSize:width*0.03,
    marginLeft:width*0.015,

    // marginTop:height*0.02
  },
  watchbox:{
flexDirection:'row',
alignItems:'center',
marginLeft:width*0.04,
marginTop:height*0.02,
marginBottom:height*0.02,

  },
  headerunder:{
 
  }
})