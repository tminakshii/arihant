import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  orange,
  RED,
  WHITE,
} from '../values/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import { IsidoraLight, IsidoraMedium, IsidoraRegular } from '../values/Fonts';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const SearchCommon = () => {
  const navigation = useNavigation();
  const [recognizedText, setRecognizedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const isTablet=DeviceInfo.isTablet()

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  useEffect(() => {
    // Navigate only if recognizedText is non-empty after recognition stops
    if (recognizedText.trim()) {
      navigation.navigate('SearchBox', {recognizedText});
      stopListening();
    }
  }, [recognizedText, navigation]);
  const onSpeechStart = () => {
    console.log('Voice is Recognising....');
  };
  const onSpeechResults = event => {
    const SpokenText = event.value ? event.value[0] : '';
    setRecognizedText(SpokenText);
    console.log('Recognized text', SpokenText);
  };
  const onSpeechError = event => {
    console.log('Speech recognition error', event.error);
  };
  const startListening = async () => {
    // console.log('helllllll');

    try {
      setRecognizedText('');
      setIsListening(true);

      await Voice.start('en-US');
    } catch (error) {
      console.error('Error in recognition of your voice', error);
    }
  };
  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
      if (recognizedText) {
        navigation.navigate('SearchBox', {recognizedText: recognizedText});
      }
    } catch (error) {
      console.error('error in stop voice Recognition', error);
    }
  };

  if(!isTablet){
    return(
      <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SearchBox')}>
      <View style={styles.searchBar}>
        <TouchableOpacity style={Platform.OS=="android"? styles.iconLeft:styles.iconLeftios}>
          <EvilIcons name="search" size={width * 0.055} color={BLACK} />
        </TouchableOpacity>

        <Text style={[isListening ? styles.listningtext : styles.placeholder]}>
          {isListening ? 'Recognizing your Voice...' : 'Search '}
        </Text>

        <TouchableOpacity
          style={[isListening ? styles.iconActive : styles.iconRight]}
          onLongPress={() => startListening()}
          onPressOut={() => stopListening()}>
          <MaterialCommunity
            name="microphone-outline"
            size={width * 0.05}
            color={DARKGRAY}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    )
  }
  else{
    return (
      <TouchableOpacity
      style={styles.containerTab}
      onPress={() => navigation.navigate('SearchBox')}>
      <View style={styles.searchBarTab}>
        <TouchableOpacity style={Platform.OS=="android"? styles.iconLeft:styles.iconLeftios}>
          <EvilIcons name="search" size={width * 0.025} color={BLACK} />
        </TouchableOpacity>
  
        <Text style={[isListening ? styles.listningtextTab : styles.placeholderTab]}>
          {isListening ? 'Recognizing your Voice...' : 'Search '}
        </Text>
  
        <TouchableOpacity
          style={[isListening ? styles.iconActiveTab : styles.iconRightTab]}
          onLongPress={() => startListening()}
          onPressOut={() => stopListening()}>
          <MaterialCommunity
            name="microphone-outline"
            size={width * 0.022}
            color={DARKGRAY}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    );
  }
};

export default SearchCommon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: height * 0.02, // Responsive vertical margin
    width: '100%',
    alignSelf: 'center', // Responsive width
  },
  containerTab:{
    width:'90%',
  },
  searchBar: {
    flexDirection: 'row', // Row layout to align icon, text, and microphone
    alignItems: 'center', // Center elements vertically
    backgroundColor: WHITE, // Mimicking input field appearance
    // paddingVertical: height * 0.006, // Responsive padding
    height:height * 0.046,
    paddingLeft: width * 0.02, // Responsive padding for icons and text
    paddingRight: width * 0.008, // Responsive padding for icons and text
    borderRadius: height * 0.03, // Responsive border radius
    width: '90%', // Responsive full width of container
    borderColor: DARKGRAY, // Border color
    marginVertical:height * 0.004,
    borderWidth: 1,
    alignSelf: 'center',
    // backgroundColor:"red"
    // Border to enhance input-like appearance
  },
  searchBarTab:{
    flexDirection: 'row', // Row layout to align icon, text, and microphone
    alignItems: 'center', // Center elements vertically
    backgroundColor: WHITE, // Mimicking input field appearance
    height:height * 0.042,
    paddingLeft: width * 0.02, // Responsive padding for icons and text
    paddingRight: width * 0.008, // Responsive padding for icons and text
    borderRadius: height * 0.032, // Responsive border radius
    width: '100%', // Responsive full width of container
    borderColor: DARKGRAY, // Border color
    borderWidth: 1,
  },
  iconLeft: {
    marginRight: width * 0.02,
    marginBottom: '1%',
  },
  iconLeftios: {
    marginRight: width * 0.02,
    // marginBottom: '1%',
  },
  placeholder: {
    flex: 1, // Take up remaining space between icons
    fontSize: width * 0.038, // Responsive font size
    color: GRAY,
    fontFamily:IsidoraMedium,
    // fontFamily:IsidoraMedium // Placeholder color
  },
  listningtext: {
    flex: 1,
    fontSize: width * 0.04,
    fontFamily:IsidoraMedium,
    color: RED,
  },
  placeholderTab:{
    flex: 1, // Take up remaining space between icons
    fontSize: width * 0.018, // Responsive font size
    color: GRAY,
    fontFamily:IsidoraMedium
  },
  listningtextTab:{
    flex: 1,
    fontSize: width * 0.018,
    color: RED,
    fontFamily:IsidoraMedium
  },
  iconRight: {
    backgroundColor: "#DFE1E5", // Background for the microphone icon
    height: height * 0.036, // Responsive height
    width: height * 0.036, // Responsive width (circle shape)
    borderRadius: height * 0.02, // Circle shape
    justifyContent: 'center', // Center microphone icon inside circle
    alignItems: 'center', // Center microphone icon inside circle
  },
  iconActive: {
    backgroundColor: orange, // Background for the microphone icon
    height: height * 0.03, // Responsive height
    width: height * 0.03, // Responsive width (circle shape)
    borderRadius: height * 0.02, // Circle shape
    justifyContent: 'center', // Center microphone icon inside circle
    alignItems: 'center',
  },
  iconRightTab:{
    backgroundColor: "#DFE1E5", // Background for the microphone icon
    height: height * 0.032, // Responsive height
    width: height * 0.032, // Responsive width (circle shape)
    borderRadius: height * 0.02, // Circle shape
    justifyContent: 'center', // Center microphone icon inside circle
    alignItems: 'center', // Center microphone icon inside circle
  },
  iconActiveTab:{
    backgroundColor: orange, // Background for the microphone icon
    height: height * 0.032, // Responsive height
    width: height * 0.032, // Responsive width (circle shape)
    borderRadius: height * 0.02, // Circle shape
    justifyContent: 'center', // Center microphone icon inside circle
    alignItems: 'center',
  },
});
