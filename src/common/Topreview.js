import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  orange,
  ratingcolor,
  WHITE,
} from '../values/Colors';
import {IsidoraBold, IsidoraMedium, IsidoraSemiBold} from '../values/Fonts';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()
const {width, height} = Dimensions.get('window');
const Topreview = ({item,index}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item?.customer_name}</Text>

      <View style={styles.ratingbox}>
        <Stars
          default={item.review_rating}
          count={5}
          half={true}
          disabled
          fullStar={
            <Icon
              name={'star'}
              size={isTablet?width *0.025:width *0.035}
              color={ratingcolor}
              style={[styles.myStarStyle]}
            />
          }
          emptyStar={
            <Icon
              name={'star-outline'}
              size={isTablet?width *0.025:width *0.035}
              color={ratingcolor}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <Icon
              name={'star-half'}
              size={width *0.0418}
              color={ratingcolor}
              style={[styles.myStarStyle]}
            />
          }
        />
        <Text style={styles.bestbook}>{item?.review_comment}</Text>
      </View>
      <Text style={styles.date}>Reviewed in India on {item?.review_date}</Text>
      {item?.is_verified && (
        <Text style={styles.varified}>Verified Purchase </Text>
      )}

      <Text style={styles.comment}>Good book to study for exam</Text>

      <View style={styles.feedbackcontainer}>
        <View style={styles.helpfulbox}>
          <Text style={styles.helpful}>Helpful</Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.feedbacktext}>Feedback</Text>
      </View>
    </View>
  );
};

export default Topreview;
const styles = StyleSheet.create({
  card: {
    width:isTablet?'100%':width / 1.3,
    marginVertical: '3%',
  },
  name: {
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet?width * 0.026:width * 0.036,
    color: DARKGRAY,
    marginVertical: '1%',
  },
  bestbook: {
    fontFamily: IsidoraBold,
    color: LIGHTGREYTEXT,
    fontSize:isTablet?width * 0.022:width * 0.035,
    marginHorizontal: '2%',
    marginVertical: '1%',
  },
  comment: {
    fontFamily: IsidoraSemiBold,
    fontSize:isTablet?width * 0.022:width * 0.03,
    color: '#353C41D6',
    marginVertical: '1%',
  },
  date: {
    fontFamily: IsidoraSemiBold,
    color: GRAY,
    fontSize:isTablet?width * 0.02:width * 0.03,
    marginVertical: '1%',
  },
  ratingbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  varified: {
    fontFamily: IsidoraBold,
    color: ratingcolor,
    fontSize:isTablet?width * 0.023:width * 0.035,
    lineHeight: height*0.025,
  },
  star: {
    lineHeight: height*0.025,
  },
  feedbackcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
  },
  helpful: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize:isTablet?width * 0.02:width * 0.03,
  },
  helpfulbox: {
    borderWidth: 0.5,
    borderColor: '#00000080',
    borderRadius: width *0.0223,
    paddingHorizontal: '8%',
    paddingVertical: '1%',
  },
  line: {
    height: height * 0.022,
    width: width * 0.003,
    backgroundColor: GRAY,
    marginHorizontal: '3%',
  },
  feedbacktext: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize:isTablet?width * 0.02:width * 0.031,
  },
});
