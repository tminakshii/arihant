import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
  DeviceEventEmitter,
  BackHandler,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video'; // Import Video controls
import Icon from 'react-native-vector-icons/Ionicons'; // For custom icons
import Fontisto from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"

import { BLACK, orange, WHITE } from '../values/Colors';
import Orientation from 'react-native-orientation-locker';
import { ImagePath } from '../values/ImagePath';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');

const VideoPlayer = ({ videoSource, onClose, SETModalVisible,setDisableScroll }) => {

 
  
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {

        Orientation.lockToPortrait(); 
      StatusBar.setHidden(false);
      setIsFullscreen(false);
      SystemNavigationBar.navigationShow();

        return true; 
      };

      // Add the event listener for the hardware back button

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',

        onBackPress
      );

      // Remove the listener when the component loses focus or unmounts

      return () => backHandler.remove();
    }, [])
  );
  const isDrawerOpen = useDrawerStatus() === 'open';

  const videoRef = useRef(null); 
  const [paused, setPaused] = useState(false); // Manage play/pause state
  const [isFullscreen, setIsFullscreen] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true); 
  const [background,setBackground] = useState(false)
const navigation =useNavigation()


  const seekForward = () => {
    if (videoRef.current) {
      videoRef.current.seek(currentTime + 10); 
    }
  };

  const seekBackward = () => {
    if (videoRef.current) {
      videoRef.current.seek(currentTime - 10); 
    }
  };

  const onProgress = (data) => {
    setCurrentTime(data.currentTime);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {

      Orientation.lockToPortrait(); 
      StatusBar.setHidden(false);
      setIsFullscreen(false);
      SystemNavigationBar.navigationShow();
      DeviceEventEmitter.emit('user_info', false);
    } else {
  //  DeviceEventEmitter.emit('user_info', true);
  
  setIsFullscreen(true);
  StatusBar.setHidden(true);
  SystemNavigationBar.navigationHide();
  Orientation.lockToLandscape(); 
  DeviceEventEmitter.emit('user_info', true);
  

    }
  };

  useEffect(() => {
    return () => {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {SETModalVisible(false)
      setDisableScroll(true)
    }}>
    <View
      style={isFullscreen? [
        styles.container,
        {
          backgroundColor:BLACK ,
          width: '100%' ,
          height: '100%' ,
          position: 'absolute',
          zIndex: 999,
          top:  0 ,
          alignSelf: 'center',
          
          
          
        },
      ]
      :
      [
        styles.container,
        {
          // flex:1,
          backgroundColor: isFullscreen ? BLACK : "rgba(100, 100, 100, .8)",
          width:  '100%',
          height: '100%' ,
          position: 'absolute',
          zIndex: 999,
        paddingVertical:height/3.2,
        paddingBottom:height/1,
          alignSelf: 'center',
          
          
          
        },
      ]
    }
    >

  <>
    <TouchableOpacity
        style={styles.videoContainer}
        activeOpacity={1}
        onPress={() => setControlsVisible(!controlsVisible)} 
      >
        <Video
          ref={videoRef}
          source={videoSource} 
          seekColor={orange}
          onHideControls={true}
          disableVolume
          disableBack
          disablePlayPause
          disableFullscreen
          disableTimer
          paused={paused}
          style={isFullscreen?styles.video2:styles.video}
          videoStyle={styles.video}
          onProgress={onProgress}
          resizeMode={isFullscreen?"contain":"cover"}
          
        />
      </TouchableOpacity>

      {/* Back button */}
      {controlsVisible && (
        <TouchableOpacity
          onPress={() => {
            // if (isFullscreen) {
            //   Orientation.lockToPortrait();
            //   setIsFullscreen(false);
            //   StatusBar.setHidden(false);
            // } else {
              DeviceEventEmitter.emit('user_info', false);
              SystemNavigationBar.navigationShow();
              Orientation.lockToPortrait(); // Unlock screen orientation
              StatusBar.setHidden(false);
              setIsFullscreen(false);
              SETModalVisible(false);
              setDisableScroll(true)
  


            // }
          }}
          style={isFullscreen?styles.backButton:styles.backButton2}
        >
          <Entypo name="cross" size={width*0.05} color="black" />
        </TouchableOpacity>
      )}
{
  controlsVisible&& (
   <Image source={ImagePath.arihantlogo} style={isFullscreen?styles.arihantlogo:styles.arihantlogo2}/>
  )
}
      {/* Control bar */}
      {controlsVisible && (
        <View style={[styles.controlBar,{
          top:isFullscreen ? "85%":height/1.95,
    // paddingHorizontal: isFullscreen?"1%":"0%",

        }]}>
          <TouchableOpacity>
            <Icon name="share-social-outline" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.middlebuttons}>
            <TouchableOpacity onPress={seekBackward}>
              <Image style={styles.arrImages} source={ImagePath.arr_left} />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
              <Icon
                name={paused ? 'play' : 'pause'}
                size={25}
                color="orange"
                style={{ marginLeft: 2 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={seekForward}>
              <Image style={styles.arrImages} source={ImagePath.arr_right} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleFullscreen}>
            <Icon name={isFullscreen ? 'contract' : 'expand'} size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}
  </>

    

    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height:height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    // borderWidth:5,
    // borderColor:WHITE,
    // borderRadius:10
    backgroundColor:BLACK
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    // borderRadius:10
    position:"relative"

  },
  video: {
    width: width/1.05,
    height: height/3.5,
    borderWidth:5,
    borderColor:"white",
alignSelf:"center",
    borderRadius:15,
    overflow:"hidden",
    position:"relative"
    // backgroundColor:BLACK

  },
  video2: {
    width: '100%',
    height: '100%',
    //    borderRadius:20,
    // overflow:"hidden",
    // borderWidth:5,
    // borderColor:WHITE,

    // backgroundColor:BLACK

  },
  controlBar: {
    position: 'absolute',
    top: height/1.9,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: "2%",
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    // zIndex:999
    marginHorizontal: '3%',
  },
  controlButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(256,256,256,0.7)',
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: height*0.02,
    left: "7%",
    zIndex: 1,
    backgroundColor:"white",
    borderRadius:width*0.05,
    // padding:"1%"
  },
  backButton2: {
    position: 'absolute',
    top: height/3,
    left: "7%",
    zIndex: 1,
    backgroundColor:"white",
    borderRadius:width*0.05,

    // padding:"1%"
  },
  arihantlogo:{
    position: 'absolute',
    top: height*0.03,
    right: width*0.1,
    zIndex: 1,
    height:height/30,
    width:width/15,
    // backgroundColor:WHITE,
    justifyContent:"center",
    alignItems:"center",
    resizeMode:"contain"
  },
  arihantlogo2:{
    position: 'absolute',
    top: height*0.33,
    right: width*0.05,
    zIndex: 1,
    height:height/30,
    width:width/15,
    // backgroundColor:WHITE,
    justifyContent:"center",
    alignItems:"center",
    resizeMode:"contain"
  },
  middlebuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrImages: {
    resizeMode: 'contain',
    marginHorizontal: 10,
    height: 30,
    width: 50,
    marginTop:"5%",
  },
});

export default VideoPlayer;
