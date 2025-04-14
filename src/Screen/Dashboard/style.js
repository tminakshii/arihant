import { Dimensions, StyleSheet } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { DARKGRAY, GRAY, inputBordercolor, LIGHTBLUE2, LIGHTPURPLE, orange, WHITE } from "../../values/Colors";
import { IsidoraMedium, IsidoraSemiBold } from "../../values/Fonts";
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()




export const styles = StyleSheet.create({
    maincontainer: {
        flex:1
    },
    popularbookcontainer2: {
        // paddingLeft: width * 0.03,
        backgroundColor: LIGHTPURPLE,
        paddingBottom: height * 0.04,
        paddingTop: height * 0.03,
        // marginBottom:height*0.04
    },
    poplulartext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.04,
        color: DARKGRAY,
        marginLeft: width * 0.04,
        marginTop: height * 0.02,
        marginBottom: height * 0.01,
    },
    animationtext: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8%',
        paddingHorizontal: '5%',
        backgroundColor: WHITE,
    },
    heading: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet ? width * 0.025 : width * 0.048,
        // fontSize:19,
        textAlign: isTablet ? 'left' : 'center',
        lineHeight: isTablet ? height * 0.015 : height * 0.027,
        width: isTablet ? width / 2.5 : width / 1.2,
    },
    subHeading: {
        color: inputBordercolor,
        fontFamily: IsidoraMedium,
        fontSize: isTablet ? width * 0.02 : width * 0.033,
        // fontSize:13,
        textAlign: isTablet ? 'left' : 'center',

        lineHeight: isTablet ? height * 0.015 : height * 0.021,
        marginTop: isTablet ? '1.5%' : '3%',
        width: isTablet ? width * 0.4 : null
    },
    exploreimg: {
        resizeMode: "contain",
        height: height * 0.025,
        width: width * 0.15,
        alignSelf: "flex-start",
        marginTop: "5%"
        // backgroundColor:'red'
    },
    animationtextTab: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '8%',
        paddingHorizontal: '5%',
        backgroundColor: WHITE

    },
    headingArihant: {
        color: orange,
    },
    frequentlyContainer: {
        // backgroundColor:WHITE,
        marginTop: '-7%'
        // marginTop: '12%',
    },
    frequentlyText: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05,
        color: DARKGRAY,
        marginLeft: '5%',
    },
    //    frequentlysubText: {
    //       fontFamily: IsidoraMedium,
    //       fontSize: width * 0.03,
    //       color: GRAY,
    //       marginLeft: '5%',
    //       lineHeight: height * 0.02,
    //       width: width / 1.1,
    //       marginBottom: '1.5%',
    //     },
    viewallBox: {
        // marginVertical:'4%',
        marginTop: '5%',
        marginBottom: '10%',
    },
    solutioncontainer: {
        marginTop: height * 0.025,
        marginBottom: height * 0.03,
        paddingHorizontal: width * 0.02,
        shadowColor: GRAY, // Shadow color
        shadowOffset: { width: 0, height: 5 }, // Offset for shadow
        shadowOpacity: 0.3, // Opacity of shadow
    },
    RelatedBox: {
        // marginVertical:height*0.02
        marginBottom: height * 0.03,
        backgroundColor: LIGHTPURPLE,
        paddingVertical: '6%'
        // marginTop: height * 0.01
    },
    RelatedBox1: {
        // marginVertical:height*0.02
        marginBottom: height * 0.03,
        // backgroundColor:LIGHTPURPLE,
        paddingVertical: '6%'
        // marginTop: height * 0.01
    },
    relatedtext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05,
        color: DARKGRAY,
        marginLeft: width * 0.045,
    },
    testtext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.05,
        marginHorizontal: width * 0.045,
        marginBottom:'5%'
    },
    latestbox: {
        marginBottom: '5%',
        paddingHorizontal: width * 0.02,
    },
})