import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {ImagePath} from '../../values/ImagePath';
import {styles} from './styles';
import {
  mcqQuestions,
  subjectCategoryData,
  subjectData,
  SubmitTestdata,
} from '../../values/Utility';
import {BLACK, DARKRED, GRAY, orange, RED, WHITE} from '../../values/Colors';
import {Dropdown} from 'react-native-element-dropdown';
import ReactModal from 'react-native-modal';
import Button from '../../common/Button';
import CommonExamModal from './CommonExamModal';
import CommonInstruction from '../../common/CommonInstruction';
import ModalCommon from '../../common/ModalCommon';
import SubmitTest from '../../common/SubmitTest';

const{width,height}=Dimensions.get('window')
const data = [
  {label: 'English', value: 'English'},

  {label: 'Hindi', value: 'Hindi'},
];
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
const RightSideQuestion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [value, setValue] = useState('English');
  const [isFocus, setIsFocus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openreportonquestionmodal, setOpenreportonquestionmodal] =
    useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [modalopen, setModalOPen] = useState(false);
  const [instructionModal, setInstructionModal] = useState(false);
  const [opensubmitTestmodal, setOpensubmitTestmodal] = useState(false);


  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Image source={ImagePath.logo1} style={styles.logo} />
        <Text style={styles.headerTime}>00:20:45</Text>
      </View>
      <View style={styles.mainviewareaR}>

      <TouchableOpacity
              onPress={() => setModalOPen(true)}
              style={{ position: 'absolute', zIndex: 999,right:width*0.1,alignSelf:'center'}}>
              <Image
                source={ImagePath.rightarrow}
                style={styles.sidearrow}
              />
            </TouchableOpacity>
        <ImageBackground source={ImagePath.rightsidelongarrow} style={styles.arrowbackR} >
      <ScrollView
      contentContainerStyle={styles.rightsideinnerscrollL}
      showsVerticalScrollIndicator={false}
          overScrollMode="never">
          {mcqQuestions?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedQuestion(index)}
                style={[
                  styles.headerquestion,
                  {
                    backgroundColor:
                      selectedQuestion === index ? orange : WHITE,
                    borderColor: selectedQuestion === index ? WHITE : GRAY,
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
        </ImageBackground>
        <View style={styles.sideupperbox}>
          <View style={styles.questioncontainerR}>
            <Text style={styles.homejeeR}>CT 1 | JEE Main Exam 2024</Text>
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
                setValue(item.value);
                setIsFocus(false);
              }}
              renderItem={item => (
                <Text style={styles.searchvalues}>{item.value}</Text>
              )}
            />
          </View>
          <View style={styles.subjectcontainerR}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              overScrollMode="never"
              contentContainerStyle={styles.scrollerforsubjectR}>
              {subjectData.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setActiveIndex(index)}
                    style={
                      activeIndex === index
                        ? styles.activesubjectboxR
                        : styles.subjectboxR
                    }>
                    <Text style={styles.subjectName2}>{item.subject}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View>
          <View style={styles.quetionDetails}>
            <Text style={styles.quetionNumber}>Q {selectedQuestion + 1}</Text>
            <View style={styles.markscontainer}>
              <Text style={styles.markText}>Marks</Text>
              <Text style={styles.marksdetails}>+3.0</Text>
              <Text style={styles.marksdetails}>-0.0</Text>
              <Text style={styles.timedetail}>20:18</Text>
            </View>
            <TouchableOpacity
              style={styles.markscontainer}
              onPress={() => setOpenreportonquestionmodal(true)}>
              <View style={styles.reportView}>
                <Text style={styles.report}>!</Text>
              </View>
              <Text style={styles.reporttext}>report</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              {mcqQuestions[selectedQuestion]?.question}
            </Text>
            <Text style={styles.questionInfo}>
              Your Answer (Single Correct)*
            </Text>
          </View>
          <View style={styles.answers}>
            {mcqQuestions[selectedQuestion]?.options?.map((item, index) => {
              return (
                <View style={styles.answerContainer}>
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
          <View style={styles.footerContainerR}>
        <Button
          text={'Mark for review'}
          customStyles={styles.footerButtonstyleR}
          textStyle={styles.footerbuttontextstyleR}
        />
        <Button
          text={'Clear Response'}
          customStyles={styles.footerButtonstyleR}
          textStyle={styles.footerbuttontextstyleR}
        />
        <Button
          text={'Skip'}
          customStyles={styles.footerButtonstyleR}
          textStyle={styles.footerbuttontextstyleR}
        />
      </View>
        </View>
      </View>
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
      <ReactModal
          isVisible={modalopen}
          onBackdropPress={() => setModalOPen(false)}
          onSwipeComplete={() => setModalOPen(false)}
          swipeDirection='right'
          animationIn='slideInRight'
          animationOut='slideInLeft'
          backdropOpacity={0.3}
          style={{
            justifyContent: 'flex-start',
            margin: 0,
          }}>
          <CommonExamModal
          isrightmodal={true}
            mcqQuestions={mcqQuestions}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            setModalOPen={setModalOPen}
            setInstructionModal={setInstructionModal}
            setOpensubmitTestmodal={setOpensubmitTestmodal}
           
          />
        </ReactModal>
        <ModalCommon
            animationType={'slide'}
            visible={instructionModal}
            onClose={() => setInstructionModal(false)}
            showclose={true}
            color={WHITE}
            CustomModalbox={{flex: 1, width: width}}
            customStyleforClose={styles.forcloseButton}
            heading={'Instructions'}
            showheading={true}
            customheadingtext={styles.customheadingtext}
            crossbuttonStyle={styles.crossbuttonStyle}>
            <CommonInstruction />
          </ModalCommon>
          <ReactModal
        isVisible={opensubmitTestmodal}
        transparent={true}
        backdropOpacity={0.5}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        onRequestClose={() => setOpensubmitTestmodal(false)}>
        <View style={styles.submitmodalcontainer}>
          <SubmitTest
            item={SubmitTestdata}
            closesubmit={() => setOpensubmitTestmodal(false)}
          />
        </View>
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
              {reportdata?.map((item, index) => (
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
    </View>
  );
};

export default RightSideQuestion;
