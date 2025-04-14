
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import ReactModal from 'react-native-modal';
import { styles } from './styles';
import { BLACK, DARKRED, GRAY, orange, PURPLE, RED, WHITE } from '../../values/Colors';
import { subjectData, SubmitTestdata } from '../../values/Utility';
import Button from '../../common/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { ImagePath } from '../../values/ImagePath';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SubmitTest from '../../common/SubmitTest';
import TestInstructions from '../../common/TestInstructions';
import GeneralInstructions from '../../common/GeneralInstructions';
import ModalCommon from '../../common/ModalCommon';
import CommonInstruction from '../../common/CommonInstruction';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

const CommonExamModal = ({isleftmodal=false,isrightmodal=false,isdownmodal=false,mcqQuestions,selectedQuestion,setSelectedQuestion,setModalOPen,setInstructionModal,setOpensubmitTestmodal}) => {
  return (
    <SafeAreaView style={Platform.OS=="ios" ? {flex:1,marginTop:"12%"}:{flex:1}}>

    <View style={styles.modalContent}>
    {/* Modal content goes here */}
    <View style={styles.headerContainer}>
      <Image source={ImagePath.logo1} style={styles.logo} />
      <Text style={styles.headerTime}>00:20:45</Text>
    </View>
    <View style={styles.markedDetails}>
      <View style={styles.directionrow}>
        <View style={styles.answered}>
          <Text style={styles.numbertext}>0</Text>
        </View>

        <Text style={styles.answerText}>Answered</Text>
      </View>
      <View style={styles.directionrow}>
        <View style={styles.Marked}>
          <Text style={styles.numbertext}>0</Text>
        </View>

        <Text style={styles.answerText}>Marked</Text>
      </View>

      <View style={styles.directionrow}>
        <View style={styles.NotVisited}>
          <Text style={styles.numbertext1}>0</Text>
        </View>

        <Text style={styles.answerText}>Not Visited</Text>
      </View>

      <View style={styles.directionrow}>
        <View style={styles.NotAnswered}>
          <Text style={styles.numbertext}>0</Text>
        </View>

        <Text style={styles.answerText}> Not Answered</Text>
      </View>

      <View style={styles.directionrow}>
        {/* <View style={styles.MarkedandAnswered}>
          <Text style={styles.numbertext}>0</Text>
        </View> */}
        <Image source={ImagePath.markedNotAnswered} style={styles.MarkedandAnswered}/>
        <Text style={styles.answerText}>Marked and Answered</Text>
      </View>

    </View>
    <Button text={"PHYSICS"} customStyles={styles.subjectButtonStyle} textStyle={styles.subjecttextstyle} />
    <View
      style={styles.modalquetionscontainer}
    >
      {mcqQuestions?.map((item, index) => {
        // console.log(index?.length,"lll");

        return (
          <TouchableOpacity
            onPress={() => setSelectedQuestion(index)}
            style={[
              styles.headerquestion1,
              {
                backgroundColor:
                  selectedQuestion === index ? orange : WHITE,
                borderColor: selectedQuestion === index ? WHITE : PURPLE,
                // borderEndStartRadius : selectedQuestion == index ? 10 : null,
                borderBottomLeftRadius : selectedQuestion == index ? width*0.03 : null,
                // borderBottomEndRadius:selectedQuestion == index ? 10 : null,
                borderBottomRightRadius:selectedQuestion == index ? width*0.03 : null,


              },
            ]}>
            <Text
              style={[
                styles.headerQuestionNumber,
                { color: selectedQuestion === index ? WHITE : BLACK },
              ]}>
              {index + 1}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>

    {/* <Button
      text={'close'}
      customStyles={{backgroundColor: 'red'}}
      onPress={() => {
        setModalOPen(false);
      }}
    /> */}

    <View style={styles.footerContainer1}>
      <View style={styles.footerdirection}>

        <Button
          text={'Save and Submit'}
          customStyles={styles.saveBUtton1}
          textStyle={styles.savetext}
          onPress={() => {
            setModalOPen(false)

            setTimeout(() => {
              
              setOpensubmitTestmodal(true)
            }, 500);
          }}
        />
        <Button
          text={'Summary'}
          customStyles={styles.footerButtonstyle1}
          textStyle={styles.footerbuttontextstyle}
          onPress={() => {
            setModalOPen(false)

            setTimeout(() => {
              
              setOpensubmitTestmodal(true)
            }, 500);
          }}
        />
        <Button
          text={'Instructions'}
          customStyles={styles.footerButtonstyle1}
          textStyle={styles.footerbuttontextstyle}
          onPress={() => {
            setModalOPen(false)

            setTimeout(() => {
              
              setInstructionModal(true)
            }, 500);
          }}
        />
      </View>
      {
        isdownmodal&&(
          <View style={styles.border1}>
        <TouchableOpacity
          onPress={() => setModalOPen(false)}
          style={{ alignSelf: 'center', position: "absolute", zIndex: 999 }}>
          {/* <Entypo name="chevron-thin-up" size={25} color={BLACK} /> */}
          <Image source={ImagePath.borderup} style={styles.downarrow} />
        </TouchableOpacity>
        <Image source={ImagePath.upborder} style={{ resizeMode:"stretch", height:height*0.02, width: width / 1 }} />

      </View>
        )
      }
       {
        isrightmodal&&(
          <View style={styles.border1R}>
        <TouchableOpacity
          onPress={()=>setModalOPen(false)}
          style={{ alignSelf: 'center', position: "absolute", zIndex: 999 ,justifyContent:'center',alignItems:'center'}}>
          <Image source={ImagePath.sidearrow} style={styles.downarrowR} />
        </TouchableOpacity>
        <Image source={ImagePath.longarrowright_side} style={{ resizeMode: "contain", height: height*0.9, width: width*0.05,left:width*0.02, }} />

      </View>
        )
      }
       {
        isleftmodal&&(
          <View style={styles.border1L}>
        <TouchableOpacity
          onPress={()=>setModalOPen(false)}
          style={{ alignSelf: 'center', position: "absolute", zIndex: 999 }}>
          <Image source={ImagePath.rightarrow} style={styles.downarrowL} />
        </TouchableOpacity>
        <Image source={ImagePath.longarrowleft_side} style={{ resizeMode: "contain", height: height*0.9, width: width*0.05,left:width*0.035, }} />

      </View>
        )
      }
    </View>

  </View>
  </SafeAreaView>

  )
}

export default CommonExamModal

