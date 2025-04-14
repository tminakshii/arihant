import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from './styles';
import { APICall } from '../../../Services/ApiCall';
import { ImagePath } from '../../../values/ImagePath';

const OnBoarding = (props) => {
  const [onboardingdata, setOnboardingdata] = useState([])
  useEffect(() => {
    getwalkthrough()
  }, [])
  const getwalkthrough = async () => {
    await APICall('get', 'walkthroughs/', {}, getProfileSuccess, getProfileFail);
  };

  const getProfileSuccess = res => {
    setOnboardingdata(res?.items)

  };

  const getProfileFail = error => {
    console.log(error, 'error')

  }

  const renderItem = ({ item }) => (
   
    <ImageBackground source={ImagePath.introbackground} style={styles.main} >
      <View style={styles.imageText}>
        <Image style={styles.introimage} source={{ uri: item?.url }} />
        <Text style={styles.introtext}>{item?.text}</Text>
      </View>
    </ImageBackground>
  

  );
  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View style={styles.prevButton}>
        <Text style={styles.prevText}>Skip</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.navigation.navigate('Login')
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      data={onboardingdata}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      doneLabel="Next"
      showSkipButton={true}
      renderSkipButton={renderSkipButton}
      onDone={() => handleDone()}
      onSkip={() => handleDone()}
    />
  );
};


export default OnBoarding;
