import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import { BLACK, DARKGRAY, GRAY, orange, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
const { width, height } = Dimensions.get('window')
const FreeLive2 = ({ item }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.textcontainer}>
                <Text style={styles.jee}>JEE EXAM</Text>
                <Text style={styles.free}>Free Live Classes</Text>
                <View style={styles.innerbox}>
                    <Text style={styles.topic}>{item.topic}</Text>
                    <Text style={styles.type}>{item.type}</Text>
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.start}>Starting on {item.starton}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                <Button
                customStyles={styles.btn}
                textStyle={styles.textbtn}
                text={'Join Now'}/>
            </View>
            <ImageBackground source={ImagePath.starback3} style={styles.starback}>

                <Image source={item.teacher} style={styles.teacher} />
            </ImageBackground>
        </View>
    )
}

export default FreeLive2

const styles = StyleSheet.create({
    maincontainer: {
        width: "93%",
        alignSelf: 'center',
        backgroundColor: WHITE,
        elevation:2,
        paddingTop: height * 0.025,
        paddingLeft:width*0.04,
        marginBottom: height * 0.03,
        flexDirection: 'row',
        overflow:'hidden',
        borderRadius:width*0.02,
        justifyContent:"space-between"

    },
    starback: {
        resizeMode: "contain",
        width: width * 0.5,
        height: height * 0.25,
        alignSelf:"flex-end",
        zIndex:999,

        marginLeft: "auto",
        // position: 'relative',
        // backgroundColor:'red'

    },
    starback2: {
        resizeMode: "contain",
        width: width * 0.43,
        height: height * 0.26,
        alignSelf:"center"
        // marginLeft: "auto",
        // position: 'relative',
        // backgroundColor:'red'

    },
    starback3: {
        resizeMode: "contain",
        width: width * 0.35,
        height: height * 0.26,
        alignSelf:"center"
        // marginLeft: "auto",
        // position: 'relative',
        // backgroundColor:'red'

    },
    teacher: {
        resizeMode: 'contain',
        height: height * 0.17,
        width: width * 0.28,
        marginTop: 'auto',
        // marginLeft: 'auto',
        alignSelf:"flex-end"
    },
    textcontainer: {
        position: 'absolute',
        // marginRight: width*0.03,
        zIndex:0,

        top: height * 0.025,
        left: width * 0.05,
        // width: width * 0.5,
        // backgroundColor:"red"

    },
    innerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.012
        // justifyContent:'space-between'
    },
    jee: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.045,
        color: orange
    },
    free: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.045,
        color: BLACK
    },
    topic: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.036,
        color: GRAY
    },
    type: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.03,
        marginLeft: width * 0.03
    },
    start: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        // fontSize:11,

    },
    time: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        marginLeft: width * 0.04

    },
    btn:{
        padding:0,
        height:height*0.04,
        width:width*0.3,
        backgroundColor:orange,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width*0.04,
        marginTop:width>"500"?height*0.04:height*0.06

    },
    textbtn:{
        fontFamily:IsidoraSemiBold,
        color:WHITE,
        fontSize:width*0.035,
    }

})