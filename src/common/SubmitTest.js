import { Dimensions, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTBLUE, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, LIGHTGREYTEXT, LIGHTPURPLE, LIGHTPURPLE2, orange, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Feather from 'react-native-vector-icons/Feather'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')


const SubmitTest = ({ item,closesubmit }) => {
    const navigation=useNavigation()
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headerbox}>
                <Text style={styles.submittexts}>Submit Test</Text>
                <TouchableOpacity onPress={closesubmit} >
                    <Feather name='x-circle' size={20} color={GRAY} />
                </TouchableOpacity>
            </View>
            <View style={styles.innerbox}>
                <View style={styles.firstbox}>
                    <View style={styles.firstcoloumn}>
                        <Text style={styles.firstTextHeader}>Section Name</Text>
                        {item.map((sub, ind) => {
                            return (<Text key={ind} style={styles.submitsub}>{sub.SectionName}</Text>)
                        })}
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.headerscroll} overScrollMode='never'>
                        <View style={styles.headerfirstrow}>
                        <Text style={styles.firstText}>Total Questions</Text>
                        <Text style={styles.firstText}>Answered</Text>
                        <Text style={styles.firstText}>Not Answered</Text>
                        <Text style={styles.firstText}>Marked</Text>
                        <Text style={styles.firstText}>Not Visited</Text>
                        </View>
                        {item.map((entry,index1)=>{
                            return(<View key={index1} style={styles.headerfirstrow}>
                                <Text style={styles.firstText}>{entry.totalques}</Text>
                                <Text style={styles.firstText}>{entry.answered}</Text>
                                <Text style={styles.firstText}>{entry.notanswered}</Text>
                                <Text style={styles.firstText}>{entry.marked}</Text>
                                <Text style={styles.firstText}>{entry.notvisited}</Text>

                            </View>)
                        })}
                    </ScrollView>
                </View>
            </View>
            <Text style={styles.youwill}>You will not be able to modify your answers once you submit the test.</Text>
            <Text style={styles.doyou}>Do you wish to submit the test ?</Text>
            <View style={styles.buttonbox}>
                <Button 
                text={'Back to Test'}
                customStyles={styles.backbtn}
                textStyle={styles.backtext}/>
                <Button 
                text={'Submit Test'}
                onPress={()=>navigation.navigate("AfterTestSubmit")}
                customStyles={styles.submitbtn}
                textStyle={styles.submittext}/>
            </View>
        </View>
    )
}

export default SubmitTest

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: WHITE,
        width: width * 0.93,
        // height:height,
        elevation: 5,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.018,
        zIndex:1
        // flex: 1
    },
    submittexts: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.045
    },
    headerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop:'2%'
    },
    firstbox: {
        flexDirection: "row",
        // flex:1
    },
    firstTextHeader: {
        fontFamily: IsidoraSemiBold,
        color: LIGHTGREYTEXT,
        fontSize: width * 0.034,
        width: width * 0.22,
        height: height * 0.055,
        borderWidth: 0.8,
        textAlignVertical: "center",
        borderColor: LIGHTGRAY2,
        paddingLeft: width * 0.03,
        lineHeight: height * 0.018
    },
    firstText: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.028,
        width: width * 0.27,
        flex: 1,
        height: height * 0.055,
        textAlignVertical: "center",
        textAlign: 'center',
        borderWidth: 0.8,
        borderColor: LIGHTGRAY2
    },
    headerfirstrow: {
        // width:'100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        // alignItems:"center"
    },
    submitsub:{
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.034,
        width: width * 0.22,
        height: height * 0.055,
        borderWidth: 0.8,
        textAlignVertical: "center",
        borderColor: LIGHTGRAY2,
        paddingLeft: width * 0.03,
        lineHeight: height * 0.018,
        // paddingTop:"5%"
        // alignContent:"center"

    },
    firstcoloumn:{
        flexDirection:'column',
        padding:0,
        margin:0,
        // alignItems:"center",
        // alignSelf:"center",
        // backgroundColor:"red"
        // justifyContent:"center"
        // flex:1

    },
    headerscroll:{
        flexDirection:'column',
        padding:0,
        margin:0
    },
    innerbox:{
        marginTop:height*0.03,
        borderWidth:0.5,
        borderColor:'#6F757C',
        borderRadius:width * 0.014,
        overflow:'hidden'
    },
    youwill:{
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:width*0.027,
        marginTop:height*0.01,
        lineHeight:height*0.017
    },
    doyou:{
        fontFamily:IsidoraMedium,
        color:orange,
        fontSize:width*0.027,
        marginTop:height*0.003
    },
    buttonbox:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:height*0.02
    },
    backbtn:{
        backgroundColor:LIGHTGRAY3,
        padding:0,
        width:width*0.36,
        justifyContent:'center',
        alignItems:'center',
        height:height*0.045,
        borderRadius:width * 0.0555,
        borderWidth:0.6,
        borderColor:DARKGRAY
        
    },
    submitbtn:{
        backgroundColor:orange,
        padding:0,
        width:width*0.36,
        justifyContent:'center',
        alignItems:'center',
        height:height*0.045,
        borderRadius:width * 0.0555
    },
    backtext:{
        color:DARKGRAY,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.035
    },
    submittext:{
        color:WHITE,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.035
    }
})