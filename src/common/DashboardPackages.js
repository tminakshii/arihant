import { Dimensions, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DARKGRAY, GRAY, orange, RED, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
const{height,width}=Dimensions.get('window')

const DashboardPackages = ({item}) => {
    console.log(item,'dsfghjgfd')
    const isSpecificTitle = ['Orders', 'Book/Magazines', 'Video Packages', 'Test Packages'].includes(item?.title);
  return (
    <View style={styles.box}>
      {
        isSpecificTitle?
        (
          <View style={{height:height*0.18 }}>
            <Text style={styles.titletext}>{item?.title}</Text>
            <Text style={[styles.detail,{marginBottom:'5%'}]}>{item?.detail}</Text>
            <Image source={item?.icon} style={styles.icon}/>
            <Text style={styles.discription}>{item?.discription}</Text>
          </View>
        ):
        (
          <View style={styles.secondbox}>
            <View >
            <Text style={styles.titletext}>{item?.title}</Text>
            {item?.detail &&
            <Text style={[styles.detail]}>{item?.detail}</Text>}
           {item?.pending &&
           <Text style={styles.pending}>{item?.pending}</Text>}
            {item?.discription &&
            <Text style={styles.discription}>{item?.discription}</Text>}
            </View>
            <Image source={item?.icon} style={styles.icon}/>
            
          </View>
        )
      }
    </View>
  )
}

export default DashboardPackages

const styles = StyleSheet.create({
    box:{
        width:width*0.444,
        backgroundColor:WHITE,
        paddingVertical:height*0.015,
        paddingHorizontal:width*0.035,
        marginRight:width*0.032,
        marginTop:'3.5%',
        borderRadius:width*0.025,
        elevation:2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        // marginHorizontal:width*0.02,
        // flexWrap:'wrap'
    },
    titletext:{
      fontFamily:IsidoraSemiBold,
      fontSize:width*0.037,
      color:DARKGRAY,
      marginBottom:'1.5%',
      width:width*0.295,
      lineHeight:height*0.02,
      // backgroundColor:'green'
      
    },
    discription:{
      fontFamily:IsidoraMedium,
      fontSize:width*0.027,
      color:GRAY,
      lineHeight:height*0.017,
      width:width*0.28,
      marginTop:'5%',
      height:height*0.065
      // backgroundColor:'green'

    },
    detail:{
      fontFamily:IsidoraSemiBold,
      fontSize:width*0.03,
      color:orange,
      width:width*0.28,
      
    },
    icon:{
      resizeMode:'contain',
      // backgroundColor:'red',
      height:height*0.045,
      width:width*0.08,
      // aspectRatio:9.9/10.5,
      // marginVertical:'5%'
    },
    secondbox:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      height:height*0.12
    },
    pending:{
      color:RED,
      fontFamily:IsidoraSemiBold,
      fontSize:width*0.03,
      // marginBottom:5
    }
})