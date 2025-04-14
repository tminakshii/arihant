import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, orange, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
const { width, height } = Dimensions.get('window')
const boxwidth = width * 0.8

const SuccessStory = ({ item }) => {
    return (
        <View style={styles.maincard}>
            <Image source={item.image} style={styles.imageemoji} />
            <View style={styles.card}>
                <Text style={styles.nametext}>{item.name}</Text>
                <View style={styles.rankbox}>
                    <Text style={styles.ranktext}>{item.rank}</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.examtext}>{item.exam}</Text>
                </View>
                <Text style={styles.story}>
                    {item.story}
                </Text>

            </View>

        </View>
    )
}

export default SuccessStory

const styles = StyleSheet.create({
    maincard: {
        width: width,
        alignItems: 'center',
        height: height * 0.5,
        justifyContent: 'center',

    },

    imageemoji: {
        height: boxwidth * 0.3,
        width: boxwidth * 0.3,
        borderWidth: boxwidth * 0.02,
        borderColor: WHITE,
        borderRadius: boxwidth * 0.3 / 2,
        bottom: '67%',
        position: 'absolute',
        zIndex: 999,


    },


    card: {
        backgroundColor: WHITE,
        alignItems: 'center',
        alignSelf: 'center',
        width: width * 0.7,
        height: height * 0.33,
        paddingHorizontal: boxwidth * 0.04,
        borderRadius: width*0.02,
        paddingTop: height * 0.08,
        marginTop: height * 0.06,
        elevation:5,
        zIndex:0,
        shadowColor:BLACK, // Shadow color
        shadowOffset: { width: 0, height: 5 }, // Offset for shadow
        shadowOpacity: 0.15, // Opacity of shadow
        // shadowRadius: width / 20, 

    },
    rankbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.005,

    },
    line: {
        height: height * 0.015,
        width: boxwidth * 0.004,
        backgroundColor: DARKGRAY,
        marginHorizontal: boxwidth * 0.04,
        fontFamily:IsidoraMedium
    },
    nametext: {
        fontFamily: IsidoraSemiBold,
        color: BLACK,
        fontSize: width * 0.047,
        // fontSize: 17

    },
    ranktext: {
        fontFamily: IsidoraMedium,
        color: orange,
        fontSize: width * 0.036,
        // fontSize: 13

    },
    examtext: {
        fontFamily: IsidoraMedium,
        color: orange,
        fontSize: width * 0.036,

    },
    story: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        textAlign: 'center',
        lineHeight: height * 0.019,
        marginTop: height * 0.025,
        alignSelf: 'center'
    }
})