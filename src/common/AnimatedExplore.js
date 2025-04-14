import React, { useEffect,useState, useMemo,useRef } from 'react';
import { Animated, View, StyleSheet, Text, Dimensions, Image, Touchable, TouchableOpacity } from 'react-native';
import { BLACK, DARKGRAY, GRAY, orange, RED, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
const {width,height}=Dimensions.get('window')
import { ImagePath } from '../values/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Button from './Button';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const AnimatedExplore = ({isanimating}) => {
const[isAnimating,setIsAnimating]=useState(isanimating) 

  const translateButton1X = useRef(new Animated.Value(0)).current;
  const translateButton1Y = useRef(new Animated.Value(0)).current;
  const translateButton2X = useRef(new Animated.Value(0)).current;
  const translateButton2Y = useRef(new Animated.Value(0)).current;
  const translateButton3X = useRef(new Animated.Value(0)).current;
  const translateButton3Y = useRef(new Animated.Value(0)).current;
  const translateImage1Y1=useRef(new Animated.Value(0)).current;
  const translateImage2Y1=useRef(new Animated.Value(0)).current;

  const button1Animation = useRef(null);
  const button2Animation = useRef(null);
  const button3Animation = useRef(null);
  const button4Animation = useRef(null);
  const button5Animation = useRef(null);


  const startAnimation = () => {
    if (button1Animation.current) {
      button1Animation.current.start();
    } else {
      // Create animation only once
      button1Animation.current = Animated.loop(
        Animated.sequence([
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton1X, {
                    toValue: isTablet?width/4:230, // Move right
                    duration: 800,
                    useNativeDriver: true, // Use for supported properties only
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton1X, {
                    toValue: isTablet?width/8:120, // Move left
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton1Y, {
                    toValue: isTablet?width/6:100, // Move Down
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton1X, {
                    toValue: 0, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton1Y, {
                    toValue: 0, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
              ])
      );
      button1Animation.current.start();
    }
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    if (button1Animation.current) {
      button1Animation.current.stop();
    }
    setIsAnimating(false);
  };

  const start2Animation = () => {
    if (button2Animation.current) {
      button2Animation.current.start();
    } else {
      // Create animation only once
      button2Animation.current = Animated.loop(
        Animated.sequence([
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton2X, {
                    toValue: isTablet?-width/6:-100, // Move right
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton2Y, {
                    toValue: isTablet?-width/6.665:-100, // Move up
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton2X, {
                    toValue:isTablet? width/10: 100, // Move right
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton2X, {
                    toValue: 0, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton2Y, {
                    toValue: 0, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
              ])
      );
      button2Animation.current.start();
    }
    setIsAnimating(true);
  };

  const stop2Animation = () => {
    if (button2Animation.current) {
      button2Animation.current.stop();
    }
    setIsAnimating(false);
  };

  const start3Animation = () => {
    if (button3Animation.current) {
      button3Animation.current.start();
    } else {
      // Create animation only once
      button3Animation.current = Animated.loop(
        Animated.sequence([
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton3X, {
                    toValue:isTablet? -width/6.664: -100, // Move left
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton3Y, {
                    toValue:isTablet?width/6:100, // Move down
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton3X, {
                    toValue: isTablet?-width/3.1569:-230, // Move left
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton3Y, {
                    toValue: 0, // Move up
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
                Animated.delay(1500),
                Animated.parallel([
                  Animated.timing(translateButton3X, {
                    toValue: isTablet?-width/120:-10, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                  Animated.timing(translateButton3Y, {
                    toValue: 0, // Move to the start position
                    duration: 800,
                    useNativeDriver: true,
                  }),
                ]),
              ])
      );
      button3Animation.current.start();
    }
    setIsAnimating(true);
  };

  const stop3Animation = () => {
    if (button3Animation.current) {
      button3Animation.current.stop();
    }
    setIsAnimating(false);
  };

  const start4Animation = () => {
    if (button4Animation.current) {
      button4Animation.current.start();
    } else {
      // Create animation only once
      button4Animation.current = Animated.loop(
        Animated.sequence([
                Animated.delay(1500),
                Animated.timing(translateImage1Y1, {
                  toValue: -8,
                  duration: 800,
                  useNativeDriver: true, // Use for supported properties only
                }),
                Animated.delay(1500),
                Animated.timing(translateImage1Y1, {
                  toValue: 0,
                  duration: 800,
                  useNativeDriver: true, // Use for supported properties only
                }),
                Animated.delay(1500),
                Animated.timing(translateImage1Y1, {
                  toValue: 8,
                  duration: 800,
                  useNativeDriver: true,
                }),
              ])
      );
      button4Animation.current.start();
    }
    setIsAnimating(true);
  };

  const stop4Animation = () => {
    if (button4Animation.current) {
      button4Animation.current.stop();
    }
    setIsAnimating(false);
  };

  const start5Animation = () => {
    if (button5Animation.current) {
      button5Animation.current.start();
    } else {
      // Create animation only once
      button5Animation.current = Animated.loop(
        Animated.sequence([
                Animated.delay(1500),
                Animated.timing(translateImage2Y1, {
                  toValue: 8,
                  duration: 800,
                  useNativeDriver: true,
                }),
                Animated.delay(1500),
                Animated.timing(translateImage2Y1, {
                  toValue: 0,
                  duration: 800,
                  useNativeDriver: true,
                }),
                Animated.delay(1500),
                Animated.timing(translateImage2Y1, {
                  toValue: -8,
                  duration: 800,
                  useNativeDriver: true,
                }),
              ])
      );
      button5Animation.current.start();
    }
    setIsAnimating(true);
  };

  const stop5Animation = () => {
    if (button5Animation.current) {
      button5Animation.current.stop();
    }
    setIsAnimating(false);
  };


  useEffect(() => {
    if (isAnimating) {
      startAnimation();
        start2Animation();
        start3Animation();
        start4Animation();
        start5Animation();
      setInterval(() => {
        startAnimation();
        start2Animation();
        start3Animation();
        start4Animation();
        start5Animation();
      }, 300000);
    } else {
      stopAnimation();
      stop2Animation();
      stop3Animation();
      stop4Animation();
      stop5Animation();
    }
  }, [isAnimating]);

  return (
    <View style={isTablet?styles.containerTab:styles.container}>
        {/* <Text style={styles.heading}>
        Excel Exams with<Text style={styles.headingArihant}> Arihant Plus</Text> Online Masterclass
        </Text>
        <Text style={styles.subHeading}>Gain access to expert-led sesssions, comprehensive study materials, and personalized guidance designed to help you master every subject and achieve top scores. Join now and unlock your potential with Arihant</Text> */}
      {/* Animated.View with the animated styles */}
      {/* <Animated.View style={[styles.box, { transform: [{ translateX:translateTextX1 }, { translateY:translateTextY1 }] }]} /> */}
      <View style={styles.imageContainer}>
        <Animated.View style={[styles.image1Container,{transform:[{translateY:translateImage1Y1}]}]}>
        <Image source={ImagePath.excelExam1} style={styles.image1}/>
        </Animated.View>
        <Image source={ImagePath.excelExamCircle} style={styles.circle}/>
        <Image source={ImagePath.excelExam2} style={styles.image2}/>
        <Animated.View style={[styles.image3Container,{transform:[{translateY:translateImage2Y1}]}]}>
        <Image source={ImagePath.excelExam3} style={styles.image3}/>
        </Animated.View>
        <Image source={ImagePath.excelExamCircle} style={styles.circle2}/>
      </View>
      <View style={styles.textContainer}>
        <Animated.View style={[{transform:[{translateX:translateButton1X},{translateY:translateButton1Y}]}]}>
        <TouchableOpacity  activeOpacity={0.8} style={styles.button}>
          {/* <Image source={ImagePath?.playwithblackborder}  style={styles.iconContainer}/>
          <Text style={styles.buttonText}>Concept Clearity </Text> */}
          <Image source={ImagePath?.conceptClarity} style={styles.ButtonImages}/>
        </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[{transform:[{translateX:translateButton2X},{translateY:translateButton2Y}]}]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button2}>
        {/* <Image source={ImagePath?.playwithblackborder}  style={styles.iconContainer}/>

          <Text style={styles.buttonText}>PROBLEM SOLVING</Text> */}
          <Image source={ImagePath?.problemSolving} style={styles.ButtonImages}/>

          {/* PROBLEM SOLVING 2 */}
        </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[{transform:[{translateX:translateButton3X},{translateY:translateButton3Y}]}]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        {/* <Image source={ImagePath?.playwithblackborder}  style={styles.iconContainer}/>

          <Text style={styles.buttonText}>Exam Strategy </Text> */}
          <Image source={ImagePath?.examStrategy} style={styles.ButtonImages}/>

        </TouchableOpacity>
        </Animated.View>
      </View>
      {!isTablet &&
      <TouchableOpacity style={{marginTop:height * 0.055}} activeOpacity={0.8}>
          <Image source={ImagePath.explorebtn} style={styles.exploreimg}/>
        </TouchableOpacity>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
     marginBottom:'13%',
     paddingVertical:"7%",
    backgroundColor:WHITE
  },
  containerTab: {
    // justifyContent: 'center',
    // alignItems: 'center',
    //  marginBottom:'13%',
     paddingVertical:"7%",
    backgroundColor:WHITE
  },
  box: {
    width: 100,
    height: 100,
    // backgroundColor: 'blue',
  },
  heading:{
    color:DARKGRAY,
    fontFamily:IsidoraSemiBold,
    fontSize:18,
    textAlign:'center',
    lineHeight:25,
    width:width/1.2
  },
  headingArihant:{
    color:orange,
  },
  subHeading:{
    color:GRAY,
    fontFamily:IsidoraMedium,
    fontSize:12,
    textAlign:'center',
    lineHeight:16,
    marginVertical:'3%'
  },
  imageContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:isTablet?width*0.35:width,
    marginTop:"5%",
    marginLeft:isTablet?'0%':null,
    // backgroundColor:"red",
    // marginVertical:"10%"
    // height:height/2.65,
  },
  image1Container:{
    right:isTablet?width*0.04:'13%',
  },
  image1:{
    resizeMode:'contain',
    width:isTablet?width/4.5:width/3.5,
    height:isTablet?height/5.5:190,
    // backgroundColor:'red'
  },
  image2:{
    resizeMode:'contain',
    width:isTablet?width/2.5:width/2.5,
    height:isTablet?height/4.5:250,
    position:'absolute',
    zIndex:997,
    // backgroundColor:"red"
  },
  image3:{
    width:isTablet?width/5.5:width/4.8,
    height:isTablet?height/6.5:130,
    resizeMode:'contain',
  },
  image3Container:{
    left:isTablet?width*0.04:'11%',

  },
  circle:{
    position:'absolute',
    width:isTablet?width*0.13:70,
    height:isTablet?width*0.13:70,
    zIndex:998,
    left:isTablet?'10%':'30%',
    top:'0%'
  },
  circle2:{
    position:'absolute',
    width:isTablet?width*0.1:50,
    height:isTablet?width*0.1:50,
    zIndex:998,
    right:isTablet?null:'10%',
    left:isTablet?width/3:null,
    top:'45%'
  },
  textContainer:{
    flexDirection:'row',
    alignItems:'center',
    zIndex:999,
    position:'absolute',
    right:isTablet?-width*0.04:null,
    top:isTablet?"30%":"20%"
  },
  button:{
    width:isTablet?width/6.5:width/3.3,
    padding:isTablet?3:5,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:8
  },
  button2:{
    width:isTablet?width/6.5:width/3.1,
    padding:isTablet?3:5,
    top:isTablet?height * 0.09:100,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:8
  },
  buttonText:{
    color:GRAY,
    fontFamily:isTablet?IsidoraSemiBold:IsidoraMedium,
    fontSize:isTablet?width*0.01:9.5,
    width:isTablet?width/9.5:width/3.5,
  },
  iconContainer:{
    resizeMode:"contain",
    height:isTablet?height*0.02:height*0.025,
    width:isTablet?height*0.02:height*0.025,

    marginRight:"3%"

  },
  explore:{
    flexDirection:'row',
    alignItems:'center',
    // padding:'1.2%',
    paddingHorizontal:"0.5%",
    paddingVertical:"1.3%",
    width:width/2.3,
    backgroundColor:orange,
    justifyContent:'space-between',
    borderRadius:20,
    marginBottom:"5%"
  },
  exploreText:{
    color:'white',
    fontFamily:IsidoraSemiBold,
    fontSize:16,
    marginLeft:'25%',
    // alignSelf:'center'
  },
  exploreButton:{
    backgroundColor:WHITE,
    borderRadius:20,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonIcon:{
    marginLeft:'3%'
  },
  exploreimg:{
    resizeMode:"contain",
    height:height*0.05,
    width:width*0.42,
    // backgroundColor:'red'
  },
  ButtonImages:{
    resizeMode:"contain",
    height:isTablet?height*0.04:height*0.04,
    width:isTablet?width*0.2:width*0.3,
    // backgroundColor:"red"
  }

});

export default AnimatedExplore;