import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTORANGE,
  RED,
  WHITE,
} from '../values/Colors';
import Button from './Button';
import { IsidoraLight, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
import { ImagePath } from '../values/ImagePath';

const { width, height } = Dimensions.get('window');

// Main component
const DoubtSolving = ({ item }) => {
  // console.log(item,"itemmm");
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.askedAt}>
        Asked At:   <Text style={{ color: GRAY ,fontSize:width/34}}>{item?.askedAt}</Text>
      </Text>
      <View style={styles.contentContainer}>
        <View style={styles.subAndLangContainer}>
          <View style={styles.subjectView}>
            <Text style={styles.subjectText}>Subject</Text>
            <View style={styles.dash}/>
            <Text style={styles.text2}>{item?.subject}</Text>
          </View>
          <View style={styles.subjectView2}>
            <Text style={styles.languagetext}>Language</Text>
            <View style={styles.dash}/>
            <Text style={styles.text2}>{item?.language}</Text>
          </View>
        </View>
       
        <View style={styles.middleContainer}>
      <Text style={styles.askedAt}>Last Reply:</Text>
      <Text style={styles.lastreply}> {item?.lastReply}</Text>
      

        <Button
            text={'Resolved'}
            customStyles={styles.resolveButton}
            textStyle={styles.textstyle}
          />
    
     
        </View>
        

      
        
        </View>
        <Button
          text={'View'}
          customStyles={styles.viewButton}
          textStyle={styles.viewtext}
          icon={ImagePath.eye}
          iconStyle={styles.iconStyle}
        />

    </View>
  );
};

export default DoubtSolving;

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE,
    paddingVertical: '4%',
    paddingHorizontal:"3%",
    borderRadius: 8,
    width: width * 0.93,
    alignSelf: 'center',
    elevation: 5,
    marginVertical:"2%"
  },
  askedAt: {
    color: RED,
    fontSize: width *0.032,
    fontFamily: IsidoraSemiBold,
    // marginBottom: '3%',
    marginLeft:"1.5%"
    // marginRight:20
  },
  contentContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between', // Space between the components
    alignItems: 'center',
    paddingHorizontal:width*0.01
  },
  subAndLangContainer: {
    backgroundColor:'rgba(252, 234, 175, 1)',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: '4%',
    borderRadius: 5,
    width: width / 1.9,
    paddingVertical: '2%',
    // alignSelf:"center"
  },
  subjectView: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:height*0.01
    // flex: 1,
  },
  subjectView2: {
    flexDirection:'row',
    alignItems:'center',
    // marginBottom:5
    // flex: 1,
  },
  resolveButton: {
    height: height / 33,
    width: width / 4.5,
    backgroundColor: LIGHTGRAY2,
    paddingVertical:0,
    borderRadius:5,
    justifyContent:"center"
  },
  textstyle: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width / 30,
  },
  text: {
    color: BLACK,
    fontSize: width / 38,
    fontFamily: IsidoraMedium,
    textAlign:"center",

  },
  text2: {
    color: GRAY,
    fontSize: width / 30,
    fontFamily: IsidoraSemiBold,
    // textAlign:"center",
    // paddingTop:"3%"

  },
  subjectText: {
    color: BLACK,
    fontSize: width / 28,
    fontFamily: IsidoraSemiBold,
    width:width*0.17
   
  },
  languagetext: {
    color: BLACK,
    fontSize: width / 28,
    fontFamily: IsidoraSemiBold,
    width:width*0.17




    // marginBottom: 5, // Add space below the language text
  },
  viewButton: {
    backgroundColor: LIGHTGRAY,
    borderWidth: 0.4,
    borderRadius: 5,
    width: width / 4.5,
    borderColor:GRAY,
    paddingVertical: 0,
    height:height/25,
    justifyContent:"center",
    marginLeft:width*0.01,
    marginVertical:0,
    marginTop:height*0.01
  },
  viewtext: {
    color: DARKGRAY,
    fontSize: width / 32,
    fontFamily:IsidoraSemiBold
  },
  iconStyle: {
    resizeMode: 'contain',
    width: width / 25,
    height: height / 45,
  },
  middleContainer: {
    marginLeft:width*0.03
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginTop: "3%",
    // flex: 1,
    // flexDirection:"row"
  },
 
  dash:{
    
   width:width*0.04,
    backgroundColor:GRAY,
    height:height*0.001,
    marginHorizontal:width*0.01
  },
  lastreply:{
    fontFamily:IsidoraSemiBold,
    color:GRAY,
    fontSize:width*0.028,
    marginTop:height*0.003
  }
});
