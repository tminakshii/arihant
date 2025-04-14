import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, orange, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
const { width, height } = Dimensions.get('window')
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { ImagePath } from '../values/ImagePath'
import Button from './Button'

const FreeLiveQuiz = ({ item }) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.leftContent}>
        <Text style={styles.headingtext}>{item?.heading}</Text>
        <View style={styles.contentdetailsContainer}>
          <View style={styles.contentdetails}>
            {/* <MaterialIcons name="list-alt" size={width * 0.04} color={BLACK} /> */}
            <Image source={ImagePath?.listicon} style={styles.listIcon}/>
            <Text style={styles.contenttext}>{item.totalquestion} Questions</Text>
          </View>
          <View style={styles.contentdetails}>
            <Antdesign name="checkcircleo" size={width * 0.028} color={BLACK} />
            <Text style={styles.contenttext}>{item.totalmarks} Marks</Text>
          </View>
          <View style={styles.contentdetails}>
            <Antdesign name="clockcircleo" size={width * 0.028} color={BLACK} />
            <Text style={styles.contenttext}>{item.duretion} Mins</Text>
          </View>
        </View>

        <View style={styles.timingView}>
          <View style={styles.calenderView}>

          <Image source={ImagePath.calender2} style={styles.calenderimage} />
          <Text style={styles.timimgtext}>5 July, 20:00 to 6 July, 20:20</Text>
          </View>
          <Button
            text={"Upcoming Live"}
            customStyles={styles.livebuttonstyle}
            textStyle={styles.textstyle}
            icon={ImagePath.livedot}
            iconStyle={styles.dotstyle}
          />
        </View>
        <View style={styles.rightButtonContainer}>
        <Button
          text={"Register Now"}
          textStyle={styles.registerTextStyle}
          customStyles={styles.registerButtonStyle}
        />
      </View>
      </View>
     
    </View>
  )
}

export default FreeLiveQuiz

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: WHITE,
    // borderWidth: 1,
    // borderColor: orange,
    marginVertical: height * 0.015,
    marginHorizontal: width * 0.04,
    paddingHorizontal: width * 0.05,
    // paddingRight: width * 0.02,

    // paddingVertical: width * 0.03,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    elevation:5,
    shadowColor:GRAY,
    shadowOffset:{width:0,height:5},
    shadowOpacity: 0.15, 
    
  },
  leftContent: {
    flex: 1,
    marginRight: width * 0.05, // Space between the content and the button
  },
  headingtext: {
    fontSize: width * 0.038,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    marginTop:"5%",
  },
  contentdetailsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: height * 0.015,
  },
  contentdetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.085,
  },
  contenttext: {
    marginLeft: width * 0.015,
    fontSize: width * 0.030,
    color: DARKGRAY,
    fontFamily:IsidoraMedium
  },
  calenderimage: {
    resizeMode: 'contain',
    height: height * 0.025,
    width: width * 0.035,
    marginRight: width * 0.02,
    marginLeft: width * 0.006,

  },
  timingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
    // flexWrap: 'wrap',
  },
  timimgtext: {
    fontSize: width * 0.030,
    color: DARKGRAY,
    marginRight: "5%",
    fontFamily:IsidoraMedium

   
  },
  livebuttonstyle: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: GRAY,
    paddingVertical:0,
    paddingHorizontal: width * 0.01,
    borderRadius: width*0.05,
    width:width*0.33,
    height:height*0.03555,
    marginLeft:width*0.01
  },
  textstyle: {
    color: orange,
    fontSize: width * 0.027,
    fontFamily: IsidoraSemiBold,
  },
  dotstyle: {
    resizeMode: 'contain',
    height: height * 0.03,
    width: width * 0.055,
    marginRight: width*0.03,
  },
  rightButtonContainer: {
    justifyContent: "flex-end",
  },
  registerButtonStyle: {
    backgroundColor: orange,
    borderRadius: width*0.015,
    paddingVertical: height * 0.013,
    paddingHorizontal: width * 0.04,
    width:width/3.3,
    justifyContent:"center",
    marginTop:"7%",
    marginBottom:"6%"
    // alignSelf:"flex-end"
  },
  registerTextStyle: {
    color: WHITE,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
  },
  calenderView:{
    // justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center"
  },
  listIcon:{
    height:height*0.02,
    width:width*0.028,
    resizeMode:"contain"
  }
})
