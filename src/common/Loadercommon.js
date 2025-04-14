import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { orange } from '../values/Colors'

const Loadercommon = ({Loadercustomstyle}) => {
  return (
   
      <View style={[styles.loader,Loadercustomstyle]}>
           <ActivityIndicator size={'large'} color={orange} />
         </View>
 
  )
}

export default Loadercommon

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical:'2%'
        // backgroundColor:"orange"
      },
})