import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, LIGHTORANGE, orange, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ImagePath } from '../values/ImagePath'
import Button from './Button'
const { width, height } = Dimensions.get('window')
const FreeSubjectTest = ({ item }) => {
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.full}>Full Test {item?.id}</Text>
      <Text style={styles.heading}>{item.heading}</Text>
      <View style={styles.questiondetailbox}>
        <View style={styles.innerbox}>
          <Image source={ImagePath.listicon} style={styles.listicon} />
          <Text style={styles.totalquestion}>{item.totalquestion}<Text style={styles.questiontext}>{' '}Questions</Text></Text>
        </View>
        <View style={styles.innerbox}>
          <AntDesign name={'checkcircleo'} size={width * 0.025} color={DARKGRAY} />
          <Text style={styles.totalquestion}>{item.totalmarks}<Text style={styles.questiontext}>{' '}Marks</Text></Text>

        </View>
        <View style={styles.innerbox}>
          <AntDesign name={'clockcircleo'} size={width * 0.025} color={DARKGRAY} />
          <Text style={styles.totalquestion}>{item.duration}<Text style={styles.questiontext}>{' '}Mins</Text></Text>
        </View>
       </View>
       <Button
       text={'Attempt Now'}
       customStyles={styles.btn}
       textStyle={styles.btntext}/>
    </View>
  )
}

export default FreeSubjectTest

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: WHITE,
    width: width * 0.94,
    alignSelf: 'center',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.035,
    elevation: 5,
    borderRadius: width * 0.03,
    marginBottom: height * 0.02
  },
  full: {
    color: orange,
    borderColor: orange,
    borderWidth: 0.5,
    paddingHorizontal: width * 0.01,
    paddingVertical: height * 0.003,
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.03,
    textAlign: "center",
    width: width * 0.2,
    borderRadius: width * 0.01,
    backgroundColor: LIGHTORANGE,
    marginBottom:height*0.006
    // padding:0
  },
  heading: {
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.04,
    color: DARKGRAY,
    marginBottom:height*0.006

  },
  questiondetailbox: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    width:width*0.75,
    marginBottom:height*0.01


  },
  innerbox: {
    flexDirection: "row",
    alignItems: 'center',
    
  },
  totalquestion: {
    fontFamily: IsidoraSemiBold,
    color: GRAY,
    fontSize: width * 0.035,
    marginLeft: width * 0.01
  },
  questiontext: {
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    fontSize: width * 0.032,

  },
  listicon: {
    resizeMode: 'contain',
    height: height * 0.015,
    width: width * 0.03,

    // backgroundColor:'red'
  },
  btn:{
    backgroundColor:orange,
    alignItems:'center',
    justifyContent:'center',
    padding:0,
    width:width*0.26,
    height:height*0.035,
    borderRadius:width*0.02,
    marginBottom:0
  },
  btntext:{
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.033,
    color:WHITE
  }
})