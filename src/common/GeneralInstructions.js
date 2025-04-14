import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, GRAY, LIGHTGREYTEXT, LIGHTORANGE, orange, RED, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
import { ImagePath } from '../values/ImagePath'
const {width,height}=Dimensions.get('window')

const GeneralInstructions = ({handleNext}) => {
    // console.log(width*0.028,'hELOO')
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>General Instructions</Text>
      <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
      <Text style={styles.instructions}>2. The question palette at the right of screen shows one of the following statuses of each of the questions numbered:</Text>

      <View style={styles.directionRow}>
          <View style={styles.notVisited}>
            <Text style={styles.numberText1}>0</Text>
          </View>
          <Text style={styles.answerText}>You have not visited the question yet.</Text>
        </View>
        
        <View style={styles.directionRow}>
          <View style={styles.notAnswered}>
            <Text style={styles.numberText}>0</Text>
          </View>
          <Text style={styles.answerText}>You have NOT answered the question.</Text>
        </View>

        <View style={styles.directionRow}>
          <View style={styles.answered}>
            <Text style={styles.numberText}>0</Text>
          </View>
          <Text style={styles.answerText}>You have answered the question.</Text>
        </View>

        <View style={styles.directionRow}>
          <View style={styles.marked}>
            <Text style={styles.numberText}>0</Text>
          </View>
          <Text style={styles.answerText}>You have NOT answered the question but have marked the question for review.</Text>
        </View>

        <View style={[styles.directionRow]}>
          {/* <View style={styles.markedAndAnswered}>
            <Text style={styles.numberText}>0</Text>
          </View> */}
          <Image source={ImagePath.Groupe} style={styles.images}/>

          <Text style={styles.answerText}>You have answered the question and marked it for review</Text>
        </View>
<Text style={styles.instructions2}>The Marked for Review status simply acts as a reminder that you have set to look at the question again. If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.</Text>
        <Text style={styles.headingNormal}>Navigating to a question</Text>
      <Text style={styles.instructions}>3. To select a question to answer, you can do one of the following:
• Click on Save and Next to save answer to current question and to go to the next question in sequence.
• Click on mark for Review to save answer to correct question, mark if for review, and go to the next question in Sequence.
</Text>
  <Text style={styles.headingNormal}>Answering Questions</Text>
  
      <Text style={styles.instructions}>1. Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.
• Click on Save and Next to save answer to current question and to go to the next question in sequence.
• Click on mark for Review to save answer to correct question, mark if for review, and go to the next question in Sequence.
</Text>
  <Text style={styles.headingNormal}>Navigating through sections</Text>
      <Text style={styles.instructions}>1. Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.
• Click on Save and Next to save answer to current question and to go to the next question in sequence.
• Click on mark for Review to save answer to correct question, mark if for review, and go to the next question in Sequence.
</Text>



      <Button onPress={handleNext} text={'Next'} textStyle={styles.buttonText} customStyles={styles.button}/>
    </View>
  )
}

export default GeneralInstructions

const styles = StyleSheet.create({
    main:{
        backgroundColor:WHITE,
        marginTop:'5%',
        paddingTop:'3%',
        paddingHorizontal:'5%'
    },
    heading:{
        color:orange,
        fontSize:width*0.0473,
        fontFamily:IsidoraSemiBold,
        // marginHorizontal:'3%',
        marginTop:'3%',
        marginBottom:'2%'
    },
    instructions:{
  
        color: LIGHTGREYTEXT,
        fontSize: width * 0.03,
        alignSelf: 'center',
        fontFamily: IsidoraSemiBold,
        lineHeight: height * 0.019,
    },
        instructions2:{
  
        color: LIGHTGREYTEXT,
        fontSize: width * 0.03,
        // alignSelf: 'center',
        fontFamily: IsidoraSemiBold,
        lineHeight: height * 0.019,
        marginTop:height*0.005
    },
    button:{
        backgroundColor:orange,
        width:width*0.3334,
        padding:width*0.025,
        borderRadius:width *0.1085,
        justifyContent:'center',
        // margin:'5%'
    },
    buttonText:{
      fontFamily:IsidoraBold,
      color:WHITE,
      fontSize:width*0.039
    },
    directionRow: {
      flexDirection: 'row',
      // alignItems: 'center',
      marginTop: height * 0.011,
      width:'90%',
      // marginHorizontal:'5%'
    },
    markedAndAnswered: {
    backgroundColor: GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    height: height/35,
    width: width/22,
    borderRadius:height/20,
    marginRight: "2%",
    borderWidth: 0.4,
  },
  numberText: {
    color: WHITE,
    fontSize: width * 0.030,
  },
  answerText: {
    // color: '#403d40',
    // fontWeight:'400',
    // fontSize: width * 0.035,
    // marginLeft: width * 0.02,
    
    color: LIGHTGREYTEXT,
    fontSize: width * 0.03,
    width: width / 1.15,
    alignSelf: 'center',
    fontFamily: IsidoraSemiBold,
    lineHeight: height * 0.019,   
  },
  numberText1: {
    color: LIGHTGREYTEXT,
    fontSize: width * 0.028,
  },
  notVisited: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    width:width *0.045,
    height:width *0.045,
    marginRight: "2%",
    // borderWidth: 0.4,
    borderColor:RED ,
    borderWidth:1
  },
  notAnswered: {
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: width *0.045,
    width:width *0.045,
    borderBottomLeftRadius: height/20,
    borderBottomRightRadius: height/20,
    marginRight: "2%",
  },  
  answered: {
    backgroundColor: '#FACB63',
    justifyContent: 'center',
    alignItems: 'center',
    height: width *0.045,
    width:width *0.045,
    borderTopLeftRadius: height/20,
    borderTopRightRadius: height/20,
    marginRight: "2%",
  },
  marked: {
    backgroundColor: RED,
    justifyContent: 'center',
    alignItems: 'center',
    height: width *0.045,
    width:width *0.045,
    borderRadius:height/25,
    marginRight: "2%",
  },
  headingNormal:{
    color:orange,
    fontSize:width*0.0305,
    fontFamily:IsidoraBold,
    marginVertical:'2%',
    marginTop:'3%'
  },
  images:{
    height: width *0.045,
    width:width *0.045,
    marginRight:'2%',
    resizeMode:'contain'
  }
})