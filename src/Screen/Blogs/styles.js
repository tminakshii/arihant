
import {Dimensions, StyleSheet} from 'react-native';
import { GRAY, WHITE } from '../../values/Colors';
import { IsidoraMedium, IsidoraSemiBold } from '../../values/Fonts';
const {height,width}=Dimensions.get("window")


const styles = StyleSheet.create({

    blogdescriptionView:{
backgroundColor:WHITE,
width:width
    },
    line:{height:1,width:width/1.11,backgroundColor:GRAY,marginTop:"6%",alignSelf:"center",},
    blogdescriptiontext:{
        fontSize:width*0.03,
        fontFamily:IsidoraMedium,
        width:width/1.1,
        marginLeft:width*0.04,
        marginTop:"5%"
    },
    labelStyle:{
        borderWidth:0.5,
        borderColor:GRAY,borderRadius:width*0.04,
        marginVertical:"5%",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:"5%",
        height:height*0.025,
        alignSelf:"flex-start",
        marginLeft:width*0.04
            },
            heading:{
                fontSize:width*0.04,
                fontFamily:IsidoraSemiBold,
                width:width/1.1,
                marginLeft:width*0.04,
                marginTop:"5%"
            },
})

export default styles;
