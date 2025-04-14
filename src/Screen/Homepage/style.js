import {Dimensions, StyleSheet} from 'react-native';
import {
  IsidoraBold,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../values/Fonts';

import {
  BLACK,
  DARKGRAY,
  DARKRED,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  LIGHTPURPLE,
  orange,
  PURPLE,
  RED,
  WHITE,
} from '../../values/Colors';
import Button from '../../common/Button';
import {getScaled} from '../../values/Utility';
import {RFValue} from '../../values/Ratio';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  homecontainer: {
    // flex: 1,
    // backgroundColor: WHITE,
    // paddingHorizontal:0
  },
  subMainView: {
    marginTop: '2%',
  },
  title: {
    fontFamily: IsidoraBold,
    fontSize: 15,
  },

  upperimagecontainer: {
    // height: height * 0.3,
    // backgroundColor:"red"
    // paddingTop:height*0.01
    height: undefined,
    aspectRatio:16/9,
  },
  upperimagecontainerTab: {
    // height: height * 0.3,
    // backgroundColor:"yellow",
    marginTop:height*0.006,
    height: height/4.4,
    width:width,
    // marginHorizontal:width*0.01
    alignSelf:"center"
    // aspectRatio: 15 / 5.2, 
    
  },
  upperimagecontainerios:{
    height: undefined,
    aspectRatio:16/9,

  },
  upperimage: {
    
    resizeMode: 'contain',
    height: undefined,
    aspectRatio:16/9,
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: '1%',
    borderRadius: width * 0.03,
    // backgroundColor:"red"
  },
  upperBigimageTab: {
    resizeMode: 'cover',
    height: undefined,
    borderRadius:width* 0.03,
    aspectRatio: 16 / 5.4, 
    width: width/1.09,
    alignSelf: 'center',
    // marginTop:"1%",
    // backgroundColor:"red"
    // marginTop: height * 0.01,
  },
  upperimage1: {
    
    resizeMode: 'contain',
    height: height * 0.24,
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: '1.5%',
    borderRadius: width * 0.03,
    // backgroundColor:"red"
  },
  customStylesproduct: {
    marginHorizontal: width * 0.02,
    // width: width / 2.45,
  },
  customStylesproductTab: {
    marginLeft: width * 0.02,
    // width: width / 2.45,
  },
  imageCOntainer: {
    marginVertical: '1%',
    alignItems: 'center',
    paddingHorizontal: '4%',
    // paddingLeft:'5%'
  },
  uppertext: {
    marginVertical: '3%',
    // marginTop:"6%"
  },
  text: {
    fontFamily: IsidoraMedium,
    fontSize:isTablet?height * 0.014:height * 0.012,
    color: LIGHTGREYTEXT,
    letterSpacing: 0.5,
    marginTop: '1%',
    marginHorizontal: '4%',
    lineHeight: height * 0.018,
  },
  text2: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.028,
    color: '#6F757C',
    marginTop: '1.3%',
    marginHorizontal: '4%',
    lineHeight: isTablet?height * 0.02:height * 0.017,
  },
  text2Tab:{
    fontFamily: IsidoraMedium,
    fontSize: width * 0.024,
    paddingRight:'15%',
    color: '#6F757C',
    marginTop: '1.3%',
    marginHorizontal: '4%',
    lineHeight: isTablet?height * 0.02:height * 0.017,
  },
  HeadingText: {
    fontSize: width * 0.0535,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    marginHorizontal: '4%',
  },
  HeadingText2: {
    fontSize: width * 0.05,
    fontFamily: IsidoraSemiBold,
    color: orange,
  },
  categoryData: {
    flexDirection: 'row',
    width: width * 0.442,
    height: height * 0.051,
    borderRadius: 5,
    borderWidth: 1,
    // paddingVertical: '2%',
    marginVertical: '2%',
    borderColor: LIGHTGRAY2,
    backgroundColor: WHITE,
    alignItems: 'center',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  categoryDataTab: {
    // flexDirection: 'row',
    alignItems:'flex-start',
    width: width * 0.215,
    height: height * 0.098,
    borderRadius: width * 0.015,
    borderWidth: 1,
    // paddingVertical: '2%',
    marginBottom: '2%',
    marginLeft: '2%',
    // backgroundColor:"red",

    borderColor: LIGHTGRAY2,
    backgroundColor: WHITE,
    // alignItems: 'center',
    padding: isTablet?'2%':'1.5%',
    // justifyContent:"space-evenly",
  },
  categoryDataView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '2%',
    marginTop:"2%"
  },
  categoryDataViewTab: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingHorizontal: '2%',
    marginTop:"2%"
  },
  icon: {
    resizeMode: 'contain',
    height: height * 0.031,
    width: width * 0.08,
  },
  iconTab: {
    resizeMode: 'contain',
    height: height * 0.034,
    width: width * 0.05,
    // backgroundColor:"red"
  },
  categoryTextTab: {
    fontSize: width * 0.018,
    width: width / 6,
    fontFamily: IsidoraSemiBold,
    lineHeight: height * 0.016,
    color: LIGHTGREYTEXT,
    marginTop:height*0.01
    // backgroundColor:"red"
    // marginLeft: width * 0.025,
  },
  categoryText: {
    fontSize:isTablet?width * 0.030:width * 0.028,
    width: width / 4,
    fontFamily: IsidoraSemiBold,
    lineHeight: height * 0.0165,
    color: LIGHTGREYTEXT,
    // marginLeft: width * 0.025,
  },
  textViewMore: {
    fontSize: isTablet?width * 0.025:width * 0.033,
    color: '#000000',
    fontFamily: IsidoraMedium,
    marginBottom:"1.2%"
  },
  textViewMore1: {
    fontSize: isTablet?width * 0.025:width * 0.033,
    color: '#000000',
    fontFamily: IsidoraMedium,
    // marginBottom:"1.2%"
  },
  ViewMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4.5%',
    marginVertical: '4%',
    marginBottom: '7%',
  },
  IconView: {
    // marginTop: '1%',
    marginHorizontal: '2%',
  },
  Button: {
    borderWidth: 1,
    paddingVertical: isTablet?height * 0.01:height * 0.012,
    paddingHorizontal: isTablet?'3%':'5%',
    borderRadius: width * 0.05,
    // backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '6%',
    backgroundColor:WHITE
  },
  Buttontranding: {
    borderWidth: 1,
    width: isTablet?width * 0.32:width * 0.42,
    height: height * 0.046,
    // paddingHorizontal:'5%',
    borderRadius: width * 0.05,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '2%',
    paddingVertical:0

  },
  activeButtontranding: {
    borderWidth: 1,
    width: isTablet?width * 0.32:width * 0.42,

    height: height * 0.046,
    // paddingHorizontal:'5%',
    borderRadius: width * 0.05,
    backgroundColor: DARKRED,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '2%',
    paddingVertical:0

  },

  activeButton: {
    borderWidth: 1,
    paddingVertical: isTablet?height * 0.01:height * 0.012,

    paddingHorizontal: isTablet?'3%':'5%',

    borderRadius: width * 0.05,
    backgroundColor: DARKRED,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '6%',
  },
  activeButtonlatest: {
    borderWidth: 1,
    paddingVertical: height * 0.012,
    paddingHorizontal: '0%',
    borderRadius: width * 0.05,
    backgroundColor: DARKRED,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '4%',
  },
  Buttonlatest: {
    borderWidth: 1,
    paddingVertical: height * 0.012,
    // paddingHorizontal:'5.5%',
    paddingHorizontal: '0%',

    borderRadius: width * 0.05,
    // backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '4%',
  },
  Buttonpopular: {
    borderWidth: 1,
    paddingVertical: height * 0.014,
    paddingHorizontal: 0,

    borderRadius: width * 0.05,
    // backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: DARKRED,
    marginHorizontal: '6%',
  },
  ButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: isTablet?'3%':'6%',
    marginHorizontal: '3%',
  },
  buttonActiveText: {
    color: DARKRED,
    fontSize:isTablet? width * 0.025: width * 0.033,

    fontFamily: IsidoraSemiBold,
  },
  buttonText: {
    color: WHITE,
    fontSize:isTablet? width * 0.025: width * 0.033,
    fontFamily: IsidoraSemiBold,
  },
  BookContainer: {
    backgroundColor: '#ecebeb',
    marginTop: '1%',
  },
  viewAll: {
    // margin:'3%',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
  },
  viewAllText: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.025,
    marginRight: '2%',
    marginVertical: 20,
  },
  notificationContainer: {
    backgroundColor: RED,
    paddingVertical: '7%',
    paddingHorizontal: '4.2%',
    marginTop: '2%',
  },
  innerContainer: {
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: isTablet?width * 0.025:width * 0.04,
    paddingVertical: '3.5%',
    marginTop: '1%',
    paddingBottom: '4%',
    marginBottom: '5.5%',
  },
  directionrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  directionrow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2.5%',
    paddingHorizontal: 20,
  },
  directionrow2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: '0.5%',
  },
  notificationtext: {
    fontSize: isTablet?width * 0.033:width * 0.043,
    color: LIGHTGREYTEXT,
    width: isTablet?width / 2.5:width / 2,
    marginLeft: '4%',
    fontFamily: IsidoraSemiBold,
    lineHeight: height * 0.0261,
  },
  notificationtext1: {
    fontSize: isTablet?width * 0.033:width * 0.043,
    color: LIGHTGREYTEXT,
    width: width / 2,
    marginLeft: '2%',
    fontFamily: IsidoraSemiBold,
    lineHeight: isTablet?width * 0.04:width * 0.052,
  },
  innerLandscapeContainer: {
    // height: height*0.22,
    paddingBottom: '4.5%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    // marginTop: '3%',
    borderRadius:isTablet?width*0.02:10,
  },
  //android  
  // circleID: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop:"0.5%",
  //   borderRadius: width * 0.03,
  //   height: height * 0.02,
  //   width: height * 0.02,
  //   backgroundColor: LIGHTGRAY2,
  //   marginRight: '3%',
  //   alignSelf: "baseline",
  // },

  //ios 
  circleIDss:{
   backgroundColor:LIGHTGRAY2,
   height: height * 0.015,
   width: height * 0.015,
   borderRadius: width * 0.015,
   justifyContent: "flex-start",
   alignItems: 'center',
   alignSelf: "center",
   marginRight: '3%',

  },
  descriptiontext: {
    fontSize: isTablet?width * 0.025:width * 0.033,
    lineHeight: height * 0.02,
    width: width / 1.4,
    fontFamily: IsidoraSemiBold,
    color: GRAY,
    marginVertical:"1%"
  },
  descriptiontext2: {
    fontSize: isTablet?width * 0.018:width * 0.022,
    // lineHeight: 14,
    // width:width/1.4,
    marginVertical: '1.8%',
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
  },
  giftheadingView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: '4%',
    paddingHorizontal: '8%',
    marginTop: '4.5%',
  },
  giftheadingtext: {
    // fontSize: width*0.042,
    fontSize: isTablet?RFValue(11):RFValue(13),
    color: DARKGRAY,
    width: width / 2,
    marginLeft: '4%',
    fontFamily: IsidoraSemiBold,
    lineHeight:isTablet? height * 0.027: height * 0.0252,
    marginTop: '2%',
  },
  trophy: {
    resizeMode: 'contain',
    height: height * 0.05,
    width: width * 0.07,
    marginLeft:-width*0.01
  },
  gifttext: {
    fontSize: isTablet?width * 0.025:width * 0.03,
    // alignSelf:"center",
    marginHorizontal: '6.2%',
    lineHeight: height * 0.022,
    fontFamily: IsidoraSemiBold,
    color: GRAY,
    width: width / 1.6,
  },
  newslatter1: {
    backgroundColor: PURPLE,
    // height: height * 0.27,
    paddingHorizontal: '4.2%',
    paddingVertical: isTablet?'7%':'4.5%',

    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingRight:'10%',
    marginTop: '2%',
  },
  newslatter: {
    marginTop: isTablet?'1%':'10%',
    // backgroundColor: 'red',
  },

  newslattertext: {
    color: WHITE,
    fontFamily: IsidoraBold,
    fontSize: isTablet?width * 0.032:width * 0.039,
    lineHeight:isTablet?height * 0.026:height * 0.025,  
    width:isTablet?width / 1.7:width / 1.9,
    marginTop:isTablet?"5%":"2%"
  },
  newsletterImage: {
    resizeMode: 'contain',
    height:isTablet?width* 0.33:'95%',
    width:isTablet? width * 0.43: width * 0.5,
  },
  subscribebutton: {
    backgroundColor: orange,
    borderRadius: width * 0.056,
    width:isTablet? width / 4.5: width / 2.7,
    height:isTablet?height*0.037:height*0.045,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'flex-start',
    marginTop: isTablet?'8%':'6%',
    paddingRight:isTablet?"1%":"3%"
  },
  rightarrowimage: {
    resizeMode: 'contain',
    width:isTablet? width / 30: width / 12,
    height: isTablet?height / 70:height / 35,
    // backgroundColor:"red",
    alignSelf:"center",
    marginTop:isTablet?0:height*0.011
  },
  theJourney: {
    marginTop: '10%',
    color: DARKGRAY,
    fontSize: isTablet?width * 0.04:width * 0.045,
    fontFamily: IsidoraSemiBold,
    marginLeft: '4%',
  },
  theJourneyDescription: {
    color: GRAY,
    fontSize: isTablet?width * 0.021:width * 0.028,
    paddingRight:isTablet?'18%':0,
    fontFamily: IsidoraMedium,
    marginVertical: '2.2%',
    marginHorizontal: '4%',
    lineHeight: isTablet?height * 0.02:height * 0.018,
  },
  numbers: {
    fontFamily: IsidoraBold,
    color: orange,
    fontSize: width * 0.03,
    marginTop: '5%',
    alignSelf: 'center',
  },
  numberstext: {
    fontSize: width * 0.03,
    width: width / 6.2,
    alignSelf: 'center',
  },
  usercontainer: {
    width: width * 0.19,
    // paddingHorizontal:'1%',
    // width: width * 0.199,
    // marginHorizontal:width*0.001,
    // alignSelf:"center",
    // paddingHorizontal:'1%',
    alignItems: "center",
    // backgroundColor:"red"
    // justifyContent: 'flex-start',
    //  marginRight:"1%",
    // marginLeft:"-1%"
  },
  numbersview: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1.8%',
    // textAlign:"center"
  },
  sellerswiper: {
    height: height * 0.52,
    // width:width,
    backgroundColor: 'red',
    paddingHorizontal: '5%',
  },
  swiperontestseries: {
    // paddingRight:width*0.04,
    paddingHorizontal: "2.2%",
  },
  bellimage: {
    resizeMode: 'contain',
    height: height * 0.038,
    width: width * 0.06,
  },
  freemockimage: {
    resizeMode: 'contain',
    height: height * 0.04,
    width: width * 0.08,
    // backgroundColor:"red"
  },
  noOfuserbox: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:"space-around",
    marginBottom: '8%',
    marginTop:"2%",
    // backgroundColor:"red",

    // paddingVertical:1
    // paddingHorizontal:"1%"
    // alignSelf:'center'
  },
  usertext: {
    width:isTablet? width * 0.085:width * 0.15,
    fontFamily: IsidoraMedium,
    fontSize:isTablet?width * 0.02:width * 0.028,
    textAlign: 'center',
    color: "#6F757C",
    lineHeight: height * 0.017,
    // backgroundColor:"red"
  },
  usertext1: {
    // width: width * 0.16,
    fontFamily: IsidoraMedium,
    paddingHorizontal:isTablet?'10%':0,
    fontSize:isTablet?width * 0.022:width * 0.028,
    textAlign: 'center',
    color: "#6F757C",
    lineHeight: height * 0.017,
    // backgroundColor:"red"
  },
  numbertext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.04:width * 0.045,
    textAlign: 'center',
    color: orange,

  },

  subscribetext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.025:width * 0.033,
    color: WHITE,
    marginTop:"-1.5%"
  },
  reviwmodalbox2: {
    width: width / 1.05,
    height: height * 0.3,
  },
  tredingviedeocontainer: {
    paddingHorizontal: width*0.02,
    // marginHorizontal:20
    // marginHorizontal:'3%'
  },
  viewallBox: {
    // marginVertical:'4%',
    marginTop: '5%',
    marginBottom: '9%',
    // marginLeft: '5%',
  },
  viewallBox1: {
    marginTop: '5%',
    marginBottom: isTablet?'5%':'9%',
  },
});
export default styles;
