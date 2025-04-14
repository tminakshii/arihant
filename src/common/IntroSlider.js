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
const IntroSlider = ({sliderData,customStyle}) => {
  return (
    <View style={[styles.swiperContainer,{...customStyle}]}>
      <Swiper
        removeClippedSubviews={false}
        autoplay={true}
        loop={true}
        dot={<View style={styles.customDot}></View>}
        activeDot={<View style={styles.customActiveDot}></View>}>
        {sliderData?.map((item, index) => (
          <ImageBackground
            key={index}
            source={ImagePath.loginBackGround}
            style={styles.imageBackground}
            imageStyle={[styles.imageStyle,{...customStyle}]}>
            <View style={styles.introContainer}>
              <Image source={{uri: item?.url}} style={styles.introImage} />
              <Text style={styles.introText}>{item?.text}</Text>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};
export default IntroSlider;
const styles = StyleSheet.create({
  swiperContainer: {
    width: '100%',
    height: width / 2.4,
    alignSelf: 'center',
    backgroundColor:"orange",
    // borderTopLeftRadius:20,
    // borderTopRightRadius:20,
overflow:"hidden"
  },
  imageBackground: {
    height: width / 2.4,
    alignItems:'center',
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
    left: width / 3.5,
  },
  customActiveDot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 3,
    backgroundColor: RED,
    position: 'relative',
    left: width / 3.5,
  },
  introContainer: {
    flexDirection: 'row',
    marginTop: '8%',
    paddingHorizontal: '5%',
    // alignItems:"flex-start"
  },
  introImage: {
    width: width * 0.32,
    height: width * 0.27,
    resizeMode:"contain",
    // bottom:'5%',
    // marginLeft:width*0.02,
    alignSelf:'center',
    // backgroundColor:"red"
    // paddingBottom:15
  },
  introText: {
    color: "#454545",
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.033,
    width: width/2.4, // Adjust text width based on screen size
    marginLeft: "3%",
    letterSpacing:0,
    lineHeight:height*0.020,
    marginTop:"5%"
  },
  imageStyle:{
      resizeMode: 'cover',
      width: '100%',
      alignSelf: 'center',
      // paddingBottom:"5%"
  }
});