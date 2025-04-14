import { Dimensions, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { ImagePath } from '../values/ImagePath'

const {height,width}=Dimensions.get("window")



const BlogCommon = ({item,setBlogDescription,BlogDescription}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5} onPress={()=>setBlogDescription(!BlogDescription)}>
        <Image source={item?.image} style={styles.imagestyle}/>
        <View style={styles.textView}>

        <View style={styles.labelStyle}>

        <Text style={styles.labletext}>{item?.lable } </Text>
        </View>
        <Text style={styles.heading}>{item?.heading}</Text>
        <Text style={styles.descriptiontext}>{item?.description}</Text>

<View style={styles.bottomConntainer}>
<Image source={ImagePath?.graylogo} style={styles.graylogo}/>
<View>

<Text style={styles.datetext}>{item?.date}</Text>
<Text style={styles.datetext}>{item?.arihant}</Text>

</View>
</View>
        </View>

    </TouchableOpacity>
  )
}

export default BlogCommon

const styles = StyleSheet.create({

    mainContainer:{
        borderWidth:0.5,
        borderColor:GRAY,
        // width:width*0.01,
        backgroundColor:WHITE,
        // flexDirection:"row",
        marginHorizontal:width*0.02,
        marginTop:"8%",

        overflow:"hidden",
        borderRadius:width*0.01,

    },
    imagestyle:{
        height:undefined,
        aspectRatio:15/7.91,
        width:width/1.355,
        resizeMode:"contain",
        // backgroundColor:"red",
        
    },
    labelStyle:{
borderWidth:0.5,
borderColor:GRAY,borderRadius:width*0.04,
marginVertical:"5%",
justifyContent:"center",
alignItems:"center",
paddingHorizontal:"5%",
height:height*0.025,
alignSelf:"flex-start"
    },
    textView:{
        marginLeft:"5%"
    },
    labletext:{
        fontSize:width*0.027,
        fontFamily:IsidoraMedium,
        color:DARKGRAY
    },
    descriptiontext:{
        fontSize:width*0.03,
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        width:width*0.6,
        lineHeight:height*0.017,
        marginTop:"1%"
    },
    heading:{
        color:DARKGRAY,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.041,
        width:width*0.6,
        lineHeight:height*0.025
    },
    bottomConntainer:{
        flexDirection:"row",
        marginVertical:"5%",
        alignItems:"center"
    },
    graylogo:{
        height:height*0.04,
        width:width*0.07,
        resizeMode:"contain",
        marginRight:"5%"
        // backgroundColor:"red"
    },
    datetext:{
        color:DARKGRAY,
        fontSize:width*0.027,
        fontFamily:IsidoraMedium
    }
})