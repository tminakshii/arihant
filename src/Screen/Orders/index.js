import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../common/Header'
import styles from './style'
const Orders = () => {
  return (
    <View style={[styles.ordercontainer]}>
     <Header
      showinitialbox={true}
      showback={true}
      showmiddlebox={true}
      showlastbox={true}
      title={'Orders'}
      textStyle={styles.title}/>
    </View>
  )  
}         

export default Orders

