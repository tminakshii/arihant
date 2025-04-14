import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BLACK, DARKRED, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREYTEXT, LIGHTORANGE, orange, RED, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
import { ImagePath } from '../values/ImagePath';

const { width, height } = Dimensions.get('window');

const CommonInstruction = () => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.generalInstructions}>
          General Instructions
        </Text>
        <Text style={styles.text}>
          1. The clock has been set at the server and the countdown timer at the
          top right corner of your screen will display the time remaining for you
          to complete the exam. When the clock runs out the exam ends by default
          you are not required to end or submit your exam.
        </Text>
        <Text style={styles.text}>
          2. The question palette at the right of screen shows one of the following statuses of each of the questions numbered:
        </Text>

        {/* Status Indicators */}
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

        <View style={styles.directionRow}>
          {/* <View style={styles.markedAndAnswered}>
            <Text style={styles.numberText}>0</Text>
          </View> */}
          <Image source={ImagePath.markedNotAnswered} style={styles.markedAndAnswered}/>
          <Text style={styles.answerText}>You have answered the question and marked it for review</Text>
        </View>

        {/* Additional Instructions */}
        <Text style={styles.text}>
          The Marked for Review status simply acts as a reminder that you have set to look at the question again...
        </Text>

        <Text style={styles.orangeText}>Navigating to a question</Text>
        <Text style={styles.text}>
          3. To select a question to answer, you can do one of the following:
        </Text>
        <Text style={styles.text}>
          • Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.
• Click on Save and Next to save answer to current question and to go to the next question in sequence.
• Click on mark for Review to save answer to correct question, mark if for review, and go to the next question in Sequence.

        </Text>
        <Text style={styles.text}>
         4. You can view the entire paper by clicking on the Summary button.
        </Text>  

        <Text style={styles.text}>
        5. For multiple choice type question:

        </Text>  
        <Text style={styles.orangeText}>Answering Questions</Text>

        <Text style={styles.text}>
        To select your answer, click on one of the option buttons
To change your answer, click another desired option button
To save your answer, You MUST click on Save & Next
To deselect a chosen answer, click on the chosen option again or click on the Clear Response button.
To mark a question for review, click on Mark for Review. If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.
6. To change an answer to a question, first select the question and then click on the new answer option followed by a click on the Save & Next button.

        </Text> 
        <Text style={styles.text}>
        7. Questions that are saved or marked for review after answering will ONLY be considered for evaluation.

        </Text> 
        <Text style={styles.orangeText}>Navigating through sections</Text>
        <Text style={styles.text}>
        8. Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.

        </Text> 
        <Text style={styles.text}>
        9. After clicking the Save & Next button on the last question for a section. You will automatically be taken to the first question of the next section.

        </Text> 
        <Text style={styles.text}>
        10. You can move the mouse cursor over the section names to view the status of the questions for that section.

        </Text>
        <Text style={styles.text}>
        11. You can shuffle between sections and questions anytime during the examination as per your convenience.

        </Text>

        {/* Footer instructions */}
        <Text style={styles.orangeText}>Please read the following instructions carefully</Text>
        <Text style={styles.text}>• The test contains 100 total Questions</Text>
        <Text style={styles.text}>• Each question has 4 options out of which only one is correct.</Text>
        <Text style={styles.text}>• You have to finish the test in 90 minutes.</Text>
        <Text style={styles.text}>• You will be awarded 1 mark for each correct answer and there will be negative marking of 0.33 mark.</Text>
        <Text style={styles.text}>• There is no penalty for the questions that you have not attempted.</Text>
        <Text style={styles.text}>• Once you start the test, you will not be allowed to reattempt it. Make sure that you complete the test before you submit the test and/or close the browser.
        </Text>




      </ScrollView>
    </View>
  );
};

export default CommonInstruction;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: WHITE,
  },
  mainContainer: {
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.1, // Add padding to the bottom to prevent the content from being cut off
  },
  generalInstructions:{
    color:orange,
    fontFamily:IsidoraSemiBold,
    fontSize:width * 0.046,
    marginVertical:'2%'
  },
  text: {
    color: LIGHTGREYTEXT,
    textAlign: 'left',
    fontFamily: IsidoraSemiBold,
    fontSize: width * 0.031,
    lineHeight: width * 0.045,
  },
  orangeText: {
    color: orange,
    fontFamily: IsidoraBold,
    fontSize: width * 0.035,
    marginTop: height * 0.02,
    marginBottom:height * 0.005
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: height * 0.015,
  },
  answerText: {
    color: LIGHTGREYTEXT,
    fontFamily: IsidoraSemiBold,
    lineHeight:height*0.021,
    fontSize: width * 0.031,
  },
  notVisited: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    height: width/20,
    width: width/20,
    marginRight: "2%",
    // borderWidth: 0.4,
    borderColor:DARKRED,
    borderWidth:1
  },
  notAnswered: {
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: width/20,
    width: width/20,
    borderBottomLeftRadius: height/20,
    borderBottomRightRadius: height/20,
    marginRight: "2%",
  },
  answered: {
    backgroundColor: LIGHTORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    height: width/20,
    width: width/20,
    borderTopLeftRadius: height/20,
    borderTopRightRadius: height/20,
    marginRight: "2%",
  },
  marked: {
    backgroundColor: RED,
    justifyContent: 'center',
    alignItems: 'center',
    height: width/22,
    width: width/22,
    borderRadius:height/20,
    marginRight: "2%",
  },
  markedAndAnswered: {
    height: width/22,
    width: width/22,
    marginRight: "2%",
    resizeMode:'contain'
  },
  numberText: {
    color: WHITE,
    fontSize: width * 0.030,
  },
  numberText1: {
    color: GRAY,
    fontSize: width * 0.030,
  },
});
