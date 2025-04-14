import { Dimensions, StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY3, orange, WHITE } from '../values/Colors';
import { ImagePath } from '../values/ImagePath';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
import Button from './Button';
import { watchFolders } from '../../metro.config';

const { width, height } = Dimensions.get('window');




const VideoCardwithExpert = ({livevideoprop=false}) => {



  const dotBlinking = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(dotBlinking, {
          toValue: 1, // Fully visible
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(dotBlinking, {
          toValue: 0, // Invisible
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    );
  
    animation.start();
  
    // Cleanup on unmount
    return () => {
      animation.stop();
    };
  }, [dotBlinking]);

  return (
    <View style={livevideoprop?styles.mainContainer2:styles.mainContainer}>
      <Text style={styles.heading}>JEE 2024 Analysis</Text>
      <View style={styles.flexrow}>

      <Text style={styles.heading1}>Paper - 1 (Physics)</Text>
      <Text style={styles.heading2}>Exam Date: 12 August 2024</Text>
      </View>

      <Image source={ImagePath.videowithexpert} style={styles.videowithexpertImage} />
<View style={styles.flexrow2}>
<Text style={styles.description}>JEE 2024 all shift questions analysis with JEE experts</Text>

      <View style={styles.languagecontainer}>
        <View style={styles.english}>
          <Text style={styles.letters}>E</Text>
        </View>
        <View style={styles.english}>
          <Text style={styles.letters}>H</Text>
        </View>
      </View>
</View>

<TouchableOpacity style={styles.coursetypeLive}>

<Animated.View
                          style={[styles.outer, {opacity: dotBlinking}]}>
                          {/* <View style={styles.inner}></View> */}
                        </Animated.View>
                        <View style={styles.liveDot} />

                        <Text style={styles.typelive}>Live</Text>
</TouchableOpacity>

    </View>

  );
};

export default VideoCardwithExpert;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '93.5%', 
    alignSelf: 'center',
    paddingHorizontal: '4%',
    paddingTop:"3%",
    backgroundColor: WHITE,
    // elevation: 2,
    borderRadius: width*0.015,
    borderWidth: 1,
    borderColor: LIGHTGRAY3,
    overflow:"hidden"
  },
  mainContainer2: {
    flex: 1,
    width: '92.5%', 
    alignSelf: 'center',
    paddingHorizontal: '4%',
    paddingTop:"3%",
    backgroundColor: WHITE,
    // elevation: 2,
    borderRadius: width*0.02,
    borderWidth: 1,
    borderColor: LIGHTGRAY3,
    overflow:"hidden"
  },
  videowithexpertImage: {
    resizeMode:width>"500"? 'cover':"contain",
   
    height: height * 0.14, // Adjusted to a relative height
    width: '100%', // Use full width to fit the container
    alignSelf: 'center',
    borderRadius: width*0.01,
    // backgroundColor:"red"
  },
  outer: {
    height: width * 0.05,
    width: width * 0.05,
    borderRadius: (width * 0.05) / 2,
    backgroundColor: "rgba(252, 234, 175, 1)",
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:width*0.02,

    marginRight: width * 0.01,
    // position:"absolute"
  },
  coursetypeLive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: DARKGRAY,
    borderRadius: width * 0.2,
    height: height * 0.035,
    width: width * 0.23,
    marginBottom:"6%",
    marginTop:"4%",
    // paddingHorizontal:"5%",
    // backgroundColor:"red"
  },
  typelive: {
    fontFamily: IsidoraSemiBold,
    color: orange,
    fontSize: width * 0.035,
    marginRight: width * 0.05,
  },
  languagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.010,
    marginLeft:width*0.005
  },
  liveDot: {
    position: "absolute",
    height: width * 0.03,
    width: width * 0.03,
    borderRadius: (width * 0.03) / 2,
    backgroundColor: orange,
    alignSelf:"center",
    marginLeft:width*0.011,
  },
  english: {
    backgroundColor: DARKGRAY,
    height: height / 40,
    width: height / 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width*0.3,
    marginHorizontal: '2%',
  },
  letters: {
    color: WHITE,
    // fontFamily: IsidoraSemiBold,
    fontWeight:"600",
    fontSize:width*0.03
  },
  livebuttonstyle: {
    backgroundColor: WHITE,
    // elevation: 5,
    height: height / 25,
    width: width / 4.2,
    borderRadius: width*0.05,
    padding: 0,
    justifyContent:"space-between",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GRAY,
    marginTop: height * 0.015, 
    paddingLeft:"2%"
    
  },
  buttonTextStyle: {
    color: orange,
    fontFamily: IsidoraBold,
    fontSize:width*0.03,
    marginRight:width*0.04
  },
  iconstyle: {
    resizeMode: 'contain',
    height: height*0.03,
    width: width*0.034,
    // marginRight: width*0.03,
    // backgroundColor:"red"
  },
  heading: {
    color: orange,
    fontFamily: IsidoraSemiBold,
    textAlign: 'left',
    marginLeft:"1%",
    fontSize: width*0.028,

  },
  heading1: {
    color: GRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.035,
    textAlign: 'left',
    // marginTop: '1%',
    marginLeft:"1%"

  },
  heading2: {
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    // background: rgba(53, 60, 65, 1);

    fontSize: width*0.035,

    textAlign: 'left',
    // marginBottom: '2.5%',
    // marginTop: '1%',
    marginRight:"1%"

  },
  description: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.036,
    textAlign: 'left',
    lineHeight: height*0.025,
    marginTop: '3%',
    width:width/1.4,
    marginLeft:"1%"

  },
  flexrow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:"1%",
    marginBottom:"3%"
  },
  flexrow2:{
    flexDirection:"row",
    justifyContent:"space-around",
    // marginVertical:"2%",
    // marginBottom:"4%"
  }
});
