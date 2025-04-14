import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2 } from '../values/Colors'
import DeviceInfo from 'react-native-device-info'
const{width,height}=Dimensions.get('window')
const isTablet=DeviceInfo.isTablet()

const PublisherDetail = ({item}) => {
  return (
    <View style={styles.publisherdetailContainer}>
      <Text style={styles.publisher}>Publisher :<Text style={styles.publishertext}> {item?.publisher}</Text></Text>
      <Text style={styles.publisher}>Language : <Text style={styles.publishertext}>{item?.language}</Text></Text>
      <Text style={styles.publisher}>Paperback :<Text style={styles.publishertext}> {item?.pages} pages</Text> </Text>
      <Text style={styles.publisher}>ISBN-10 : <Text style={styles.publishertext}>{item?.isbn_10}</Text></Text>
      <Text style={styles.publisher}>ISBN-13 : <Text style={styles.publishertext}>{item?.isbn_10}</Text></Text>
      <Text style={styles.publisher}>Item Weight : <Text style={styles.publishertext}> {item?.item_weight}</Text></Text>
      <Text style={styles.publisher}>Dimensions : <Text style={styles.publishertext}>{item?.dimensions}</Text></Text>
      <Text style={styles.publisher}>Country of Origin :<Text style={styles.publishertext}>{item?.country_of_origin}</Text> </Text>
      <Text style={styles.publisher}>Net Quantity :<Text style={styles.publishertext}>{item?.net_quantity}</Text> </Text>
      <Text style={styles.publisher}>Importer: <Text style={styles.publishertext}>{item?.importer}</Text></Text>
      <Text style={styles.publisher}>Packer : <Text style={[styles.publishertext,{color:'#353C41',fontFamily:IsidoraMedium}]}>{item?.packer}</Text></Text>
      <Text style={styles.publisher}>Generic Name  : <Text style={styles.publishertext}>{item?.generic_name}</Text></Text>
      <Text style={styles.publisher}>Best Sellers Rank : <Text style={styles.publishertext}>{item?.best_seller_rank}</Text></Text>
    </View>
  )
}

export default PublisherDetail

const styles = StyleSheet.create({
    publisherdetailContainer:{
        paddingHorizontal:'5%',
        marginBottom:'5%'
    },
    publisher:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.025:width*0.035,
        color:DARKGRAY,
        marginBottom:isTablet?height*0.006:height*0.005
    },
    publishertext:{
        fontFamily:IsidoraRegular,
        fontSize:isTablet?width*0.025:width*0.035,

        color:GRAY,
        lineHeight:isTablet?height*0.025:height*0.025
    }

})