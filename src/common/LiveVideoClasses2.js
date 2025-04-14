import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { DARKGRAY, GRAY, LIGHTGRAY2, LIGHTORANGE, LIGHTPURPLE, orange, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
const LiveVideoclass2 = ({ item, solution = false, classVideo = false }) => {

    return (
        <View style={styles.maincontainer}>
            <FlatList 
                showsPagination={false}
                slideStyle={styles.swiperSlide}
                // horizontal={true}
                numColumns={2}
                data={item}
                overScrollMode='never'
                keyExtractor={(it, ind) => ind.toString()}
                removeClippedSubviews={false}
                // contentContainerStyle={{borderRadius:width*0.025}}
                renderItem={({ item, ind }) => (


                    <View style={styles.container}>

                        <ImageBackground source={item?.imageUrl}
imageStyle={{borderTopLeftRadius:width*0.025,
    borderTopRightRadius:width*0.025}}
                            style={styles.image} >

                            <View style={styles.logocontainer}>
                                <View style={styles.logobg}>
                                    <Image source={item?.logo} style={styles.logo} />
                                </View>
                                <Text style={styles.heading}>{item?.ImageHeading}</Text>
                            </View>
                            <View style={styles.imagebox}>
                                <Text style={styles.include1} >{item?.courseInclude}</Text>
                                <Image source={item?.teacherimg} style={styles.teacherimg} />
                            </View>
                        </ImageBackground>

                        <View style={styles.textbox}>
                            <Text style={styles.name}>{item?.courseName}</Text>
                            <View style={styles.underimage}>
                            <View style={styles.languageContainer}>

<Text style={styles.Etext}>E</Text>
</View>
<View style={styles.languageContainer}>

<Text style={styles.Etext}>H</Text>
</View>
                                <Text style={styles.full}>{item?.Fulltest}</Text>
                            </View>
                            <Text style={styles.description}>{item?.description}</Text>
                            <Text style={styles.include}>{item?.courseInclude2}</Text>
                            <Text style={styles.about}>{item?.about}</Text>
                            {solution === true &&
                                <View style={styles.underbuttonbox}>
                                    <TouchableOpacity style={styles.coursetype}>
                                        {item?.islive && <>
                                            <View style={styles.outer}>
                                                <View style={styles.inner}></View>
                                            </View>
                                            <Text style={styles.typelive}>Live</Text>
                                        </>}
                                        {item?.isjoin && <Text style={styles.typejoin}>Join Now</Text>}
                                        {item?.isreminder && <Text style={styles.typeremind}>Remind me</Text>}
                                    </TouchableOpacity>
                                    <Text style={styles.view}>View Series</Text>
                                    <MaterialCommunityIcons name='arrow-top-right' size={15} color={GRAY} style={styles.arrow} />

                                </View>
                            }
                            {classVideo == true &&



                                <View>

                                    <Text style={styles.ended}>Ended on {item?.Ended}</Text>
                                    <Text style={styles.ended1}>·{item?.lesson}</Text>
                                    <View style={styles.pausebuttoncontainer}>
                                        <Text style={styles.faculty}>{item?.faculty}</Text>

                                        <Ionicons name='caret-forward-circle-sharp' size={width*0.07} color={orange} style={styles.pouseicon} />
                                    </View>
                                </View>}
                        </View>
                    </View>

                )}
            />
        </View>
    )
}

export default LiveVideoclass2

const styles = StyleSheet.create({
    maincontainer: {
        // width: width,
        // flexWrap:'wrap'
        // marginHorizontal:1
        // height: height * 0.5,
        // backgroundColor:"red"
        marginHorizontal:width*0.01

    },


    container: {
        width: width * 0.45,
        marginLeft: width * 0.03,
        borderWidth: 0.5,
        borderColor: LIGHTGRAY2,
        // overflow: 'hidden',
        borderRadius: width*0.025,
        marginBottom:height*0.02,
        elevation:2,
        shadowColor:GRAY,
        shadowOffset:{width:0,height:5},
        shadowOpacity: 0.15, 


        // alignSelf: 'center'
    },
    image: {
        height: height * 0.15,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        // borderRadius: 5,

    },
    teacherimg: {
        resizeMode: 'contain',
        height: height * 0.098,
        width: width * 0.25,
        marginTop: 'auto',
        zIndex: 0,
        position: 'relative',
        marginLeft: 'auto',
        marginRight: width * 0.01


    },

    languageContainer:{
        backgroundColor: DARKGRAY,
        borderRadius: width * 0.05 / 2,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        height: width * 0.05,
        width: width * 0.05,
        marginRight:width*0.01,
        
    
    },
    logo: {
        height: width * 0.02,
        width: width * 0.02,
        resizeMode: 'contain',
    },
    heading: {
        fontFamily: IsidoraMedium,
        color: WHITE,
        fontSize: width * 0.027,
        marginHorizontal: width * 0.015,

    },
    include1: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: width * 0.041,
        width: width / 2.7,
        marginLeft: width * 0.03,
        lineHeight: height * 0.027,
        marginTop: height * 0.046,
        zIndex: 999,

        position: 'absolute'
    },
    logocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height*0.015,
        marginHorizontal: width*0.03
    },
    logobg: {
        backgroundColor: WHITE,
        height: width * 0.04,
        width: width * 0.04,
        borderRadius: width * 0.04 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagebox: {
        flexDirection: "row",
        marginTop: "auto",
        //    justifyContent:'space-around',
        //    paddingHorizontal:width*0.0

    },
    underimage: {
        flexDirection: 'row',
        alignItems: 'flex-end',


    },
    textbox: {
        paddingHorizontal: width * 0.03,
        paddingTop: height * 0.015,
        backgroundColor:WHITE,
        borderBottomLeftRadius:width*0.025,
        borderBottomRightRadius:width*0.025
        // flexWrap:'wrap'

    },
    Etext: {
        backgroundColor: DARKGRAY,
     fontWeight:"600",
        // fontFamily: IsidoraSemiBold,
        fontSize: width * 0.03,
        color: WHITE
    },
    Htext: {
        backgroundColor: DARKGRAY,
        marginLeft: width * 0.02,
        height: width * 0.05,
        width: width * 0.05,
        borderRadius: width * 0.05 / 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.03,
        color: WHITE
    },
    name: {
        fontSize: width * 0.035,
        fontFamily: IsidoraSemiBold,
        color: orange,
    },
    full: {
        fontSize: width * 0.03,
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        marginLeft: 'auto'
    },
    description: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.026,
        marginTop: height * 0.015
    },
    include: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.031,
        marginTop: height * 0.0022
    },
    about: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.027,
        marginTop: height * 0.0022,
        marginBottom: height * 0.007
    },
    underbuttonbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * 0.02
    },
    outer: {
        height: width * 0.05,
        width: width * 0.05,
        borderRadius: width * 0.05 / 2,
        backgroundColor: LIGHTORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 0.05
    },
    inner: {
        height: width * 0.03,
        width: width * 0.03,
        borderRadius: width * 0.03 / 2,
        backgroundColor: orange
    },
    coursetype: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: GRAY,
        borderRadius: width * 0.2,
        height: height * 0.04,
        width: width * 0.28

    },
    typelive: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.03,
        marginRight: width * 0.07

    },
    typejoin: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.03,

    },
    typeremind: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.03
    },
    view: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.03,
        marginLeft: width * 0.1
    },
    ended: {
        fontFamily: IsidoraMedium,
        color: orange,
        fontSize: width * 0.032,
        letterSpacing: width * 0.0015
    },
    ended1: {
        fontFamily: IsidoraMedium,
        color: orange,
        fontSize: width * 0.032,
        letterSpacing: width * 0.0015,
    },
    faculty: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        // marginVertical: height * 0.02

    },
    pausebuttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:height*0.01,
        marginBottom:height*0.015
    }
})