import {
  ActivityIndicator,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  SectionListComponent,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { BLACK, DARKGRAY, GRAY, orange, RED, WHITE } from '../../../values/Colors';
import Button from '../../../common/Button';
import { IsidoraSemiBold } from '../../../values/Fonts';
const { width, height } = Dimensions.get('window');
import Toast from 'react-native-simple-toast';
import { ImagePath } from '../../../values/ImagePath';
import IntroSlider from '../../../common/IntroSlider';
import { APICall } from '../../../Services/ApiCall';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
import IntroSliderTab from '../../../common/IntrosliderTab';
import Loadercommon from '../../../common/Loadercommon';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isTablet = DeviceInfo.isTablet();

// console.log(isTablet,"kkk");

const index = props => {
  const [mobile, setMobile] = useState('');
  const [sliderData, setSliderData] = useState();
  const [loading, setLoading] = useState(false);
  const [mainLoader, setMainLoader] = useState(true)
  const boxHeight = height / 1.78
  const boxWidth = width / 2
  useEffect(() => {
    getIntrosliderDetails();
  }, []);
  const getIntrosliderDetails = async () => {
    await APICall(
      'GET',
      'walkthroughs/',
      {},
      response => {
        // console.log('API Success:', response);
        response && setMainLoader(false);
        setSliderData(response?.items || []);
      },
      error => {
        res && setMainLoader(false);
        console.log(error, 'Error fetching slider data');
        Toast.show(response?.message, Toast.SHORT);

      },
    );
    // await APICall(
    //   'get',
    //   'walkthroughs/',
    //   {},
    //   getdetailsSuccess,
    //   getdetailsFail,
    // );
  };
  {/*handle req */ }
  const handlePostAPI = async () => {
    setLoading(true)

    const postData = {
      mobile: mobile
    };
    await APICall(
      'POST', // HTTP method
      'auth/otp/send/', // Endpoint (adjust based on your API)
      postData, // Parameters to send in the request body
      async response => {
        // Handle success
        console.log('API Success login:', response, 'login');
        if (response?.success) {
          if (response.sms_id) {
            await AsyncStorage.setItem('sms_id', response?.sms_id)
          }
          props.navigation.navigate('OTP', {
            mobile: response,
            sliderData: sliderData,
            resendOTP:handlePostAPI
          });
          setLoading(false)
        }
        else {
          Toast.show(response?.message || 'Failed to send OTP', Toast.SHORT)
          setLoading(false)
        }
      },
      error => {
        console.error('Error posting data:', error);
        Toast.show(error, Toast.SHORT)
        setLoading(false)

      },
      false
    );
  };
  // const getdetailsSuccess = res => {
  //   res && setLoading(false);
  //   setSliderData(res?.items || []);
  // };
  // const getdetailsFail = error => {
  //   res && setLoading(false);
  //   console.log(error, 'Error fetching slider data');
  // };
  const handleOTPPress = () => {


    if (mobile?.length === 10) {
      handlePostAPI();
    } else {
      Toast.show('Please enter a valid mobile number', Toast.SHORT);
    }
  };


  return mainLoader ? (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={orange} />
    </View>
  ) :
    !isTablet ?
      (
        <>
          <ScrollView bounces={false} overScrollMode='never' contentContainerStyle={styles.mainContainer1}>
            <LinearGradient
              colors={['#F38314', '#DB3735']}
              style={styles.mainContainer}>
              <StatusBar backgroundColor={'#F38314'} />
              <KeyboardAvoidingView style={styles.main}>
                <View style={styles.welcomeContainer}>
                  <Image source={ImagePath.logo1} style={styles.logo} />
                  <View style={styles.IntroSlider}>
                    {sliderData && (
                      <IntroSlider
                        sliderData={sliderData}
                        customStyle={styles.IntroSlider}
                      />
                    )}
                  </View>
                  <Text style={styles.hi}>Hi, Invincible</Text>
                  <Text style={styles.welcome}>Welcome to Arihant Plus!</Text>
                  <Text style={styles.stepsIntro}>To create your account</Text>
                  <Text style={styles.steps}>
                    Please enter your mobile number. We will send you a One-Time
                    Password (OTP) via SMS
                  </Text>
                </View>
                <View style={styles.numberContainer}>
                  <View style={styles.countryCode}>
                    <Text style={styles.countryCodeText}>+91</Text>
                  </View>
                  <TextInput
                    maxLength={10}
                    keyboardType="number-pad"
                    placeholder="Enter Your Mobile No."
                    placeholderTextColor={GRAY}
                    value={mobile}
                    onChangeText={text => setMobile(text)}
                    style={styles.mobileInput}
                  />
                </View>
                {
                  loading ?
                    <View style={{ marginVertical: "2%" }}>
                      <ActivityIndicator size={'small'} color={orange} />
                    </View>

                    : <Button
                      customStyles={styles.getOTP}
                      textStyle={{ color: WHITE, fontSize: width * 0.034, fontFamily: IsidoraSemiBold }}
                      text={'Get OTP'}
                      onPress={() => handleOTPPress()}
                    />
                }
                <View style={styles.orContainer}>
                  <View style={styles.line} />
                  <Text style={styles.or}>OR</Text>
                  <View style={styles.line} />
                </View>
                <Button
                  customStyles={styles.googleButton}
                  textStyle={{
                    color: DARKGRAY,
                    fontFamily: IsidoraSemiBold,
                    fontSize: width * 0.04,
                  }}
                  text={'Continue with Google'}
                  icon={ImagePath.google}
                />
                <View style={styles.lineShadow} />
                <View style={styles.alreadyContainer}>
                  <Text style={styles.alreadyText}>Already have an account? </Text>
                  <TouchableOpacity>
                    <Text style={styles.LoginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </LinearGradient>
          </ScrollView>
        </>
      )
      : (
        <>
          <ScrollView bounces={false} overScrollMode='never' contentContainerStyle={styles.mainContainer1}>
            <LinearGradient
              colors={['#F38314', '#DB3735']}
              style={styles.mainContainer}>
              <StatusBar backgroundColor={'#F38314'} />
              <KeyboardAvoidingView style={styles.mainTab}>
                <View style={styles.middleContainer} >
                  <View style={styles.IntroSliderTab}>
                    <View style={styles.IntroSliderstyle}>
                      {sliderData && (
                        <IntroSliderTab
                          sliderData={sliderData}
                          customStyle={styles.IntroSlider}
                        />
                      )}
                    </View>
                    <View style={{ backgroundColor: WHITE, height: boxHeight, width: boxWidth, overflow: "hidden" }}>

                      <Image source={ImagePath.logo1} style={styles.logoTab} />
                      <Text style={styles.hiTab}>Hi, Invincible</Text>
                      <Text style={styles.welcomeTab}>Welcome to Arihant Plus!</Text>
                      <Text style={styles.stepsIntroTab}>To create your account</Text>
                      <Text style={styles.stepsTab}>
                        Please enter your mobile number. We will send you a One-Time
                        Password (OTP) via SMS
                      </Text>
                      <View style={styles.numberContainerTab}>
                        <View style={styles.countryCodeTab}>
                          <Text style={styles.countryCodeTextTab}>+91</Text>
                        </View>
                        <TextInput
                          maxLength={10}
                          keyboardType="number-pad"
                          placeholder="Enter Your Mobile No."
                          placeholderTextColor={GRAY}
                          value={mobile}
                          onChangeText={text => setMobile(text)}
                          style={styles.mobileInputTab}
                        />
                      </View>
                      {loading ?
                        <View style={{ marginVertical: "2%" }}>
                          <ActivityIndicator size={'small'} color={orange} />
                        </View>
                        :
                        <Button
                          customStyles={styles.getOTPTab}
                          textStyle={{ color: WHITE, fontSize: width * 0.022 }}
                          text={'Get OTP'}
                          onPress={() => handleOTPPress()}
                        />
                      }

                      <View style={styles.orContainerTab}>
                        <View style={styles.lineTab} />
                        <Text style={styles.orTab}>OR</Text>
                        <View style={styles.lineTab} />
                      </View>
                      <Button
                        customStyles={styles.googleButtonTab}
                        textStyle={{
                          color: DARKGRAY,
                          fontFamily: IsidoraSemiBold,
                          fontSize: width * 0.024,
                        }}
                        text={'Continue with Google'}
                        icon={ImagePath.google}
                      />
                      <View style={styles.lineShadowTab} />
                      <View style={styles.alreadyContainerTab}>
                        <Text style={styles.alreadyTextTab}>Already have an account? </Text>
                        <TouchableOpacity>
                          <Text style={styles.LoginButtonTextTab}>Login</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                </View>
              </KeyboardAvoidingView>
            </LinearGradient>
          </ScrollView>
        </>
      );
};
export default index;
