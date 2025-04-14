import { Dimensions, StyleSheet } from "react-native"
import { IsidoraBold, IsidoraRegular, IsidoraSemiBold } from "../../values/Fonts"
import { BLACK, GRAY, WHITE ,orange } from "../../values/Colors"
import DeviceInfo from "react-native-device-info"
const{width,height}=Dimensions.get('window')
const isTablet=DeviceInfo.isTablet()

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        zIndex:0,
    
    },
    mainContainer2:{
        flex:1,
        zIndex:0,
    },
    drawerClose:{
        height:60,
        width:"100%",
        // backgroundColor:"red",
        // borderBottomWidth:1,
        borderBottomColor:"#6F757C",
        alignItems:"flex-end",
        justifyContent:"center",
        paddingHorizontal:10,
        backgroundColor:'transparent'
    },
    drawerContent:{
        alignSelf:"center",
        // backgroundColor:"#E7DEE3",
        marginVertical:15,
        width:isTablet?"90%":"90%",
        marginLeft:width*0.05
        // borderRadius:25,
        // height:40,
        // justifyContent:"center",
        // alignItems:"center",
        
        
    },
    activebox:{borderBottomWidth:0.5,
        marginHorizontal:'5%',
        borderBottomColor:GRAY
    },
    ActiveDrawerContent:{
        alignSelf:"center",
        backgroundColor:orange,
        marginVertical:15,
        marginBottom:height*0.04,
        width:"93%",
        borderRadius:25,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        // borderBottomWidth:1,
        shadowColor:BLACK,
        elevation:5,
        marginRight:width*0.05
    
    },
    ContentText:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.025:width*0.03,
        color:"#353C41"
    }
  })
  export default styles