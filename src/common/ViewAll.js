import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { BLACK, DARKGRAY, GRAY } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { getScaled } from '../values/Utility'
import DeviceInfo from 'react-native-device-info'
const{width,height}=Dimensions.get('window')
const isTablet=DeviceInfo.isTablet()
const ViewAll = ({onPress,title,customeTextStyle,customeStyle,Icon2}) => {
  return (
    <TouchableOpacity style={[styles.viewAll,{...customeStyle}]} onPress={onPress}>
    <Text style={[Platform.OS=="android"?  styles.viewAllText:styles.viewAllTextios,{...customeTextStyle}]}>{title}</Text>
    {
      Icon2?
      <FontAwesome name={Icon2} size={isTablet?width*0.03:15} color={DARKGRAY} style={styles.down}/>
      // angle-down

      :
      <MaterialIcons
      name="arrow-forward-ios"
      size={isTablet?width * 0.03:width * 0.0333}
      color={BLACK}
    />
    }
  
  </TouchableOpacity>

  )
}

export default ViewAll

const styles = StyleSheet.create({
    viewAll:{
        flexDirection:'row',
        alignItems:'center',
        // marginLeft:'5%',
        marginHorizontal:"4.2%",
        // backgroundColor:"red"
        // justifyContent:"center"
  },
  viewAllText:{
      color:BLACK,
      fontFamily:IsidoraSemiBold,
      fontSize:isTablet?width*0.025:width*0.033,
      marginRight:'2%',
      // marginBottom:'1%'

  },
  viewAllTextios:{
    color:BLACK,
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.033,
    marginRight:'2%',
    marginBottom:'1%'

},
  down:{
    marginTop:isTablet?0:"0.5%"
  }
})