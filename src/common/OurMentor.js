import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2, LIGHTORANGE, Lightpink, RED, WHITE, orange, ratingcolor } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialcommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ReactNativeModal from 'react-native-modal';
import DetailofMentor from './DetailofMentor';

const { width, height } = Dimensions.get('window')
const boxwidth = width / 2.35
const OurMentor = ({ item ,livevideoprop=false}) => {
  const [openmentordetailModal, setOpenmentordetailModal] = useState(false)

  return (
    <View style={livevideoprop?styles.maincontainer2:styles.maincontainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.imageside}>
        <Text style={styles.reviewtext}>★{' '}{item.review}</Text>
        <Text style={styles.name}> {item.name}</Text>
        <View style={styles.ratingbox}>
          <Stars
            default={item.review}
            half={true}
            disabled
            fullStar={<Icon name={'star'} size={boxwidth * 0.06} color={RED} style={[styles.myStarStyle]} />}
            emptyStar={<Icon name={'star-outline'} size={boxwidth * 0.06} color={RED} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
            halfStar={<Icon name={'star-half'} size={boxwidth * 0.06} color={RED} style={[styles.myStarStyle]} />}
          />
          <Text style={styles.reviewnotext}>{' '}({item.noOfreview})</Text>

        </View>
        <Text style={styles.experiencetext}>{item.experience}</Text>

        <TouchableOpacity style={styles.viewbox} onPress={() => setOpenmentordetailModal(true)}>
          <Text style={styles.viewtext}>View</Text>
          <TouchableOpacity style={styles.arrowstyle} >
            <MaterialcommunityIcon name='arrow-top-right' size={boxwidth * 0.06} color={WHITE} style={styles.icon} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
<ReactNativeModal
isVisible={openmentordetailModal}
onAccessibilityTap={()=>setOpenmentordetailModal(false)}
onBackButtonPress={()=>setOpenmentordetailModal(false)}
onResponderTerminationRequest={()=>setOpenmentordetailModal(false)}
animationIn={'zoomIn'}
animationOut={'zoomOut'}
transparent={true}
backdropOpacity={0.5}

>
  <View style={styles.mentordetailcontainer}>
  
<DetailofMentor item={item.detail} closeDetail={()=>setOpenmentordetailModal(false)}/>
</View>
</ReactNativeModal>
    </View>
  )
}

export default OurMentor

const styles = StyleSheet.create({
  maincontainer: {
    width: width / 2.2,
    borderWidth: 0.8,
    borderColor: LIGHTGRAY2,
    marginHorizontal: width * 0.014,
    backgroundColor: WHITE,
    borderRadius: width * 0.02,
    // flexDirection: 'row',
    paddingBottom: height * 0.025,
    paddingTop: height * 0.01,
    paddingHorizontal: width * 0.02,
    justifyContent: "center",
    alignItems: "center" 
  },
  maincontainer2: {
    width: width / 2.25,
    borderWidth: 0.8,
    borderColor: LIGHTGRAY2,
    marginHorizontal: width * 0.01,
    marginLeft:width*0.033,
    backgroundColor: WHITE,
    borderRadius: width * 0.02,
    // flexDirection: 'row',
    paddingBottom: height * 0.025,
    paddingTop: height * 0.01,
    paddingHorizontal: width * 0.02,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: boxwidth * 0.4,
    height: height * 0.1,
    resizeMode: 'contain',

  },
  imageside: {
    // width: boxwidth * 0.5,
    // marginTop:height*0.025,
    // marginLeft:boxwidth*0.03
    // flexWrap:'wrap',
    // alignSelf:"center",
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center"
  },
  reviewtext: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: boxwidth * 0.06,
    backgroundColor: LIGHTORANGE,
    width: boxwidth * 0.25,
    paddingBottom: height * 0.003,
    borderRadius: width * 0.01,
    textAlign: 'center',
    textAlignVertical:"center",
    marginVertical:"2%"

  },
  name: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.036,
    // marginTop: height * 0.005,
    // marginBottom: height * 0.02
  },
  ratingbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
    // backgroundColor:'red'
  },
  reviewnotext: {
    fontFamily: IsidoraMedium,
    fontSize: boxwidth * 0.08,
    color: BLACK,
    marginLeft:"2%"
  },
  experiencetext: {
    fontFamily: IsidoraSemiBold,
    fontSize: boxwidth * 0.08,
    color: BLACK,
    marginBottom: height * 0.01
  },
  viewbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "5%"
  },
  viewtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: boxwidth * 0.08,
    color: orange,
    marginRight: boxwidth * 0.03,
    // borderBottomWidth: 0.5,
    borderBottomColor: orange,
    textDecorationLine:"underline",
    
    // paddingBottom:-10
  },
  arrowstyle: {
    backgroundColor:orange,
    padding:"2%",
    borderRadius: width*0.05
  },
  mentordetailcontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  }

})