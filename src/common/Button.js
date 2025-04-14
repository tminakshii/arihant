import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IsidoraBold } from '../values/Fonts'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { WHITE } from '../values/Colors'
const {width}=Dimensions.get('window')
const
Button = ({customStyles,vectorIcon3,icon2size,textStyle,text,onPress=()=>{},icon,icon2,iconStyle1,vectorIcon1,vectorIcon2,vector2color=WHITE,iconStyle,iconStyle2}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.button,{...customStyles}]}>
        {vectorIcon1?
        <FontAwesome name={vectorIcon1} style={[styles.icon,{...iconStyle1}]} color={WHITE}/>:null
        }
        {icon?
        <Image source={icon} style={[styles.icon,{...iconStyle}]}/>:null
        }
        <Text style={[styles.buttonText,{...textStyle}]}>{text}</Text>
        {icon2?
        <Image source={icon2} style={[styles.icon2,{...iconStyle2}]}/>:null
        }
         {vectorIcon2?
        <FontAwesome name={vectorIcon2} style={styles.icon2} color={vector2color}/>:null
        }
         {vectorIcon3?
        <Entypo name={vectorIcon3} style={styles.icon2} color={vector2color} size={icon2size}/>:null
        }
      </TouchableOpacity>
    </View>
  )
}
export default Button
const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginVertical:'5%',
        paddingHorizontal:10,
    },
    icon:{
        width:width * 0.0695,
        heigh:width * 0.0695,
        resizeMode:'contain',
        marginRight:'15%'
    },
    icon2:{
      marginLeft:'5%',
    },
    buttonText:{
        fontFamily:IsidoraBold,
        color:WHITE
    },
})