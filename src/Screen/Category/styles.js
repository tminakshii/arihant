import { Dimensions, StyleSheet } from 'react-native';
import {
  BACKGROUNDLIGHTGRAY,
  BLACK,
  DARKGRAY,
  DARKRED,
  GRAY,
  inputBordercolor,
  LIGHTBLUE,
  LIGHTBLUE2,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTGREYTEXT,
  LIGHTPURPLE,
  LIGHTPURPLE2,
  LIGHTPURPLE3,
  orange,
  PURPLE,
  RED,
  WHITE,
} from '../../values/Colors';
import {
  IsidoraBold,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../values/Fonts';
import { green, red } from 'react-native-reanimated/lib/typescript/Colors';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()

// console.log(width, height)
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "red"
  },
  headerImage: {
    width: width,
    resizeMode: 'contain',
  },
  Home: {
    marginLeft: width * 0.04,
    marginTop: '2.5%',
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: isTablet ? width * 0.025 : width * 0.03,
  },
  other: {
    fontFamily: IsidoraMedium,
    color: LIGHTGREYTEXT,
    fontSize: isTablet ? width * 0.025 : width * 0.03,

  },
  Jee: {
    marginLeft: width * 0.04,
    marginTop: isTablet ? '5%' : '7%',
    fontSize: isTablet ? width * 0.035 : width * 0.04,

    fontFamily: IsidoraSemiBold,
    color: BLACK,
  },

  marquee: {
    backgroundColor: WHITE,
    paddingVertical: isTablet ? height * 0.005 : height * 0.01,
    shadowColor: GRAY,
    width: width,
    marginVertical: isTablet ? 0 : "4%",
    marginTop: isTablet ? "2%" : "6%",
  },
  marqueeContainer: {
    flexDirection: 'row',
  },
  Mainmarquee: {
    marginTop: '3%',
  },
  marqueeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '1.5%',
    paddingVertical: '0.2%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollText: {
    color: DARKGRAY,
    fontSize: isTablet ? width * 0.02 : width * 0.03,
    fontFamily: IsidoraMedium,
    marginLeft: 5,
  },
  categoryIcon: {
    width: isTablet?width*0.035:30,
    height: isTablet?width*0.035:30,
    resizeMode: 'contain',
    marginTop: isTablet ? height * 0.01 : null,
  },
  filtermodal: {
    justifyContent: 'flex-end',
    // backgroundColor:'red'
  },
  filterclose: {
    paddingVertical: '3%',
    marginHorizontal: '10%',
    // paddingTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  // filtercontainer: {
  //     // paddingHorizontal: '4%',
  //     borderTopWidth: 1,
  //     borderTopColor: LIGHTGRAY2,
  //     // alignSelf:"center"
  // },
  filtercategorybox: {
    // width:width*0.38,
    //    backgroundColor:'blue'
  },
  // modalcross: {
  //     backgroundColor: RED,
  //     height:height*0.04,
  //     width:height*0.04
  // },
  upperBigimage: {
    resizeMode: 'contain',
    height: undefined,
    aspectRatio: 16 / 8.2,
    width: width,
    alignSelf: 'center',
    marginTop: "0%",
    // backgroundColor:"red"
    // marginTop: height * 0.01,
  },
  upperBigimageTab: {
    resizeMode: 'contain',
    height: undefined,
    aspectRatio: 16 / 5.4,
    width: width,
    alignSelf: 'center',
    marginTop: "0%",
    // backgroundColor:"red"
    // marginTop: height * 0.01,
  },
  applybutton: {
    backgroundColor: orange,

    alignItems: 'center',
    justifyContent: 'center',
    width: isTablet ? width / 2.8 : width / 1.4,
    alignSelf: 'center',
    borderRadius: isTablet ? 100 : 25,
    marginBottom: 0,
    marginTop: isTablet ? height * 0.025 : height * 0.05,
    // bottom: height * 0.09,
    paddingVertical: isTablet ? '1.7%' : '3.5%',
    // position:"relative",
    // zIndex:1,
    // bottom:0
  },
  applybuttontext: {
    fontFamily: IsidoraSemiBold,
    color: WHITE,
    fontSize:isTablet?width * 0.023:width * 0.04,
  },
  filtermodalbox: {
    width: width,
    height: height / 1.15,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  mainfiltercontainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: isTablet ? width * 0.04 : width * 0.06,
    borderTopRightRadius: isTablet ? width * 0.04 : width * 0.06,
    // flex: 1,
    // borderRadius:30,

    backgroundColor: WHITE
  },
  mainfiltercontainer2: {
    // justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0,0,0,0.6)',
    // alignItems: 'center',
    // position: "absolute",
    // bottom: 0,
    borderTopLeftRadius: isTablet ? width * 0.04 : width * 0.06,
    borderTopRightRadius: isTablet ? width * 0.04 : width * 0.06,
    // flex: 1,
    // borderRadius:30,

    backgroundColor: WHITE
  },
  innerfiltermodal: {
    backgroundColor: WHITE,
    width: width,
    // borderRadius:30,
    borderTopLeftRadius: isTablet ? width * 0.2 : width * 0.06,
    borderTopRightRadius: width * 0.06,
    paddingVertical: isTablet ? height * 0.015 : height * 0.02,
    // paddingBottom: height * 0.09,

    // height:height*0.8,
    // bottom:0,
    // position:"absolute"
    // paddingHorizontal: width * 0.05
  },
  headerfilbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: LIGHTGRAY2,
    paddingBottom: isTablet ? height * 0.02 : height * 0.02,
    paddingTop: isTablet ? height * 0.01 :null,

    marginHorizontal: width * 0.05,
    // backgroundColor:"red"
  },
  animationtextTab: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '8%',
    paddingHorizontal: '5%',
    width:isTablet?'55%':null,
    backgroundColor:WHITE
},
filterheadtext: {
  fontFamily: IsidoraSemiBold,
  color: DARKGRAY,
  fontSize: isTablet ? width * 0.03 : width * 0.045,
},
crossfilter: {
  height: isTablet ? width * 0.04 : width * 0.068,
  width: isTablet ? width * 0.04 : width * 0.068,
  borderRadius: (width * 0.068) / 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: RED,
},
filterinner1: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  // backgroundColor:"red"
},
line1f: {
  // width: '104%',
  width: width / 1.1,
  height: height * 0.001,
  left: width * 0.05,
  backgroundColor: LIGHTGRAY2,
  position: 'absolute',
  bottom: isTablet ? height * 0.11 : height * 0.13,
},

optionFbox: {
  flexDirection: 'row',
  alignItems: 'center',
  width: width * 0.38,
  marginBottom: height * 0.01,
  marginTop: isTablet ? height * 0.003 : height * 0.005,
},
titleF: {
  fontFamily: IsidoraSemiBold,
  color: DARKGRAY,
  fontSize: isTablet ? width * 0.022 : width * 0.038,
  marginBottom: isTablet ? height * 0.01 : height * 0.018,
  // marginTop:"5%"
},
optonF: {
  fontFamily: IsidoraMedium,
  color: DARKGRAY,
  fontSize: isTablet ? width * 0.022 : width * 0.038,
  marginLeft: width * 0.025,
},
categoryname: {
  // width: width / 2.25,
  // marginVertical: "2%",
  // marginTop: '12%',
  fontFamily: IsidoraSemiBold,
  color: DARKGRAY,
  fontSize: width * 0.035,
  // marginTop:he,
  paddingTop: height * 0.015,
  marginTop: height * 0.015,
  paddingBottom: height * 0.007,
  // marginHorizontal:"5%"
  // paddingLeft:"5%",
  // backgroundColor:"red",
},
  optionbox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 2,
    paddingVertical: '1.5%',
    paddingHorizontal: '12%',

    // backgroundColor:"gray"
  },

  optionname: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: width * 0.035,
    marginLeft: '5%',
    lineHeight: height * 0.019,
  },
  categorylist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    marginVertical: isTablet ? '3%' : '4%',
    marginHorizontal: width * 0.007,
    // paddingHorizontal:width*0.01,
    // paddingHorizontal:width*0.025
  },
  categoryButton: {
    width: isTablet ? width / 6.3 : width / 3.9,
    height: isTablet ? height * 0.075 : height * 0.1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: width * 0.03,
    paddingVertical: '2%',
    paddingHorizontal: '1.3%',
    borderRadius: 7,
    backgroundColor: WHITE,
  },
  bookListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginBottom: '5%',
    marginLeft: '2.5%',
    // marginTop: '8%',
  },
  listContent: {
    paddingVertical: height * 0.03,
  },
  listContent2: {
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.005
  },
  doubtsolvingviewRow: {
    marginHorizontal: '3.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  newdoubt: {
    backgroundColor: RED,
    paddingHorizontal: '5%',
    paddingVertical: '1.5%',
    borderRadius: width * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  newdoubttext: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.035,
  },
  allsubject: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: width * 0.05,
    backgroundColor: ' rgba(230, 222, 226, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',

    flexDirection: 'row',
    width: width * 0.38,
  },
  allsubjecttext: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.035,
  },
  subjectCategory: {

    marginHorizontal: width * 0.02,

    borderColor: GRAY,

  },
  chaptertestConatainer: {
    // flexDirection: "row",
    borderWidth: 0.5,
    paddingVertical: '3%',
    paddingRight: '5%',
    marginHorizontal: '3.3%',
    borderRadius: 5,
    borderColor: GRAY,
    // marginTop:"5%"
    // Make sure to set a width if necessary
    // minWidth: '100%',
  },
  subjectName: {
    // marginHorizontal: "2%",
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    marginHorizontal: width * 0.02,
    marginVertical: width * 0.02,
    backgroundColor: WHITE,

    borderWidth: 0.7,
    paddingVertical: height * 0.014,
    // paddingHorizontal: height * 0.025,
    fontSize: width * 0.028,
    borderRadius: width * 0.015,
    width: width * 0.28,
    textAlign: 'center',
  },
  subjectName2: {
    // marginHorizontal: "2%",
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    marginHorizontal: 5,
    // borderWidth:.5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: width * 0.03,
  },
  chaptertestview: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    // marginHorizontal: "2%",
    fontFamily: IsidoraSemiBold,
    color: orange,
    fontSize: width * 0.03,
  },
  categoryText: {
    textAlign: 'left',
    fontSize: isTablet?width * 0.018:width * 0.028,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    width: isTablet?width * 0.13:width * 0.2,
    // height: 30,
    marginTop: isTablet?"7.5%":"5%",
    lineHeight:isTablet? height * 0.0123: height * 0.016,
    height: height * 0.035,
    // backgroundColor:'red'
  },
  upcomingTitle: {
    width:isTablet?width * 0.25:width * 0.416,
    height:isTablet?height * 0.045:height * 0.042,
    alignItems:'center',
    justifyContent:'center',
    // paddingVertical: '2.3%',
    // paddingHorizontal: '4%',
    marginLeft: width * 0.042,
    backgroundColor: RED,
    borderRadius: width * 0.05,
    alignItems: 'center',
    marginBottom: isTablet?'0%':'2%',
  },
  upcomingText: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet? width * 0.023: width * 0.035,
  },
  upcomingMainContainer: {
    marginBottom: '3%',
    marginTop:isTablet?0:'3%'
    // marginRight: width * 0.02
  },
  upcomingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '5%',
  },
  viewAll: {
    flexDirection: 'row',
    bottom: '2%',
    marginLeft: '4%',
  },
  viewAllText: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.02,
    marginRight: 5,
  },
  testseriesMainContainer: {
    marginTop: '8%',
    backgroundColor: '#EEEAEC',

    paddingVertical: '6%',
    // paddingRight: width * 0.02
  },
  testseriesTitle: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    marginLeft: '5%',
    marginBottom: '5%',
  },
  latestbox: {
    marginBottom: '5%',
    paddingHorizontal: width * 0.02,
  },
  upcomingbookScroll: {
    alignSelf: 'center',
    paddingHorizontal: '2.2%',
    marginVertical: '3%',
  },
  ourexpertTitle: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet ? width * 0.03 : width * 0.04,
    // marginLeft: '-0.3%',
    marginLeft: "5%",
    marginBottom: '5%',
  },
  ourexpertcontainer: {
    marginTop: '10%',
    marginHorizontal: 0
  },
  expertsScroll: {
    alignSelf: 'center',
    flexDirection: 'row',
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
  exploreimg:{
    resizeMode:"contain",
    height:height*0.038,
    width:width*0.20,
    alignSelf:"flex-start",
    marginTop:"5%"
    // backgroundColor:'red'
  },
  subHeading: {
    color: inputBordercolor,
    fontFamily: IsidoraMedium,
    fontSize:isTablet?width * 0.018:width * 0.033,
    // fontSize:13,
    textAlign: isTablet ? 'left' : 'center',

    lineHeight: isTablet?height * 0.014:height * 0.021,
    marginTop:isTablet? '1.5%': '3%',
    width:isTablet?width * 0.42:null
  },
  bannerstyle: {
    width: isTablet?width / 20:width / 1.1,
    alignSelf: 'center',
    borderRadius: isTablet ? width * 0.01 : width * 0.03,
    marginBottom: '5%',
    height: isTablet?height*0.095:undefined,
    aspectRatio:17/5.4,
    resizeMode: 'contain',
    // backgroundColor:"red"
  },
  newslatter1: {
    backgroundColor: PURPLE,
    height: height * 0.3,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingRight:'10%',
    marginTop: '7%',
  },
  newslatter: {
    marginTop: '10%',
  },

  subscribetext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.037,
    color: WHITE,
  },
  newslattertext: {
    color: WHITE,
    fontFamily: IsidoraBold,
    fontSize: width * 0.037,
    lineHeight: height * 0.023,
    width: width / 1.9,
    marginLeft: '4%',
  },
  newsletterImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '40%',
  },
  subscribebutton: {
    backgroundColor: orange,
    borderRadius: 20,
    width: width / 2.7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: '6%',
    height: height * 0.046,
    marginLeft: "5%"
  },
  rightarrowimage: {
    resizeMode: 'contain',
    width: width / 12,
    height: height / 35,
    // backgroundColor:"red",
    alignSelf: "center",
    marginTop: height * 0.011
  },
  headingArihant: {
    color: orange,
    lineHeight: isTablet ? height * 0.02 : height * 0.03,
  },
  animationtext: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
    paddingHorizontal: '5%',
    backgroundColor: WHITE,
  },
  live: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.047,
    // fontSize:17,
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '1%',
  },
  liveclasses2container: {
    marginVertical: height * 0.03,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
  },
  liveclasses2container2: {
    marginVertical: height * 0.05,
  },
  wonderful: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.036,
    marginHorizontal: '5%',
    marginBottom: '3%',
    lineHeight: height * 0.022,
  },
  wonderful2: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.028,
    marginHorizontal: '5%',
    marginBottom: '6%',
    lineHeight: height * 0.018,
  },
  backarrow: {
    position: 'absolute',
    marginLeft: '0%',
    left: 0,
    zIndex: 999,
    backgroundColor: WHITE,
    height: height * 0.03,
    width: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: BLACK,
    shadowOpacity: 0.2
  },
  nextarrow: {
    position: 'absolute',
    right: 0,
    // top: '43%',
    backgroundColor: WHITE,
    height: height * 0.03,
    width: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0%',
    elevation: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: BLACK,
    shadowOpacity: 0.2
  },
  JeeHeading: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.047,
    color: BLACK,
    // marginLeft:width*0.005
    // marginVertical:"4%"
    // marginBottom: "5%"
  },
  Jeesubheading: {
    fontFamily: IsidoraRegular,
    fontSize: width / 33,
    // fontSize:11,
    marginBottom: '7%',
    color: GRAY,
    width: width * 0.65,
    lineHeight: height * 0.018,
    marginLeft: width * 0.007,
  },
  topmentortext: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.045,
    color: BLACK,
    marginLeft: '4%',
  },
  topmentortext3: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.052,
    // fontSize:19,
    color: BLACK,
    marginLeft: '4%',
  },
  topmentortext5: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.052,
    // fontSize:19,
    color: BLACK,
    marginLeft: '3%',
  },
  topmentortext4: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.052,
    // fontSize:19,
    color: BLACK,
    marginLeft: '2%',
  },
  bestsellertext: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.052,
    // fontSize:19,
    color: BLACK,
    marginLeft: '4%',
  },
  topmentortext2: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.045,
    color: BLACK,
    marginLeft: '4%',
    marginTop: '5%',
  },
  strptext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.029,
    color: GRAY,
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '6%',
  },
  strptext2: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.029,
    color: GRAY,
    marginLeft: '3%',
    marginTop: '1%',
    marginBottom: '7%',
  },
  populartext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.045,
    color: DARKGRAY,
    marginLeft: '5%',
  },
  populartext1: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.052,
    color: DARKGRAY,
    marginLeft: '4%',
  },
  accesspoptext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.028,
    color: GRAY,
    marginLeft: '4%',
    marginTop: '2%',
    marginBottom: '3%',
    lineHeight: height * 0.018,
  },
  mentorscroll: {
    flexDirection: 'row',
    alignSelf: 'center',
    // paddingHorizontal:width*0.02
  },
  mentorscroll2: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: width * 0.025
  },
  mentorbutton: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'center',
    // bottom: "40%"
  },
  mentorbutton2: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'center',
    // backgroundColor:LIGHTPURPLE,

    // bottom: "40%"
  },
  Mentorbox: {
    // marginHorizontal: width * 0.01,
    // backgroundColor:LIGHTPURPLE,
    paddingVertical: '5%',
    paddingTop: '10%',
  },
  Mentorbox2: {
    marginHorizontal: width * 0.025,
    backgroundColor: LIGHTPURPLE,
    paddingVertical: '5%',
    marginTop: '15%',
    marginHorizontal: 0,
    paddingHorizontal: '2%',
  },
  backarrowmentor: {
    backgroundColor: WHITE,
    height: height / 20,
    width: height / 35,
    borderRadius: height * 0.005,
    elevation: 5,
    marginLeft: -width * 0.005,

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    // left: "-4%"
  },
  backarrowmentor1: {
    backgroundColor: WHITE,
    height: height / 20,
    width: height / 35,
    borderRadius: height * 0.005,
    elevation: 5,
    marginLeft: width * 0.018,

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    // left: "-4%"
  },
  nextarrowmentor: {
    backgroundColor: WHITE,
    height: height / 20,
    width: height / 35,
    borderRadius: height * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    right: 0,
    elevation: 5,
    marginRight: -width * 0.005,

    // right: "-4%"
  },
  nextarrowmentor1: {
    backgroundColor: WHITE,
    height: height / 20,
    width: height / 35,
    borderRadius: height * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    right: 0,
    elevation: 5,
    marginRight: width * 0.018,

    // right: "-4%"
  },
  bestsellerscroll: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.02,
  },
  bestbox: {
    // marginHorizontal: width * 0.03,
    marginTop: height * 0.03,
  },
  bestbox2: {
    marginHorizontal: width * 0.03,
    // marginTop: height * 0.03
  },
  discovertext1: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    marginLeft: '4%',
    marginTop: '2%',
    marginBottom: '1%',
    width: width / 1.15,
    lineHeight: width * 0.03,
    marginBottom: '7%',
  },
  bestsellerlowertext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    marginLeft: '4%',
    marginTop: '2%',
    marginBottom: '1%',
    width: width / 1.15,
    lineHeight: width * 0.033,
    marginBottom: '7%',
  },
  discovertext3: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    marginLeft: '2%',
    marginTop: '2%',
    marginBottom: '1%',
    width: width / 1.15,
    lineHeight: width * 0.03,
    marginBottom: '7%',
  },
  bestsellertext2: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    marginLeft: '4%',
    marginTop: '2%',
    marginBottom: '1%',
    width: width / 1.15,
    lineHeight: width * 0.035,
    marginBottom: '7%',
  },
  discovertext2: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.025,
    color: GRAY,
    marginLeft: '2%',

    marginBottom: '5%',
  },
  successbox: {
    backgroundColor: PURPLE,
    // background: rgba(204, 185, 196, 1);

    paddingTop: height * 0.04,
    paddingBottom: height * 0.02,

    marginTop: height * 0.025,
  },
  attbox: {
    // marginBottom: '5%',
    marginBottom: height * 0.04,
    // backgroundColor:'red'
    // backgroundColor: WHITE
  },
  successinnerbox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    //    marginTop:height*0.01
  },
  successtext: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.05,
    marginLeft: width * 0.05,
  },

  successbackarrow: {
    position: 'absolute',
    top: '50%',
    left: width * 0.03,
    zIndex: 999,
    marginLeft: width * 0.005,
  },
  successcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  successfwdarrow: {
    position: 'absolute',
    right: width * 0.03,
    top: '50%',
    marginRight: width * 0.005,
  },
  ourexpertbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: isTablet ? "6%" : "4%",
    // backgroundColor:"red"
  },
  freeattempttext: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: width * 0.05,
    marginLeft: width * 0.04,
  },
  wonderfultext: {
    color: GRAY,
    fontSize: width * 0.03,
    marginLeft: width * 0.04,
    fontFamily: IsidoraRegular,
    lineHeight: height * 0.018,
    marginTop: height * 0.01,
    width: width * 0.65,
  },
  attemptfreebox: {
    // marginVertical: height * 0.03,
    marginBottom: height * 0.01,
  },
  Freequizbox: {
    backgroundColor: LIGHTPURPLE,
    // marginTop: height * 0.06,
    paddingVertical: height * 0.05,

    // paddingHorizontal:width*0.0005,
    // zIndex:999,
    // position:'absolute'
  },
  Attemptext: {
    fontSize: width * 0.05,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    marginLeft: width * 0.04,
  },
  attHeading: {
    fontSize: width * 0.05,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    marginLeft: width * 0.04,
  },
  freetext: {
    color: orange,
  },
  wondertext: {
    fontFamily: IsidoraRegular,
    fontSize: width * 0.032,
    color: GRAY,
    marginHorizontal: width * 0.04,
    lineHeight: height * 0.02,
    marginTop: height * 0.015,
    marginBottom: height * 0.02,
  },
  viewmorebox: {
    marginVertical: "4%",
    marginBottom: "12%"
  },
  livefreequizelist: {
    flexDirection: 'row',
    // alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: width * 0.02,
    // marginHorizontal:width*0.02,
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    // shadowRadius:4,
  },
  pyqtitle: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    color: BLACK,
  },
  innerfreetext: {
    color: orange,
  },
  wondertext2: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.034,
    lineHeight: height * 0.018,
    marginBottom: height * 0.04,
    marginTop: height * 0.01
  },
  pyqhedingcontainer: {
    marginHorizontal: width * 0.023,
  },
  freelivequizcardmaincontainer: {
    marginTop: '5%',
  },
  upbookbox: {
    // paddingHorizontal: width * 0.03,
    // backgroundColor:"red"
  },
  testOfonlinebox: {
    // paddingRight: width * 0.03
  },
  testOfonlinebox2: {
    // paddingRight: width * 0.03,
    marginBottom: '5%',
  },
  testtext: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.05,
    marginHorizontal: width * 0.05,
  },
  popularcontainer: {
    marginBottom: height * 0.05,
  },
  popularcontainer2: {
    marginBottom: height * 0.05,
    marginTop: '8%',
  },
  undertest: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.028,
    lineHeight: height * 0.018,
    marginLeft: width * 0.05,
    marginBottom: height * 0.03,
  },
  onlinepurplebox: {
    backgroundColor: LIGHTPURPLE,
    paddingTop: height * 0.03,
    marginTop: height * 0.02,
  },
  letestonlinebox: {
    // paddingRight: width * 0.05,
    marginVertical: height * 0.06,
  },
  relatedtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    color: DARKGRAY,
    marginLeft: width * 0.045,
  },
  RelatedBox: {
    // marginVertical:height*0.02
    marginBottom: height * 0.03,
    // marginTop: height * 0.01
  },
  solutioncontainer: {
    marginTop: height * 0.025,
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.02,
    shadowColor: GRAY, // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Offset for shadow
    shadowOpacity: 0.3, // Opacity of shadow
  },
  solutioncardbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.03,
    marginTop: height * 0.01,
    marginBottom: height * 0.05,
  },
  pathfinderbox: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginVertical: height * 0.06,
    marginBottom: '5%',
  },
  preparationbannerbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.035,
  },
  bannerbox1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  questionlistbox: {
    // justifyContent:'center',
    // alignItems:'center',
    // marginBottom:height*0.03,
    // alignSelf:'center'
    alignItems: 'center',
  },
  thankyoucard: {
    marginTop: '5%',
  },
  studentmark: {
    marginBottom: '4%',
  },
  studentstrength: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.04,
    marginLeft: width * 0.045,
  },
  studentstrengthunder: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.026,
    marginLeft: width * 0.045,
    marginTop: height * 0.005,
    marginBottom: height * 0.03,
  },
  studentstrengthChartcontainer: {
    marginVertical: height * 0.02,
  },
  subjectwiseheadingbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.005,
    paddingRight: width * 0.015,
    paddingLeft: width * 0.005,
  },
  heading2: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: BLACK,
  },
  testsubjectwise: {
    color: orange,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 4.2,
    justifyContent: 'space-around',
    backgroundColor: LIGHTGRAY2,
    borderColor: GRAY,
    borderRadius: width * 0.015,
    // padding:'2.5%'
    paddingVertical: height * 0.007,
    paddingHorizontal: width * 0.03,
    borderWidth: 1,
    overflow: 'hidden',
  },

  filterButtonText: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.033,
  },
  subundertext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.026,
    marginLeft: width * 0.05,
    width: width * 0.65,
    lineHeight: height * 0.016,
    marginBottom: height * 0.05,
  },
  crackbannercontainer: {
    backgroundColor: WHITE,
    width: width * 0.92,
    alignSelf: 'center',
    borderRadius: width * 0.015,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.038,
  },
  freetext2: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    color: BLACK,
  },
  underfreetext2: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    lineHeight: height * 0.018,
    marginVertical: height * 0.003,
    marginBottom: height * 0.015,
  },
  crackbannerarrowbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: height * 0.02,
  },
  backarrowcrackbanner: {
    backgroundColor: WHITE,
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    elevation: 3,
    shadowColor: GRAY,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.3,
    // overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.035,
  },
  nextarrowcrackbanner: {
    backgroundColor: WHITE,
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: GRAY,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.3,
  },
  frequentlyContainer: {
    marginTop: '12%',
  },
  frequentlyContainer2: {
    marginTop: '5%',
  },
  frequentlyText: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    color: DARKGRAY,
    marginLeft: '5%',
  },
  frequentlysubText: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    color: GRAY,
    marginLeft: '5%',
    lineHeight: height * 0.02,
    width: width / 1.1,
    marginBottom: '1.5%',
  },
  viewallBox: {
    // marginVertical:'4%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  crackcontainer: {
    paddingTop: height * 0.05,
    paddingBottom: height * 0.04,
  },

  mentoristest: {
    // marginLeft:width*0.02,
    marginTop: height * 0.03,
  },
  mentoristest2: {
    // marginLeft:width*0.02,
    marginTop: height * 0.03,

  },
  boxoftypeofclasses: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.085,
    alignSelf: 'center',
    backgroundColor: WHITE,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.035,
    borderRadius: width * 0.02,
    elevation: 3,
    marginTop: height * 0.06,
  },
  textoftypeofsub: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.036,
  },

  popularbookcontainer: {
    paddingHorizontal: width * 0.03,
    backgroundColor: LIGHTPURPLE,
    paddingBottom: height * 0.04,
    paddingTop: height * 0.02,
    marginBottom: height * 0.04,
  },
  popularbookcontainers: {
    // paddingHorizontal: width * 0.03,
    backgroundColor: LIGHTPURPLE,
    paddingBottom: height * 0.04,
    paddingTop: height * 0.01,
    marginBottom: height * 0.04,
  },
  popularbookcontainer2: {
    // paddingLeft: width * 0.03,
    backgroundColor: LIGHTPURPLE,
    paddingBottom: height * 0.04,
    paddingTop: height * 0.03,
    // marginBottom:height*0.04
  },
  popularbookcontainer3: {
    // paddingLeft: width * 0.03,
    backgroundColor: LIGHTPURPLE,
    // paddingBottom: height * 0.02,
    paddingTop: height * 0.03,
    // marginBottom:height*0.04
  },
  crackcontainer: {
    marginTop: height * 0.01,
    marginBottom: height * 0.04,
  },
  mainLivepage: {
    marginTop: -height * 0.02,
  },
  isviewseriesbox: {
    // marginTop: -height * 0.02
  },

  exploreCourses: {
    flexGrow: 1,
    // marginTop:-height*0.02
  },

  videocardisseries: {
    marginVertical: height * 0.02,
  },
  comptext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY,
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  comptext2: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.028,
    lineHeight: height * 0.018,
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
  },

  poplulartext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY,
    marginLeft: width * 0.04,
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  poplulartexts: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY,
    marginLeft: width * 0.045,
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  live2: {
    marginTop: height * 0.02,
  },
  currentslider: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: LIGHTGRAY2,
    borderWidth: 1,
    width: width * 0.93,
    height: isTablet ? height * 0.04 : height * 0.050,
    alignSelf: 'center',
    borderRadius: isTablet ? width * 0.009 : width * 0.02,
    overflow: "hidden",
    // marginTop:'2%',
    marginTop: '5%',
    marginHorizontal: '5%',
    marginBottom: isFinite ? "3%" : "7%"
    //  backgroundColor:'red'
    // height:height*0.05
  },
  currentsliderText: {
    fontSize: isTablet ? width * 0.02 : width * 0.033,
    color: BLACK,
  },
  currentsliders: {
    marginHorizontal: width * 0.016
  },
  Cureentheaderbox: {
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    marginTop: '3%',
    justifyContent:'space-between'
  },
  cdropdown: {
    height: height * 0.035,
    // marginRight:5,
    // marginTop: '2%',
    width: width * 0.29,
    backgroundColor: LIGHTBLUE2,
    alignItems: 'center',
    borderRadius: width * 0.01,
    // borderWidth: 0.5,
    // justifyContent:'space-evenly'
  },
  cplaceholderStyle: {
    fontSize: width * 0.035,
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    textAlign: 'center',
  },
  cselectedTextStyle: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.035,
    color: DARKGRAY,
    marginLeft: width * 0.04,
  },
  ciconStyle: {
    width: width * 0.05,
    height: height * 0.009,
    marginRight: width * 0.03,
  },
  cinputSearchStyle: {
    fontSize: width * 0.035,
  },
  csearchvalues: {
    fontSize: width * 0.05,
    // alignSelf:'center',
    marginVertical: '4%',
    paddingVertical: '3.5%',
    // borderBottomWidth: 0.2,
    borderBottomColor: GRAY,
    textAlign: 'center',
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.04,
  },
  calenderbox: {
    backgroundColor: WHITE,
    borderRadius: width * 0.04,
    elevation: 3,
    width: width * 0.75,
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 999,
    top: '10%',
    paddingVertical: '4%',
    right: '4%'

  },
  dateButton: {
    backgroundColor: orange,
    width:width*0.4,
    height:height*0.035,
    // paddingVertical:'1%',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:width*0.012
    // padding:0,
    
  },
  selectedDateText: {
    color: WHITE,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    paddingVertical: '1.5%',
    paddingHorizontal: '2%'
  },
  calendertext: {
    fontFamily: 'Isidora Sans',
    fontSize: width * 0.035,
    

  },
  calendaricon1: {
    
    height: height * 0.01,
    width: width * 0.04,
    resizeMode: "contain",

    // backgroundColor:"red"
  },
  calendaricon2: {
    // position:"absolute",
    height: height * 0.01,
    width: width * 0.04,
    resizeMode: "contain",
    // marginRight: width * 0.2
  },
  currentheading: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.048,
    color: DARKGRAY,
    width: width * 0.75,
    marginLeft: width * 0.04,
    lineHeight: height * 0.028,
    marginTop: '7%'
  },
  currentheading2: {
    color: orange
  },
  undercurrent: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.027,
    color: GRAY,
    marginHorizontal: width * 0.04,
    lineHeight: height * 0.016,
    marginTop: height * 0.007,
    marginBottom: '4%'
  },
  nationalbutton: {
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: "center",
    alignSelf: "flex-start",
    marginLeft: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.035
  },
  nationalbuttontext: {
    fontFamily: IsidoraMedium,
    color: WHITE,
    fontSize: width * 0.03
  },
  currentbottomline: {
    height: height * 0.001,
    backgroundColor: GRAY,
    marginHorizontal: width * 0.04,
    marginTop: height * 0.035
  },
  calendercanceltext: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: width * 0.03
  },
  calendarcancelbtn: {
    borderColor: GRAY,
    borderWidth: 0.5,
    borderRadius: width * 0.01,
    alignItems: "center",
    justifyContent: 'center',
    width:width*0.31,
    height:height*0.032,
    padding:0

  },
  calenderdonetext: {
    fontFamily: IsidoraMedium,
    color: WHITE,
    fontSize: width * 0.03
  },
  calendardonebtn: {
    backgroundColor: orange,
    borderRadius: width * 0.01,
    alignItems: "center",
    justifyContent: 'center',
    width:width*0.31,
    height:height*0.032,
    padding:0
  },
  bottomcalender:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginHorizontal:width*0.04,
    borderTopWidth:0.3,
    borderTopColor:GRAY,
    paddingTop:'2.5%',
    marginTop:'3%'
  },
  completetop:{
    fontFamily:IsidoraMedium,
    fontSize:width*0.027,
    color:GRAY,
    marginLeft:width*0.04
  },
  fullnewscontainer:{
    marginTop:'3%'
  },
  fullnewsheading:{
    fontSize:width*0.041,
    fontFamily:IsidoraSemiBold,
    color:DARKGRAY,
   marginHorizontal:width*0.04,
   marginTop:'3%'
  },
  fullsubheading:{
    fontSize:width*0.03,
    fontFamily:IsidoraMedium,
    color:GRAY,
    marginHorizontal:width*0.04,
    lineHeight:height*0.02
  },
  fullnewsimage:{
    width:width*0.8,
    height:undefined,
    resizeMode:'contain',
    marginHorizontal:width*0.04,
    aspectRatio:16/9.6,
    marginVertical:'2%'


  }

});
