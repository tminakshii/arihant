import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DARKGRAY, Lightpink, orange, WHITE, LIGHTGREEN, RED2, GRAY, Yellow, LIGHTORANGE } from '../values/Colors'; // Ensure colors are imported
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts';
import { DarkTheme } from '@react-navigation/native';
import Button from './Button';

const { width, height } = Dimensions.get('window');

const StudentWeaknessOverview = ({ item }) => {

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subjectbox}>
                <Text style={styles.subject}>{item?.subject}</Text>
            </View>
            <View style={styles.topicbox}>
                <Text style={styles.topic}>{item?.topic}</Text>
            </View>
            <View style={styles.chartcontainer}>
                {
                    item?.topics.map((score, index) => {
                        // Extract performance values
                        const [correct, wrong, unanswered] = score.performance.map(p => p.value);
                        const total = score.performance.reduce((sum, qty) => sum + qty.value, 0);
                        return (
                            <View key={index} style={styles.topicContainer}>
                                <Text style={styles.cardtitle}>{score?.title}</Text>
                                <View style={styles.barbox}>
                                    {/* Render the bars for correct, wrong, and unanswered */}
                                    <View style={[styles.bar, { backgroundColor: LIGHTGREEN, width: `${(correct/total)*100}%` }]} >
                                     <Text style={styles.innertext}>{correct}</Text>
                                    </View>
                                    <View style={[styles.bar, { backgroundColor: RED2, width: `${(wrong/total)*100}%` }]} >
                                  <Text style={styles.innertext}>{wrong}</Text>
                                    </View>
                                    <View style={[styles.bar, { backgroundColor: orange, width: `${(unanswered/total)*100}%` }]} >
                                    <Text style={styles.innertext}>{unanswered}</Text>
                                    </View>
                                </View>
                               
                            </View>
                        );
                    })
                }
            </View>
            <View style={styles.reattemptbox}>
                <Text style={styles.retext}>Reattempt Now</Text>
                <Text style={styles.learntext}>Learn from past mistakes and improve</Text>
                <Button
                text={'Attempt Now'}
                textStyle={styles.btntext}
                customStyles={styles.btn}/>

            </View>
           
        </View>
    );
};

export default StudentWeaknessOverview;

const styles = StyleSheet.create({
    maincontainer: {
        alignItems: 'center',
        paddingBottom:'10%'
    },
    subjectbox: {
        backgroundColor: WHITE,
        elevation: 5,
        height:height*0.06,
        width: width * 0.9,
        borderRadius: 5,
        marginVertical: height * 0.015,
justifyContent:"center"        
    },
    subject: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.04,
        marginLeft: width * 0.04,
    },
    topicbox: {
        backgroundColor: "rgba(252, 234, 175, 1)",
        paddingVertical: height * 0.015,
        width: width * 0.9,
        borderRadius: width * 0.014,
        marginBottom:height * 0.015,
    },
    topic: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.04,
        marginLeft: width * 0.04,
    },
    chartcontainer: {
        backgroundColor: WHITE,
        elevation: 5,
        borderRadius: 5,
        width: width * 0.9,
        paddingVertical: height * 0.02,
        paddingHorizontal:width*0.035
    },
    topicContainer: {
        marginVertical: height * 0.01,
    },
    cardtitle: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.036,
        marginBottom:height*0.008
    },
    barbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:height*0.002
        // backgroundColor:'red',
        // flex:1
    },
    bar: {
        // height: height * 0.015,
        justifyContent:'center',
        borderRadius:5
    },
    // countText: {
    //     fontFamily: IsidoraSemiBold,
    //     fontSize: width * 0.036,
    //     color: DARKGRAY,
    //     marginTop: height * 0.01,
    // },
    innertext:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.025,
        color:WHITE,
        marginLeft:width*0.015,
       
    },
    reattemptbox:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:WHITE,
        width:width*0.9,
        borderRadius:5,
        marginTop:height*0.06,
        paddingTop:height*0.03
    },
    retext:{
        fontFamily:IsidoraSemiBold,
        color:'#353C41',
        fontSize:width*0.047,
        marginBottom:'1%'
    },
    learntext:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        fontSize:width*0.031
    },
    btntext:{
        fontFamily:IsidoraBold,
        color:'#FEFEFE',
        fontSize:width*0.036,
    },
    btn:{
        backgroundColor:Yellow,
        borderRadius:width * 0.056,
        width:width*0.417,
        height:height*0.042,
        padding:0,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'8%',
        marginBottom:'7%'
    }
});
