import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  BLACK,
  DARKGRAY,
  DARKRED,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTGREYTEXT,
  orange,
  RED,
  WHITE,
  Yellow,
} from '../../values/Colors';
import {
  IsidoraBold,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../values/Fonts';
import {green, red} from 'react-native-reanimated/lib/typescript/Colors';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
let isTablet = DeviceInfo.isTablet();

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: LIGHTGRAY,
  },
  subMainContainer: {
    marginHorizontal: '5%',
    // marginVertical: '5%',
    // borderTopWidth:0.5,
    borderColor:LIGHTGRAY2,
    paddingBottom:'5%'
    // marginVertical:"5%"
  },
  subMainContainer1: {
    marginHorizontal: '5%',
    marginTop: isTablet?'1%':'5%',
    // borderTopWidth:0.5,
    borderColor:LIGHTGRAY2,
    // marginVertical:"5%"
  },
  nameText: {
    borderBottomWidth: 1,
    paddingBottom: '3%',
    borderBottomColor: GRAY,
    color: '#353C41',
    fontSize:isTablet? width*0.031: width*0.041,
    marginTop: '5%',
    fontFamily:IsidoraSemiBold
    
  },
  delivery: {
    borderBottomWidth: 1,
    borderTopWidth: 0.5,

    paddingTop: '4%',
    borderBottomColor:GRAY,
    paddingBottom: '4%',
    borderBottomColor: GRAY,

    marginTop: '4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemsdelivery: {
    // borderBottomWidth: 1,
    borderTopColor: GRAY,
    // paddingTop:'4%',
    // borderTopWidth:1,
    // paddingBottom: isTablet?null:'1%',
    borderBottomColor: GRAY,

    marginTop: '4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  
  paymenttext: {
    borderBottomWidth: 1,
    paddingBottom: '4%',
    borderBottomColor: GRAY,
    marginTop: '4%',

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  deliveryText: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width*0.031:width*0.041,
    color: '#353C41',
  },
 
  fullnametext: {
    fontFamily: IsidoraSemiBold,
    marginTop: '4%',
    fontSize: isTablet?width*0.02:width*0.03,

    color: '#353C41',
    // marginLeft: '1%',
  },
  fullnameinput: {
    width: isTablet?width / 3.5:width / 1.12,
    height:height*0.045,
    alignSelf: 'center',
    marginTop:'2%',
    borderWidth: 1,
    borderColor: GRAY,
    // paddingVertical: '1%',
    paddingLeft:width*0.04,
    borderRadius:width*0.01,
fontFamily:IsidoraMedium
  },
  fullnameinput2: {
    width: width / 1.12,
    height:height*0.045,
    alignSelf: 'center',
    marginTop:'2%',
    borderWidth: 1,
    borderColor: GRAY,
    // paddingVertical: '1%',
    paddingLeft:width*0.04,
    borderRadius:width*0.01,
fontFamily:IsidoraMedium
  },
  mobilenumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:isTablet? "2%": '5%',
    // backgroundColor:"red"
  },
  MobileInput: {
    alignSelf: 'center',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: GRAY,
    // paddingVertical: '1%',
    height:height*0.045,

    width: width / 2.3,
    paddingLeft:width*0.04,
fontFamily:IsidoraMedium,
    borderRadius:width*0.01,

    fontSize: isTablet?width*0.02:width*0.03,
  },
  EmailInput: {
    alignSelf: 'center',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: GRAY,
    // paddingVertical: '1%',
    height:height*0.045,

    width:isTablet? width / 2: width / 2.3,
    paddingLeft:width*0.04,
fontFamily:IsidoraMedium,
    borderRadius:width*0.01,

    fontSize: width*0.03,
  },
  MobileInputTab: {
    alignSelf: 'center',
    marginTop: isTablet?'2%':'3%',
    borderWidth: 1,
    borderColor: GRAY,
    // paddingVertical: '1%',
    height:height*0.045,

    width:isTablet? width / 3.5: width / 2.3,
    paddingLeft:width*0.04,
fontFamily:IsidoraMedium,
    borderRadius:width*0.01,

    fontSize: isTablet?width*0.02:width*0.03,
  },
  mobilenumbertext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width*0.020:width*0.03,

    marginTop:isTablet? '4%': null,

    color: '#353C41',
    marginLeft: '0.3%',
  },
  emailContainer: {
    marginTop: isTablet?'3%':'5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width*0.02:width*0.03,


    color: '#353C41',
  },
  country: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCB9C4',
    height:height*0.045,
    width:isTablet? width / 2.8: width / 2.3,
    borderRadius:width*0.01,
    alignItems: 'center',
    marginTop: isTablet?'4%':'3%',
    backgroundColor: '#DFE1E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width*.04,
  },
  state: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: LIGHTGRAY2,
    paddingVertical: isTablet?'1.8%':'2.3%',
    paddingLeft: 10,
    width: isTablet?width / 3.5:width / 1.1,
    borderRadius:isTablet?width*0.01:5,
    alignItems: 'center',
    marginTop: isTablet?'2%':'3%',
    backgroundColor: '#DFE1E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  stateContainer: {
    marginTop: isTablet?"1.4%":'5%',
  },

  countrytext: {
    color: DARKGRAY,
    fontSize: isTablet?width*0.02:width*0.03,

fontFamily:IsidoraSemiBold
  },
  location: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:isTablet? '0%': '8%',
    borderWidth: 1,
    borderColor: RED,
    paddingVertical: isTablet?'2%':'4%',
    paddingHorizontal: isTablet?'2%':null,

    borderRadius: width*0.1,
    backgroundColor: "rgba(223, 225, 229, 1)",
  },
  // locationsearching:{
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: '8%',
  //   borderWidth: ,
  //   borderColor: RED,
  //   // paddingVertical: '4%',
  //   // borderRadius: 30,
  //   // backgroundColor:WHITE,

  // },
  autofill:{
    fontFamily:IsidoraMedium,
    color:BLACK,
    fontSize:isTablet?width*0.02:width*0.04
  },
  address: {
    marginTop: isTablet?'5%':'8%',
  },
  conditioncontainer: {
    flexDirection: 'row',
    marginTop: '4%',
    alignItems: 'center',
  },
  conditioncontainerweeks: {
    flexDirection: 'row',
    // marginTop: '4%',
    alignItems: 'center',
    width:width*0.18,
    // backgroundColor:"red",
    marginTop:"5%"
  },
  conditioncontainer2: {
    flexDirection: 'row',
    marginTop: '4%',
  },
  conditioncontainer3: {
    flexDirection: 'row',
  },
  creditcardcontainer: {
    backgroundColor: 'rgba(252, 234, 175,0.29)',
    marginTop: '4%',
    padding: '3%',
    paddingVertical:isTablet?'3%':'5%',
    paddingBottom:isTablet?"1%":null,
    borderRadius: 5,
    borderColor: '#FCEAAF',
    borderWidth: 1,
    flexDirection:isTablet?"row":null
  },
  conditionbox: {
    borderWidth: 0.7,
    height: height*0.02,
    width: height*0.02,
    borderRadius: width*0.01,
    borderColor: isTablet?DARKGRAY:GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  conditionboxWeeks: {
    borderWidth: 0.7,
    height: height*0.011,
    width: height*0.011,
    borderRadius: width*0.005,
    borderColor: isTablet?DARKGRAY:GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    // backgroundColor:"red"
  },
  conditionboxx: {
    borderWidth: 0.7,
    height:isTablet?height*0.018:height*0.023,
    width:isTablet?height*0.018:height*0.023,
    borderRadius: height * 0.013,
    borderColor: BLACK,
    marginLeft:'1%',
    // marginBottom:"1%",
    marginTop: Platform.OS=="android"?'0.5%':null,
    backgroundColor: WHITE,
    alignItems:'center',
    justifyContent:'center'
  },
  circle:{
    padding:isTablet?width*0.01:width*0.017,
    backgroundColor:RED,
    borderRadius:width*0.02,
  },
  conditionboxx2: {
    borderWidth: 0.7,
    height: height*0.02,
    width: height*0.02,
    borderRadius: height*0.02/2,
    borderColor: GRAY,
    alignItems:'center',
    justifyContent:'center',
    marginTop: '0.5%',
    backgroundColor: WHITE,
  },
  conditiontext: {
    color:isTablet? LIGHTGREYTEXT: '#353C4166',
    paddingHorizontal: '3%',
    marginRight:width * 0.07,
    fontFamily:isTablet?IsidoraMedium:IsidoraSemiBold,
    fontSize:isTablet? width*0.022: width*0.035,
    lineHeight:height*0.02,
  },
  conditiontextWeeks: {
    color:isTablet? DARKGRAY: '#353C4166',
    paddingHorizontal: '3%',
    marginLeft:width * 0.01,
    fontFamily:IsidoraSemiBold,
    fontSize:isTablet? width*0.015: width*0.035,
    lineHeight:height*0.02,
  },
  deliverytext:{
color:DARKGRAY,
fontFamily:IsidoraSemiBold,
fontSize:width*0.015,
textDecorationLine:"underline",
marginTop:"3%"
  },
  rupee:{
    color: BLACK,
    fontFamily:IsidoraRegular,
    fontSize: isTablet?width*0.025:width*0.035,
    lineHeight:height*0.02,
  },
  addresstype: {
    flexDirection: 'row',
    marginTop: '5%',
   
    alignItems:"center"
  },
  optioncontainer:{
justifyContent:"space-between",
flexDirection:"row",
width:width*0.23,
marginTop:"2%"
  },
  hometext:{
fontFamily:IsidoraMedium,
fontSize:width*0.02,
color:GRAY
  },
  activehometext:{
    fontFamily:IsidoraMedium,
    fontSize:width*0.02,
    color:orange
      },
  addresstypeOptionTextContainer:{
borderWidth:1,
height:height*0.023,
width:width*0.1,
justifyContent:"center",
alignItems:"center",
borderRadius:width*0.005,
borderColor:GRAY
  },
  activeaddresstypeOptionTextContainer:{
    borderWidth:1.4,
    height:height*0.023,
    width:width*0.1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:width*0.005,
    borderColor:orange
      },
  addressOptions:{
    borderBottomWidth: 1,
    borderBottomColor: LIGHTGRAY2,
    paddingBottom: '4%',
  },
  Addresstypetext: {
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet? width*0.02: width*0.036,

    color: '#353C41',
    marginLeft: '1%',
    marginRight: '2%',
  },
  addressbutton: {
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:isTablet? width*0.5: width*0.5,
    paddingVertical: isTablet?'2.5%':'4%',
    width:isTablet?width/3:null
  
  },
  addresstext:{
    fontFamily:IsidoraSemiBold,
    color:WHITE,
    fontSize:isTablet?width*0.025:width*0.035
  },
  addressbuttonview:{
    borderBottomWidth: 1,
    // paddingBottom: '3%',
    borderBottomColor: GRAY,
  },
  selectpaymenttext: {
    marginTop: '5%',
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.025,
    color: '#353C41',
    marginBottom: '5%',
  },
  paymentContainer: {
    marginTop: '2%',

    borderWidth: 1,
    // color: '#6F757C',
    borderRadius:isTablet?width*0.02:10,
    borderColor: GRAY,
    
  },
  AddContainer:{
flexDirection:"row",
justifyContent:"space-between",
width:width/1.11
  },
  addButton:{
    borderWidth:1,
    borderColor:RED,
    height:isTablet?height*0.03:height*0.026,
    width:width*0.15,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:width*0.02,
    backgroundColor:LIGHTGRAY2
  },
  addText:{
fontFamily:IsidoraSemiBold,
color:DARKGRAY,
fontSize:isTablet?width*0.017:null

  },
  subpaymentContainer: {
    color: '#6F757C',
    padding: '4%',
  },
  Avilablebalance: {
    marginTop: '2%',
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet? width*0.03: width*0.04,
    color: LIGHTGREYTEXT,
    borderBottomWidth: 2,
    paddingBottom:isTablet? '2%': '4%',
    borderBottomColor: LIGHTGRAY2,
  },
  InsufficientContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginLeft: '3%',
    marginTop: '2%',
    marginRight:"6%",
  },
  Insufficienttext: {
    color: LIGHTGREYTEXT,
    marginLeft: '3%',
    color: '#353C41',
    fontSize: isTablet?width*0.022:width*0.03,
    fontFamily:IsidoraMedium

  },
  Addbalancetext: {
    color: orange,
    textDecorationLine: 'underline',
    fontSize:width*0.035,
    fontFamily:IsidoraSemiBold,
  },
  Addbalancetextblack: {
    color: DARKGRAY,
    fontSize:width*0.02,
    fontFamily:IsidoraSemiBold,
  },
  errormsg: {
    width:isTablet?width*0.026:width*0.04,
    height:isTablet?width*0.026:width*0.04,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'gray',
    borderRadius: width*0.07,
  },
  codeboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  codeinput: {
    width: isTablet?width / 4.4:width / 2.5,
    // paddingVertical: '2%',
    height:height*0.04,
    marginLeft: '3%',
    paddingLeft:width*0.04,
    borderColor:GRAY,
    fontFamily:IsidoraSemiBold,
    fontSize:isTablet?width*0.023:width*0.03,
    borderRadius:isTablet?width*0.011:width*0.02
  },
  ApplyButton: {
    width: isTablet?width / 7:width / 4.5,
    height: height / 18,
    borderWidth: 1,
    borderRadius: width*0.5,
    marginLeft: '5%',
    justifyContent: 'center',
    // paddingVertical:"5%",
    height:height*0.04,

    borderColor:BLACK
  },
  applytext: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet?width*0.025:width*0.03
  },
  debitcardtext: {
    color: BLACK,
    paddingHorizontal: isTablet?width*0.01:width*0.02,
    fontSize: isTablet?width*0.022:width*0.035,
    letterSpacing: 0.5,
    fontFamily: IsidoraSemiBold,
  },
  debitcardtext2: {
    color: BLACK,
    paddingHorizontal: 8,
    fontSize:isTablet? width*0.022: width*0.035,
    letterSpacing: 0.5,
    fontFamily: IsidoraSemiBold,
  },
  cardnumbertext: {
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet? width*0.02: width*0.035,
    color:LIGHTGREYTEXT,
    width:isTablet?width*0.13:null,
    // backgroundColor:"red"
  },
  debitcardimages:{
resizeMode:'contain',
height:isTablet?height*0.03:height*0.035,
width:isTablet?width*0.3:width*0.5,
// backgroundColor:"red"
  },
  cardcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    // width: width / 1.4,
    justifyContent: isTablet?"flex-start":"space-between",
    paddingLeft:isTablet?"1%":"2%"
    // backgroundColor:"red"
  },
  cardInput: {
    width:isTablet? width / 4.1: width / 2.2,
    // paddingVertical:height*0.002,
    paddingLeft:width*0.02,
    height:isTablet?height*0.03:height*0.04,

    alignSelf: 'flex-end',
    // paddingLeft:width*0.02,
    borderColor:BLACK,
    borderRadius:width*0.01,

  },
  datecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    marginVertical:"5%",
    justifyContent: isTablet?null:'space-between',
    paddingLeft:isTablet?"1%":"2%"
  },
  datecontainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    justifyContent: 'space-between',
  },
  label: {
   fontFamily:IsidoraSemiBold,
   fontSize:isTablet?width*0.02:width*0.034,
   color:LIGHTGREYTEXT,
   width:isTablet?width*0.13:null,

  //  backgroundColor:"red"
  },
  pickerContainer: {
    flexDirection: 'row',
    marginLeft:isTablet?"0%":"2%",
    // backgroundColor: "red",
    // width:width*0.06
  },
  pickerContainernet: {
    flexDirection: 'row',
    // marginLeft:"5%"
    // backgroundColor: "red",
  },
  dropdown: {
    width:isTablet? width / 9: width / 4.8,
    height: isTablet?height / 35:height / 24,
    // justifyContent:"center",
    backgroundColor: '#E6DEE2',
    borderRadius:isTablet?width*0.007:4,
    padding: 10,
    marginLeft:isTablet?null:width*0.037,
    marginRight:isTablet?width*0.02:null,
  },
  dropdown2: {
    width: isTablet?width / 3:width / 2.2,
    height: isTablet?height / 30:height / 24,
    // justifyContent:"center",

    backgroundColor: '#E6DEE2',
    borderRadius:isTablet?width*0.007:5,
    paddingHorizontal: width*0.03,
    marginHorizontal: width*0.02,
  },
  dropdownContainer: {
    backgroundColor: '#F6F6F6',
  },
  dropdowndatetext:{
    fontFamily:IsidoraMedium,
    color:GRAY,
    textAlign:'center',
    fontSize:isTablet?width*0.0203:width*0.038
  },
  selectedDropText:{
    fontSize:isTablet?width*0.024:width*0.035,
    color:LIGHTGREYTEXT,
    fontFamily:IsidoraMedium
  },
  enterdetailcontainer: {
    // width*0.0
    // borderWidth:1,
    paddingTop: isTablet?'2%':'4%',
    paddingHorizontal:isTablet?"2%":"4%",
    paddingBottom:"2%",
    backgroundColor: LIGHTGRAY2,
    borderRadius:isTablet? width*0.01: width*0.02,
    height:isTablet?height*0.12:null,
    width:isTablet?width*0.35:null,
    marginBottom:isTablet?"2.5%":null,
    alignSelf:isTablet?"flex-end":null,
  },
  cancelButton: {
    width: isTablet?width / 9:width / 3.8,
    justifyContent: 'center',
    marginRight: '2%',
    // paddingVertical:"5%",
    backgroundColor: 'white',
    borderRadius:isTablet?width*0.005:width*0.015,
    // paddingVertical:isTablet?"5.5%":"7%"
    height:isTablet?height*0.025:height*0.04
  },
  carddetailbutton: {
    width: isTablet?width / 5:width / 2.8,

    marginHorizontal: '2%',
    // paddingVertical:"5%",
    backgroundColor: Yellow,
    borderRadius:isTablet?width*0.005:width*0.015,
    height:isTablet?height*0.025:height*0.04,

    // paddingVertical:"5.5%",
    justifyContent: 'center',
  },
  pleaseensure: {
    fontSize: isTablet?width * 0.02:width * 0.034,
    color:'#6F757C',
    fontFamily:IsidoraSemiBold,
    lineHeight:height*0.022
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginHorizontal:"2%",
    marginTop:'1%'
  },
  buttontext: {
    color: BLACK,
    fontSize: isTablet?width *0.015:width / 28,
    fontFamily: IsidoraSemiBold,
  },
  buttontext2: {
    fontSize: isTablet?width *0.015:width / 30,
    fontFamily: IsidoraSemiBold,
    color:WHITE
  },
  conditioncontainer4: {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginTop:"8%"
  },
  conditioncontainer4Tab: {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginTop:"5%"
  },
  conditioncontainer5: {
    flexDirection: 'row',
    marginTop:'3%'
    // margin:"1%"
  },
  upiInput: {
    alignSelf: 'center',
    marginTop: '3%',
    borderWidth: 2,
    color:LIGHTGREYTEXT,
    backgroundColor:isTablet?WHITE:null,
    borderColor:isTablet?LIGHTGREYTEXT:LIGHTGRAY2,
    // paddingVertical: '0.5%',
    // paddingLeft: '4%',
    width: isTablet?width / 3:width / 2.1,
    height:isTablet?height*0.03:height*0.04,
    borderRadius:isTablet?width*0.01:5,
    fontSize: isTablet?width*0.02:width*0.03,
    fontFamily:IsidoraMedium,
    justifyContent: 'center',
    paddingLeft:isTablet?width/9.5:width/7.5
    // marginHorizontal: '3%',


  },
  enterupitext1: {
    color: DARKGRAY,
    paddingHorizontal:isTablet? '1.5%': '2.5%',
    fontSize: isTablet?width *0.02:width / 27,
    letterSpacing: 0.5,
    fontFamily: IsidoraMedium,
    marginTop:isTablet?"3%":"1%"
  },
  enterupitext: {
    color: DARKGRAY,
    paddingHorizontal: '2%',
    fontSize: width / 23,
    letterSpacing: 0.5,
    fontFamily: IsidoraMedium,
  },
  enterupitext2: {
    color: LIGHTGREYTEXT,
    paddingHorizontal: '2%',
    fontSize: isTablet?width*0.02:width / 27,
    fontFamily: IsidoraMedium,
    lineHeight: height*0.025,
    width:width/1.4,
    marginTop:"1%"
    
  },
  enterupitext4: {
    color: LIGHTGREYTEXT,
    paddingHorizontal: '2%',
    fontSize: isTablet?width *0.025:width *0.035,
    letterSpacing: 0.3,
    fontFamily: IsidoraSemiBold,
    lineHeight: height*0.022,
    width:width/1.2
    // marginBottom:"2%"
    
  },
  enterupitext3: {
    color: BLACK,
    paddingHorizontal: isTablet?'3%':'3.5%',
    fontSize:isTablet? width *0.02: width / 27,
    letterSpacing: 0.5,
    fontFamily: IsidoraMedium,
    lineHeight: height*0.025,
    marginTop:"1%"
    
  },
  veryfyButton: {
    // alignSelf:"center",
    marginTop: '10%',
    // borderWidth:2,
    // borderColor:LIGHTGRAY2,
    // paddingVertical: '0%',
    marginLeft: '10%',
    height:isTablet?height*0.03:height*0.04,
    // height:10,
    width: isTablet?width / 7:width / 5,
    borderRadius:isTablet?width*0.007:5,
    justifyContent: 'center',
    backgroundColor: orange,
    // height: height / 23,

    // paddingVertical:"5%"
  },
  verifyButtonText:{
    fontSize:isTablet?width*0.018:null,
  },
  verifycontainer: {
    flexDirection: 'row',
    alignItems:'center',
    
    marginLeft:isTablet?width*0.01:width*0.02
 
  },
  paymentbuttoncontainer: {
    backgroundColor: LIGHTGRAY2,
    // paddingVertical: '2%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  paymentbutton: {
    paddingVertical: isTablet?'2.5%':'4%',
    backgroundColor: Yellow,
    width:isTablet? width / 3: width / 1.25,
    elevation:5,
    shadowColor:BLACK,
    alignSelf: isTablet?'left':'center',
    borderRadius: width*0.08,
    justifyContent: 'center',
    marginLeft:isTablet?width*0.05:null
  },
  usethistext:{
    fontFamily:IsidoraSemiBold,
    fontSize:isTablet?width*0.02:width*0.04,
    color:WHITE
  },
  placeorderbutton: {
    paddingVertical: isTablet?'3%':'4%',
    backgroundColor: Yellow,
    width:isTablet? width / 3: width / 1.1,
    elevation:isTablet?0:5,
    marginBottom:'2.5%',
    shadowColor:BLACK,
    alignSelf: isTablet?null:'center',
    borderRadius: width*0.06,
    justifyContent: 'center',
  },
  placeordertext:{
    fontFamily:IsidoraSemiBold,
    fontSize:isTablet?width*0.021:width*0.04,
    color:WHITE
  },
  itemanddeliveryfirstcontentcontainer: {
    backgroundColor: 'rgba(252, 234, 175,0.7)',
    padding:isTablet? '3%': '5%',
    paddingBottom:isTablet? '5%': null,

    marginVertical: '2%',
    borderRadius: isTablet?15:10,
  },
  ordersummary: {
    borderWidth: 1,
    borderRadius: width *0.028,
    marginTop: '5%',
    borderColor: '#6F757C80',

  },
  subordersummary: {
    padding: isTablet?'3%':'5%',
    paddingBottom:0,
    paddingTop:isTablet?0:null
  },
  securely:{
    fontFamily:IsidoraMedium,
    fontSize:isTablet?width*0.019:width*0.033,
    color:DARKGRAY,
    lineHeight:isTablet?height*0.02:height*0.025,
    marginBottom:'2%',
    width:isTablet?width*0.35:null

  },
  itemdiscount:{
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.035,
    color:LIGHTGREYTEXT,
    lineHeight:height*0.025,
    marginBottom:'2%'
  },
  securely1:{
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.040,
    color:LIGHTGREYTEXT,
    lineHeight:height*0.025,
    marginBottom:'2%'
  },
  orderdetialtextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTotaltextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: LIGHTGRAY2,

    paddingVertical: '4%',
    marginTop: '2%',
  },
  orderTotaltextcontainerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
    borderColor: LIGHTGRAY2,

    paddingVertical: '4%',
    marginTop: '2%',
  },
  totalordertext: {
    color: RED,
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width / 30:width / 25,
  },
  savingtext: {
    color: RED,
    fontFamily: IsidoraBold,
    fontSize: width * 0.035,
    marginTop: '4%',
    marginBottom:"1%"
  },
  dot: {
    height: 5,
    width: 5,
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 5,
    marginRight: '4%',
    marginBottom:'2%'
  },
  itemcontainer: {
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    marginBottom:'5%'
  },
  deliverycosttextcontainer: {
    backgroundColor: LIGHTGRAY2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:1,
    borderColor:'#6F757C80',
    borderBottomLeftRadius:width *0.0275,
    borderBottomRightRadius: width *0.0275,
  },
  costtext: {
    color: RED,
    fontFamily: IsidoraSemiBold,
    fontSize: width / 29,
    marginVertical: '4%',
    textDecorationLine: 'underline',
    // paddingBottom:5
  },
  arihantplustext: {
    textAlign: 'center',
    color: DARKGRAY,
    fontFamily:IsidoraSemiBold,
    fontSize:width * 0.033,
  },
  termstext: {
    color: orange,
    fontFamily:IsidoraSemiBold,
    textAlign: 'center',
    textDecorationLine:"underline",
    fontSize:width * 0.035
  },
  line: {
    borderWidth: 0.5,
    borderColor: GRAY,
    marginTop: '5%',
  },
  needhelptext: {
    marginTop: '5%',
    fontFamily:IsidoraMedium,
    fontSize:isTablet?width*0.022:width*0.028,
    lineHeight:isTablet?height*0.022:height*0.018,
    color:GRAY
  },
  orangetext: {color: isTablet?DARKRED:'#FF6C00',
     fontFamily: IsidoraSemiBold,
     textDecorationLine:"underline"
    },
});
