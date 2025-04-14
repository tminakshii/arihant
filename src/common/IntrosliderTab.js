import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {BLACK, LIGHTORANGE, orange, RED, WHITE} from '../values/Colors';
import {ImagePath} from '../values/ImagePath';
import {IsidoraSemiBold} from '../values/Fonts';
const {width, height} = Dimensions.get('window');
const IntroSliderTab = ({sliderData,customStyle}) => {
  return (
    <View style={[styles.swiperContainer,{...customStyle}]}>
           <ImageBackground
            // key={index}
            source={ImagePath.introbackground}
            style={styles.imageBackground}
            imageStyle={[styles.imageStyle,{...customStyle}]}>
      <Swiper
        removeClippedSubviews={false}
        autoplay={true}
        loop={true}
        dot={<View style={styles.customDot}></View>}
        activeDot={<View style={styles.customActiveDot}></View>}>
        {sliderData?.map((item, index) => (
       
             <View style={styles.introContainer}>
              <Image source={{uri: item?.url}} style={styles.introImage} />
              <Text style={styles.introText}>{item?.text}</Text>
            </View> 
        ))}
      </Swiper>
      </ImageBackground>

    </View>
  );
};
export default IntroSliderTab;
const styles = StyleSheet.create({
  swiperContainer: {
   
    alignSelf: 'center',
    justifyContent:"center"

  },
  imageBackground: {
    alignItems:"center",
    justifyContent:"center",
    // height: height,
    // width:width
    // alignItems:'center',
    // justifyContent:'center'
   //  alignSelf: 'center',
  },
  customDot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 3,
    backgroundColor: WHITE,
    position: 'relative',
    left:width*0.005,
    bottom:height*0.09,

    zIndex:999
  },
  customActiveDot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 3,
    backgroundColor: RED,
    position: 'relative',
    left:width*0.005,

    bottom:height*0.09,
  },
  introContainer: {
    // justifyContent:"center",
  alignItems:"center",
    marginTop:height*0.1,
    
  },
  introImage: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode:"contain",
    // backgroundColor:"red"
    // borderBottomLeftRadius:width*0.05,

    // bottom:'5%',
    // marginLeft:width*0.02,
    // alignSelf:'center',
    // backgroundColor:"red"
    // paddingBottom:15
  },
  introText: {
    color: "#454545",
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.027,
    width: width/2.8, // Adjust text width based on screen size
    // marginLeft: "3%",
    letterSpacing:0,
    lineHeight:height*0.020,
    marginTop:"5%",
    textAlign:"center"
  },
  imageStyle:{
    flex:1,
      resizeMode: 'cover',
      alignItems:"center",
      justifyContent:"center",
      height:height/1.825,
      borderBottomLeftRadius:width*0.0725,
      borderTopLeftRadius:width*0.01,
      borderTopRightRadius:width*0.01,
      borderBottomRightRadius:width*0.01
      // width:width/2.2,
    //   backgroundColor:"blue"
    //   alignSelf: 'center',
      // paddingBottom:"5%"
  }
});