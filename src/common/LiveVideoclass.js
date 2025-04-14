import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {
    BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY2,
  LIGHTORANGE,
  LIGHTPURPLE,
  orange,
  WHITE,
} from '../values/Colors';
import {IsidoraBold, IsidoraMedium, IsidoraSemiBold} from '../values/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ImagePath} from '../values/ImagePath';
// import Animated from 'react-native-reanimated'

const {width, height} = Dimensions.get('window');
const LiveVideoclass = ({
  item,
  solution = false,
  classVideo = false,
  onpressisviewSeries,
}) => {
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
    <View style={styles.maincontainer}>
      <FlatList
        showsPagination={false}
        slideStyle={styles.swiperSlide}
        horizontal={true}
        data={item}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        keyExtractor={(it, ind) => ind.toString()}
        removeClippedSubviews={false}
        contentContainerStyle={{paddingHorizontal: width * 0.02}}
        renderItem={({item, ind}) => (
          <View style={styles.container}>
            <ImageBackground source={item?.imageUrl} imageStyle={styles.imageStyle} style={styles.image}>
              <View style={styles.logocontainer}>
                <View style={styles.logobg}>
                  <Image source={item?.logo} style={styles.logo} />
                </View>
                <Text style={styles.heading}>{item?.ImageHeading}</Text>
              </View>
              <View style={styles.imagebox}>
                <Text style={styles.include1}>{item?.courseInclude}</Text>
                <Image source={item?.teacherimg} style={styles.teacerimg} />
                <Image source={item?.play} style={styles.playbutton} />
              </View>
            </ImageBackground>

            <View style={styles.textbox}>
              <View style={styles.underimage}>
                <View style={styles.languageContainer}>

                <Text style={styles.Etext}>E</Text>
                </View>
                <View style={styles.languageContainer}>

<Text style={styles.Etext}>H</Text>
</View>
                <Text style={styles.name}>{item?.courseName}</Text>
                <Text style={styles.full}>{item?.Fulltest}</Text>
              </View>
              <Text style={styles.description}>{item?.description}</Text>
              <Text style={styles.include}>{item?.courseInclude}</Text>
              <Text style={styles.about}>{item?.about}</Text>
              {solution === true && (
                <View style={styles.underbuttonbox}>
                  <TouchableOpacity
                    style={
                      item?.islive ? styles.coursetypeLive : styles.coursetype
                    }>
                    {item?.islive && (
                      <>
                        <Animated.View
                          style={[styles.outer, {opacity: dotBlinking}]}>
                          {/* <View style={styles.inner}></View> */}
                        </Animated.View>
                        <View style={styles.liveDot} />

                        <Text style={styles.typelive}>Live</Text>
                      </>
                    )}
                    {item?.isjoin && (
                      <Text style={styles.typejoin}>Join Now</Text>
                    )}
                    {item?.isreminder && (
                      <Text style={styles.typeremind}>Remind me</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style= {styles.underbuttonbox2}
                    onPress={onpressisviewSeries}>
                    <Text style={styles.view}>View Series</Text>
                    <View style={styles.arrow}>
                      <MaterialCommunityIcons
                        name="arrow-top-right"
                        size={width * 0.03}
                        color={WHITE}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              {classVideo == true && (
                <View>
                  <Text style={styles.ended}>
                    Ended on {item?.Ended}
                    <Text> · {item?.lesson}</Text>
                  </Text>
                  <View style={styles.pausebuttoncontainer}>
                    <Text style={styles.faculty}>{item?.faculty}</Text>

                    <Ionicons
                      name="caret-forward-circle-sharp"
                      size={width * 0.065}
                      color={orange}
                      style={styles.pouseicon}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LiveVideoclass;

const styles = StyleSheet.create({
  maincontainer: {
    width: width,
    // height:height*0.49
    // marginBottom:height*0.02,

    // marginV:height*0.02
    // marginHorizontal:1
    // height: height * 0.5,
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
  inner: {
    height: width * 0.03,
    width: width * 0.03,
    borderRadius: (width * 0.03) / 2,
    backgroundColor: orange,
    marginLeft: width * 0.04,
  },
  container: {
    width: width * 0.66,
    // marginHorizontal:width*0.016,
    // borderWidth: 1,
    borderColor: LIGHTGRAY2,
    // overflow: 'hidden',
    borderRadius: width * 0.025,
    backgroundColor: WHITE,
    elevation: 3,
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    shadowRadius:4,
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.02,
    shadowColor:GRAY,



    // alignSelf: 'center'
  },
  imageStyle:{
borderTopLeftRadius:width*0.025,
borderTopRightRadius:width*0.025
  },
  image: {
    height: height * 0.18,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  teacerimg: {
    resizeMode: 'contain',
    height: height * 0.11,
    width: width * 0.28,
    overflow: 'hidden',
    marginRight: '2%',
    // backgroundColor:"red"

  },
  playbutton: {
    height: height * 0.03,
    width: height * 0.03,
    position: 'absolute',
    right: width * 0.03,
    bottom: height * 0.02,
    // backgroundColor:WHITE
  },
  logo: {
    height: width * 0.06,
    width: width * 0.06,
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: IsidoraMedium,
    color: WHITE,
    fontSize: width * 0.028,
    marginHorizontal: width * 0.03,
  },
  include1: {
    fontFamily: IsidoraSemiBold,
    color: WHITE,
    fontSize: width * 0.041,
    width: width * 0.28,
    lineHeight: height * 0.027,
    marginTop: height * 0.04,
  },
  logocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '4%',
    // justifyContent:"center"
  },
  logobg: {
    // backgroundColor: WHITE,
    height: width * 0.06,
    width: width * 0.06,
    borderRadius: (width * 0.06) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
  },
  imagebox: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
  },
  underimage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  languageContainer:{
    backgroundColor: DARKGRAY,
    borderRadius: width * 0.05 / 2,
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden",
    height: width * 0.05,
    width: width * 0.05,
    marginRight:width*0.01,
    

},
  textbox: {
    marginLeft: width * 0.04,
    marginTop: height * 0.03,
    // flexWrap:'wrap'
  },
  Etext: {
    // backgroundColor: DARKGRAY,
    // height: width * 0.05,
    // width: width * 0.05,
    // borderRadius: (width * 0.05) / 2,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    // fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
    color: WHITE,
  },
  Htext: {
    // backgroundColor: DARKGRAY,
    // marginLeft: width * 0.01,
    // height: width * 0.05,
    // width: width * 0.05,
    // borderRadius: (width * 0.05) / 2,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    // fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
    color: WHITE,
  },
  name: {
    fontSize: width * 0.035,
    fontFamily: IsidoraSemiBold,
    color: orange,
    marginHorizontal: width * 0.035,
  },
  full: {
    fontSize: width * 0.03,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
  },
  description: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: width * 0.035,
    marginTop: height * 0.02,
  },
  include: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.035,
    marginTop: height * 0.003,
  },
  about: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: width * 0.033,
    marginTop: height * 0.003,
    marginBottom: height * 0.02,
  },
  underbuttonbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.015,
    marginTop: height * 0.01,
    // backgroundColor:"red",
    // alignSelf:"center"
  },
  underbuttonbox2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.04,

    // justifyContent: 'space-between',
    // marginVertical: height * 0.02
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

  coursetype: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: DARKGRAY,
    borderRadius: width * 0.2,
    height: height * 0.04,
    width: width * 0.28,
    backgroundColor: LIGHTGRAY2,
  },
  coursetypeLive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: DARKGRAY,
    borderRadius: width * 0.2,
    height: height * 0.031,
    width: width * 0.2,
    // paddingHorizontal:"5%",
    // backgroundColor:"red"
  },
  typelive: {
    fontFamily: IsidoraSemiBold,
    color: orange,
    fontSize: width * 0.035,
    marginRight: width * 0.01,
  },
  typejoin: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.03,
  },
  typeremind: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.03,
  },
  view: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.03,
    // marginLeft: width * 0.1,
    marginRight: width * 0.01,
  },
  arrow: {
    backgroundColor: orange,
    borderRadius: width * 0.05,
    // padding:width*0.007,
    height: height * 0.025,
    width: height * 0.025,
    justifyContent: 'center',
    alignItems: 'center',

    // right:10,bottom:0
  },

  ended: {
    fontFamily: IsidoraMedium,
    color: orange,
    fontSize: width * 0.032,
    letterSpacing: width * 0.0015,
  },
  faculty: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: width * 0.035,
    marginVertical: height * 0.02,
  },
  pausebuttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%',

    marginRight: '8%',
  },
  pouseiconn: {
    right: 6,
    bottom: 0,
  },
});
