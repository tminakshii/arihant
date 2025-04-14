import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTGRAY, LIGHTGRAY2, LIGHTGRAY3, orange, RED, WHITE } from '../values/Colors'
const { width, height } = Dimensions.get('window')
import DeviceInfo from 'react-native-device-info';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
import Inputfield from './Inputfield';
import Button from './Button';
import { ImagePath } from '../values/ImagePath';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import FilledBasicdetail from './FilledBasicdetail';
const isTablet = DeviceInfo.isTablet()
const BasicDetialcommon = ({ pageforbasicdetail }) => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [mobile, setMobile] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [houseno, setHouseno] = useState('')
    const [streetname, setStreetname] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [qualification, setQualification] = useState('')
    const [passingyear, setPassingyear] = useState('')
    const [school, setSchool] = useState('')
    const [exampreferences, setExampreference] = useState('')
    const [coachingname, setCoachingname] = useState('')
    const [gender, setGender] = useState('')
    const [preparingforexam, setPreparingforexam] = useState('')
    const [modeofStudy, setModeofStudy] = useState('')
    const [language, setLanguage] = useState('English')
    const [pageofbasicdetail, setPageofbasicdetail] = useState(pageforbasicdetail[0] || 1)
    const [showfilledbasicdetial, setShowfilledbasicdetail] = useState(false)
    console.log(pageforbasicdetail[0], 'detail', pageofbasicdetail)

    const handleGender = (selectedGender) => {
        setGender((prevGender) => (prevGender === selectedGender ? '' : selectedGender));
    };
    const handleCompetitivecondition = (selectedcondition) => {
        setPreparingforexam((prevcondition) => (prevcondition === selectedcondition ? '' : selectedcondition));
    };
    const handlepreparationmode = (modeofstudy) => {
        setModeofStudy((prevmode) => (prevmode === modeofstudy ? '' : modeofstudy))

    }
    const handleLanguage = (selectedLanguage) => {
        setLanguage((prevLanguage) =>
            prevLanguage === selectedLanguage ? '' : selectedLanguage
        );
    };
    const handleNext = () => {
        const currentIndex = pageforbasicdetail.indexOf(pageofbasicdetail);
        if (currentIndex < pageforbasicdetail.length - 1) {
            setPageofbasicdetail(pageforbasicdetail[currentIndex + 1])
        }
        else {
            setShowfilledbasicdetail(true)
        }
    }
    if (showfilledbasicdetial) {
        return (
            <FilledBasicdetail
                item={{
                    name,
                    lastname,
                    mobile,
                    dob,
                    email,
                    houseno,
                    streetname,
                    landmark,
                    city,
                    state,
                    zip,
                    qualification,
                    passingyear,
                    school,
                    exampreferences,
                    coachingname,
                    gender,
                    preparingforexam,
                    modeofStudy,
                    language
                }}  setShowfilledbasicdetail={setShowfilledbasicdetail}/>
        )
    }
    const handleback = () => {
        const currentIndex = pageforbasicdetail.indexOf(pageofbasicdetail);
        if (currentIndex > 0) {
            setPageofbasicdetail(pageforbasicdetail[currentIndex - 1])
        }
    }
    return (
        <View style={styles.firstContainer}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/orangegraycircle.png')} style={styles.circleimg} />
                <Text style={styles.basictext}>Basic Details</Text>
            </View>
            {
                pageofbasicdetail === pageforbasicdetail[0] && (

                    <View>
                        <Text style={styles.studentprofiletext}>Student Profile</Text>
                        <View style={styles.photocontainer}>
                            <TouchableOpacity>
                                <Image source={require('../assets/images/photofordetail.png')} style={styles.studentprofileimg} />
                            </TouchableOpacity>
                            <View style={styles.mainnamebox}>
                                <Text style={styles.name}>First Name*</Text>
                                <Inputfield
                                    placeholder={'Enter your first name'}
                                    editable={true}
                                    placeholderTextColor={GRAY}
                                    boxcustomStyle={styles.namebox}
                                    customStyles={styles.inputbox}
                                    onChangeText={(text) => setName(text)}
                                />
                                <Text style={styles.name}>Last Name*</Text>
                                <Inputfield
                                    placeholder={'Enter your surname'}
                                    editable={true}
                                    placeholderTextColor={GRAY}
                                    boxcustomStyle={styles.namebox}
                                    customStyles={styles.inputbox}
                                    onChangeText={(text) => setLastname(text)}
                                />
                            </View>

                        </View>
                        <View style={styles.underbox}>
                            <View style={styles.emailbox}>
                                <Text style={styles.name}>Email*</Text>
                                <TouchableOpacity>
                                    <Text style={styles.updateemial}>Update email</Text>
                                </TouchableOpacity>
                            </View>
                            <Inputfield
                                placeholder={'Enter your email'}
                                editable={true}
                                placeholderTextColor={GRAY}
                                boxcustomStyle={styles.namebox}
                                customStyles={styles.inputboxemail}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <View style={styles.dobphonebox}>
                                <View>
                                    <Text style={styles.name}>
                                        DOB*
                                    </Text>
                                    <Inputfield
                                        placeholder={'DD/MM/YYYY'}
                                        editable={true}
                                        placeholderTextColor={GRAY}
                                        boxcustomStyle={styles.namebox}
                                        customStyles={styles.inputdob}
                                        onChangeText={(text) => setDob(text)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.name}>
                                        Mobile*
                                    </Text>
                                    <Inputfield
                                        placeholder={'+91'}
                                        editable={true}
                                        placeholderTextColor={DARKGRAY}
                                        boxcustomStyle={styles.namebox}
                                        customStyles={styles.inputdob}
                                        onChangeText={(text) => setMobile(text)}
                                    />
                                </View>
                            </View>
                            <Text style={styles.name}>Gender</Text>
                            <View style={styles.undergender} />
                            <View style={styles.genderbox}>
                                <TouchableOpacity style={styles.genderbox} onPress={() => handleGender('Male')}>
                                    <View style={[styles.gendercircle,]} >
                                        <View style={gender === 'Male' && styles.selectedoption}></View>
                                    </View>
                                    <Text style={styles.gender}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.genderbox} onPress={() => handleGender('Female')}>
                                    <View style={[styles.gendercircle,]} >
                                        <View style={gender === 'Female' && styles.selectedoption}></View>
                                    </View>
                                    <Text style={styles.gender}>Female</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.name}>Language</Text>
                            <View style={styles.undergender} />
                            <View style={styles.genderbox}>
                                <TouchableOpacity style={styles.genderbox} onPress={() => handleLanguage('English')}>
                                    <View style={[styles.gendercircle,]} >
                                        <View style={language === 'English' && styles.selectedoption}></View>
                                    </View>
                                    <Text style={styles.gender}>English</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.genderbox} onPress={() => handleLanguage('Hindi')}>
                                    <View style={[styles.gendercircle,]} >
                                        <View style={language === 'Hindi' && styles.selectedoption}></View>
                                    </View>
                                    <Text style={styles.gender}>Hindi</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                )
            }
            {/*SecondPage */}
            {
                pageofbasicdetail === pageforbasicdetail[1] && (
                    <View style={styles.secondpage}>
                        <View style={styles.textheading}>
                            <TouchableOpacity style={styles.backicon} onPress={handleback} >
                                <MaterialCommunityIcons name='arrow-left-thin' size={width * 0.05} color={WHITE} />
                            </TouchableOpacity>
                            <Text style={styles.addtext}>Address</Text>
                        </View>
                        <Text style={styles.addressheadings}>Flat, House no., Building, Company, Apartment</Text>
                        <TextInput
                            placeholder='Enter your house no., flat no. building, company'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setHouseno(text)}
                        />
                        <Text style={styles.addressheadings}>Area, Street, Sector, Village</Text>
                        <TextInput
                            placeholder='Enter area, street, sector, village'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setStreetname(text)}
                        />
                        <Text style={styles.addressheadings}>Landmark</Text>
                        <TextInput
                            placeholder='Enter  landmark near your address'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY} />
                        <View style={styles.pincodecity}>
                            <View>
                                <Text style={styles.addressheadings}>Pincode</Text>
                                <TextInput
                                    placeholder='6 digit [0-9] pin code'
                                    style={styles.addressinput2}
                                    placeholderTextColor={GRAY}
                                    onChangeText={(text) => setZip(text)} />
                            </View>
                            <View>
                                <Text style={styles.addressheadings}>City</Text>
                                <TextInput
                                    placeholder='Your city name'
                                    style={styles.addressinput2}
                                    placeholderTextColor={GRAY}
                                    onChangeText={(text) => setCity(text)} />
                            </View>
                        </View>
                        <Text style={styles.addressheadings}>State</Text>
                        <TextInput
                            placeholder='State'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setState(text)} />
                    </View>
                )
            }
            {/*Third Page */}
            {
                pageofbasicdetail === pageforbasicdetail[2] && (
                    <View style={styles.thirdpage}>
                        <View style={styles.textheading}>
                            <TouchableOpacity style={styles.backicon} onPress={handleback} >
                                <MaterialCommunityIcons name='arrow-left-thin' size={width * 0.05} color={WHITE} />
                            </TouchableOpacity>
                            <Text style={styles.addtext}>Education</Text>
                        </View>
                        <Text style={styles.addressheadings}>Qualification</Text>
                        <TextInput
                            placeholder='Qualification'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setQualification(text)} />
                        <Text style={styles.addressheadings}>Passing Year</Text>
                        <TextInput
                            placeholder='Passing Year'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setPassingyear(text)} />
                        <Text style={styles.addressheadings}>School/College</Text>
                        <TextInput
                            placeholder='School/College'
                            style={styles.addressinput}
                            placeholderTextColor={GRAY}
                            onChangeText={(text) => setSchool(text)} />
                        <Text style={styles.addressheadings}>Are you preparing for competitive exams?</Text>
                        <View style={styles.underprepare} />
                        <View style={styles.genderbox}>
                            <TouchableOpacity style={styles.genderbox} onPress={() => handleCompetitivecondition('Yes')}>
                                <View style={[styles.gendercircle,]} >
                                    <View style={preparingforexam === 'Yes' && styles.selectedoption}></View>
                                </View>
                                <Text style={styles.gender}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.genderbox} onPress={() => handleCompetitivecondition('No')}>
                                <View style={[styles.gendercircle,]} >
                                    <View style={preparingforexam === 'No' && styles.selectedoption}></View>
                                </View>
                                <Text style={styles.gender}>No</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pincodecity}>
                            <View>
                                <Text style={styles.addressheadings}>Exam Preferences</Text>
                                <TextInput
                                    placeholder='Exam Preferences'
                                    style={styles.addressinput2}
                                    placeholderTextColor={GRAY}
                                    onChangeText={(text) => setExampreference(text)} />
                            </View>
                            <View>
                                <Text style={styles.addressheadings}>Coaching Name</Text>
                                <TextInput
                                    placeholder='Coaching name'
                                    style={styles.addressinput2}
                                    placeholderTextColor={GRAY}
                                    onChangeText={(text) => setCoachingname(text)} 
                                    />
                            </View>
                        </View>
                        <Text style={styles.addressheadings}>Mode of study?</Text>
                        <View style={styles.underprepare} />
                        <View style={styles.genderbox}>
                            <TouchableOpacity style={styles.genderbox} onPress={() => handlepreparationmode('Online')}>
                                <View style={[styles.gendercircle,]} >
                                    <View style={modeofStudy === 'Online' && styles.selectedoption}></View>
                                </View>
                                <Text style={styles.gender}>Online</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.genderbox} onPress={() => handlepreparationmode('Offline')}>
                                <View style={[styles.gendercircle,]} >
                                    <View style={modeofStudy === 'Offline' && styles.selectedoption}></View>
                                </View>
                                <Text style={styles.gender}>Offline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            <View style={styles.bottom}>
                <Text style={styles.name}>{pageofbasicdetail}/3</Text>
                <Button
                    onPress={handleNext}
                    text={'Next'}
                    customStyles={styles.nextbutton}
                    textStyle={styles.btntext}
                    icon2={ImagePath.longarrowright} iconStyle2={styles.arrow} />
            </View>
        </View>
    )
}

export default BasicDetialcommon

const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        backgroundColor: WHITE,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset:{width:0,height:2},
        borderRadius: width * 0.022,
        // paddingVertical: '3%',
        paddingBottom: '6%',
        // paddingHorizontal:'4%',
        width: width / 1.085,
        alignSelf: 'center',
        marginVertical: '6%',
        overflow: 'hidden',

    },
    circleimg: {
        width: width * 0.038,
        height: width * 0.038,
        resizeMode: 'contain',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        backgroundColor: WHITE,
        elevation: 5
    },
    basictext: {
        fontSize: width * 0.041,
        fontFamily: IsidoraBold,
        color: DARKGRAY,
        marginLeft: width * 0.025
    },
    studentprofiletext: {
        fontSize: width * 0.036,
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        marginHorizontal: '4%',
        marginVertical: '3%'
    },
    lineunderheading: {
        height: width * 0.003,
        backgroundColor: LIGHTGRAY2,

    },
    studentprofileimg: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',

    },
    photocontainer: {
        flexDirection: "row",
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        justifyContent: 'space-between',
        marginTop:'3%'
    },
    namebox: {
        // width:width*0.5
    },
    mainnamebox: {
        // width:width*0.7,
    },
    inputbox: {
        width: width * 0.55,
        height: height * 0.04,
        padding: 0,
        borderWidth: 0.5,
        borderColor: inputBordercolor,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.031,
        paddingLeft: width * 0.03,
        marginTop: '3%',
        marginBottom: '4%',
        borderRadius: 4
    },
    name: {
        fontSize: width * 0.034,
        color: DARKGRAY,
        fontFamily: IsidoraMedium
    },
    emailbox: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: '2%'
    },
    updateemial: {
        fontSize: width * 0.034,
        color: orange,
        fontFamily: IsidoraMedium
    },
    underbox: {
        paddingHorizontal: '4%'
    },
    inputboxemail: {
        width: width * 0.85,
        height: height * 0.04,
        padding: 0,
        borderWidth: 0.5,
        borderColor: GRAY,
        // color:LIGHTGRAY3,
        fontFamily: IsidoraMedium,
        fontSize: width * 0.031,
        // marginLeft:'2%'
        paddingLeft: width * 0.03,
        marginTop: '2%',
        marginBottom: '4%',
        borderRadius: 4
    },
    dobphonebox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: '2%',
    },
    inputdob: {
        width: width * 0.41,
        height: height * 0.04,
        padding: 0,
        borderWidth: 0.5,
        borderColor: GRAY,
        // color:LIGHTGRAY3,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        // marginLeft:'2%'
        paddingLeft: width * 0.03,
        marginTop: '4%',
        marginBottom: '4%',
        borderRadius: 4
    },
    undergender: {
        backgroundColor: LIGHTGRAY2,
        height: 1.5,
        marginVertical: '1.5%'
    },
    underprepare: {
        backgroundColor: LIGHTGRAY2,
        height: 1.5,
        // marginTop:'0.5%'
        // marginVertical: '1%'
    },
    gendercircle: {
        width: width * 0.05,
        height: width * 0.05,
        borderRadius: width * 0.05 / 2,
        borderWidth: 1,
        borderColor: GRAY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedoption: {
        width: width * 0.035,
        height: width * 0.035,
        borderRadius: width * 0.035 / 2,
        backgroundColor: orange
    },
    genderbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '2.5%',
        width: width * 0.32
    },
    gender: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.034,
        marginLeft: width * 0.032
    },
    nextbutton: {
        backgroundColor: RED,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        paddingVertical: '3.5%',
        width: width * 0.24,
        // paddingHorizontal:'10%',
        borderRadius: width * 0.012,
        marginLeft: width * 0.05

    },
    btntext: {
        color: WHITE,
        fontSize: width * 0.035,
        fontFamily: IsidoraSemiBold
    },
    arrow: {
        width: width * 0.04,
        height: height * 0.007,
        resizeMode: 'contain',
        // backgroundColor:'red'
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: "4%",
        marginTop: '5%'
    },
    backicon: {
        backgroundColor: orange,
        justifyContent: "center",
        alignItems: 'center',
        width: width * 0.058,
        height: width * 0.058,
        borderRadius: width * 0.058 / 2
    },
    secondpage: {
        paddingHorizontal: '4%',
        marginBottom: '8%'
    },
    thirdpage: {
        paddingHorizontal: '4%',
        // marginBottom:'8%'
    },
    addtext: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.041,
        marginLeft: width * 0.03
    },
    textheading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%'
    },
    addressinput: {
        width: width * 0.85,
        borderWidth: 0.4,
        borderColor: inputBordercolor,
        // paddingVertical:'0.5%',
        padding: 0,
        height: height * 0.04,
        alignSelf: 'center',
        fontFamily: IsidoraMedium,
        fontSize: width * 0.031,
        borderRadius: 4,
        marginBottom: '4%',
        paddingLeft: width * 0.025
    },
    addressinput2: {
        width: width * 0.4,
        borderWidth: 0.4,
        borderColor: inputBordercolor,
        // paddingVertical:'0.5%',
        padding: 0,
        height: height * 0.04,
        alignSelf: 'center',
        fontFamily: IsidoraMedium,
        fontSize: width * 0.031,
        borderRadius: 4,
        marginBottom: '4%',
        paddingLeft: width * 0.025,
        marginTop: '2%'
    },
    addressheadings: {
        fontFamily: IsidoraMedium,
        fontSize: width * 0.032,
        color: DARKGRAY,
        marginBottom: '1.5%'
    },
    pincodecity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: "1.5%"
    },


})