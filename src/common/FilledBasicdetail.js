import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, inputBordercolor, LIGHTGRAY2, LIGHTGRAY3, orange, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window')

const FilledBasicdetail = ({ item, setShowfilledbasicdetail }) => {
    const { name,
        lastname,
        mobile,
        dob,
        email,
        houseno,
        streetname,
        landmark,
        city,
        state,
        zip,
        qualification,
        passingyear,
        school,
        exampreferences,
        coachingname,
        gender,
        preparingforexam,
        modeofStudy,
        language
    } = item;
    console.log(item, 'item')
    return (
        <View style={styles.firstContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerfirstbox}>
                    <Image source={require('../assets/images/orangegraycircle.png')} style={styles.circleimg} />
                    <Text style={styles.basictext}>Basic Details</Text>
                </View>
                <TouchableOpacity style={styles.editbox} onPress={() => setShowfilledbasicdetail(false)}>
                    <FontAwesome5 name={'user-edit'} size={width * 0.035} color={orange} />
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.studentprofiletext}>Student Profile</Text>
            <View style={styles.photocontainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/photofordetail.png')} style={styles.studentprofileimg} />
                </TouchableOpacity>
                <View>
                    <View style={styles.infoupperbox}>
                        <Text style={styles.firsttext}>Name:</Text>
                        <Text style={styles.secondtext}>{name} {lastname}</Text>
                    </View>
                    <View style={styles.infoupperbox}>
                        <Text style={styles.firsttext}>Date of Birth:</Text>
                        <Text style={styles.secondtext}>{dob}</Text>
                    </View>
                    <View style={styles.infoupperbox}>
                        <Text style={styles.firsttext}>Email:</Text>
                        <Text style={styles.secondtext}>{email}</Text>
                    </View>
                    <View style={styles.infoupperbox}>
                        <Text style={styles.firsttext}>Mobile:</Text>
                        <Text style={styles.secondtext}>+91 {mobile}</Text>

                    </View>
                    <View style={styles.infoupperbox}>
                        <Text style={styles.firsttext}>Gender:</Text>
                        <Text style={styles.secondtext}>{gender}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.infosecondbox}>
                <View style={styles.infoupperbox2}>
                    <Text style={styles.firsttext}>Address:</Text>
                    <Text style={styles.secondtextadd}>{houseno},{streetname},{landmark} {city},{state},{zip}</Text>
                </View>
                <Text style={styles.education}>Education information</Text>
                <View style={styles.undereducation} />
                <View style={styles.undereducationbox}>
                    <Text style={styles.firsttext}>Qualification:</Text>
                    <Text style={styles.secondtexteducation}>{school}, {qualification} ({passingyear})</Text>
                </View>
                <View style={styles.undereducationbox}>
                    <Text style={styles.firsttext}>School/College:</Text>
                    <Text style={styles.secondtexteducation}>{school}</Text>
                </View>
                <View style={styles.undereducationbox}>
                    <Text style={styles.firsttext}>You prepare for:</Text>
                    <Text style={styles.secondtexteducation}>IIT JEE</Text>
                </View>
                <View style={styles.undereducationbox}>
                    <Text style={styles.firsttext}>Coaching Name:</Text>
                    <Text style={styles.secondtexteducation}>{coachingname}</Text>
                </View>
                <View style={styles.undereducationbox}>
                    <Text style={styles.firsttext}>Exam Preferences:</Text>
                    <Text style={styles.secondtexteducation}>{qualification}</Text>
                </View>
            </View>
        </View>
    )
}

export default FilledBasicdetail

const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        backgroundColor: WHITE,
        elevation: 5,
        borderRadius: width * 0.022,
        // paddingVertical: '3%',
        paddingBottom: '7%',
        // paddingHorizontal:'4%',
        width: width / 1.085,
        alignSelf: 'center',
        marginVertical: '2%',
        overflow: 'hidden'

    },
    circleimg: {
        width: width * 0.038,
        height: width * 0.038,
        resizeMode: 'contain',
    },
    basictext: {
        fontSize: width * 0.041,
        fontFamily: IsidoraBold,
        color: DARKGRAY,
        marginLeft: width * 0.025
    },
    headerfirstbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        backgroundColor: WHITE,
        justifyContent: 'space-between',
        elevation: 5
    },
    edit: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.036,
        color: orange,
        marginLeft: width * 0.02
    },
    editbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    studentprofiletext: {
        fontSize: width * 0.036,
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        marginHorizontal: '4%',
        marginVertical: '3%'
    },
    photocontainer: {
        flexDirection: "row",
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        justifyContent: 'space-between',
        marginTop: '3%'

    },
    studentprofileimg: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',

    },
    infoupperbox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: width * 0.56,
        marginBottom: '5%',

    },
    infoupperbox2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // width: width * 0.7,
        marginTop: '2%',
        marginBottom: '5.5%',

    },
    firsttext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        color: GRAY,
        lineHeight:height*0.02,
    },
    secondtext: {
        width: width * 0.34,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        color: DARKGRAY,
        lineHeight:height*0.02,

    },
    secondtextadd: {
        width: width * 0.67,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        color: DARKGRAY,
        lineHeight:height*0.02,
        // backgroundColor: 'red'
    },
    secondtexteducation:{
        width: width * 0.56,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        lineHeight:height*0.02,
        // backgroundColor: 'red',
        color: DARKGRAY,
    },
    infosecondbox: {
        paddingHorizontal: '4%'
    },
    education: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.036,
        color: DARKGRAY,
        lineHeight:height*0.02
    },
    undereducation: {
        height: 1.5,
        backgroundColor: LIGHTGRAY2,
        marginTop: '2%'
    },
    undereducationbox:{
        flexDirection:"row",
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginTop:'4%'
    }
})