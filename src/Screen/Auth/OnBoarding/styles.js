import { Dimensions, StyleSheet } from "react-native";
import { BLACK, DARKGRAY, RED } from '../../../values/Colors';
import { IsidoraSemiBold } from "../../../values/Fonts";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
 
  imageText: {
    bottom: '8%',
    alignItems:'center'
  },

  introimage: {
    height: height / 2.5,
    width: width / 1.6,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.025,
    color: DARKGRAY,
    textAlign: 'center',
    lineHeight: height*0.025
  },

  nextButton: {
    backgroundColor: RED,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 8,
    width: width / 4,
    position: 'relative',
    bottom: '70%',
    left: '30%',
  },
  nextText: {
    color: 'white',
    fontSize: width*0.025,
    marginLeft: '5%',
    fontFamily: IsidoraSemiBold,
    letterSpacing: 1,
  },
  desc: {
    color: 'white',
    fontSize: width*0.025,
    textAlign: 'center',
    width: width / 1.3,
    lineHeight: height*0.028,
    marginTop: '5%',
  },
  prevButton: {
    backgroundColor: RED,
    padding: 8,
    width: width / 4,
    paddingLeft: 20,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    position: 'relative',
    bottom: '70%',
    right: '20%',
  },
  prevText: {
    color: 'white',
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.025,
  },
  dot: {
    backgroundColor: 'white',
    marginBottom: '90%',
  },
  activeDot: {
    backgroundColor: RED,
    marginBottom: '90%',
  },
});