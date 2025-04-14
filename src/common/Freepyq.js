import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, Lightpink, LIGHTBLUE, orange, WHITE, GRAY } from '../values/Colors'
import { IsidoraSemiBold } from '../values/Fonts'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from './Button'
import { ImagePath } from '../values/ImagePath'

const { width, height } = Dimensions.get('window')

const Freepyq = ({ item }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.firstbox}>
                <Text style={styles.sub}>{item.subject}</Text>
                <View style={styles.datebox}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={item?.calendericon} style={styles.calendericon} />
                        <Text style={styles.datetext}>{item?.date}</Text>
                        <Text style={styles.shift}>{item?.shift}</Text>
                    </View>
                    <TouchableOpacity style={styles.pausebtn}>
                        {/* <Ionicons name='caret-forward-circle-sharp'

                         size={width * 0.1} color={orange} /> */}
                         <Image source={ImagePath?.play2} style={styles.playIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.secondbox}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.languageBox}>
                        <Text style={styles.lang}>{item?.language1}</Text>
                        <Feather name='download' size={width * 0.03} color={BLACK} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.languageBox}>
                        <Text style={styles.lang}>{item?.language2}</Text>
                        <Feather name='download' size={width * 0.03} color={BLACK} />
                    </TouchableOpacity>
                </View>
                <Button
                    text={'Register Now'}
                    customStyles={styles.button}
                    textStyle={styles.buttontext}
                />
            </View>
        </View>
    )
}

export default Freepyq

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: WHITE,
        width: width /1.08,
        alignSelf: 'center',
        paddingHorizontal: width * 0.02,
        paddingTop: height * 0.015,
        paddingBottom: height * 0.006,

        marginBottom: height * 0.03,
        borderRadius: width*0.02,
        justifyContent: 'space-around',
        elevation:2,
        shadowColor:GRAY,
        shadowOffset:{width:0,height:5},
        shadowOpacity: 0.15, 
    },
    datebox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginHorizontal: width * 0.02,
    },
    calendericon: {
        resizeMode: 'contain',
        width: width * 0.043,
        height: height * 0.025,
    },
    sub: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        backgroundColor: "rgba(255, 237, 201, 1)",
        width: width * 0.25,
        textAlign: 'center',
        paddingVertical: height * 0.005,
        // paddingHorizontal:"0%",

        borderRadius: width*0.02,
        marginHorizontal: width * 0.02,
        marginBottom:height*0.002
    },
    datetext: {
        fontFamily: IsidoraSemiBold,
        color: BLACK,
        fontSize: width * 0.036,
        marginLeft: width * 0.02
    },
    shift: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.035,
        color: orange,
        marginLeft: width * 0.015
    },
    languageBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.22,
        height: height * 0.035,
        backgroundColor: LIGHTBLUE,
        justifyContent: 'space-around',
        paddingHorizontal: width * 0.02,
        borderRadius: width*0.01,
        marginHorizontal: width * 0.015
    },
    lang: {
        fontSize: width * 0.025,
        fontFamily: IsidoraSemiBold,
        color: BLACK
    },
    button: {
        backgroundColor: orange,
        paddingHorizontal: width * 0.035,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width*0.01,
        paddingVertical: height * 0.01,
        marginRight:width*0.02
    },
    buttontext: {
        color: WHITE,
        fontFamily: IsidoraSemiBold,
        
        fontSize: width * 0.035
    },
    firstbox: {
        justifyContent: 'center',
        height: height * 0.1,
        paddingBottom: height * 0.01

    },
    secondbox: {
        justifyContent: "space-between",
        height: height * 0.08,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: width * 0.005
    },
    pausebtn: {
        marginRight: width * 0.09,
        // alignSelf:"center"
    },
    playIcon:{
        resizeMode:"contain",
        height:height*0.045,
        width:height*0.045,
        // backgroundColor:orange,
        tintColor:orange

    }
})
