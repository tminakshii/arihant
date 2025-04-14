import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import Button from './Button'
import { BLACK, DARKGRAY, GRAY, orange } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import DeviceInfo from 'react-native-device-info'
const isTablet =DeviceInfo.isTablet()
const { width, height } = Dimensions.get('window')

const TestBanner = () => {
  return (
    <View style={styles.container}>
      
      {/* First Banner */}
      <View style={styles.bannerContainer}>
        <Image source={ImagePath.frame1} style={styles.backgroundImage} />
        
        <View style={styles.contentOverlay}>
          <View style={styles.topButtonContainer}>
            <Button text={"Recommended"} customStyles={styles.recommendedButton} textStyle={styles.buttonText}
            icon={ImagePath.starofbanner}
            iconStyle={styles.star1}
            />
            <TouchableOpacity style={styles.logoContainer2}>
              <Image source={ImagePath.RoundLogo} style={styles.logo} />
            </TouchableOpacity>
          </View>

          <View style={styles.textView}>
            <View>
              <Text style={styles.heading}>FREE LIVE JEE Main Test</Text>
              <Text style={styles.subheading1}>Identify strengths, focus on weaknesses, and master exam format.</Text>
              <View style={styles.playButtonView}>
                <TouchableOpacity style={styles.playButton}>
                  <Image source={ImagePath.redPlayButon} style={styles.playButtonImage} />
                  <Text style={styles.date}>Upcoming on 10th August 24</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image source={ImagePath.frame1image} style={styles.frame1Image} />
          </View>
        </View>
      </View>

      {/* Second Banner */}
      <View style={styles.bannerContainer}>
        <Image source={ImagePath.frame2} style={styles.backgroundImage} />
        
        <View style={styles.contentOverlay}>
          <View style={styles.topButtonContainer1}>
            <TouchableOpacity style={styles.logoContainer}>
              <Image source={ImagePath.RoundLogo} style={styles.logo1} />
            </TouchableOpacity>
          </View>

          <View style={styles.textView}>
            <View>
              <Text style={styles.heading1}>Master JEE in 10-minute videos.</Text>
              <Text style={styles.subheading2}>50 questions, 200 marks in 60 minutes.</Text>
              <Text style={styles.heading3}>Achieve your dream!</Text>
              <View style={styles.playButtonView}>
                <TouchableOpacity style={styles.playButton}>
                  <Image source={ImagePath.redPlayButon} style={styles.playButtonImage} />
                  <Text style={styles.date}>Upcoming on 10th August 24</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image source={ImagePath.frame2image} style={styles.frame2Image} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default TestBanner

const styles = StyleSheet.create({
  
  imagebannerbackground:{
    height:height/3,
    // width:"95%",
    alignSelf:"center",
    // backgroundColor:"red"
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:"4%",
    marginTop:"2%",

    // backgroundColor:'green'
  },
  bannerContainer: {
    width: width * 0.92,
    // height: height / 4,
    marginVertical: "0.5%",
    paddingTop:'3%',
elevation:5,shadowColor:BLACK,
alignSelf:"center",
overflow:"hidden"
// marginHorizontal:"5%"
    // backgroundColor:"yellow"
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    borderRadius:width*0.015,
    overflow:"hidden"
    // backgroundColor:"red"
  },
  contentOverlay: {
    // flex: 1,
    paddingHorizontal: width*0.04,
    // paddingBottom:20,
    justifyContent: 'space-between',
  },
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topButtonContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  recommendedButton: {
    backgroundColor: orange,
    // paddingVertical: 8,
    // width: width / 3.28,
    borderRadius:width*0.013,
    paddingVertical:"5%",
    // paddingRight:width*0.07,
    paddingLeft:width*0.010,
    marginBottom:height*0.02,
    paddingHorizontal:width*0.001
  },
  buttonText: {
    fontSize: width*0.025,
    fontFamily:IsidoraMedium

    
  },
  logo: {
    resizeMode: 'contain',
    height: height*0.035,
    width:height*0.035,
  },
  logo1: {
    resizeMode: 'contain',
    height: height*0.035,
    width:height*0.035,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    // backgroundColor:"red"
    alignItems: 'center',
  },
  heading: {
    fontSize: width*0.036,
    color: GRAY,
    fontFamily: IsidoraBold,
  },
  heading1: {
    fontSize: width / 26,
    color: orange,
    fontFamily: IsidoraBold,
    width:width/2.5,
    lineHeight:height*0.024,
    marginTop: -height / 45,
  },
  heading3: {
    fontSize: width / 25,
    color: GRAY,
    fontFamily: IsidoraBold,
  },
  subheading: {
    fontSize: width / 35,
    color: orange,
    lineHeight: width / 30,
    // marginTop: 5,
    width:width/2.5
  },
  subheading1: {
    fontSize: width *0.03,
    color: orange,
    lineHeight: height *0.018,
    marginTop: height*0.005,

    width:width/2.2,
    fontFamily:IsidoraBold
  },
  subheading2: {
    fontSize: width / 32,
    color: GRAY,
    lineHeight: width / 26,
    marginVertical: 5,
    width:width/2.2,
    fontFamily:IsidoraSemiBold
  },
  playButtonView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    marginVertical:height*0.02
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:height*0.015
  },
  playButtonImage: {
    height: width / 22,
    width: width / 22,
    resizeMode: 'contain',
    marginRight: 10,
    
  },
  date: {
    color: DARKGRAY,
    fontSize: width / 32,
    fontFamily:IsidoraSemiBold
  },
  frame1Image: {
    height:height*0.18,
    width: isTablet?width*0.19:width*0.266,
    resizeMode: 'contain',
    position:"absolute",
    right:width*0.05,
    // bottom:height,
    marginTop:'auto',
    // backgroundColor:"red",
    // marginTop:'auto'
  },
  frame2Image: {
    height:height*0.08,
    width: width / 3.6,
    resizeMode: 'contain',
    marginBottom:height*0.04,
    marginRight:width*0.02,
    // backgroundColor:'red'
  },
  logoContainer: {
    paddingTop:"2%"
  },
  logoContainer2: {
    marginTop:-height*0.01
  },
  star1:{
    resizeMode:'contain',
    height:height*0.02,
    width:width*0.05,
    marginRight:'6%',
    
    // marginHorizontal:0
  }
})
