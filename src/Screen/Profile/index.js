import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../common/Header'
import styles from './style'

const Profile = () => {
  return (
    <View style={styles.profilecontainer}>
      <Header
       showinitialbox={true}
       showback={true}
       showmiddlebox={true}
       showlastbox={true}
       title={'Profile'}
       textStyle={styles.title}/>
    </View>
  )
}

export default Profile

