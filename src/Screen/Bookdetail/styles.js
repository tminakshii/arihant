import { Dimensions, StyleSheet } from "react-native"
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from "../../values/Fonts"
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTBLUE, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREYTEXT, LIGHTORANGE, LIGHTPURPLE, LIGHTPURPLE2, orange, RED, Redcolor, WHITE } from "../../values/Colors"
import { ScreenRatio } from "../../values/Ratio"
import DeviceInfo from "react-native-device-info"
const { width, height } = Dimensions.get('window')
const isTablet=DeviceInfo.isTablet()
export const styles = StyleSheet.create({
   
    Detailpage: {
        flex: 1,
    },
    book: {
        marginTop: "4%",
        resizeMode: 'contain',
        height: height / 2.5,
        width: width,
        elevation:6,
        alignSelf: 'center',
    },
    bookTab: {
        marginTop: isTablet?null:"4%",
        resizeMode: 'stretch',
        height: height / 3.35,
        width: width*0.345,
        elevation:6,
        // backgroundColor:"red"
        // alignSelf: 'center',
    },
    imagecontainer: {
        alignContent: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
    imagecontainerTab: {
        // width: width*0.4,
        // height: height / 3.2,
       
        // alignContent:"flex-start",
        // justifyContent: "flex-start",
        // backgroundColor:"red"
        // flexDirection: 'row',
    },
    aboutbook: {
        marginVertical: '6%',
        marginTop:'8%',
        paddingHorizontal: '5%'
    },
    aboutbookTab: {
        marginVertical:height*0.02,
        marginTop:'7%',
        marginLeft:'4%'
    },
    // heading: {
    //     fontFamily: IsidoraSemiBold,
    //     fontSize: width * 0.04,
    //     color: DARKGRAY,
    //     lineHeight: height * 0.025
    // },
    headingbox: {
        flexDirection: 'row',

    },
    shareicon: {
        // right: '1%',
        top:"2%",
        marginLeft:'15%',
        width:width * 0.04,
        height:width * 0.04,
        resizeMode:'contain'

    },
    subheading: {
        marginTop: '2%',
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.022:width * 0.035,
        paddingHorizontal:isTablet?null:"3%",
        color: LIGHTGREYTEXT,
        lineHeight:isTablet?height * 0.02:height * 0.025,
        width:isTablet? width / 2: null,

        // backgroundColor:"red"
        // textAlign:"center"
    },
    paperback: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.0225:width * 0.041,
        // fontSize: 15,
        color: DARKGRAY,
        marginTop: isTablet?'1%':'2.5%',
        alignSelf:isTablet? 'left': 'center'

    },

    by: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        // fontSize: 13,

        fontSize: isTablet?width * 0.022:width * 0.035,
        alignSelf:isTablet?"flex-start": 'center',
        marginTop: isTablet?'2.5%':'2%'
    },
    name: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: isTablet?width * 0.022:width * 0.035,
    },
    rating: {
        fontFamily: IsidoraSemiBold,
        flexDirection: 'row',
        alignItems: "center",
        alignSelf:isTablet? "flex-start": 'center',
        marginTop: "3%",
    },
    ratingText: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.022:width * 0.035,
        marginRight:"1%"
    },
    rate: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: isTablet?width * 0.022:width * 0.035,

        marginLeft:'2%'

    },
    reviewmodal: {
         width: width / 1.2,
         paddingHorizontal: '3%',
         marginTop:"2%"
        // height:height,
        // paddingBottom:'5%'
    },
    customStyleProgress:{
backfaceVisibility:"red"
    },
    reviewmodalBotttom:{
        width:isTablet?width/2:width,
        paddingHorizontal: '2.5%',
        // paddingBottom:'5%'
    },
    bestbox: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf:isTablet?"flex-start": 'center',
        marginLeft:isTablet?null:"10%",
        marginBottom:"2%"
    },
    bestsellerbox: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: orange,
        width: isTablet?width / 5.4:width / 4.3,
        marginVertical: '4%',
        borderRadius: width * 0.008,
        paddingVertical: '0.6%'
    },
    readsamplebox: {
        height: isTablet?height * 0.06:height * 0.070,
        width: isTablet?width * 0.1:width * 0.1665,
        borderWidth: 1,
        borderColor: DARKGRAY,
        borderRadius: width *0.01,
        justifyContent: 'center',
        alignItems: 'center',

    },
    readsampleboxTab: {
        height: height*0.035,
        width:width * 0.22,
        borderWidth: 1,
        borderColor: GRAY,
        borderRadius: width *0.03,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:"3%",
        backgroundColor:GRAY


    },
    readsampletext: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.022:width * 0.033,
        color: isTablet?WHITE:DARKGRAY,
        textAlign: 'center',
        lineHeight: height * 0.018

    },
    BookbottomContainer: {
        flexDirection: 'row',
        alignItems:isTablet?"flex-start": 'center',
        justifyContent:isTablet?"space-between":"space-between",
        marginHorizontal:isTablet?0:"2%",
        width:isTablet?width*0.61:null
    },
    seller: {
        color: WHITE,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.022:width * 0.03,
        // fontSize: 11,

    },
    exam: {
        marginLeft: '5%',
        fontFamily: IsidoraSemiBold,
        // fontWeight:"500",
        color: DARKGRAY,
        fontSize:isTablet? width * 0.022: width * 0.035,


    },
    shippingTab: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: LIGHTPURPLE,
        marginVertical: '5%',
        marginTop:'2%',
        paddingTop: '4%',
        // paddingBottom:"5%",
        // marginHorizontal: '5%'
    },
    shipping: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: LIGHTPURPLE,
        marginVertical: '5%',
        paddingVertical: '4%',
        paddingBottom:"5%",
        marginHorizontal: '5%'
    },
    papertype: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    publisher: {
        borderTopWidth: 1,
        borderColor: '#757676',
        marginVertical: '5%',
        paddingTop: '4%',
        marginHorizontal: '5%',
    },
    publisherscroll: {
        // backgroundColor:"red"
        // backgroundColor:"red"
        // verticalAlign:'middle',
        // alignItems: 'center',

    },
    reviewtitle: {
        color: BLACK,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.027:width * 0.047,
        // fontSize: 17,

        marginBottom: isTablet?'3%':'5%',
        marginLeft: '5%',
        lineHeight: height*0.028,
        color: WHITE
    },
    reviewscroll: {
        alignItems: 'center',
        marginTop:isTablet?null:"2%",
        overflow:"hidden",
        paddingHorizontal:width*0.023

    },
    reviewContainer: {
        backgroundColor: RED,
        paddingVertical:isTablet? '4%': '5%',
        paddingTop:isTablet?null: '8%',
        marginTop:isTablet?'7%':'3%',
        paddingBottom:isTablet?"6%":null
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    datanotfound: {
        flex: 1,
        alignItems: 'center',
        marginTop: '70%'
    },
    notfoundtext: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width*0.035
    },
    topreviewTitle: {
        width:isTablet?width / 4.7:width / 3.4,
        paddingVertical:isTablet?'2.3%':'1.5%',
        marginLeft: '5%',
        backgroundColor: DARKGRAY,
        borderRadius: width*0.05,
        marginTop:isTablet?"0%":"6%"
    },
    topreviewText: {
        color: WHITE,
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.02:width * 0.03,
        // fontSize: 11,

        textAlign: 'center',

    },
    indiatopreviewstext: {
        color: BLACK,
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.03:width * 0.041,
        marginLeft: '5%',
        marginTop: isTablet?'7%':'4%'
    },
    topreviewScroll: {
        marginHorizontal: '5.3%',
        marginTop:isTablet?'5%':null
    },
    reviewviewmorebutton:{
        marginBottom:"5%",
        marginLeft:"5%",
        // backfaceVisibility,
        // backgroundColor:"red",
        // borderWidth:1,
        // borderColor:"red"
        // elevation:5
    },
    myStarStyle:{

    },
    upperBigimage: {
        resizeMode: 'contain',
        height: undefined,
        aspectRatio:20.7/10.6,
         width: width,
        // backgroundColor:"red"
    },
    upperBigimageTab: {
        resizeMode: 'contain',
        height: undefined,
        aspectRatio: 16 / 5.4, 
        width: width,
        alignSelf: 'center',
        marginTop:"0%",
        // backgroundColor:"red"
        // marginTop: height * 0.01,
      },
    homejee: {
        marginHorizontal: isTablet?'4%':null,
        marginTop: '3%',
        fontFamily: IsidoraMedium,
        color: GRAY,
        fontSize: isTablet?width * 0.023:width * 0.029,
        // fontSize:11,
        textAlign:isTablet? "left": 'center'
    },
    years: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
    },
    oldissuebox: {
        backgroundColor: LIGHTORANGE,
        alignItems: 'center',
        width: width / 4.5,
        borderRadius: 15,
        marginLeft: '12.5%',
    },
    oldissuetext: {
        fontFamily: IsidoraBold,
        color: orange,
        fontSize: width * 0.03,
        paddingVertical: '4%',
    },
    oldissuecontainer: {
        marginVertical: '10%',
        marginTop:'3%',
        paddingHorizontal:"5%",
        // backgroundColor:"red"

    },
    imagesider: {
        alignSelf: isTablet?'left':'center'
    },
    youtubecontainer: {
        height: isTablet?width * 0.104:height * 0.070,
        width: isTablet?width * 0.1:width * 0.1665,
        borderWidth: 1,
        borderColor: DARKGRAY,
        borderRadius: width *0.01,
        justifyContent: 'center',
        alignItems: 'center',
    },
    red: {
        backgroundColor: Redcolor,
        height: isTablet?height*0.03:height*0.0359,
        width: isTablet?height*0.03:height*0.0359,
        borderRadius: height*0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quick: {
        
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.02:width * 0.034,
        color: DARKGRAY,
        textAlign: 'center',
        lineHeight: height * 0.018,
    },
    graybox: {
        height: isTablet?width * 0.104:height * 0.070,
        width: isTablet?width * 0.1:width * 0.1665,
        borderWidth: 1,
        borderColor: DARKGRAY,
        borderRadius: width *0.01,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#717171',
        paddingHorizontal:3

    },
    quickView: {
        height: isTablet?width * 0.104:height * 0.070,
        width: isTablet?width * 0.1:width * 0.1665,
        borderWidth: 1,
        borderColor: DARKGRAY,
        borderRadius: width *0.01,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Iit: {
        fontSize: isTablet?width * 0.015:width * 0.025,
        textAlign: 'center',
        fontFamily: IsidoraSemiBold,
        color: WHITE
    },
    go: {
        fontSize: isTablet?width * 0.02:width * 0.028,
        textAlign: 'center',
        fontFamily: IsidoraSemiBold,
        color: WHITE
    },
    crack: {
        fontSize: isTablet?width * 0.02:width * 0.028,

        textAlign: 'center',
        fontFamily: IsidoraSemiBold,
        color: WHITE
    },
    frequentlyContainer: {
        marginTop:height*0.08,

    },
    frequentlyText: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.03:width * 0.04,
        color: DARKGRAY,
        marginLeft:isTablet?'4%':'5%'

    },


    latest: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.03:width * 0.045,
        marginLeft:isTablet?'4%':'5%',
        marginBottom:'1%',
        marginTop: isTablet?'4%':'7%'
    },
    swiperontestseries: {
        marginBottom: '2%',
    //   paddingHorizontal:width*0.02
    },
    enhance: {
        color: GRAY,
        fontFamily: IsidoraMedium,
        fontSize: isTablet?width * 0.02:width * 0.03,
        marginLeft:isTablet?'4%':'5%',
        lineHeight: height * 0.018,
        marginBottom:isTablet? '3%': '6%'
    },
    testseriescontainer: {
        // marginBottom: '5%'
    },
    alldetail: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width*0.02:width * 0.033,
        color: RED,
        // backgroundColor:'red',
        marginTop:ScreenRatio(2.5),
        width:ScreenRatio(25),
        paddingHorizontal:ScreenRatio(3),
        lineHeight: height * 0.02,
    },
    movescroll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        width: width,

    },
    writereviewButton: {
        borderColor: LIGHTGREYTEXT,
        borderWidth: 0.9,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        width:isTablet?width/3:null,
        borderRadius:isTablet?width*0.009:5,
        paddingVertical: isTablet?'2%':'1.5%'
    },
    reviewbuttontext: {
        fontFamily: IsidoraMedium,
        fontSize:isTablet?width * 0.024:width * 0.036,
        color: GRAY
    },
    reviewthis: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.025:width * 0.041,
        // fontSize: 15,

        color: DARKGRAY,
        marginLeft: '5%',
        marginTop:isTablet?'2%':null,
        marginBottom: isTablet?'1%':'2%'
    },
    sharethought: {
        fontFamily: IsidoraMedium,
        fontSize:isTablet?width * 0.022:width * 0.036,
        // fontSize: 13,
        width:isTablet?'90%':null,
        color: GRAY,
        marginLeft: '5%'
    },
    seeCustomerbuttontext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.032,
        color: GRAY,
        // textAlignVertical:'center'
        // marginTop:height*0.01

    },
    seeCustomerbutton: {
        alignContent: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        // paddingHorizontal: '25%',
        width:width* 0.75,
        borderTopColor: LIGHTGRAY2,
        marginTop: height * 0.001,
        paddingTop: height * 0.02
    },
    popularbookcontainer: {
        // paddingRight:width*0.035
    },
    popularTitle: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: isTablet?width * 0.03:width * 0.045,
        marginLeft: '4%',
        marginTop: '3%',
        marginBottom:"4%"
    },
    popularTitle2: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: isTablet?width * 0.03:width * 0.045,
        marginLeft: '4%',
        marginTop:isTablet?'4%':'6%',
        marginBottom:"4%"
    },
    viewallbox: {
        marginVertical:isTablet?'4%':'6%',
    },
    quickimage: {
        height: isTablet?height / 1.7:height / 1.5,
        width: width / 1.1,
        resizeMode: 'contain'
    },
    viewimagecontainer: {
        marginTop: '4%',
        alignItems: 'center',
        marginBottom: height * 0.01,
      },
      imageviewscroll: {
        alignItems: 'center',
        paddingHorizontal: width * 0.03, // Add padding for better spacing
      },
      quickViewscrollimage: {
        width: width / 4.2,
        height: height / 6,
        borderWidth: 1,
        borderColor: DARKGRAY,
      },
      quickViewscrollimage1: {
        width: width / 4.2,
        height: height / 6,
        borderWidth: 1.5,
        borderColor: orange,
      },
      imageouterbox: {
        marginHorizontal: width * 0.015, 
        // borderWidth: 1,
        // borderColor: DARKGRAY,

        marginTop:isTablet?"5%":null


      },
      selectedImageBorder:{
       
        marginHorizontal: width * 0.015, 
        borderWidth: 1,
        // borderColor: DARKGRAY,
        borderColor: orange,
      },
    closequick: {
        top: '5%'
    },
    modalheading: {
        paddingTop: height * 0.02,
        // marginHorizontal: "8%"
    },
    modalheading1: {
        paddingTop: height * 0.02,
textAlign:"center"  
  },
  sharemodalcontainer:{
  },
    video: {
        width: width / 1.1,
        height: height / 3.5,
        position: 'relative',
        resizeMode: 'cover',
        backgroundColor: 'red'
        // position: 'absolute',

    },
    quickviewmodalbox: {
        width: width,
        height: height,
        borderRadius:0


    },
    customreadsamplebox:{
        width: width,
        height: height,
        borderRadius:0

    },
    quickmodalheading: {
        paddingTop: "10%",
        marginLeft: "auto",
        // marginTop:"5%"
    },
    readsampleclose:{
     paddingTop: isTablet?"2%":"10%",
    paddingLeft:width*0.5
    },
    reviwmodalbox: {
        width: width/1.1,
        height: isTablet?height * 0.47:height * 0.45,
        paddingHorizontal:"7%",
        // backgroundColor:"red"
    },
    reviwmodalbox2: {
        width: width / 1.1,
        height: height * 0.28,
        justifyContent:'center'
        // paddingVertical:5
    },
    sharecontent:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:width/1.3,
        marginTop:height*0.02,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:LIGHTGRAY2,
        paddingVertical:height*0.03
    },
    shareText:{textAlign:"center",fontFamily:IsidoraBold,fontSize:width/25,color:BLACK},
    shareCloseButton:{
        // borderWidth:1,
        backgroundColor:GRAY,
        justifyContent:"center",
        alignItems:"center",
        width:width/6,
        alignSelf:"center",
        borderRadius:5,
        paddingVertical:5
    },
    reviewcardtext: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet?width * 0.03:width * 0.046,
        // fontSize: 17,
        color: DARKGRAY,
        paddingLeft:isTablet?null:'5%',
        marginLeft:isTablet?'5.3%':null,
        borderTopWidth:isTablet?0:1,
        borderTopColor:LIGHTGRAY2,
        paddingTop:isTablet?'3%':"7%",
        paddingBottom:isTablet?0:"2%"
    },
    backarrow: {
        // backgroundColor: WHITE,
        height: height / 10,
        width: width / 8,
        justifyContent: "center",
        alignItems: "center",
    },
    nextarrow: {
        // backgroundColor: WHITE,
        height: height / 10,
        width: width / 7,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: WHITE,
        // height: height / 30,
        // width: width / 15,
        // justifyContent: "center",
        // alignItems: "center",
        // // right: "-4%",
        // borderRadius:width/15*2,
        // borderWidth:0.5,
        // borderColor:GRAY


    },
    animationtextTab: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '8%',
        paddingHorizontal: '5%',
        backgroundColor:WHITE

    },
    animationtext: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8%',
        paddingHorizontal: '5%',
        backgroundColor:WHITE,
        marginBottom:"10%"

    },
    heading: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet? width * 0.028: width * 0.048,
        // fontSize:19,
        textAlign: isTablet?'left':'center',
        lineHeight: isTablet?height * 0.02:height*0.027,
        width:isTablet? width / 2: width / 1.2,
        marginBottom:isTablet?'1.7%':0
    },
    headingArihant: {
        color: orange,
    },
    exploreimg:{
        resizeMode:"contain",
        height:height*0.025,
        width:width*0.15,
        alignSelf:"flex-start",
        marginTop:"5%"
        // backgroundColor:'red'
      },
    subHeading: {
        color: inputBordercolor,
        fontFamily: IsidoraMedium,
        fontSize:isTablet?width * 0.02:width * 0.033,
        // fontSize:13,
        textAlign: isTablet?'left':'center',

        lineHeight: isTablet?height * 0.015:height * 0.021,
        marginTop: '3%',
        width:isTablet?width * 0.4:null
    },
    productCardStyles:{
        width:width/1.6
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnpdf:{
        backgroundColor:RED,
      },
      pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

        // marginTop:"5%"
    },
    loaderContainer:{
        justifyContent: 'center',
        alignItems: 'center',
       
    }
})