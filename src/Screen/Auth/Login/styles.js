import { Dimensions, StyleSheet, Platform } from 'react-native';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  RED,
  WHITE,
} from '../../../values/Colors';
import {
  IsidoraSemiBold,
  IsidoraMedium,
  IsidoraRegular,
} from '../../../values/Fonts';
import IntroSlider from '../../../common/IntroSlider';
import { RFValue } from '../../../values/Ratio';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: '3%',
    //  paddingVertical: '17%',
    justifyContent: 'center',
  },
  mainContainer1: {
    flexGrow: 1,
    height: height
    // paddingHorizontal: '3%',
    //  paddingVertical: '17%',
  },
  main: {
    backgroundColor: WHITE,
    borderRadius: 20,
    marginHorizontal: '4.2%',
    // padding: 20,
  },

  welcomeContainer: {
    // paddingBottom: '5%',
    // paddingTop:"1%"
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: width * 0.4,
    height: height * 0.045,
    marginVertical: '3%',
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
  IntroSlider: {
    // marginTop: '1.5%',
  },
  swiperContainer: {
    width: width * 0.9,
    height: width * 0.5,
    alignSelf: 'center',
    marginTop: '3%',
  },
  hi: {
    color: GRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    marginTop: '7%',
    alignSelf: 'center',
  },
  hiTab: {
    color: GRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.02,
    marginTop: '7%',
    marginLeft:'7%'
    // alignSelf: 'center',
  },
  welcome: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.053,
    alignSelf: 'center',
    marginTop: '1%',

  },
  welcomeTab: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.033,
    marginTop: '0.7%',
    paddingLeft:width*0.035

  },
  stepsIntro: {
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.04,
    marginTop: '3%',
    alignSelf: 'center',
  },
  stepsIntroTab: {
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    fontSize:width * 0.027,
    marginTop: '3%',
    paddingLeft:width*0.035

    // alignSelf: 'center',
  },
  steps: {
    color: GRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    lineHeight: width * 0.035,
    textAlign: 'center',
    width: width * 0.75,
    alignSelf: 'center',
    marginBottom: height * 0.01,
    textShadowColor: LIGHTGRAY2,
    textShadowOffset: { width: 0.5, height: 3 },
    textShadowRadius: 1,
    // elevation:1,
  },
  stepsTab: {
    color: GRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.019,
    lineHeight: width * 0.023,
    width: width * 0.48,
    marginBottom: height * 0.01,
    marginTop:"3%",
    paddingLeft:width*0.035

    // elevation:1,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: '0.5%',
    alignSelf: 'center',
  },
  numberContainerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:width*0.035

    // marginTop: '0.5%',
    // alignSelf: 'center',
  },
  countryCode: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.06,
    marginTop: "2%",

  },
  countryCodeTab: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.05,
    marginTop: "4%",

  },
  countryCodeText: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
  },
  countryCodeTextTab: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: "1.5%",
    marginBottom: "2.1%",
    
  },
  orContainerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: "3%",
    marginBottom: "4%",
    alignSelf:'center'

    // backgroundColor:"red"
  },
  line: {
    backgroundColor: "#757676",
    height: 1.2,
    width: width / 3.5,
  },
  lineTab: {
    backgroundColor: "#757676",
    height: 1.2,
    width: width / 7.5,
  },
  lineShadow: {
    width: width,
    height: width * 0.10 / 2,
    borderRadius: width * 0.35 / 2,
    alignSelf: 'center',
    elevation: 6,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  lineShadowTab: {
    width: width,
    height: width * 0.01,
    borderRadius: width * 0.35 / 2,
    alignSelf: 'center',
    position:'absolute',
    bottom:'10%',
    elevation: 6,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // backgroundColor:"red",
    marginRight:width*0.06
  },
  or: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    marginHorizontal: width * 0.04,
    fontSize: width * 0.045,
  },
  orTab: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    marginHorizontal: width * 0.04,
    fontSize: width * 0.03,
  },
  mobileInput: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: width * 0.04,
    marginLeft: '2.5%',

    width: '70%',
    fontFamily: IsidoraMedium,
    color: BLACK,
    fontSize: width * 0.033,
    height: height * 0.06,
    marginTop: "2%"

  },
  mobileInputTab: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: width * 0.02,
    marginLeft: '2.5%',
    width: '70%',
    fontFamily: IsidoraMedium,
    color: BLACK,
    fontSize: width * 0.024,
    height: height * 0.05,
    marginTop: "4%"

  },
  googleButton: {
    backgroundColor: LIGHTGRAY,
    width: width * 0.8,
    paddingVertical: 0,
    borderRadius: 5,
    borderColor: GRAY,
    borderWidth: 1,
    // justifyContent: 'center',
    alignSelf: 'center',
    height: height * 0.06,
    marginVertical: '2%',
  },
  googleButtonTab: {
    backgroundColor: LIGHTGRAY,
    width: width * 0.42,
    paddingVertical: 0,
    borderRadius: width * 0.01,
    borderColor: GRAY,
    borderWidth: 1,
    // justifyContent: 'center',
    // alignSelf: 'center',
    height: height * 0.045,
    marginVertical: '2%',
    marginLeft:width*0.035

  },
  alreadyContainer: {
    flexDirection: 'row',
    paddingVertical: '6%',
    paddingHorizontal: 10,
    shadowColor: BLACK,
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // marginTop: '5%',
    shadowOpacity: 0.2,
  },
  alreadyContainerTab: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    shadowColor: BLACK,
    position:'absolute',
    bottom:0,
    height:height*0.05,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: WHITE,
    width:'100%',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // marginTop: '5%',
    shadowOpacity: 0.2,
  },
  alreadyText: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    marginRight: 2,
    fontSize: width * 0.033
  },
  alreadyTextTab: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    // marginRight: 2,
    fontSize: width * 0.022,
    // marginTop:"4%"
  },
  LoginButtonText: {
    color: RED,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.033
  },
  LoginButtonTextTab: {
    color: RED,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.022,
    // marginTop:"4%"
  },
  getOTP: {
    backgroundColor: RED,
    width: width * 0.8,
    borderRadius: width * 0.070,
    justifyContent: 'center',
    alignSelf: 'center',
    height: height * 0.06,
    marginVertical: '3.5%',

    // paddingVertical:'4%'
  },
  getOTPTab: {
    backgroundColor: RED,
    width: width * 0.43,
    borderRadius: width * 0.070,
    justifyContent: 'center',
    // alignSelf: 'center',
    paddingVertical:'3.4%',
    marginBottom: '3.5%',
    marginTop:"6%",
    marginLeft:width*0.035
  },
  slide: {
    height: '53%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"orange"
  },



  // tablet design 

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
    alignSelf: "center",
    alignItems: "center",
  },
  IntroSliderstyle: {
    backgroundColor: WHITE,
    height: height / 1.78,
    width: width / 2.25,
    justifyContent: "center",
    padding: width * 0.011,
    paddingRight:0,
    // borderBottomLeftRadius: width * 0.08,
    // borderBottomStartRadius:width * 0.08,

  }
});




















