import { Dimensions, StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, LIGHTPURPLE, LIGHTPURPLE3, orange, PURPLE, ratingcolor, RED, WHITE } from '../values/Colors'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button'

const { width, height } = Dimensions.get('window')
const ResultOverview = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Overview Results</Text>
            <View style={styles.outerbox}>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Total Marks</Text>
                    <Text style={styles.totalmark}>{item?.totalmark}</Text>
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Total Marks Scored</Text>
                    <Text style={styles.getmark}>{item?.studentmark}<Text style={styles.totaltext}>/{item?.totalmark}</Text></Text>
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Percentile</Text>
                    <Text style={styles.percent}>{item?.percentile}</Text>
                </View>
            </View>
            <View style={styles.outerbox}>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Correct</Text>
                    <Text style={styles.percent}>{item?.correct}<Text style={styles.marktext}>{' '}marks</Text></Text>
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Incorrect</Text>
                    <Text style={styles.incorrect}>{item?.incorrect}<Text style={styles.marktext}>{' '}marks</Text></Text>
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.total}>Unanswered</Text>
                    <Text style={styles.unanswered}>{item?.unanswered}<Text style={styles.marktext}>{' '}marks</Text></Text>
                </View>
            </View>
            <View style={styles.ratingcontainer}>
                <View style={styles.containers}>
                    <Text style={styles.ratequestion}>Rate The Level  of Questions</Text>
                    <View style={styles.starsContainer}>
                    <Stars
                        default={0}
                        count={5}
                        half={false}
                        fullStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                            />
                        }
                        emptyStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={LIGHTGRAY2}
                                style={[
                                    styles.myStarStyle,
                                    styles.myEmptyStarStyle,
                                ]}
                            />
                        }

                    />
                    </View>
                </View>
                <View style={styles.containers}>
                    <Text style={styles.ratequestion}> Difficulty Level as per Exam</Text>
                    <View style={styles.starsContainer}>
                    <Stars
                        default={0}
                        count={5}
                        half={false}

                        fullStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                            />
                        }
                        emptyStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={LIGHTGRAY2}
                                style={[
                                    styles.myStarStyle,
                                    styles.myEmptyStarStyle,
                                ]}
                            />
                        }

                    />
                    </View>
                </View>
                <View style={styles.containers}>
                    <Text style={styles.ratequestion}>Rate The Quality of Test Interface</Text>
                    <View style={styles.starsContainer}>
                    <Stars
                        default={0}
                        count={5}
                        half={false}

                        fullStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                            />
                        }
                        emptyStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={LIGHTGRAY2}
                                style={[
                                    styles.myStarStyle,
                                    styles.myEmptyStarStyle,
                                ]}
                            />
                        }

                    />
                    </View>
                </View>
                <View style={styles.containers}>
                    <Text style={styles.overalltext}>Rate the overall test experience?</Text>
                    <Text style={[styles.ratequestion,{width:width *1.01}]}>Your feedback will help us improve your test experience</Text>
                    <View style={styles.starsContainer}>
                    <Stars
                        default={0}
                        count={5}
                        half={false}

                        fullStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                            />
                        }
                        emptyStar={
                            <Icon
                                name={'star'}
                                size={width * 0.07}
                                color={LIGHTGRAY2}
                                style={[
                                    styles.myStarStyle,
                                    styles.myEmptyStarStyle,
                                ]}
                            />
                        }

                    />
                    </View>
                </View>
                <View style={styles.commentouterbox}>
                    <TextInput
                    placeholder='Any Other Issue you want to bring our notice'
                    placeholderTextColor={GRAY}
                    style={styles.inputbox}/>
                    <View style={styles.commentbuttonbackbox}>
                     <Button
                     text={'Submit'}
                     customStyles={styles.buttonsubmit}
                     textStyle={styles.submittext}/>
                    </View>

                </View>

            </View>


        </View>
    )
}

export default ResultOverview

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:"8%",
    },
    title: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.055,
        marginLeft: '5%',
        marginBottom: height * 0.028
    },
    outerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal:'2%'
    },
    innerbox: {
        height: height * 0.097,
        width: width * 0.28,
        elevation: 5,
        shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
        backgroundColor: WHITE,
        marginBottom: height * 0.018,
        borderRadius: width * 0.011,
        paddingHorizontal: width * 0.04,


    },
    total: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.032,
        marginTop:height * 0.015,
        marginBottom: height * 0.005,
        // height:height*0.035,
        lineHeight: height * 0.018,
        height:height * 0.033

    },
    totalmark: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05
    },
    getmark: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05
    },
    totaltext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.03
    },
    percent: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05
    },
    incorrect: {
        color: RED,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05
    },
    unanswered: {
        color: LIGHTPURPLE3,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05
    },
    marktext: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.035
    },
    ratingcontainer: {
        // alignItems: 'center',
        paddingVertical: height * 0.022,
        backgroundColor: WHITE,
        marginTop: height * 0.046,
        marginBottom: height * 0.02
    },
    ratequestion: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.035,
        paddingHorizontal: width * 0.2,
        textAlign: 'center',
        lineHeight: height * 0.022,
        marginBottom: height * 0.005
    },
    starsContainer:{
        marginBottom:height * 0.02
    },
    myEmptyStarStyle: {
        marginLeft: width * 0.012,
        marginRight:width * 0.012
    },
    myStarStyle: {
        marginLeft: width * 0.025
    },
    overalltext: {
        fontFamily: IsidoraBold,
        color: GRAY,
        fontSize: width * 0.046,
        textAlign: 'center',
        marginBottom:'1%'
    },
    containers: {
        marginTop: height * 0.02,
        alignItems:'center',

    },
    inputbox:{
        fontFamily:IsidoraMedium,
        color:GRAY,
        fontSize:width*0.031,
        backgroundColor:WHITE,
        borderRadius:5,
        height:height*0.15,
        textAlignVertical:'top',
        paddingHorizontal:width*0.04
 },
    commentbuttonbackbox:{
        backgroundColor:LIGHTPURPLE,
        // height:height*0.05,
        padding:0,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        justifyContent:'center',
    verticalAlign:'bottom'
    },
    commentouterbox:{
        width:width*0.9,
        alignSelf:'center',
        borderWidth:0.7,
        borderColor:"#6F757C",
        borderRadius:5,
        marginTop:"5%",
        marginBottom:'7%'

    },
    buttonsubmit:{
        backgroundColor:orange,
        width:width*0.28,
        borderRadius:width*0.04,
        padding:0,
        height:height*0.04,
        marginTop:height*0.015,
        marginBottom:height*0.02,
        marginLeft:width*0.04,
        justifyContent:'center'
    },
    submittext:{
        fontFamily:IsidoraMedium,
        fontSize:width*0.035,
        color:WHITE
    }
    
})