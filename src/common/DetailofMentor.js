import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, Lightpink, WHITE } from '../values/Colors'
import { ImagePath } from '../values/ImagePath'
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts'
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window')
const DetailofMentor = ({ item,closeDetail }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headerbox}>
                <View>
                    <Text style={styles.name}>{item?.name}</Text>
                    <Text style={styles.subject}>{item?.subject}</Text>
                </View>
                <TouchableOpacity onPress={closeDetail}>
                    <Feather name='x-circle' size={20} color={DARKGRAY} />
                </TouchableOpacity>
            </View>
            <Image source={item?.image} style={styles.mentorimage}/>
            <Text style={styles.introhead}>Introduction</Text>
            {item?.info.map((det,ind)=>{
                return(
                    <View key={ind} style={styles.detailinfobox}>
                    <Text style={styles.detailtext}>•{' '}  </Text>
                    <Text style={styles.detailtext}> {det}</Text>
                    </View>
                )
            })}

            <Image source={ImagePath.starbackground} style={styles.image} />

        </View>
    )
}

export default DetailofMentor

const styles = StyleSheet.create({
    maincontainer: {
        width: width * 0.95,
        backgroundColor: WHITE,
        borderRadius: width * 0.02,
        elevation: 5,
        paddingVertical: height * 0.024,
        paddingHorizontal: width * 0.045,
        position: 'relative',

    },
    image: {
        resizeMode: 'contain',
        height: height * 0.35,
        width: width * 0.7,
        // backgroundColor:'red',
        marginLeft: 'auto',
        position: 'absolute',
        right: 0,
        
        left: 'auto',
        zIndex: -1,
        bottom:height*0.02,
        top:height*0.02,
        tintColor:"pink"
        // top:0
    },
    name: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.05
    },
    subject: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.035
    },
    headerbox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between'
    },
    mentorimage:{
        resizeMode:'contain',
        height:width*0.25,
        width:width*0.25,
        marginVertical:height*0.018,
    // backgroundColor:'red'
    },
    introhead:{
        fontFamily:IsidoraSemiBold,
        color:BLACK,
        fontSize:width*0.035
    },
    detailtext:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.03,
        color:GRAY,
        lineHeight:height*0.02,
        marginBottom:height*0.002
    },
    detailinfobox:{
        flexDirection:"row",
        alignItems:'flex-start'
    }
})