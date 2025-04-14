import { Dimensions, StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import React, { useState } from 'react';
import { DARKGRAY, GRAY, LIGHTBLUE, orange, RED, WHITE } from '../values/Colors';
import { IsidoraBold, IsidoraSemiBold } from '../values/Fonts';
import Button from './Button';
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window');

const ReportData = [
    { title: 'Incorrect Question' },
    { title: 'Incorrect Answer' },
    { title: 'Incorrect Solution' },
    { title: 'Incomplete Solution' },
    { title: 'Out of Syllabus' },
    { title: 'Any Other Issue' },
];

const ReportQuestion = ({closeReport}) => {
    const [selectedTitles, setSelectedTitles] = useState([]);

    const handleselection = (title) => {
        setSelectedTitles(prevSelected =>
            prevSelected.includes(title)
                ? prevSelected.filter(item => item !== title)
                : [...prevSelected, title]
        );
    };

    return (
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <Text style={styles.reporttext}>Report Questions</Text>
                <TouchableOpacity onPress={closeReport}>
                <Feather name='x-circle' size={20} color={DARKGRAY}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.container}>
                {ReportData.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.innercontainer} onPress={() => handleselection(item.title)}>
                        <View style={[styles.radio, { backgroundColor: selectedTitles.includes(item.title) ? RED : LIGHTBLUE }]} />
                        <Text style={styles.radiotext}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
                <Text style={styles.description}>Add Description</Text>
                <View style={styles.linebox}>
                    <TextInput
                        style={styles.commentbox} />
                    <Text style={styles.line1}>/<Text style={styles.line2}>/</Text></Text>
                </View>
              
            </View>
            <Button
                text={'Submit'}
                textStyle={styles.btntext}
                customStyles={styles.btn}/>
        </View>
    );
};

export default ReportQuestion;

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: LIGHTBLUE,
        width: width*0.9,
        elevation:5,
        paddingHorizontal: height * 0.02,
        paddingTop: height * 0.02,

        alignSelf:'center',
        borderRadius:width* 0.028
    },
    innercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.015,
    },
    radiotext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.032,
        marginLeft: width * 0.02,
    },
    radio: {
        height: width * 0.04,
        width: width * 0.04,
        borderRadius: width * 0.04 / 2,
        borderWidth: 0.5,
        borderColor: GRAY,
        // marginLeft: width * 0.04,
    },
    description: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.04,
        // marginLeft: width * 0.04,
        marginTop: height * 0.02,
        marginBottom:height*0.01
    },
    commentbox: {
        backgroundColor: WHITE,
        height: height * 0.18,
        width: width * 0.85,
        alignSelf: 'center',
        textAlignVertical:'top',
        borderRadius:width* 0.014
        // position:'relative'
    },
    container: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingVertical: height * 0.02
    },
    linebox: {
        flexDirection: 'row',
        // position:'absolute',
        // justifyContent:'flex-end',
        //    alignItems:'flex-end',
        alignSelf: 'center'


    },
    line1: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.07,
        textAlignVertical: 'center',
        color: DARKGRAY,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: width*0.008,
        bottom: -height*0.007,
        letterSpacing:-width*0.015
        
        
    },
    line2: {
        fontSize: width * 0.04,
        textAlignVertical: 'center',
        fontFamily: IsidoraSemiBold

    },
    btntext:{
        fontFamily:IsidoraBold,
        color:WHITE,
        fontSize:width*0.035,
    },
    btn:{
        backgroundColor:orange,
        borderRadius:width*0.05,
        width:width*0.35,
        height:height*0.04,
        padding:0,
        alignItems:'center',
        justifyContent:'center',
        // marginLeft:width*0.04
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:height*0.01
    },
    reporttext:{
        color:DARKGRAY,
        fontFamily:IsidoraBold,
        fontSize:width*0.035
    }
});
