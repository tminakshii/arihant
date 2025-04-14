import { Dimensions, StyleSheet } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { DARKGRAY, GRAY, inputBordercolor, LIGHTBLUE2, LIGHTPURPLE, orange, WHITE } from "../../values/Colors";
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from "../../values/Fonts";
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()

export const styles = StyleSheet.create({
    orderheaderbox:{
        width:width/1.085,
        backgroundColor:WHITE,
        borderRadius:5,
        alignSelf:'center',
        elevation:3,
        padding:'4%',
        marginTop:'8%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    orderheaderboxtext:{
        fontFamily:IsidoraBold,
        fontSize:width*0.041,
        color:DARKGRAY
    },
    ordertext:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.031,
        color:GRAY
    }
})