import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Button from '../../../common/Button';
import { styles } from './styles';
import logo from '../../../assets/images/ArihantPlusLogo1.png';
import { BLACK, DARKGRAY, GRAY, WHITE } from '../../../values/Colors';
import { ImagePath } from '../../../values/ImagePath';
import { IsidoraBold, IsidoraSemiBold } from '../../../values/Fonts';
import OTPTextView from 'react-native-otp-textinput';
import Toast from 'react-native-simple-toast';
import IntroSlider from '../../../common/IntroSlider';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import { OtpInput } from 'react-native-otp-entry';
import DeviceInfo from 'react-native-device-info';
import IntroSliderTab from '../../../common/IntrosliderTab';
import { APICall } from '../../../Services/ApiCall';
import Loadercommon from '../../../common/Loadercommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isTablet = DeviceInfo.isTablet();

const OTP = props => {
  const { mobile, sliderData } = props?.route?.params;
  const otpRef = useRef();
  const [loading, setLoading] = useState(false)
  const [reginfo, setReginfo] = useState()
  const [otp, setOtp] = useState(''); //state for handle otp
  const handleBack = () => {
    props.navigation.goBack();
  };
  // console.log(mobile?.sms_id,'sms_id')

  const handleVerifyOTP = async () => {
    setLoading(true)
    const postData = {
      otp: otp,
      mobile: mobile?.mobile,
      sms_id: mobile?.sms_id
    };
    console.log(postData, 'postdata,,,,,O')
    await APICall(
      'POST',
      'auth/otp/submit/',
      postData,
      async (response) => {
        console.log('API Success', response);
        setLoading(false)
        if (response?.success) {
          const { auth_token, refresh_token } = response; // Assuming these tokens are in the response
          setReginfo(response)
          if (auth_token) {
            await AsyncStorage.setItem('Token', auth_token); // Save refresh_token
          }
          if (refresh_token) {
            await AsyncStorage.setItem('refresh', refresh_token)
          }
          if (!response?.is_registration_required) {
            await AsyncStorage.setItem('userInfo', JSON.stringify(response));
            props.navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'MyDrawer',
                  params: { registerInformation: response },
                },
              ],
            })
          }
          else {
            props.navigation.navigate("Register",
              {
                registerInformation: response,
                sliderData: sliderData,
              })
          }

        }
        else {
          Toast.show(response.message, Toast.SHORT)
        }
      },
      error => {
        setLoading(false);
        console.error('API Error:', error);
        Toast.show('An error occurred. Please try again later.', Toast.SHORT);
      }
    )
  }
  
  const handleTextChange = text => {
    setOtp(text);
    console.log(text, 'otp')
  };
  return !isTablet ? (
    <ScrollView contentContainerStyle={styles.mainContainer1} bounces={false} >

      <LinearGradient
        colors={['#F38314', '#DB3735']} // Linear gradient colors
        style={styles.mainContainer}>
        <StatusBar backgroundColor={'#F38314'} />


        <KeyboardAvoidingView style={styles.main}>

          <View style={styles.welcomeContainer}>
            <Image source={ImagePath.logo1} style={styles.logo} />
            <IntroSlider
              sliderData={sliderData}
              customStyle={styles.IntroSlider}
            />
            <Text style={styles.almostDone}>Great Almost Done</Text>
            <Text style={styles.verifyNum}>
              Please verify your Mobile Number
            </Text>
            {/* <Text style={styles.verifyNum}>r</Text> */}
          </View>
          <View style={styles.otpTextContainer}>
            <Image source={ImagePath.otp} style={styles.otpimage} />
            <View>
              <Text style={styles.otpText}>
                Enter the OTP which has been sent to
              </Text>
              <Text
                style={[
                  styles.otpText,
                  { fontFamily: IsidoraBold },
                ]}>
                {`mobile no. xxxx xxx${props?.route?.params?.mobile?.mobile.slice(
                  -3,
                )}`}
              </Text>
            </View>
          </View>
          {/* <OTPTextView inputCount={4} containerStyle={styles.otpContainer} textInputStyle={styles.textInputStyle}
        handleTextChange={handleTextChange}
        tintColor={BLACK} /> */}
          <OtpInput
            numberOfDigits={4}
            onTextChange={text => handleTextChange(text)}
            focusColor={DARKGRAY}
            secureTextEntry={true}
            theme={{
              containerStyle: styles.otpContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              // focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Don't receive OTP?</Text>
            <TouchableOpacity>
              <Text style={styles.resendButtonText}> Resend OTP</Text>
            </TouchableOpacity>

          </View>
          {loading &&
            (<Loadercommon />)
          }
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => handleBack()}
              customStyles={styles.backButton}
              icon={ImagePath.arrowLeft}
              iconStyle={styles.iconStyle}
              text={'Back'}
              textStyle={{
                color: "#353C41",
                fontFamily: IsidoraSemiBold,
                fontSize: width * 0.033,
              }}
            />
            <Button
              customStyles={styles.backButton2}
              text={'Verify'}
              textStyle={{
                color: WHITE,
                fontFamily: IsidoraBold,
                fontSize: width * 0.033,
              }}
              onPress={handleVerifyOTP}
            />
          </View>
          {/* <View style={styles.lineShadow} />
            <View style={styles.alreadyContainer}>
              <Text style={styles.alreadyText}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.LoginButtonText}>Login</Text>
              </TouchableOpacity>
            </View> */}
          <View style={styles.lineShadow} />
          <View style={styles.alreadyContainer}></View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ScrollView>
  )
    :
    <>
      <ScrollView contentContainerStyle={styles.mainContainer1} bounces={false} >


        <LinearGradient
          colors={['#F38314', '#DB3735']} // Linear gradient colors
          style={styles.mainContainerTab}>
          <StatusBar backgroundColor={'#F38314'} />

          <KeyboardAvoidingView>
            <View style={styles.middleContainer}>
              <View style={styles.IntroSliderTab}>
                <View style={styles.IntroSliderstyle}>

                  {sliderData && (
                    <IntroSliderTab
                      sliderData={sliderData}
                      customStyle={styles.IntroSlider}
                    />
                  )}
                </View>
                

                <View style={{ backgroundColor: WHITE, height: height / 1.78, width: width / 2, overflow: "hidden" }}>
                  <ScrollView bounces={false} showsVerticalScrollIndicator={false} overScrollMode='never'>

                    <Image source={ImagePath.logo1} style={styles.logoTab} />

                    <Text style={styles.almostDoneTab}>Great Almost Done</Text>
                    <Text style={styles.verifyNumTab}>
                      Please verify your Mobile Number
                    </Text>
                    <View style={styles.otpTextContainerTab}>
                      <Image source={ImagePath.otp} style={styles.otpimageTab} />
                      <View>
                        <Text style={styles.otpTextTab}>
                          Enter the OTP which has been sent to
                          <Text
                            style={[
                              styles.otpTextTab,
                              { fontFamily: IsidoraBold },
                            ]}>
                            {`mobile no. xxxx xxx${props?.route?.params?.mobile?.mobile.slice(
                              -3,
                            )}`}

                          </Text>
                        </Text>

                      </View>
                    </View>
                    <OtpInput
                      numberOfDigits={4}
                      onTextChange={text => handleTextChange(text)}
                      secureTextEntry={true}
                      focusColor={DARKGRAY}
                      theme={{
                        containerStyle: styles.otpContainerTab,
                        pinCodeContainerStyle: styles.pinCodeContainerTab,
                        pinCodeTextStyle: styles.pinCodeText,
                        // focusStickStyle: styles.focusStick,
                        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                      }}
                    />
                    <View style={styles.resendContainerTab}>
                      <Text style={styles.resendTextTab}>Don't receive OTP?</Text>
                      <TouchableOpacity>
                        <Text style={styles.resendButtonTextTab}> Resend OTP</Text>
                      </TouchableOpacity>
                    </View>
                    {loading &&
                  (<Loadercommon />)}
                    <View style={styles.buttonContainerTab}>
                      <Button
                        onPress={() => handleBack()}
                        customStyles={styles.backButtonTab}
                        icon={ImagePath.arrowLeft}
                        iconStyle={styles.iconStyleTab}
                        text={'Back'}
                        textStyle={{
                          color: "#353C41",
                          fontFamily: IsidoraSemiBold,
                          fontSize: width * 0.025,
                        }}
                      />
                      <Button
                        customStyles={styles.backButton2Tab}
                        text={'Verify'}
                        textStyle={{
                          color: WHITE,
                          fontFamily: IsidoraBold,
                          fontSize: width * 0.025,
                        }}
                        onPress={handleVerifyOTP}
                      />
                    </View>


                  </ScrollView>
                  <View>
                    <View style={styles.lineShadowTab} />
                    <View style={styles.alreadyContainerTab}>
                    </View>
                  </View>


                </View>





              </View>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ScrollView>
    </>


};
export default OTP;
