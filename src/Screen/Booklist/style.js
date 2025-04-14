import { StyleSheet,Dimensions } from "react-native";
import { IsidoraBold, IsidoraMedium } from "../../values/Fonts";
import { BLACK, WHITE } from "../../values/Colors";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main:{
         flex:1,
         backgroundColor:WHITE
    },
    container: {
        width:width/2.2,
        paddingLeft:10,
        paddingRight:1,
        marginLeft:'1.3%',  
        marginBottom:'5%',  
    },
    listContainer:{
      alignSelf:'center',
      flex:1
    },
    image: {
      height: height/3.48,
       width:width/2.4,
       resizeMode:'contain',
        borderWidth:0.5,
        borderColor:'grey',
        marginTop:'2%'
    },
    title: {
      fontSize: width*0.025,
      fontFamily:IsidoraMedium,
      color:BLACK
    },
     detail:{
           marginLeft:'2%',
           paddingVertical:'3%'
     },
    rate: {
      marginTop: 1,
      fontSize: width*0.025,
      fontFamily:IsidoraMedium
    },
    
  });
export default styles