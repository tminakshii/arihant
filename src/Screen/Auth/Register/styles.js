import { Dimensions, Platform, StyleSheet } from 'react-native';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  GreyText,
  inputBordercolor,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTGREYTEXT,
  orange,
  RED,
  WHITE,
  Yellow,
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
import { colors } from 'react-native-swiper-flatlist/src/themes';
import { ScreenContainer } from 'react-native-screens';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingHorizontal: '4.2%',
    justifyContent: 'center',
  },
  maincontainerTab: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop:height * 0.198
  },
  mainContainer1: {
    flexGrow: 1,
  },
  main: {
    borderRadius: 20,
    backgroundColor: WHITE,
    marginVertical: '5%',
    // paddingHorizontal:10
    // marginVertical: "5%",
    // borderTopLeftRadius:20
  },
  subMainContainer: {
    borderRadius: 20,
    marginTop: 30,
    marginVertical: 10,
  },
  Introsliderstyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffae00"
  },

  preferenceSearch: {
    marginHorizontal: 10,
  },
  // beinvisible: {
  //   color: GRAY,
  //   fontFamily: IsidoraLight,
  //   letterSpacing: 1,
  //   fontSize: width*0.025,
  //   // marginTop: '9%',
  //   // marginBottom: '2%',
  //   textAlign: 'center',
  // },
  // createAccount: {
  //   color: DARKGRAY,
  //   fontFamily: IsidoraSemiBold,
  //   fontSize: width * 0.025,
  //   letterSpacing: 1,
  //   textAlign: 'center',
  // },
  // createAccountas: {
  //   color: BLACK,
  //   fontFamily: IsidoraRegular,
  //   fontSize: width * 0.025,
  //   letterSpacing: 1,
  //   marginTop: '4%',
  //   textAlign: 'center',
  // },
  role: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    paddingHorizontal: '2%',
  },
  selectedrole: {
    backgroundColor: orange,
    borderWidth: 0,
  },
  roleText: {
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
  },
  selectedRoleText: {
    color: WHITE,
  },
  roleboxTab: {
    borderWidth: 1,
    borderColor: GRAY,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    borderRadius: width * 0.008,
    width: width / 7.5,
    // marginHorizontal: '3%',
  },
  rolebox: {
    borderWidth: 1,
    borderColor: GRAY,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '2%',
    borderRadius: 5,
    width: width / 4.42,
    marginHorizontal: '3%',
  },
  name: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: '7%',
    paddingHorizontal:"5%",
    // width: width * 4,


  },
  nameTab: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginTop: '12%',
    // backgroundColor:"red"

    paddingHorizontal:"2%"

  },

  container: {
    // flex: 1,
    justifyContent: 'center', // Center vertically
    // paddingHorizontal: '5%',
  },
  preference: {
    borderColor: GRAY,
    borderWidth: 0.5,
    borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingBottom: '2%'
    paddingVertical: height * 0.0035,
    marginHorizontal: width * 0.051,
  },
  heading: {
    marginLeft: '8%',
    marginVertical: '5%',
    marginTop: '7%',
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY,
  },
  // multiSelect: {
  //   searchIcon: {
  //     color: DARKGRAY,
  //   },

  preferenceSearch: {
    marginHorizontal: 10
  },
  beinvisible: {
    color: inputBordercolor,
    fontFamily: IsidoraMedium,
    // letterSpacing: 1,
    fontSize: width * 0.033,
    marginTop: '6%',
    // marginBottom: '2%',
    textAlign: "center"
  },
  createAccount: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.049,
    // letterSpacing: 1,
    textAlign: "center"
  },
  createAccountas: {
    color: LIGHTGREYTEXT,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.038,
    // letterSpacing: 1,
    marginTop: '5.5%',
    textAlign: "center",
    marginBottom: "1.5%"
  },
  role: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    paddingHorizontal: "5%"
  },
  selectedrole: {
    backgroundColor: orange,
    borderWidth: 1,
    borderColor: orange,
    borderStyle: 'solid'
  },

  beinvisibleTab: {
    color: inputBordercolor,
    fontFamily: IsidoraMedium,
    // letterSpacing: 1,
    fontSize: width * 0.02,
    marginTop: Platform.OS=="android"?'5%':'4%',
    marginLeft:width*0.03
    // marginBottom: '2%',
  },
  createAccountTab: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    marginLeft:width*0.03

    // letterSpacing: 1,
  },
  createAccountasTab: {
    color: LIGHTGREYTEXT,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.03,
    // letterSpacing: 1,
    marginTop: Platform.OS=="android"?'7%':'8%',
    marginBottom: "1.5%",
    marginLeft:width*0.03

  },
  roleTab: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginTop: '2%',
    // marginLeft:width*0.03
    // paddingHorizontal: "5%"
  },
  roleText: {
    color: inputBordercolor,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.033,
    paddingVertical: height * 0.004
  },
  roleTextTab: {
    color: inputBordercolor,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.02,
    paddingVertical: height * 0.004
  },
  selectedRoleTextTab: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.02
  },
  selectedRoleText: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.033
  },
  firstname: {
    width: width / 2.7,
    paddingLeft: width * 0.035,
    height: height / 19,
    fontSize:width * 0.033,
    fontFamily:IsidoraMedium,
    color:inputBordercolor,
    justifyContent:"center",
    alignItems:"center"
  },
  firstnameTab: {
    width: width / 4.7,
    paddingLeft: width * 0.025,
    height: height / 25.5,
    fontSize:width * 0.025,
    fontFamily:IsidoraMedium,
    color:inputBordercolor,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:width * 0.007
  },
  lastnameTab: {
    paddingLeft: width * 0.025,
    width: width / 4.7,
    height: height / 25.5,
    fontSize:width * 0.025,
    fontFamily:IsidoraMedium,
    color:inputBordercolor,
    paddingVertical:0,
    borderRadius:width * 0.007

    // opacity:0.4,
  },
  lastname: {
    paddingLeft: width * 0.035,
    width: width / 2.8,
    height: height / 19,
    fontSize:width * 0.033,
    fontFamily:IsidoraMedium,
    color:inputBordercolor,
    paddingVertical:0

    // opacity:0.4,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 5,
    paddingVertical: '0.5%',
    paddingHorizontal: '2%',
    marginHorizontal: '5.7%',
    flex: 1,
    width: width * 0.9,
    backgroundColor: WHITE,
  },
  searchTextInput: {
    color: DARKGRAY,
    fontFamily: 'IsidoraMedium',
    fontSize: width * 0.036,
    marginHorizontal: '4%',
    backgroundColor: WHITE,
  },

  selectToggle: {
    paddingTop: '2%',
    flexDirection: 'row', // Align text and icon in a row
    justifyContent: 'space-between', // Space between text and icon
    backgroundColor: WHITE,
    padding: '3%',
  },
  selectToggleText: {
    fontSize: width * 0.037,
    fontFamily: 'IsidoraSemiBold',
    color: DARKGRAY, //preferenceText
  },
  container: {

    justifyContent: 'center',

  },
  preference: {
    borderColor: GRAY,
    borderWidth: 0.5,
    borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingBottom: '2%'
    paddingVertical: height * 0.0035,
    marginHorizontal: width * 0.051,
  },
  heading: {
    marginLeft: '8%',
    marginVertical: '5%',
    marginTop: '7%',
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY
  },
  multiSelect: {
    searchIcon: {
      color: DARKGRAY
    },
    chipContainer: {
      borderRadius: width * 0.02,
      // borderTopWidth:2
    },

    itemText: {
      fontSize: width * 0.035,
      fontFamily: 'IsidoraSemiBold',
      color: DARKGRAY,
      marginHorizontal: width * 0.03,
      // borderTopWidth:2



    },

    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: GRAY,
      borderRadius: 5,
      paddingVertical: '0.5%',
      paddingHorizontal: '2%',
      marginHorizontal: '5.7%',
      flex: 1,
      width: width * 0.9,
      backgroundColor: WHITE
    },
    searchTextInput: {
      color: DARKGRAY,
      fontFamily: 'IsidoraMedium',
      fontSize: width * 0.036,
      marginHorizontal: '4%',
      backgroundColor: WHITE

    },

    selectToggle: {
      paddingTop: '2%',
      flexDirection: 'row', // Align text and icon in a row
      justifyContent: 'space-between', // Space between text and icon
      backgroundColor: WHITE,
      padding: '3%',
      // borderBottomWidth:1,
      borderBottomColor: LIGHTGRAY2

    },

    selectToggleText: {
      fontSize: width * 0.037,
      fontFamily: 'IsidoraSemiBold',
      color: DARKGRAY//preferenceText 
    },
    container: {
      maxHeight: height * 0.70, // 70% of the screen height
      width: width,
      top: height * 0.28,
      right: '5%',
      bottom: 0,
      paddingBottom: height * 0.02,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      // borderBottomWidth:1,

    },

    confirmText: {
      color: 'white', // Button text color
      fontSize: width * 0.028,
      borderRadius: width * 0.03, // Add border radius for rounded corners
      textAlign: 'center',
      paddingVertical: "2%",

    },
    button: {
      backgroundColor: RED,
      marginHorizontal: '10%',
      borderRadius: width * 0.1,
      marginVertical: height * 0.05,
      // borderTopWidth:1,
      // marginTop:10

      // marginTop: height * 0.12
    },


  },

  emailTab: {
    width: width * 0.45,
    // paddingVertical: "1.5%",
    paddingLeft: width * 0.025,
    // marginHorizontal: "5%",
    // height: height / 18
    height: height / 23,
    borderRadius:width * 0.007,
    fontSize:width * 0.025,
    fontFamily:IsidoraMedium,
  },
  phoneTab: {
    marginTop:"5%",
    borderRadius:width * 0.007,
    paddingLeft: width * 0.025,
    width: width * 0.45,
    marginHorizontal: "5%",
    // paddingVertical: "1.5%",
    // height: height / 18,
    height: height / 23,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.025,
  },


  email: {
    width: width * 0.775,
    // paddingVertical: "1.5%",
    paddingLeft: width * 0.035,
    // marginHorizontal: "5%",
    // height: height / 18
    height: height / 19,

    fontSize:width * 0.033,
    fontFamily:IsidoraMedium,

  },
  phone: {
    marginTop: '4%',
    paddingLeft: width * 0.035,
    width: width * 0.775,
    marginHorizontal: "5%",
    // paddingVertical: "1.5%",
    // height: height / 18,
    height: height / 19,

    fontFamily: IsidoraMedium,
    fontSize: width * 0.033,
  },
  conditioncontainer: {
    flexDirection: 'row',
    marginTop: '1%',
    marginHorizontal: "7.5%",
    alignItems:"center",
    // backgroundColor:"red",
    paddingVertical:'2%',
    paddingBottom:'3%',
    // backgroundColor:"red"
  },
  conditioncontainerTab: {
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft:width*0.03,
    // marginHorizontal: "7.5%",
    alignItems:"center",
    // justifyContent:"center"
  },
  errorbox: {
    paddingLeft: 3,
    marginHorizontal: "7.5%",
  },
  errorboxTab: {
    paddingLeft: 3,
    marginHorizontal: "5.5%",
  },
  errormessage: { color: 'red', fontSize: width *0.025,
},
errormessageTab: { color: 'red', fontSize: width *0.02,
},
  conditionbox:
  {
    borderWidth: 1,
    height: height * 0.020,
    width: height * 0.020,
    borderRadius: width*0.012,
    borderColor: inputBordercolor,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
    // marginTop: 3,
  },
  conditionboxTab:
  {
    borderWidth: 1,
    height: height * 0.015,
    width: height * 0.015,
    borderRadius: width*0.007,
    borderColor: inputBordercolor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  searchTextInput: {
    // borderRadius:2
  },
  conditiontext:
  {
    color: inputBordercolor,
    fontFamily:IsidoraMedium,
    paddingHorizontal: 8,
    fontSize: width * 0.030,
    letterSpacing: 0.5
  },
  conditiontextTab:
  {
    color: inputBordercolor,
    fontFamily:IsidoraMedium,
    paddingHorizontal: 8,
    fontSize: width * 0.0205,
    letterSpacing: 0.5,
    marginTop:height*0.005
  },
  buttonview: {
    backgroundColor: WHITE,
    paddingHorizontal: 25,
    shadowColor: BLACK,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  buttonviewTab: {
    backgroundColor: WHITE,
    paddingHorizontal: 25,
    shadowColor: BLACK,
    elevation: 10,
    paddingVertical:"4%",
  },
  buttonTab: {
    backgroundColor: RED,
    borderRadius: width * 0.055,
    justifyContent: 'center',
    marginVertical: "3%",
    width: width * 0.45,
    height:height * 0.04,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: RED,
    borderRadius: width * 0.055,
    justifyContent: 'center',
    marginVertical: "3%",
    width: width * 0.71,
    height:height * 0.051,
    alignSelf: 'center'
  },
  textStyle: {
    itemText: { fontSize: 15, fontFamily: IsidoraSemiBold, color: WHITE },
    selectToggle: {
      paddingTop: '4%',
    },
    selectToggleText: { fontSize: 16, fontFamily: IsidoraSemiBold },
    container: { maxHeight: height / 2, marginTop: 'auto' }
  },
  rightarrowimage: {
    resizeMode: 'contain',
    width: width / 12,
    height: height / 50,
  },
  textStyle1: {
    fontSize: width / 23,
    fontFamily:IsidoraBold,
color:WHITE
  },
  rightarrowimageTab: {
    resizeMode: 'contain',
    width: width *0.05,
    height: height *0.03,
  },
  textStyle1Tab: {
    fontSize: width*0.03,
    fontFamily:IsidoraBold,
color:WHITE
  },
  prebox1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: width * 0.83,
    // paddingVertical: height * 0.012,
    height:height/19,
    // borderBottomWidth:0.6,
    // borderBottomColor:GRAY,
    paddingHorizontal:width * 0.005

  },
  prebox1Tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: width * 0.83,
    // paddingVertical: height * 0.012,
    height:height/25,
    // borderBottomWidth:0.6,
    // borderBottomColor:GRAY,
    // paddingHorizontal:width * 0.001

  },
  preferencecontainer: {

    width: width * 0.775,
    borderWidth: 1,
    borderColor: inputBordercolor,
    alignSelf: 'center',
    justifyContent:'center',
   
    borderRadius: width*0.0137,
    paddingHorizontal: width * 0.030
  },
  preferencecontainerTab: {

    width: width * 0.45,
    borderWidth: 1,
    borderColor: inputBordercolor,
    alignSelf: 'center',
    justifyContent:'center',
   
    borderRadius: width * 0.007,
    paddingHorizontal: width * 0.025
  },
  preferencetext: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.036,
    color: "#353C41"
  },
  preferencetextTab: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.025,
    color: "#353C41"
  },
  preinnermodal: {
    // height: height * 0.6,
    backgroundColor: WHITE,
    height: height * 0.8,
    width: width,
    // alignItems:'center',
    // justifyContent:'center',
    alignSelf: 'center',
    top: height * 0.25,
    // bottom: 0,
    position:'absolute',
    // borderTopLeftRadius: width * 0.09,
    // borderTopRightRadius: width * 0.09,
    borderRadius:width * 0.09,
    elevation: 5,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03

  },
  preinnermodalTab: {
    // height: height * 0.6,
    backgroundColor: WHITE,
    height: height * 0.56,
    width: width/2,
    // alignItems:'center',
    // justifyContent:'center',
    alignSelf:"flex-end",
    top: height * 0.198,
    right: width * 0.02,
// borderRadius:width*0.02,
    // bottom: 0,
    position:'absolute',
    borderBottomRightRadius: width * 0.02,
    borderTopRightRadius: width * 0.02,
    // borderRadius:width * 0.09,
    elevation: 5,
    paddingLeft: width * 0.03,
    paddingVertical: height * 0.03

  },

  outerpremodal:
    {
       backgroundColor: 'rgba(0,0,0,0.18)',
      //  backgroundColor:"red",

      
      flex:1,
      // height:height
     },
     searchboxcontainer:{
flexDirection:"row",
alignItems:"center",
width:width*0.9,
marginTop: height * 0.02,
// backgroundColor:"red",
// alignSelf:"center",
justifyContent:'center',
marginLeft:width*0.02
     },
     searchboxcontainerTab:{
      flexDirection:"row",
      alignItems:"center",
      width:width*0.45,
      marginTop: height * 0.02,
      // backgroundColor:"red",
      // alignSelf:"center",
      justifyContent:'center',
      // marginLeft:width*0.02
           },
  modalpretext: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,

  },
  modalpretextTab: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
    // backgroundColor:"red"

  },
  modalsearchbox: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    marginTop: height * 0.02,
  },
  modalsearchcontainer: {

    width: width*0.9 ,
    height: height * 0.046,
    // right: '5%',
    fontFamily: IsidoraMedium,
    fontSize: width * 0.038,
    borderColor: DARKGRAY,
    borderWidth: 1,
    borderRadius:width*0.017,
    backgroundColor: WHITE,
    paddingVertical:0,
    // elevation: 4,
    // marginRight:width*0.1,
    paddingLeft:width*0.12,
    // marginTop:2
    // alignSelf:"center"
    // backgroundColor:'red'

  },
  searchboxcontainerTab:{
    flexDirection:"row",
    alignItems:"center",
    width:width*0.4,
    marginTop: height * 0.02,
    // backgroundColor:"red",
    // alignSelf:"center",
    justifyContent:'center',
    // marginLeft:width*0.03
         },

  modalsearchcontainerTab: {

    width: width*0.43 ,
    height: height * 0.035,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.02,
    borderColor: DARKGRAY,
    borderWidth: 1,
    borderRadius:width*0.01,
    backgroundColor: WHITE,
    paddingVertical:0,
    // elevation: 4,
    // marginRight:width*0.1,
    paddingLeft:width*0.015,

    // backgroundColor:'red'

  },
  preserachTab:
  {
    // backgroundColor: 'red',
    marginLeft:- width * 0.05,
    alignSelf:"center",
    zIndex: 999
  },
  preserach:
  {
    // backgroundColor: 'red',
    marginRight:- width * 0.09,
    alignSelf:"center",
    zIndex: 999
  },

  presubname: {
    marginVertical: height * 0.010,
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.038
  },
  presubnameTab: {
    marginVertical: height * 0.005,
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.02
  },
  prescroll: {
  },
  presubbox: {
    height: height * 0.40,
    borderBottomWidth: 0.91,
    borderBottomColor: inputBordercolor,
    // paddingBottom: height * 0.05,
    marginTop: height * 0.017
  },
  presubboxTab: {
    width:width*0.43,
    height: height * 0.25,
    borderBottomWidth: 0.91,
    borderBottomColor: inputBordercolor,
    paddingBottom: height * 0.02,
    marginTop: height * 0.01,
    // backgroundColor:"red"
  },
  modalchipbox: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  

  },
  modalchipboxTab: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  // marginBottom:"5%"

  },
  nameview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: width * 0.01,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.007,
    marginRight: width * 0.035,
    marginVertical: height * 0.005,
    backgroundColor: LIGHTGRAY,
    borderColor: inputBordercolor,
  },
  nameview2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: width * 0.01,
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.005,
    marginRight: width * 0.020,
    marginVertical: height * 0.004,
    backgroundColor: LIGHTGRAY,
    borderColor: inputBordercolor,
  },
  nameviewTab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: width * 0.005,
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.005,
    marginRight: width * 0.02,
    marginVertical: height * 0.004,
    backgroundColor: LIGHTGRAY,
    borderColor: inputBordercolor,
  },
  nameview2Tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: width * 0.005,
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.005,
    marginRight: width * 0.020,
    marginVertical: height * 0.004,
    backgroundColor: LIGHTGRAY,
    borderColor: inputBordercolor,
  },
  chipcrossmodal: {
    height: width * 0.04,
    width: width * 0.04,
    borderRadius: width * 0.04 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderWidth:0.5,
    borderColor:LIGHTGRAY2
    // elevation: 4
  },
  chipcrossmodalTab: {
    height: width * 0.03,
    width: width * 0.03,
    borderRadius: width * 0.03 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderWidth:0.5,
    borderColor:LIGHTGRAY2
    // elevation: 4
  },
  chipname: {
    marginRight: width * 0.08,
    color: "#353C41",
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.028
  },
  chipnameTab: {
    marginRight: width * 0.02,
    color: "#353C41",
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.02
  },
  btnpre: {
    paddingVertical: '3%',
    backgroundColor: RED,
    width: width / 1.4,
    alignSelf: 'center',
    borderRadius: width * 0.06,
    justifyContent: 'center',
    marginTop:0,
    marginBottom:height*0.08 
   },
   btnpreTab: {
    // paddingVertical: '3%',
    height:height*0.04,
    backgroundColor: RED,
    width: width*0.43,
    // alignSelf: 'center',
    borderRadius: width * 0.03,
    justifyContent: 'center',
    // marginTop:height*0.13,
    marginBottom:0 ,
    // bottom:0
   },
   btnpretextTab: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.028,
    color: WHITE
  },
  btnpretext: {
    fontFamily: IsidoraBold,
    fontSize: width * 0.04,
    color: WHITE
  },
  lineShadow:{
    width:width,
     height:width*0.10/2,
     borderRadius:width*0.35/2,
    alignSelf: 'center',
    elevation: 6,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: '6.5%',
},
lineShadowTab:{
  width:width,
   height:width*0.02,
   borderRadius:width*0.30/2,
  // alignSelf: 'center',
  elevation: 4,
  shadowColor: 'rgba(0,0,0,0.3)',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  marginTop:height*0.01,
  // backgroundColor:Platform.OS=="ios" && LIGHTGRAY,
  // backgroundColor:"red"
},


alreadyContainer:{
   flexDirection: 'row',
    paddingVertical: '0.5%',
    paddingHorizontal: 10,
    shadowColor: BLACK,
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // marginTop: '5%',
    shadowOpacity: 0.15,
},
alreadyContainerTab:{
  //  paddingVertical: '5%',
   shadowColor: BLACK,
  //  position:'absolute',
  //  width:'100%',
  //  bottom:0,
  width:'100%',
   justifyContent: 'center',
   backgroundColor: WHITE,
//  paddingVertical:"2%",
   shadowOpacity: 0.15,
},
middleContainer: {
  flexDirection: "row",
  // borderWidth:1,
  marginHorizontal: width*0.02,

  // backgroundColor:RED,
  // width:width*0.09,
  // height:height/1.4,
  borderRadius:width*0.02,
  borderBottomLeftRadius: width * 0.08,

  overflow:"hidden"
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


})
