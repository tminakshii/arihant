import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTPURPLE, orange, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'; 
const { width, height } = Dimensions.get('window')
const data = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
]

const TestInstructions = ({ handlePrevious }) => {
    const navigation = useNavigation();
    const [value, setValue] = useState('Select');
    const [isFocus, setIsFocus] = useState(false);
    const[boxchecked,setBoxchecked]=useState(false)
    return (
        
        <View style={styles.main}>
            <Text style={styles.title}>Please read the following instructions carefully</Text>
            <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
            <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
            <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
            <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
            <Text style={styles.instructions}>1. The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default you are not required to end or submit your exam.</Text>
            <View style={styles.languagebox}>
                <Text style={styles.chooselang}>Choose Your default language:</Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: BLACK }]}
                    data={data}
                    fontFamily={IsidoraMedium}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={`${value}`}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderItem={(item) => (
                        <Text style={styles.searchvalues}>{item.value}</Text>
                    )}
                    renderRightIcon={()=>(
                        <Icon name={isFocus?'chevron-up':'chevron-down'}
                        size={20}
                        color={GRAY} style={styles.iconStyle}/>
    )}
                />
            </View>
            <Text style={styles.title2}>Declaration:</Text>
            <View style={styles.declarationbox}>
                <TouchableOpacity style={styles.checkbox} onPress={()=>setBoxchecked(!boxchecked)}>
                 <MaterialCommunityIcons name={boxchecked?"checkbox-marked":'checkbox-blank-outline'} size={width * 0.0555} color={inputBordercolor} />
                </TouchableOpacity>
                <Text style={styles.instructions2}>I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort for my own or someone else's advantage will lead to my immediate disqualification.
                    The decision of ExamWithArihant.com will be final in these
                    matters and cannot be appealed.</Text>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlePrevious} style={styles.previousButton}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Questions')
                }} style={styles.nextButton}>
                    <Text style={styles.nextText}>Begin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TestInstructions

const styles = StyleSheet.create({
    main: {
        backgroundColor: WHITE,
        marginTop: "5%",
        paddingHorizontal:'5%'
    },
    title: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        // fontWeight:'400',
        fontSize: width * 0.03,
        marginVertical:'5%'
    },
    title2: {
        color: orange,
        fontFamily: IsidoraBold,
        fontSize: width * 0.03,
        marginTop: '5%',
        marginBottom:'2%'
    },
    instructions: {
        color: BLACK,
        fontSize: width * 0.03,
        alignSelf: 'center',
        fontFamily: IsidoraSemiBold,
        // fontWeight:'400',
        lineHeight: width>500?height * 0.024:height * 0.019,
        // marginBottom: '3%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%',
    },
    buttonText: {
        color: BLACK,
        fontFamily: IsidoraSemiBold,
        fontSize:width*0.036
    },
    previousButton: {
        borderColor: BLACK,
        borderWidth: 1,
        width: width / 2.78,
        height: height * 0.05,
        borderRadius: width *0.1085,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton: {
        backgroundColor: orange,
        borderColor: orange,

        width: width / 2.78,
        height: height * 0.05,
        borderRadius: 39,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        borderWidth: 1,

    },
    nextText: {
        color: WHITE,
        fontFamily: IsidoraBold,
        fontSize:width*0.036
    },
    chooselang: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.035,
        color: orange,

    },
    languagebox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '3%',

    },
    placeholderStyle: {
        fontSize: width * 0.035,
        color: DARKGRAY,
        fontFamily: IsidoraMedium,
        textAlign: 'center',


    },
    selectedTextStyle: {
        fontFamily: IsidoraMedium,
        fontSize: width * 0.035,
        color: BLACK,
        marginLeft: width * 0.04,


    },
    iconStyle: {
        // width: width * 0.07,
        // height: height * 0.03,
        marginRight: width * 0.03,
        // fontFamily:IsidoraRegular
    },
    inputSearchStyle: {
        fontSize: width * 0.035,
        fontFamily:IsidoraMedium
    },
    searchvalues: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05,
        // alignSelf:'center',
        // marginVertical: '4%',
        paddingVertical: '8%',
        backgroundColor: LIGHTPURPLE,
        paddingHorizontal:'8%',
        // paddingBottom:'8%',

        // borderBottomWidth: 0.2,
        // borderBottomColor: GRAY,
        // textAlign: 'center',
        color: BLACK,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.04
    },
    dropdown: {
        height: height * 0.045,
        // marginRight:5,
        // marginTop: '2%',
        width: width * 0.25,
        backgroundColor: LIGHTPURPLE,
        alignItems: 'center',
        borderRadius: width * 0.01
        // justifyContent:'space-evenly'
    },
    declarationbox:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
        width: width/1.06 ,
        marginLeft:'1.7%',
        // flexWrap:'wrap',
        // marginHorizontal:width*0.05,
        alignSelf: 'center',
        // backgroundColor:'red'

    },
    checkbox:{
        justifyContent:'center',
        alignItems:'center'
    },
    instructions2: {
        color: BLACK,
        fontSize: width * 0.03,
       width:width/1.15,
    flexWrap:'wrap',
        // alignSelf: 'center',
        fontFamily: IsidoraSemiBold,
        // fontWeight:'400',
        lineHeight:width>500?height * 0.024:height * 0.019,
        marginBottom: '3%'
    },

})