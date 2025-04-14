import { Dimensions, StyleSheet } from "react-native";
import { BLACK, DARKGRAY, DARKRED, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, orange, RED, WHITE } from "../../values/Colors";
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from "../../values/Fonts";
const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    maincontainer: {
// alignItems:"center"
// backgroundColor:"red"

    },
    searchinput: {
        paddingVertical: '1%',
        borderRadius: 25,
        width: width / 1.2,
        borderColor: DARKGRAY,
        color: DARKGRAY,
         marginVertical: '5%',
        paddingLeft: width*0.12,
        right: '3%',
        // alignSelf:"center",
        fontSize:width*0.035,
        fontFamily:IsidoraMedium,
// backgroundColor:"red"

        // color:'red'

    },

    search: {
       bottom:1.5,
      right:width*0.02,
        
       
    },
    searchcontainer: {
        flexDirection: "row",
        alignItems: 'center',
        // backgroundColor:"red",
       justifyContent:"center",
       marginRight:"3%"

        

},
    crossbox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DARKRED,
        width: height*0.04,
        height: height*0.04,
        borderRadius: width*0.5,
        right:width*0.02

    },

    searchitem: {
        marginHorizontal: '5%',
        borderBottomWidth:1,
        borderBottomColor:LIGHTGRAY2,
        paddingVertical:"4%"
    },
    searchname: {
        fontFamily: IsidoraSemiBold,
        fontSize: width*0.025,
        color: DARKGRAY
    },
    datanotfoundbox:{
         
        // justifyContent:'center',
        marginTop:'30%',
        alignItems:'center'
    },
    notfoundtext:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.06,
        color:RED
    },
    searchboxcontainer:{
        flexDirection:"row",
        alignItems:"center",
        width:width,
        marginTop: height * 0.02,
        // backgroundColor:"red",
        // alignSelf:"center",
        justifyContent:"space-around",
        // marginLeft:width*0.02
             },
             modalsearchcontainer: {

                width: width*0.8 ,
                height: height * 0.046,
                // right: '5%',
                // fontFamily: IsidoraMedium,
                fontSize: width * 0.038,
                borderColor: DARKGRAY,
                borderWidth: 1,
                borderRadius:width*0.1,
                backgroundColor: WHITE,
                paddingVertical:0,
                // elevation: 4,
                // marginRight:width*0.1,
                paddingLeft:width*0.12,
                // paddingBottom:height*0.03
                // marginLeft:width*0.12,

                // marginTop:2
                // alignSelf:"center"
                // backgroundColor:'red'
            
              },
              preserach:
              {
                // backgroundColor: 'red',
                marginRight:- width * 0.15,
                alignSelf:"center",
                zIndex: 999,
                marginLeft:width*0.08
              },
})