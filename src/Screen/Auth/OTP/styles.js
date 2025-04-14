import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  GreyText,
  inputBordercolor,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  LIGHTPURPLE,
  orange,
  RED,
  WHITE,
} from '../../../values/Colors';
import {
  IsidoraBlack,
  IsidoraBold,
  IsidoraLight,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
  MulishExtraBold,
  MulishRegular,
} from '../../../values/Fonts';
import IntroSlider from '../../../common/IntroSlider';
import { RFValue } from '../../../values/Ratio';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow:1,
    paddingHorizontal: '4.2%',

justifyContent:"center",


  },
  mainContainerTab: {
    flexGrow:1,
    // paddingHorizontal: '4.2%',

justifyContent:"center",


  },
  mainContainer1:{
flexGrow:1

  },
  main: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    // alignSelf:"center"
    // marginHorizontal: '5%',
    // height:height*0.5,
    // marginTop:'4%'
    // marginVertical:height*0.05
    // marginBottom:100
// marginVertical:"10%",
// justifyContent:'center'


  },
  welcomeContainer: {
    paddingVertical: '3%',
    // marginBottom:'2%'
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom:'3%',
    width: width * 0.4,
    height:height*0.045,
  },
  IntroSlider:{
    // height:height*0.05
  },
  almostDone: {
    color: GreyText,
    fontFamily: IsidoraMedium,
    letterSpacing: 0.1,
    fontSize: width*0.032,
    marginTop: '6%',
    textAlign: 'center',
  },
  almostDoneTab: {
    color: GreyText,
    fontFamily: IsidoraMedium,
    letterSpacing: 0.1,
    fontSize: width*0.025,
    marginTop: Platform.OS=="android"?'14%':'10%',
    marginBottom: '1%',

    marginLeft:width*0.035

  },
  verifyNumTab: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.035,
    marginBottom:"3%",
    width:width*0.3,
    marginLeft:width*0.035,
    lineHeight:height*0.027,
    // backgroundColor:"red"
  },
  verifyNum: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.049,
    textAlign: 'center',
    marginBottom:"3%"
  },
  otpTextContainer: {
    flexDirection: 'row',
    // paddingVertical: width*0.03,
    paddingHorizontal: width*0.02,
    backgroundColor: LIGHTGRAY2,
    alignItems: 'center',
    borderRadius: 5,
    width:width*0.78,
    height:width*0.14,
    alignSelf:"center",
    // marginHorizontal: '7%',
  },
  otpTextContainerTab: {
    flexDirection: 'row',
    // paddingVertical: width*0.03,
    // paddingHorizontal: width*0.01,
    backgroundColor: LIGHTGRAY2,
    alignItems: 'center',
    borderRadius: width * 0.01,
    width:width*0.44,
    height:width*0.1,
    marginLeft:width*0.035,
    marginTop:"4%"

    // alignSelf:"center"
    // marginHorizontal: '7%',
  },
  otpTextTab: {
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.02,
    color: "#6E757D",
    width: width *0.34,
    letterSpacing: 0.01,
    marginLeft: '3%',
    lineHeight: height*0.019,
  },
  otpimageTab:{
    resizeMode:'contain',
    height:height*0.035,
    width:width*0.085
  },
  otpText: {
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.033,
    color: "#6E757D",
    width: width / 1.51,
    letterSpacing: 0.01,
    marginLeft: '3%',
    lineHeight: height*0.019,
  },
  otpimage:{
    resizeMode:'contain',
    height:height*0.039,
    width:width*0.09
  },
  otpContainer: {
    marginTop: '6%',
    width:width/1.30,
   alignSelf:"center",
  //  backgroundColor:"red"
  },
  otpContainerTab: {
    marginTop: '6%',
    width:width/2.29,
    marginLeft:width* 0.01,
   alignSelf:"center"
  },
  pinCodeContainerTab:{
borderRadius:width*0.007,
width:height*0.053,
height:height*0.06,
borderColor:inputBordercolor

  },
  pinCodeContainer:{
    borderRadius:width*0.01,
    width:width*0.135,
    height:height*0.07,
    borderColor:inputBordercolor
    
      },
  pinCodeText:{
    color:BLACK
  },
  activePinCodeContainer:{

borderColor:DARKGRAY
  },
  focusStick:{
    borderColor:DARKGRAY,
    tintColor:DARKGRAY,
  },
  textInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    height: height / 12,
    width: width / 6.9,
    alignSelf: 'center',
    marginLeft: '7%',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '8%',
    marginVertical:'4%'
  },
  resendContainerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:width*0.035,
    marginVertical:'4%'
  },
  resendText: {
    fontSize:width*0.033,
    color: GRAY,
    fontFamily: IsidoraMedium,
  },
  resendTextTab: {
    fontSize:width*0.023,
    color: GRAY,
    fontFamily: IsidoraMedium,
  },
  resendButtonText: {
    color: "#DE4031",
    fontFamily: IsidoraSemiBold,
    fontSize:width*0.033,
    letterSpacing: 0.6,
    marginLeft: width*0.006,
  },
  resendButtonTextTab: {
    color: "#DE4031",
    fontFamily: IsidoraSemiBold,
    fontSize:width*0.025,
    letterSpacing: 0.6,
    marginLeft: width*0.006,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginHorizontal: '3%',
    marginTop: '6%',
    // marginBottom:'10%'
  },
  buttonContainerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    marginTop:"9.4%",
    marginLeft:'2%'
    // marginBottom:"1.4%"
    // marginHorizontal: '3%',
    // marginTop: '6%',
    // marginBottom:'10%'
  },
  lineShadow:{
      width:width,
      height:width*0.10,
      borderRadius:width*0.35/2,
      // alignSelf: 'center',
      elevation: 6,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      marginTop: '1%',
  },
  lineShadowTab:{
    width: width,
    height: width * 0.02,
    borderRadius: width * 0.35 / 2,
    alignSelf: 'center',
    elevation: 6,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // backgroundColor:"red",
    marginRight:width*0.06
},
  backButton: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderRadius: width*0.05,
    width: width / 2.75,
    height: height / 20,
    borderColor:GRAY,
    justifyContent:"center",
    alignItems:'center',
    paddingRight:'12%'  ,
    paddingVertical:0
    },
    backButtonTab: {
      backgroundColor: WHITE,
      borderWidth: 1,
      borderRadius: width*0.05,
      width: width / 5,
      height: width * 0.069,
      borderColor:GRAY,
      justifyContent:"center",
      alignItems:'center',
      paddingRight:'12%'  ,
      paddingVertical:0
      },
      backButton2Tab: {
        backgroundColor: RED,
        borderRadius: width*0.05,
        width: width / 5,
        height:width * 0.069,
        borderWidth: 1,
        borderColor:RED,
        justifyContent: 'center',
        padding:0
      },
  backButton2: {
    backgroundColor: RED,
    borderRadius: width*0.05,
    width: width / 2.75,
    height: height / 20,
    borderWidth: 1,
    justifyContent: 'center',
    padding:0
  },
  iconStyleTab:{
    // marginHorizontal:"5%"
    height:height*0.013,
    width:width*0.03,
    marginRight:width*0.02,
    marginLeft:0,
    tintColor:DARKGRAY
    
      },
  iconStyle:{
// marginHorizontal:"5%"
height:height*0.015,
width:width*0.04,
marginRight:width*0.02,
marginLeft:0,
tintColor:BLACK

  },
  alreadyContainerTab: {
    flexDirection: 'row',
    paddingTop: '12%',
    paddingBottom: '5%',
    paddingHorizontal: 10,
    shadowColor: BLACK,
    elevation: 15,
    justifyContent: 'center',
    backgroundColor: WHITE,
    width:'100%',
  // right:0,
    // marginTop: '5%',
    shadowOpacity: 0.2,
  },
  alreadyContainer: {
    flexDirection: 'row',
    paddingTop: '12%',
    paddingBottom: '5%',
    paddingHorizontal: 10,
    shadowColor: BLACK,
    elevation: 15,
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // marginTop: '5%',
    shadowOpacity: 0.2,
  },
  middleContainer: {
    flexDirection: "row",
    // borderWidth:1,
    marginHorizontal: "2.6%",

    backgroundColor:WHITE,
    // width:width*0.09,
    // height:height/1.4,
    borderRadius:width*0.02,
    borderBottomLeftRadius: width * 0.08,

    overflow:"hidden"
  },

  mainTab: {
    // backgroundColor: WHITE,
    // borderRadius: 20,
    // marginHorizontal: '4.2%', 
  },
  IntroSliderTab: {
    flexDirection: "row",
    // marginHorizontal:"4%",
    alignSelf: "center",
    alignItems: "center",
    // overflow:"hidden",
    // backgroundColor:"blue",
// overflow:"hidden",
    // width:width
  },
  IntroSliderstyle: {
    backgroundColor: WHITE,
    height: height / 1.78,
    width: width / 2.25,
    justifyContent: "center",
    padding: width * 0.011,
    paddingRight:0,

  },
  logoTab: {
    resizeMode: 'contain',
    // alignSelf: 'center',
    width: width * 0.209,
    height: height * 0.036,
    marginTop: height*0.03,
    marginLeft:'7%'
    // backgroundColor:"red"
  },
});