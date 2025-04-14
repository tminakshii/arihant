import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTORANGE, Lightpink, LIGHTPURPLE, orange, RED, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts'
import MaterialcommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from'react-native-vector-icons/Ionicons'
import Entypo from'react-native-vector-icons/Entypo'
import { ImagePath } from '../values/ImagePath'

const { width, height } = Dimensions.get('window')
const CrackExam = ({ item ,onPress,exploreCourses}) => {
    return (
        <View style={exploreCourses?styles.maincontianer2:styles.maincontianer}>
            <View style={styles.headerbox}>
                <Text style={styles.cracktext}>Crack JEE Exam with<Text style={styles.arihanttext}> Arihant Plus</Text></Text>
                <View style={styles.EHbox}>

                       <View style={styles.languageContainer}>

                <Text style={styles.etext}>E</Text>
                </View>
                <View style={styles.languageContainer}>

<Text style={styles.htext}>H</Text>
</View>
                </View>
            </View>
            <Text style={styles.steptext}>Our step-by-step guides and detailed explanations have your back.</Text>
            <View style={styles.containt}>
                
                    <ImageBackground source={item.imageurl}
                        style={styles.image}
                        imageStyle={styles.imageback} >
                  
                   <View style={styles.logocontainer}>
                            <Image source={ImagePath.RoundLogo} style={styles.logo} />
                        <Text style={styles.heading}>India's No. 1 Test Portal</Text>
                    </View>
                   <View style={styles.upperimagebox}>
                    <TouchableOpacity style={styles.outercircle}>
                    <Entypo name='controller-play' size={width*0.05} color={RED} />
                    </TouchableOpacity>
                   
                   <Image source={item?.teacher} style={styles.teacher}/>
                   </View>
                    </ImageBackground>
                
                <View style={styles.aboutContainer}>
                    <Text style={styles.course}>{item.course}</Text>
                    <Text style={styles.about}>{item.aboutcourse}</Text>
                    <View style={styles.subjectbox}>
                        <View style={styles.subjectConntainer}>

                        <Text style={styles.subject}>{item.subject1}</Text>
                        </View>
                        <View style={styles.subjectConntainer}>

<Text style={styles.subject}>{item.subject2}</Text>
</View>
<View style={styles.subjectConntainer}>

<Text style={styles.subject}>{item.subject3}</Text>
</View>
                    </View>
                    <View style={styles.coursetypebox}>
                        <Text style={styles.coursetype}>{item.coursetype1}</Text>
                        <Text style={styles.coursetype}>{item.coursetype2}</Text>
                        <Text style={styles.coursetype}>{item.coursetype3}</Text>
                        <Text style={styles.coursetype}>{item.coursetype4}</Text>
                    </View>
                    <TouchableOpacity style={styles.explorebox} onPress={onPress}>
                        <Text style={styles.exploretext}>Explore Courses</Text>
                        <MaterialcommunityIcon name='arrow-top-right' size={width*0.038} color={WHITE} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CrackExam

const styles = StyleSheet.create({
    maincontianer: {
        width: width * 0.92,
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 5,
        // borderWidth:0.2,
        shadowColor: GRAY,
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.058,
        backgroundColor:WHITE,
        elevation:3,
        borderWidth:1,
        borderColor:LIGHTGRAY,
        shadowColor: GRAY,
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.15, 

    },
    maincontianer2: {
        width: width * 0.93,
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 5,
        // borderWidth:0.2,
        shadowColor: LIGHTGRAY2,
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.058,
        backgroundColor:WHITE,
        elevation:3,
        borderWidth:1,
        borderColor:LIGHTGRAY,
        shadowColor: GRAY,
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.15, 

    },
    languageContainer:{
        backgroundColor: DARKGRAY,
        borderRadius: width * 0.045 / 2,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        height: width * 0.045,
        width: width * 0.045,
        marginRight:width*0.01,
        
    
    },
    cracktext: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.041,
        marginLeft:"-1%",
        // marginRight:"5%"


    },
    arihanttext: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.04
    },
    steptext: {
        color: DARKGRAY,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.03,
        // fontSize:10,
        marginBottom: height * 0.02,
        marginTop:height*0.004,
        width:width*0.6,
        lineHeight:height*0.018,
        marginLeft:"-1%"
    },
    headerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor:"red",
        width:width/1.22
    },
    EHbox: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:"5%"
        // right:0

    },
    etext: {
     
        color: WHITE,
        fontSize: width * 0.025,
       

    },
    htext: {
       
        color: WHITE,
        fontSize: width * 0.025,
       
    },
    containt: {
        // flexDirection: 'row',

    },
    image: {
        height: height * 0.16,
        width: width * 0.83,
        resizeMode: 'contain',
        alignSelf:'center',
        paddingHorizontal:width*0.05

        

    },
    imageback:{
        borderRadius: 6,
    },
    upperimagebox:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:'auto'
    

    },
    teacher:{
        resizeMode:'contain',
        height:height*0.10,
        width:width*0.31,
        
    },
    aboutContainer: {
        marginTop: height * 0.018,
        marginHorizontal:-width*0.01
    },
    course: {
        fontFamily: IsidoraBold,
        fontSize: width * 0.041,
        color: GRAY,
    },
    about: {
        fontFamily: IsidoraMedium,
        fontSize: width * 0.03,
        color: DARKGRAY,
        marginTop:height*0.005

    },
    subjectbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.014,
        marginBottom: height * 0.012,

    },
    subject: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.03,
        color: DARKGRAY,
       

    },
    subjectConntainer:{
        backgroundColor: LIGHTGRAY3,
alignItems:"center",
justifyContent:"center",
borderRadius:width*0.015,
marginRight: width * 0.03,
width: width * 0.25,
height:height*0.035




    },
    coursetypebox: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        justifyContent:'space-between'

    },
    coursetype: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.03,
        color: DARKGRAY,
        lineHeight:height*0.02
        // width: width * 0.18,

    },
    explorebox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: orange,
        marginTop: height * 0.02,
        width: width * 0.38,
        height:height*0.04,
        justifyContent: 'space-evenly',
        paddingHorizontal: width * 0.01,
        borderRadius: width * 0.06,
    },
    exploretext: {
        color: WHITE,
        fontWeight:"600",
        // fontFamily: IsidoraSemiBold,
        fontSize: width * 0.034,
        

    },
    logocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // position: 'absolute',
        marginTop:height*0.02,
    },
    logobg: {
        backgroundColor: WHITE,
        height:  width * 0.02,
        width: width * 0.02 ,
        borderRadius: height * 0.015 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height:  width * 0.045,
        width: width * 0.045 ,
        resizeMode: 'contain',
    },
    heading: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: width * 0.027,
        marginLeft: width * 0.02,
    },
    outercircle:{
        height:width*0.07,
        width:width*0.07,
        borderRadius:width*0.07/2,
        backgroundColor:LIGHTGRAY3,
        marginTop:height*0.055,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:width*0.005
    }

})