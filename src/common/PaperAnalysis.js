import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ImagePath } from '../values/ImagePath';
import { IsidoraBold, IsidoraLight, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
const { height, width } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { BLACK, DARKGRAY, LIGHTGRAY2, orange, RED, WHITE } from '../values/Colors';

const data = [
  {
    exam: 'NEET 2024 Paper Analysis:',
    subHeading: 'Expert Insight and solutions!',
    description:
      'A detailed analysis of the NEET 2024 exam, offering correct solutions and expert insights ',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/edd7/3512/d67447b03517bf501e41a31ddfd6ba5b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv9VC2c1v2YgAfrZ5-7uCkGygmSKa0fpuq3IbX7J80DTBl5dM9JSyLJ5KKD0DJzxRM4tqxGHf9dViElgadOH78ElIspi~7rrGeCzRwYHKJtI39qhS3e8sQPjXJguOXXP4WerR9PkIbvmpblVhQbWyeNPftOmuL4wmKssE1ZFo5oNS2mPZrZl-sKd51H2cIbtTD-ei4Cx2nFrOA6M5Hq1OM5kBllxFqRLgfBgonTa5UR8QJqz1NZ-khbBC0rQIHBe2eWr~G6Yx4-p4VLOszx0kOGw-Zvt4NCYq2-Ts1iw8CDiNFycUZb1Q0SdpApFIkU~RUdjrclimDPmN6JnaacKWw__',
  },
];

const PaperAnalysis = () => {
  return data.map((item, index) => {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.symbol}>
            <Text style={styles.symbolword}>Must Watch</Text>
            <View style={styles.circle}>
              <AntDesign name="caretright" size={12} color={orange} />
            </View>
          </TouchableOpacity>
          <Text style={styles.examtext}>{item?.exam}</Text>
          <Text style={styles.subheading}>{item?.subHeading}</Text>
          <View style={styles.parentWord}>
            <Entypo name="check" size={18} color={orange} />
            <Text
              style={styles.desc}>
              {item?.description}
            </Text>
          </View>
        </View>
        <View>
          <Image source={ImagePath.topper} style={styles.img} />
        </View>
      </View>
    );
  });
};

export default PaperAnalysis;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    height: height / 5.3,
    backgroundColor: LIGHTGRAY2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: '5%',
    alignSelf: "center"
  },
  img: {
    height: height*0.2,
    width: width*0.2,
    resizeMode: 'contain',
    marginLeft:'5%'
  },
  symbol: {
    backgroundColor: orange,
    width: width / 3.7,
    // paddingHorizontal: 10,
    paddingVertical: '1%',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
  symbolword: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width*0.034,
    paddingHorizontal: '5%'
  },
  examtext: {
    color: RED,
    fontSize: width*0.037,
    fontFamily: IsidoraBold,
    marginTop: '2%',
  },
  subheading:
  {
    fontFamily: IsidoraMedium,
    color: BLACK,
    fontSize: width*0.04
  },
  parentWord: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width/1.8,
    marginTop: '3%',
  },
  desc: {
    marginLeft: '3%',
    color: BLACK,
    fontFamily:IsidoraRegular,
    fontSize: width*0.022,
    lineHeight:height*0.015
  }
});
