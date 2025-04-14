import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../common/Header'
import { IsidoraBlack, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../../values/Fonts'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTBLUE, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREYTEXT, orange, WHITE } from '../../values/Colors'
import { ImagePath } from '../../values/ImagePath'
import GeneralInstructions from '../../common/GeneralInstructions'
import TestInstructions from '../../common/TestInstructions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { isTablet } from 'react-native-device-info'
const { width, height } = Dimensions.get('window')

const ExamPage = ({ route }) => {
  const test = route?.params?.test
  const [language,setLanguage]=useState('English')
  const [step,setStep]=useState(1);
  const handleNext=()=>{
    setStep(2)
  }
  const handlePrevious=()=>{
    setStep(1)
  }
  //  console.log(width*0.0306,'HELLO2')
  return (
    <SafeAreaView style={{flex:1}}>
  <Header
        showinitialbox={true}
        showback={true}
        showmiddlebox={true}
        showlastbox={true}
        title={'BookDetail'}
        textStyle={styles.title}
      />

    <ScrollView contentContainerStyle={{backgroundColor:LIGHTGRAY}}>
    

      <View style={styles.container}>
      <Text style={styles.homejee}>
        Home / Jee & Other Engg Entrances /
        <Text style={styles.years}> Online Test Series</Text>
      </Text>
      <Text style={styles.heading}>{test?.innertest?.heading}</Text>
      <View style={styles.rulesContainer}>
        <View style={styles.rule}>
          <Image source={ImagePath?.check} style={styles.ruleIcon}/>
          <View style={styles.ruleDesc}>
            <Text style={styles.ruleHeading}>Minimum</Text>
            <Text style={styles.ruleDescText}>200 Marks</Text>
          </View>
        </View>

        <View style={[styles.rule,{paddingHorizontal:'3.5%'}]}>
          <Image source={ImagePath?.clock} style={styles.ruleIcon}/>
          <View style={styles.ruleDesc}>
            <Text style={[styles.ruleHeading,{textAlign:'center'}]}>Duration</Text>
            <Text style={[styles.ruleDescText,{textAlign:'center'}]}>60 Min</Text>
          </View>
        </View>

        <View style={[styles.rule,{paddingHorizontal:'3.5%'}]}>
        {/* <ImageBackground source={ImagePath?.rectangle} style={styles.backImage}> */}

          <Image source={ImagePath?.lang} style={[styles.ruleIcon,{width:width*0.064,height:width*0.0556}]}/>  
        {/* </ImageBackground> */}
          <View style={styles.ruleDesc}>
            <TouchableOpacity onPress={()=>setLanguage('English')} style={styles.language}>
            <Text style={[styles.ruleHeading,{color:language=='English'?orange:BLACK,fontSize:width*0.031,marginBottom:'6%',textAlign:'center'}]}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setLanguage('Hindi')} >
            <Text style={[styles.ruleHeading,{color:language=='Hindi'?orange:BLACK,fontSize:width*0.031,textAlign:'center'}]}>Hindi</Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>

      <View style={styles.userContainer}>
        <Image source={ImagePath?.profile} style={styles.userImage}/>
        <View style={styles.userDetailContainer}>
          <Text style={styles.userName}>Anish Kr.</Text>
          <Text style={styles.dob}>20 April 2005</Text>
          <Text style={styles.subject}>Subject : P/C/M</Text>
        </View>
      </View>
      </View>

      {
        step===1 &&
        <GeneralInstructions handleNext={handleNext}/>
      }
      {
        step===2 &&
        <TestInstructions handlePrevious={handlePrevious}/>
      }
      
    </ScrollView>
    </SafeAreaView>

  )
}

export default ExamPage

const styles = StyleSheet.create({
  container:{
    marginHorizontal:'5%'
  },
  homejee: {
    marginTop: '7%',
    fontFamily: IsidoraSemiBold,
    color: GRAY,
    fontSize: width * 0.028,
    textAlign: 'left',
    // marginLeft: '6%'
  },
  years: {
    color: DARKGRAY
  },
  heading:{
    color:LIGHTGREYTEXT,
    fontFamily:IsidoraSemiBold,
    fontSize:isTablet?width*0.04:width*0.05,
    lineHeight:height*0.03,
    marginTop:'6%'
  },
  rulesContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    // paddingHorizontal:'5%',
    marginVertical:"7%"
  },
  rule:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-around',
    width:width*0.28,
    paddingHorizontal:'2%',
    backgroundColor:WHITE,
    height:height*0.07,
    borderRadius:5,
    shadowColor:BLACK,
    elevation:5,
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3
  },
  ruleIcon:{
    width:width*0.0556,
    height:width*0.0556,
    resizeMode:'contain',
  },
  backImage:{
    width:width*0.056,
    height:width*0.049,
    paddingVertical:2,
    paddingHorizontal:1,
  },
  en:{
    height:height*0.01,
    width:width*0.046,
    resizeMode:'contain'
  },
  ruleHeading:{
    color:BLACK,
    fontFamily:IsidoraSemiBold,
    fontSize:width*0.029,
    textAlign:'left',
    marginBottom:'2%'
  },
  ruleDescText:{
    color:BLACK,
    fontFamily:IsidoraMedium,
    fontSize:width*0.03,
    marginBottom:3
  },
  userContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'99%',
    height:width*0.2,
    alignSelf:'center',
    borderRadius:5,
    paddingHorizontal:'5%',
    backgroundColor:WHITE,
    shadowColor:GRAY,
    elevation:5,
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    marginBottom:'3%',
    marginTop:'2%'
  },
  userImage:{
    width:width*0.1085,
    height:width*0.120,
    resizeMode:'contain'
  },
  userDetailContainer:{
    marginLeft:'4%',
  },
  userName:{
    color:LIGHTGREYTEXT,
    fontSize:width*0.0417,
    fontFamily:IsidoraSemiBold,
    marginBottom:2
  },
  dob:{
    color:LIGHTGREYTEXT,
    fontSize:width*0.026,
    fontFamily:IsidoraSemiBold
  },
  subject:{
    color:LIGHTGREYTEXT,
    fontSize:width*0.026,
    fontFamily:IsidoraSemiBold
  },
  check:{
    height:'4%',
    width:'4%'
  },
  language:{
    paddingBottom:'13%',
  }
})