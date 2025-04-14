import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IsidoraBlack, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3 } from '../values/Colors'
import { ScreenRatio } from '../values/Ratio'
import { isTablet } from 'react-native-device-info'
const { width, height } = Dimensions.get('window')
const Publish = ({ item ,}) => {

    return (
        <View style={styles.maincontainer}>
            <Text style={styles.detail}>{item.name}</Text>
            <Image source={item.image} style={styles.iconimage} />
            <Text style={styles.detail}>{item.detail}</Text>
        </View>

    )
}

export default Publish

const styles = StyleSheet.create({
    maincontainer: {
        justifyContent: 'center',
        alignItems: "center",
        paddingTop:height*0.005,
        // width: width / 4.6,
        // back
        height:height*0.1,
        paddingHorizontal:isTablet?ScreenRatio(3):ScreenRatio(2),
        // borderBottomWidth:1,
        // borderTopWidth:1,
        // paddingBottom:"1%",
        // borderColor: '#757676',
    },
    iconimage: {
        height:isTablet?height*0.04:height*0.05,
        width:isTablet?width*0.05:width*0.07,
        resizeMode: "contain",
        marginVertical:"5%",
        tintColor:GRAY,

    },
    name:
        { fontSize: width*0.025,
        fontFamily: IsidoraSemiBold,
         color: GRAY,
        //  marginTop:"2%"
         },
    detail: {
        fontSize:isTablet?width*0.018:width*0.025,
         fontFamily: IsidoraSemiBold, 
         color: GRAY,
    }
})