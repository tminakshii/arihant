import { Dimensions, StyleSheet, Text, TouchableOpacity, View ,Modal} from 'react-native'
import React, { useState } from 'react'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { BLACK, DARKGRAY, DARKRED, GRAY, LIGHTBLUE, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREEN, LIGHTORANGE, Lightpink, LIGHTPURPLE, LIGHTPURPLE3, orange, WHITE } from '../values/Colors'
import Button from './Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ModalCommon from './ModalCommon'
import ReportQuestion from './ReportQuestion'

const { width, height } = Dimensions.get('window')

const Questionset = ({ item }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [isReport, setIsReport] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(item.studentanswerId);
    const studentAnswer = item.options.find(option => option.id === item.studentanswerId);
    const correctAnswer = item.options.find(option => option.id === item.correctAnswerId);

    return (
        <View style={styles.maincontainer}>
            <View style={styles.headbox}>
                <Text style={styles.question}>Question {item?.questionno}</Text>
                <View style={styles.timerbox}>
                    <Text style={styles.timetext}>Time  {item?.time}</Text>
                    <Text style={styles.timetext}>Mark  {item?.Mark}</Text>
                </View>
            </View>
            <Text style={styles.questiontext}>{item?.question}</Text>
            <View style={styles.answers}>
                {
                    item?.options?.map((item1, index) => {
                        return (
                            <View style={styles.answerContainer}>
                                <TouchableOpacity style={styles.radio} >
                                    <View style={{borderRadius: width * 0.035 / 2,width: width * 0.03,height: width * 0.03,opacity:0.5,backgroundColor:selectedAnswer === item1?.id ? '#B8295C' : WHITE}}></View>
                                </TouchableOpacity>
                                <Text style={styles.answerText}>{item1?.text}</Text>
                            </View>
                        );
                    })
                }
            </View>
            <Text style={styles.correcttext}>Single Correct Answer</Text>
            <View style={styles.completeanswerbox}>
                <View style={styles.answerbox}>
                    <Text style={styles.anstext}>Your Answer: </Text>
                    <Text
                        style={[
                            styles.correcttext2,
                            {
                                color: item.studentanswerId === item.correctAnswerId ? LIGHTGREEN : orange
                            }
                        ]}
                    >
                        {studentAnswer ? studentAnswer.text : "No answer selected"}
                    </Text>
                </View>

                <View style={styles.answerbox}>
                    <Text style={styles.anstext}>Correct Answer: </Text>
                    <Text style={[styles.correcttext2, { color: orange }]}>
                        {correctAnswer ? correctAnswer.text : "Answer not available"}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonbox}>
                <Button
                    text={'View Solution'}
                    customStyles={styles.button1}
                    textStyle={styles.btntext1}
                    vectorIcon2={'angle-down'}
                    vector2color={WHITE}

                />
                <Button
                    text={'Report Quetions'}
                    customStyles={styles.button2}
                    textStyle={styles.btntext2}
                    onPress={() => { setIsReport(true) }} />

            </View>
            <Modal 
            transparent={true}
            visible={isReport}
            onRequestClose={()=>setIsReport(false)}
            style={styles.modalbox}
            ><View style={styles.modalcontainer}>
                <ReportQuestion closeReport={()=>setIsReport(false)}/>
                </View>
            </Modal>

        </View>
    )
}

export default Questionset

const styles = StyleSheet.create({
    maincontainer: {
        width: width * 0.92,
        backgroundColor: WHITE,
        elevation: 5,
        borderRadius: 5,
        paddingVertical: height * 0.02,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.05,
        // backgroundColor:'red'


    },
    headbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1.2,
        borderBottomColor: LIGHTGRAY2,
        paddingBottom: height * 0.015
    },
    timerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.36,
        justifyContent: 'space-between'
    },
    timetext: {
        color: BLACK,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.03,
        backgroundColor: Lightpink,
        textAlign: 'center',
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.006,
        borderRadius: 5
    },
    question: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.04
    },
    questiontext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.035,
        lineHeight: height * 0.02,
        marginTop: height * 0.01
    },
    answers: {
        marginTop: '5%'
    },
    answerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '3%'
    },
    radio: {
        width: width * 0.045,
        height: width * 0.045,
        borderRadius: width * 0.045 / 2,
        borderColor: BLACK,
        borderWidth: 0.6,
        alignItems:'center',
        justifyContent:'center'
    },
    answerText: {
        color: BLACK,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.035,
        marginLeft: "3%"
    },
    correcttext: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.03
    },
    correcttext2: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03,
        marginLeft: width * 0.02
    },
    answerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        // width:width*0.35,
        // justifyContent:'space-between',
        // // backgroundColor:'red'
    },
    completeanswerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * 0.01
    },
    anstext: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.03
    },
    buttonbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.02,
        // backgroundColor:"red",
        marginRight:"1%"
    },
    button1: {
        backgroundColor: orange,
        borderRadius: width*0.05,

        // paddingVertical:height*0.02,
        // paddingHorizontal:width*0.01,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.3,
        height: height * 0.042

    },
    btntext1: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: width * 0.03
    },
    button2: {
        backgroundColor: DARKGRAY,
        borderRadius: width*0.05,
        // paddingVertical:height*0.02,
        // paddingHorizontal:width*0.01,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.3,
        height: height * 0.042,
        marginLeft: width * 0.03

    },
    btntext2: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: width * 0.03
    },
    reviwmodalbox: {
        // width: width * 0.9,
        height: height * 0.55,
        backgroundColor: LIGHTBLUE
    },
    modalheading: {
        // width:width
        // flexWrap:'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.01,
        marginHorizontal: width * 0.18
        // wi
    },
    headtext: {
        fontFamily: IsidoraBold,
        fontSize: width * 0.035
    },
   modalcontainer:{
    flex:1,
        alignItems:'center',justifyContent:'center'
    
   }
})
