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
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import ReactModal from 'react-native-modal';
import {styles} from './styles';
import {BLACK, DARKRED, GRAY, LIGHTGRAY, LIGHTGREYTEXT, orange, PURPLE, RED, WHITE, Yellow} from '../../values/Colors';
import {mcqQuestions, subjectData, SubmitTestdata} from '../../values/Utility';
import Button from '../../common/Button';
import {Dropdown} from 'react-native-element-dropdown';
import {ImagePath} from '../../values/ImagePath';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SubmitTest from '../../common/SubmitTest';
import TestInstructions from '../../common/TestInstructions';
import GeneralInstructions from '../../common/GeneralInstructions';
import ModalCommon from '../../common/ModalCommon';
import CommonInstruction from '../../common/CommonInstruction';
import CommonExamModal from './CommonExamModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const reportdata = [
  {
    issue: 'Wrong Question',
  },
  {
    issue: 'Formation Issue',
  },
  {
    issue: 'Wrong Translation',
  },
  {
    issue: 'Others',
  },
];
const data = [
  {label: 'English', value: 'English'},

  {label: 'Hindi', value: 'Hindi'},
];
const Questions = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState('English');
  const [isFocus, setIsFocus] = useState(false);
  const [modalopen, setModalOPen] = useState(false);
  const [instructionModal, setInstructionModal] = useState(false);
  const [changeModalDirection, setChangeModalDirection] = useState(0);
  const [opensubmitTestmodal, setOpensubmitTestmodal] = useState(false);  
  const [openreportonquestionmodal, setOpenreportonquestionmodal] = useState(false);

  

  return (
    <>
    <SafeAreaView style={{flex:1,backgroundColor:LIGHTGRAY}}>

      <ScrollView style={{}}> 
        <View style={styles.headerContainer}>
          <Image source={ImagePath.logo1} style={styles.logo} />
          <Text style={styles.headerTime}>00:20:45</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.questionsContainer}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never">
            {mcqQuestions?.map((item, index) => {
              // console.log(index?.length,"lll");

              return (
                <TouchableOpacity
                  onPress={() => setSelectedQuestion(index)}
                  style={[
                    styles.headerquestion,
                    // {
                    //   backgroundColor: index == 0 ? "Yellow" : WHITE,
                    //   borderTopLeftRadius:index == 0 ? 10 :null,
                    //   borderTopRightRadius : index ==0 ? 10 : null
                    // },
                    {
                      backgroundColor:
                        selectedQuestion === index ? orange : WHITE,
                      borderColor: selectedQuestion === index ? WHITE : PURPLE,
                      borderBottomEndRadius: selectedQuestion == index ? width * 0.03 : null,
                      borderBottomLeftRadius:selectedQuestion == index ? width * 0.03 : null,
                      // paddingBottom:selectedQuestion== index?height*0.001:null

                    },
                  ]}>
                  <Text
                    style={[
                      styles.headerQuestionNumber,
                      {color: selectedQuestion === index ? WHITE : BLACK},
                    ]}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <ModalCommon
            animationType={'slide'}
            visible={instructionModal}
            onClose={() => setInstructionModal(false)}
            showclose={true}
            color={LIGHTGREYTEXT}
            CustomModalbox={{flex: 1, width: width}}
            customStyleforClose={Platform.OS=="android"? styles.forcloseButton:styles.forcloseButtonios}
            heading={'Instructions'}
            showheading={true}
            customheadingtext={styles.customheadingtext}
            crossbuttonStyle={styles.crossbuttonStyle}>
            <CommonInstruction />
          </ModalCommon>
          <View style={styles.border}>
            <TouchableOpacity
              onPress={() => setModalOPen(true)}
              style={{alignSelf: 'center', position: 'absolute', zIndex: 999}}>
              {/* <Entypo name="chevron-thin-up" size={25} color={BLACK} /> */}
              <Image
                source={ImagePath.downarrowforborder}
                style={styles.downarrow}
              />
            </TouchableOpacity>
            <Image
              source={ImagePath.downborder}
              style={{resizeMode:"stretch", height: height*0.025, width: width }}
            />
          </View>
        </View>
        <ReactModal
          isVisible={modalopen}
          onBackdropPress={() => setModalOPen(false)}
          onSwipeComplete={() => setModalOPen(false)}
          swipeDirection="up"
          animationIn="slideInDown"
          animationOut="slideOutUp"
          backdropOpacity={0.3}
          style={{
            justifyContent: 'flex-start',
            margin: 0,
          }}>
          <CommonExamModal
          isdownmodal={true}
            mcqQuestions={mcqQuestions}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            setModalOPen={setModalOPen}
            setInstructionModal={setInstructionModal}
            setOpensubmitTestmodal={setOpensubmitTestmodal}
          />
        </ReactModal>
        <View style={styles.headingandLanguageContainer}>
          <Text style={styles.homejee}>CT 1 | JEE Main Exam 2024</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: BLACK}]}
            data={data}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            iconColor={RED}
            // search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={`${value}`}
            // searchPlaceholder="Select"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              console.log(item.value, 'English');
              setValue(item.value);
              setIsFocus(false);
            }}
            renderItem={item => 
            (
              <Text style={styles.searchvalues}>{item.value}</Text>
            )
            }
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.subjectCategory}>
          {subjectData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setActiveIndex(index)}
                style={
                  activeIndex === index
                    ? styles.activesubjectbox
                    : styles.subjectbox
                }>
                <Text style={styles.subjectName}>{item.subject}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.questionContainer}>
          <View style={styles.quetionDetails}>
            <Text style={styles.quetionNumber}>Q {selectedQuestion + 1}</Text>
            <View style={styles.markscontainer}>
              <Text style={styles.markText}>Marks</Text>
              <View style={styles.numberContainer}>

              <Text style={styles.marksdetails}>+3.0</Text>
              </View>
              <View style={styles.numberContainer}>

              <Text style={styles.marksdetails}>-0.0</Text>
              </View>
<View style={styles.numberContainer2}>

              <Text style={styles.timedetail}>20:18</Text>
</View>
            </View>

            <TouchableOpacity
              style={styles.markscontainer}
              onPress={() => setOpenreportonquestionmodal(true)}>
              <View style={styles.reportView}>
                <Text style={styles.report}>!</Text>
              </View>
              <Text style={styles.reporttext}>Report</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View><Text style={{color:'#222'}}>Q {selectedQuestion + 1}</Text></View>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#222'}}>Marks</Text>
                <View><Text style={{color:'#222'}}>+3.0</Text></View>
                <View><Text style={{color:'#222'}}>-0.0</Text></View>
              </View>
            </View>
            <View>
              <View><Text>17:12</Text></View>
              <TouchableOpacity
              style={styles.markscontainer}
              onPress={() => setOpenreportonquestionmodal(true)}>
              <View style={styles.reportView}>
                <Text style={styles.report}>!</Text>
              </View>
              <Text style={styles.reporttext}>report</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <View style={styles.question}>
            <Text style={styles.questionText}>
              {mcqQuestions[selectedQuestion]?.question}
            </Text>
            <Text style={styles.questionInfo}>
              Your Answer (Single Correct) *
            </Text>
          </View>
          <View style={styles.answers}>
            {mcqQuestions[selectedQuestion]?.options?.map((item, index) => {
              return (
                <View style={styles.answerContainer}>
                  <TouchableOpacity style={styles.radio2}>

                  <TouchableOpacity
                    onPress={() => setSelectedAnswer(index)}
                    style={[
                      styles.radio,
                      {
                        backgroundColor:
                          selectedAnswer === index ? DARKRED : WHITE,
                      },
                    ]}
                  />
                  </TouchableOpacity>

                  <Text style={styles.answerText}>{item?.text}</Text>
                </View>
              );
            })}
          </View>
          <Button
            text={'Save & Next'}
            customStyles={styles.saveBUtton}
            textStyle={styles.savetext}
            onPress={() => setSelectedQuestion(selectedQuestion + 1)}
          />
        </View>


      </ScrollView>

      <View style={styles.footerContainer}>
        <Button
          text={'Mark for review'}
          customStyles={styles.footerButtonstyle}
          textStyle={styles.footerbuttontextstyle}
        />
        <Button
          text={'Clear Response'}
          customStyles={styles.footerButtonstyle}
          textStyle={styles.footerbuttontextstyle}
        />
        <Button
          text={'Skip'}
          customStyles={styles.footerButtonstyle2}
          textStyle={styles.footerbuttontextstyle}
        />
      </View>
      <ReactModal
        isVisible={opensubmitTestmodal}
        transparent={true}
        backdropOpacity={0.5}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        onRequestClose={() => setOpensubmitTestmodal(false)}>
        {/* <View style={styles.submitmodalcontainer}> */}
          <SubmitTest
            item={SubmitTestdata}
            closesubmit={() => setOpensubmitTestmodal(false)}
          />
        {/* </View> */}
      </ReactModal>
      <TouchableWithoutFeedback
        onPress={() => setOpenreportonquestionmodal(false)}>
        <ReactModal
          isVisible={openreportonquestionmodal}
          backdropOpacity={0.3}
          onRequestClose={() => setOpenreportonquestionmodal(false)}
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}>
          <View style={styles.reportmodalbox}>
            <View style={styles.innerReportmodal}>
              {reportdata.map((item, index) => (
                <TouchableOpacity style={styles.innertext}>
                  <Text style={styles.issuebox} key={index}>
                    {item.issue}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ReactModal>
      </TouchableWithoutFeedback>
      </SafeAreaView>

    </>
  );
};

export default Questions;
