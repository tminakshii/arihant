import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTGREYTEXT,
  LIGHTORANGE,
  Lightpink,
  LIGHTPURPLE,
  LIGHTPURPLE2,
  orange,
  PURPLE,
  RED,
  WHITE,
  Yellow,
} from '../../values/Colors';
import {
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../../values/Fonts';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    paddingTop: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    alignItems: 'center',
    elevation: 5,
    marginBottom: '0.5%',
    paddingBottom: '1%',
  },
  logo: {
    resizeMode: 'contain',
    height: height / 25,
    width: width / 3,
    // marginHorizontal:"5%"
  },
  headerTime: {
    fontFamily: IsidoraMedium,
    fontSize:width*0.03,
    color:'#222'
  },
  questionsContainer: {
    backgroundColor: WHITE,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    // flex:1
    // position:"relative"
  },
  questionsContainerR: {
    backgroundColor: WHITE,
    alignItems: 'center',
    flexDirection: 'column',
    width:width*0.12,
flexGrow:1 ,
paddingBottom:'2%'},
  LeftquestionsContainer: {
   backgroundColor:WHITE,
    zIndex:1,
    height:height/1.1,
    width:width/15,
    marginLeft:"5%",
    paddingBottom:10,
    backgroundColor:"red"
  },
  mainView:{
// zIndex:0,
// marginLeft:"2%",
// position:"relative"
  },
  modalquetionscontainer:{
    backgroundColor: WHITE,
    height: height * 0.2,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    flexWrap:"wrap",
    zIndex:-2
    // paddingVertical:"5%"
  },
  headerquestion: {
    borderColor: PURPLE,
    // marginHorizontal: 5,
    borderWidth: 1,
    width: width / 16,
    height: width / 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:width*0.015,
    // backgroundColor:"red"
    // marginVertical:5,
  },
  headerquestion1: {
    borderColor: PURPLE,
    marginHorizontal: width*0.015,
    borderWidth: 1,
    width: width / 16,
    height: width / 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:height*0.01
  },
  headerQuestionNumber: {
    color: BLACK,
    // fontFamily: IsidoraSemiBold,
    fontWeight:"400",
    fontSize: width * 0.038,
  },
  homejee: {
    // marginTop: '7%',
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: width * 0.042,
    textAlign: 'left',
    // marginLeft: '6%',
  },
  headingandLanguageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    marginHorizontal:"6%"
  },
  headingandLanguageContainer2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    width:width*0.84
    // marginLeft: '6%',
    // marginRight: '2%',
  },
  years: {
    color: DARKGRAY,
  },
  questionContainer: {
    backgroundColor: WHITE,
    width: width / 1.1,
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: '5%',
    padding: '5%',
    paddingBottom:height*0.13,
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2
  },
  questionText: {
    color: BLACK,
    fontSize: width*0.0362,
    fontFamily: IsidoraSemiBold,
    marginBottom: '1%',
    lineHeight:height*0.025
  },
  questionInfo: {
    color: GRAY,
    fontSize: width * 0.03,
    fontFamily: IsidoraSemiBold,
  },
  answers: {
    marginTop: '5%',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
  },
  radio: {
    width: width * 0.035,
    height: width * 0.035,
    borderRadius: (width * 0.045) / 2,
    // borderColor: BLACK,
    // borderWidth: 1,
  },
  radio2: {
    width: width * 0.044,
    height: width * 0.044,
    borderRadius: (width * 0.045) / 2,
    borderColor: BLACK,
    borderWidth: 1,
    justifyContent:"center",
    marginRight:10,
    alignItems:"center",
  },
  answerText: {
    color: BLACK,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.035,
    marginLeft: '5%',
  },
  subjectCategory: {
    // flexDirection: "row",
    // paddingVertical: "3%",
    // paddingHorizontal:20,
    marginHorizontal: '3.3%',
    borderColor: GRAY,
    marginTop: '5%',
    // Make sure to set a width if necessary
    // minWidth: '100%',
  },
  subjectCategory2: {
    // flexDirection: "row",
    // paddingVertical: "3%",
    // paddingHorizontal:20,
    // marginHorizontal: '5%',
    // borderColor: GRAY,
    marginTop: '5%',
    // paddingRight:50,
    // Make sure to set a width if necessary
    // minWidth: '100%',
  },
  subjectbox: {
    backgroundColor: '#e0d3e0',
    marginHorizontal:width*0.02,
    // paddingVertical:"2%",
    // borderWidth: .5,
    borderRadius: width*0.01,
    // paddingHorizontal: width*0.045,
    width:width*0.27,
    height:height*0.037,
    alignItems:"center",
    justifyContent:"center"
  },
  activesubjectbox: {
    backgroundColor: WHITE,
    marginHorizontal:width*0.02,
    height:height*0.037,
    width:width*0.27,

    // paddingVertical:"2%",
    borderWidth: 0.5,
    borderRadius: width*0.01,
 alignItems:"center",
    justifyContent:"center",
    borderColor: orange,
    // paddingHorizontal: width*0.045,

  },
  activesubjectbox2: {
    // backgroundColor: WHITE,
    // marginHorizontal: 8,
    // // paddingVertical:"2%",
    borderWidth: 0.5,
    alignItems:'center',
    justifyContent:'center',
    // borderRadius: 5,
    borderColor: orange,
    paddingHorizontal: 10,
    height:height*0.035

  },
  subjectbox2:{
    backgroundColor: LIGHTGRAY2,
    marginHorizontal: 8,
    justifyContent:'center',

    // paddingVertical:"2%",
    // borderWidth: .5,
    alignItems:'center',

    borderRadius: 5,
    paddingHorizontal: 10,
    height:height*0.035

  },
  subjectName: {
    // marginHorizontal: "2%",
    marginHorizontal: 5,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    paddingVertical: 3,
    fontSize: width*0.03,
  },
  subjectName2: {
    // marginHorizontal: "2%",
    textAlignVertical:'center',
    textAlign:'center',
    marginHorizontal: 5,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    paddingVertical: 3,
    fontSize: width / 30,
  },
  //   categoryText: {
  //     textAlign: 'left',
  //     fontSize: width * 0.028,
  //     fontFamily: IsidoraMedium,
  //     color: DARKGRAY,
  //     width: width * 0.2,
  //     // height: 30,
  //     marginTop: '3%',
  //     lineHeight: height * 0.016,
  //   },
  saveBUtton: {
    backgroundColor: Yellow,
    height: height / 25,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width*0.014,
    // padding: 0,
    marginTop: height / 25,
  },
  saveBUtton1: {
    backgroundColor: orange,
    height: height / 22,
    width: width / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 0,
    marginTop: height / 25,
  },
  savetext: {
    fontFamily: IsidoraSemiBold,
    fontSize:width*0.03
  },

  footerButtonstyle: {
    backgroundColor: '#E7DEE3',
    height: height / 25,
    width: width / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width*0.014,
    padding: 0,
    marginTop: height / 30,
    borderWidth: 0.5,
  },
  footerButtonstyle2:{
    backgroundColor: WHITE,
    height: height / 25,
    width: width / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width*0.014,
    padding: 0,
    marginTop: height / 30,
    borderWidth: 0.5,
  },
  footerButtonstyle1: {
    backgroundColor:LIGHTPURPLE,
    height: height / 22,
    width: width / 4.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width*0.014,
    marginTop: height / 25,
    borderWidth: 0.5,
    
  },
  footerbuttontextstyle: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: width / 33,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
     backgroundColor: WHITE,
    paddingBottom: '7%',
    paddingHorizontal:"3.5%"
  },
  footerContainer1: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    // zIndex:10

  
  },
  footerdirection:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginHorizontal:"5%",
    // backgroundColor: "red",s
    paddingBottom: 10,
    alignSelf:"center"
    
  },
  quetionDetails: {
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5%',
    borderBottomWidth: 1,
    paddingBottom: '2%',
    width:width*0.82,
    borderBottomColor: '#6F757C',
  },
  quetionDetailsL: {
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5%',
    borderBottomWidth: 1,
    paddingBottom: '2%',
    width:width*0.85,
    borderBottomColor: LIGHTGRAY2,
    // backgroundColor:'red',
    paddingRight:width*0.05
  },
  markscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // width:width*0.
  },
  report: {
    // textAlign:"center",
    // justifyContent:"center",
    fontSize: width / 45,
    color: orange,
    textAlignVertical: 'center',
  },
  reportView: {
    // padding:2,
    height: height / 55,
    width: height / 55,
    backgroundColor: WHITE,
    borderRadius: width*0.4,
    borderColor: orange,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
  },
  reporttext: {
    color: orange,
    textDecorationLine: 'underline',
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.03
  },
  numberContainer:{
    backgroundColor: '#f5f5f5',
    borderColor:LIGHTGRAY3,
    borderWidth:1,
    marginLeft:5,
    borderRadius:2,

justifyContent:"center",
alignItems:"center"
  },
  numberContainer2:{
    backgroundColor: '#f0dff0',
    // borderColor:LIGHTGRAY3,
    // borderWidth:1,
    marginLeft:15,
    borderRadius:2,

justifyContent:"center",
alignItems:"center"
  },
  marksdetails: {
    fontSize: width / 30,
    marginHorizontal: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontFamily: IsidoraMedium,
    color:BLACK,
    // padding:1,
    borderRadius:2
  },
  timedetail: {
    fontSize: width / 30,
    // backgroundColor: '#f0dff0',
    // marginHorizontal: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontFamily: IsidoraMedium,
    // marginLeft: 15,
    color:'#222',
    borderRadius:2,
  },
  markText: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    // marginRight: 5,
    fontSize:width*0.03,
  },
  quetionNumber: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: width / 25,
  },
  languagebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '5%',
  },
  placeholderStyle: {
    fontSize: width * 0.035,
    color: RED,
    fontFamily: IsidoraMedium,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontFamily: IsidoraMedium,
    fontSize: width * 0.035,
    color: RED,
    marginLeft: width * 0.04,
  },
  iconStyle: {
    width: width * 0.05,
    height: height * 0.009,
    marginRight: width * 0.03,
  },
  inputSearchStyle: {
    fontSize: width * 0.035,
  },
  searchvalues: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.05,
    // alignSelf:'center',
    marginVertical: '4%',
    paddingVertical: '3.5%',
    // borderBottomWidth: 0.2,
    borderBottomColor: GRAY,
    textAlign: 'center',
    color: RED,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.04,
  },
  dropdown: {
    height: height * 0.03,
    // marginRight:5,
    // marginTop: '2%',
    width: width * 0.25,
    backgroundColor: WHITE,
    alignItems: 'center',
    borderRadius: width * 0.01,
    borderWidth: 0.5,
    // justifyContent:'space-evenly'
  },
  border: {
    width: width,
    // backgroundColor: LIGHTGRAY2,
    height: 2,
    position: 'relative',
    // alignItems:"center",
  },
  border1: {
    position:"absolute",
    bottom:8,
    width: width,
    // backgroundColor: LIGHTGRAY2,
    height: 2,
    position: 'relative',
    // alignItems:"center",
  },
  border1R: {
  justifyContent:'center',
  // marginLeft:'auto',
  position:'absolute',
  bottom:0,
  },
  border1L: {
  justifyContent:'center',
  // marginLeft:'auto',
  position:'absolute',
  bottom:0,
  right:width*0.045,
  zIndex:-1
  },
  downarrow: {
    resizeMode: 'contain',
    height: height / 45,
    width: width / 13,
    // backgroundColor:WHITE
  },
  downarrowR: {
    resizeMode: 'contain',
    height: height / 10,
    width: width / 40,
    position:"absolute",
    alignSelf:'center',
    left:0,
    marginRight:4,
    zIndex:999,
    // backgroundColor:'yellow',
    top:height*0.015
    // backgroundColor:WHITE
  },
  downarrowL: {
    resizeMode: 'contain',
    height: height / 12,
    width: width / 28,
    position:"absolute",
    alignSelf:'center',
    left:width*0.025,
    // marginRight:4,
    zIndex:999,
    top:height*0.028
    // backgroundColor:WHITE
  },
  forcloseButton:{
marginTop:"2%",
marginHorizontal:"17%",
borderBottomWidth:1,
paddingBottom:"3%",
borderBottomColor:GRAY,
// justifyContent:"center",
alignItems:"center"
  },
  forcloseButtonios:{
    marginTop:"15%",
    marginHorizontal:"17%",
    borderBottomWidth:1,
    paddingBottom:"3%",
    borderBottomColor:GRAY,
    // justifyContent:"center",
    alignItems:"center"
      },
  customheadingtext:{
    fontSize:width/20,
    marginTop:"4%"
  },
  crossbuttonStyle:{
    height: height*0.04,
    width: height*0.04,
    borderRadius: width*0.5,
    borderWidth:1,
    borderColor:LIGHTGREYTEXT,
    backgroundColor: WHITE,
    justifyContent:"center",
    alignItems:"center"
   
  },

  modalContent: {
    backgroundColor: WHITE,
    flex: 1,
    // paddingTop:StatusBar.currentHeight
  },
  markedDetails: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginLeft:"4%"
  },
  answered: {
    backgroundColor: '#FACB63',
    justifyContent: 'center',
    alignItems: 'center',
    height: height/45,
    width: height/45,
    // borderRadius:height/20,
    borderTopLeftRadius: height/20,
    borderTopRightRadius: height/20,
    marginRight:"5%",


  },
  NotAnswered: {
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: height/45,
    width:  height/45,
    // borderRadius:height/20,
    borderBottomLeftRadius:height/20,
    borderBottomRightRadius: height/20,
    marginRight:"5%",


  },
  Marked: {
    backgroundColor: RED,
    justifyContent: 'center',
    alignItems: 'center',
    height: height/45,
    width: height/45,
    borderRadius:height/20,
    marginRight:"5%",



  },
  NotVisited: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    height: height/43,
    width: height/43,
    // borderRadius:height/20,
    marginRight:"5%",
    borderWidth:1,
    borderColor:LIGHTGRAY3,
    borderRadius:2,


  },
  MarkedandAnswered: {
    height:height/45,
    width: height/45,
    marginRight:"5%",
    resizeMode:'contain'
  },

  directionrow: {
    flexDirection: 'row',
    marginTop:"6%",
    // backgroundColor:"red",
    width:width/4,
    marginRight:"7%",
    alignItems:"center"

},
numbertext:{
    color:WHITE,
    fontSize:width/30,
    // fontFamily:IsidoraMedium


},
numbertext1:{
    color:BLACK,
    fontSize:width/35,
  // fontFamily:IsidoraMedium

},
answerText:{
    fontFamily:IsidoraMedium,
    color:BLACK,
    fontSize:width/30,
    // marginHorizontal:"5%"
},
subjectButtonStyle:{
backgroundColor:'#CCB9C4',
alignItems:"center",
justifyContent:"center",
width:width/1.08,
alignSelf:"center",
borderRadius:5,
paddingVertical:height*0.012
},
subjecttextstyle:{
color:BLACK,
fontFamily:IsidoraSemiBold,
fontSize:width * 0.03
},
submitmodalcontainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  
},
instructionmodalcontainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',

// height:"100%",
// width:"100%"
  
},
reportmodalbox:{
  flex:1,
  // marginTop:'65%',
  justifyContent:'center',
  alignItems:"center",
  borderWidth:0.000001,
  

},
issuebox:{
  textAlign:"center",
  fontFamily:IsidoraSemiBold,
  color:DARKGRAY,
  fontSize:width*0.03
  // textAlignVertical:"center",
  // borderBottomWidth:0.3
},
innerReportmodal:{
  borderColor:RED,
  borderWidth:0.8,
  paddingHorizontal:width*0.02,
  backgroundColor:LIGHTGRAY,
  borderRadius:5,
  // position:'absolute',
  // top:height*0.35
  
},
innertext:{
  width:width*0.4,
  paddingVertical:height*0.015,
  borderBottomWidth:0.8,
  borderBottomColor:LIGHTGRAY2
},
devideView:{
  flexDirection:"row",
  // width:width,
  // flexWrap:'wrap'
// flex:1
},
mainviewareaR:{
  flexDirection:"row-reverse",
  flex:1
},
mainviewareaL:{
  flexDirection:"row",
  flex:1,
},
homejeeR:{
  fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: width * 0.04,

},
questioncontainerR:{
  // backgroundColor:'red',
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:height*0.02
},
sideupperbox:{
  width:width*0.88,
  // paddingHorizontal:width*0.035,
  paddingLeft:width*0.06,
  // backgroundColor:"red"

},
sideupperboxL:{
  width:width*0.89,
  // paddingHorizontal:width*0.035,
  paddingRight:width*0.08,
  marginLeft:width*0.055
  // backgroundColor:"red"

},
subjectcontainerR:{
  marginTop:height*0.015,
  marginBottom:height*0.05
},
subjectNameR: {
  // marginHorizontal: "2%",
  textAlignVertical:'center',
  textAlign:'center',
  marginHorizontal: 5,
  fontFamily: IsidoraMedium,
  color: DARKGRAY,
  paddingVertical: 3,
  fontSize: width / 30,
},
// rightsideinnerscrollR:{
//   marginRight:2
// },
activesubjectboxR:{
  borderWidth: 0.5,
  alignItems:'center',
  justifyContent:'center',
// width:width*0.2,
  borderColor: orange,
  marginRight:width*0.035,
  paddingHorizontal:width*0.015,
  borderRadius:4,
  backgroundColor:WHITE,
  paddingVertical:height*0.0035
  
},
subjectboxR:{
  backgroundColor: LIGHTGRAY2,
    marginRight:width*0.035,
    justifyContent:'center',
    alignItems:'center',
  paddingHorizontal:width*0.015,
  borderRadius:4,
  paddingVertical:height*0.0035


},
footerContainerR: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  flexDirection: 'row',
  justifyContent: "space-between",
  // backgroundColor: WHITE,
  paddingVertical: 10,
  marginLeft:"5%"
},
footerContainerL: {
  position: 'absolute',
  bottom: 0,
  width: width/1.14 ,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  backgroundColor: WHITE,
  paddingVertical: 5,
  marginRight:"5%",
  paddingBottom:'7%',
  right:width * 0.01
},
footerButtonstyleR: {
  backgroundColor: '#E7DEE3',
  height: height / 24,
  width: width / 4.2,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: width * 0.011,
  padding: 0,
  marginTop: height / 45,
  borderWidth: 0.5,
  borderColor:'#6F757C'
},
footerButtonstyleR2: {
  backgroundColor: WHITE,
  height: height / 24,
  width: width / 4.2,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: width * 0.011,
  padding: 0,
  marginTop:height / 45,
  borderWidth: 0.5,
  borderColor:'#6F757C'
},
footerbuttontextstyleR: {
  fontFamily: IsidoraSemiBold,
  color: BLACK,
  fontSize: width / 35,
},
borderR:{
  // width:width*0.002,
  // height:height,
  justifyContent:'center',
  zIndex:999,
},
sidearrow:{
  resizeMode:'contain',
  height:height*0.095,
  width:width*0.04,
 
  // backgroundColor:'red'
},
sidearrowL:{
  resizeMode:'contain',
  height:height*0.087,
  width:width*0.04,
  // marginTop:height*0.14,
  // backgroundColor:'red'
},
arrowbackR:{
  resizeMode:'contain',
  width:width*0.13,
  alignItems:'flex-end',
  paddingRight:width*0.015,
  zIndex:0,
  position:'relative' 
  // backgroundColor:WHITE
  // tintColor:WHITE
},
arrowbackL:{
 flexDirection:'row',
//  backgroundColor:"red"
//  width:width*0.1
},
imagelong:{
  // backgroundColor:'red',
  resizeMode:"contain",
  // tintColor:GRAY,
  height:height,
  width:width*0.1,
  position:"absolute",
  left:width*0.08
},
rightsideinnerscrollL:{
  backgroundColor:WHITE,
  paddingLeft:width*0.01

}

});
