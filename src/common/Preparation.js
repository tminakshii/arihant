import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, orange, WHITE } from '../values/Colors'
import { IsidoraSemiBold } from '../values/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

const{width,height}=Dimensions.get('window')
const Preparation = ({item}) => {
  return (
    <View style={styles.maincontainer}>
        <View style={styles.textcontainer}>
            <Text style={styles.title}>{item?.title}<Text style={styles.title2}>{item?.title2}</Text></Text>
            {Array.isArray(item?.features) && item.features.map((feature, index) => (
        <View key={index} style={styles.featureContainer}>
          <AntDesign name='plussquareo' size={width*0.04} color={DARKGRAY} />
          <Text style={styles.featureText}>{feature}</Text>
        </View>
      ))}
      </View>
        <Image source={item?.image} style={styles.image}/>
       

    </View>
  )
}

export default Preparation

const styles = StyleSheet.create({
    maincontainer:{
        width:width,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:width*0.06,
        paddingVertical:height*0.04,
        backgroundColor:WHITE

    },
    image:{
        resizeMode:'contain',
        height:height*0.2,
        width:width*0.38,
        marginLeft:width*0.02
        // backgroundColor:'red'
    },
    textcontainer:{
        width:width*0.5,
        // backgroundColor:'yellow'
    },
    title:{
        color:orange,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.035,
        lineHeight:height*0.022,
        marginBottom:height*0.02
    },
    title2:{
        color:BLACK
    },
    featureContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:height*0.015,
        
    },
    featureText:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.03,
        color:DARKGRAY,
        marginLeft:width*0.02
    }
})