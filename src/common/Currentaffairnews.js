import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { DARKGRAY, RED } from '../values/Colors'
import Entypo from 'react-native-vector-icons/Entypo'

const{width,height}=Dimensions.get('window')

const Currentaffairnews = ({detail,setCompletenews,completenews}) => {
    // const [completenews , setCompletenews]=useState(false)
  return (
    <View style={styles.container}>
        <Image source={detail?.item?.image} style={styles.image}/>
        <Text style={styles.underimgtext}>{detail?.item?.description}</Text>
        <TouchableOpacity style={styles.readmorebox} onPress={()=>setCompletenews(!completenews)}>
           <View style={{borderBottomWidth:1,borderBottomColor:RED}}>
           <Text style={styles.readtext}>
                Read More
            </Text>
           </View>
            <Entypo name={'chevron-small-right'} size={width*0.04} color={RED}/>
             
        </TouchableOpacity>
    </View>
  )
}

export default Currentaffairnews

const styles = StyleSheet.create({
    image:{
        height:height*0.14,
        width:width*0.4
    },
    underimgtext:{
        width:width*0.38,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.03,
        color:DARKGRAY,
        lineHeight:height*0.018,
        marginVertical:height*0.01
    },
    readmorebox:{
        flexDirection:'row',
        alignItems:'center',

    },
    readtext:{
        fontFamily:IsidoraMedium,
        fontSize:width*0.035,
        // textDecorationLine:'underline',
        color:RED,
       
        // lineHeight:15
    },
    container:{
        marginHorizontal:width*0.02
    }

})