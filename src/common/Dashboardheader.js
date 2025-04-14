import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import { DARKGRAY, WHITE } from '../values/Colors'
import { IsidoraSemiBold } from '../values/Fonts'
const{width,height}=Dimensions.get('window')

const Dashboardheader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headername}>
        <Image source={ImagePath.arihantlogo} style={styles.logo}/>
        <Text style={styles.text}>Dashboard</Text>
        </View>
      <Image source={ImagePath.list} style={styles.list}/>
    </View>
  )
}

export default Dashboardheader

const styles = StyleSheet.create({
    container:{
      // flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:WHITE,
        elevation:5,
        paddingHorizontal:'4%',
        paddingVertical:'3%',
        justifyContent:'space-between'
    },
    logo:{
        height:height*0.035,
        width:width*0.072,
        resizeMode:'contain',
        // backgroundColor:'red'
    },
    text:{
        fontSize:width*0.041,
        color:DARKGRAY,
        fontFamily:IsidoraSemiBold,
        marginLeft:width*0.02
    },
    list:{
      height:height*0.035,
      width:width*0.072,
      resizeMode:'contain',
      // backgroundColor:'blue',
      paddingVertical:17
    },
    headername:{
      flexDirection:'row',
      alignItems:'center',

    }
})