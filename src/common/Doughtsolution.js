import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, orange, RED, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons';
const{width,height}=Dimensions.get('window')
const Doughtsolution = ({item}) => {

  return (
    <View style={Platform.OS=="android"? styles.maincontainer:styles.maincontainerios}>
      <View style={styles.upperbox}>
      <Image source={item?.image} style={styles.image}/>
      <View style={styles.ehbox}>
        <View  style={styles.languageContainer}>

            <Text style={styles.etext}>E</Text>
        </View>
        <View  style={styles.languageContainer}>

<Text style={styles.etext}>H</Text>
</View>
            {/* <Text style={styles.htext}>H</Text> */}
        </View>
      </View>
      <Text style={styles.session} numberOfLines={2}>{item?.session}</Text>
      <Text style={styles.start}>{item?.start}</Text>
      <View style={styles.box}>
        <View style={styles.dot1}></View>
        <Text style={styles.lesson}>{' '}{item?.lesson}</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.dot2}></View>
        <Text  style={styles.time}>{' '}{item?.time}</Text>
      </View>
      <TouchableOpacity style={Platform.OS=="android" ? styles.watchnowbox: styles.watchnowboxios}>
      <Ionicons name='caret-forward-circle-outline' size={20} color={orange}/>
      <Text style={styles.join}>{item?.join}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Doughtsolution

const styles = StyleSheet.create({
    maincontainer:{
        width:width*0.44,
        backgroundColor:WHITE,
        elevation:5,
        borderRadius:width * 0.003,
        paddingTop:height*0.02,
        paddingHorizontal:width*0.03,
        paddingBottom:height*0.006,
        marginVertical:height*0.01,
        borderRadius:width*0.03,
        marginHorizontal:width*0.01,
        height:height*0.36

    },
    maincontainerios:{
        width:width*0.44,
        backgroundColor:WHITE,
        elevation:5,
        borderRadius:width * 0.003,
        paddingTop:height*0.02,
        paddingHorizontal:width*0.03,
        paddingBottom:height*0.006,
        marginVertical:height*0.01,
        borderRadius:width*0.03,
        marginHorizontal:width*0.01,
        height:height*0.35,
        shadowColor: GRAY,
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.15, 

    },
    languageContainer:{
        backgroundColor: orange,
        borderRadius: width * 0.045 / 2,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        height: width * 0.045,
        width: width * 0.045,
        marginRight:width*0.01,
        

    },
    upperbox:{
        backgroundColor:'#ffe6d9',
        flexDirection:'row',
        paddingTop:height*0.015,
        borderRadius:width*0.02,
        // backgroundColor:'red',

        // justifyContent:'flex-start',
        
        // justifyContent:'flex-start'
    },
    image:{
        resizeMode:'contain',
        height:undefined,
        aspectRatio:9/9,
        // backgroundColor:'green',

        width:width*0.24,
        marginLeft:width*0.02
    },
    ehbox:{
        flexDirection:'row',
        // marginLeft:'auto',
    },
    etext:{
        color: WHITE,
    
        fontSize: width * 0.025,
        // fontFamily:IsidoraMedium
    },
    htext:{
        color: WHITE,
       
        fontSize: width * 0.025,
        // fontFamily:IsidoraMedium,
        // marginHorizontal:width*0.015,
        
    },
    session:{
        fontFamily:IsidoraSemiBold,
        color:DARKGRAY,
        fontSize:width*0.032,
        lineHeight:height*0.018,
        marginTop:height*0.01
    },
    start:{
        fontFamily:IsidoraSemiBold,
        color:orange,
        fontSize:width*0.03,
        lineHeight:height*0.018,
        marginTop:height*0.02
    },
    box:{
        flexDirection:'row',
        // justifyContent:'center'
        alignItems:'center',
        marginTop:"1%"
    },
    dot1:{
        width:width*0.01,
        height:width*0.01,
        borderRadius:width*0.01/2,
        backgroundColor:orange
    },
    dot2:{
        width:width*0.01,
        height:width*0.01,
        borderRadius:width*0.01/2,
        backgroundColor:GRAY
    },
    lesson:{
        fontFamily:IsidoraSemiBold,
        color:orange,
        fontSize:width*0.03,
    },
    time:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        fontSize:width*0.03,
    },
    watchnowbox:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.02,
        marginBottom:height*0.01,
        justifyContent:"center",
        // backgroundColor:"red"

    },
    watchnowboxios:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.032,
        marginBottom:height*0.01,
        justifyContent:"center",
        // backgroundColor:"red"

    },
    join:{
        fontFamily:IsidoraSemiBold,
        color:DARKGRAY,
        fontSize:width*0.028,
        marginLeft:width*0.005,

    }
})