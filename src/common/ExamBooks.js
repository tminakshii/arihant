import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../values/ImagePath';
import {IsidoraBold, IsidoraLight, IsidoraMedium} from '../values/Fonts';
import {DARKGRAY, DARKRED, RED, WHITE} from '../values/Colors';
const {width, height} = Dimensions.get('window');
const data = [
  {
    SuccessRate: '100%',
    exam: 'NEET competitive exam',
    imageUrl: ImagePath.Book,
  },
];

const ExamBooks = () => {
  return data.map((item, index) => {
    return (
      <View style={styles.container}>
        <View style={styles.wordParent}>
          <Text style={styles.plustext}>+</Text>
          <View style={styles.box}>
            <Text style={styles.successRateText}>
              {item?.SuccessRate}
              <Text style={styles.successText}> Success</Text>
            </Text>
          </View>
          <Text style={styles.examText}>{item?.exam}</Text>
          <Text style={styles.subtitleText}>Get your Hands</Text>
          <Text style={styles.subtitleText1}>
            on Our Best-sellers Test series Now!
          </Text>
        </View>
        <View>
          <Image source={item?.imageUrl} style={styles.img} />
        </View>
      </View>
    );
  });
};

export default ExamBooks;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    height: height / 5.5,
    backgroundColor: DARKRED,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center',
  },
  wordParent: {
    marginBottom: '8%',
  },

  plustext: {
    color: WHITE,
    fontSize: width * 0.05,
    marginLeft: '43%',
    top: '7%',
  },
  box: {
    backgroundColor: WHITE,
    width: width * 0.25,
    padding: '2%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    height: 80,
    width: 70,
    resizeMode: 'contain',
  },
  successText: {
    fontSize: width * 0.032,
  },
  successRateText: {
    color: RED,
    fontSize: width * 0.032,
  },
  examText: {
    color: WHITE,
    fontSize: width * 0.045,
    // fontWeight: 'bold',
    fontFamily: IsidoraBold,
    marginTop: '2%',
    marginLeft: '2%',
  },
  subtitleText: {
    color: WHITE,
    fontFamily: IsidoraMedium,
    fontStyle: 'italic',
    fontSize: width * 0.028,
    marginLeft: '2%',
    marginTop: '2%',
  },
  subtitleText1: {
    color: WHITE,
    fontFamily: IsidoraMedium,
    fontStyle: 'italic',
    fontSize: width * 0.03,
    lineHeight: height * 0.018,
    marginLeft: '2%',
  },
});
