import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View ,ScrollView, ImageBackground, FlatListComponent} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from '../values/ImagePath'
import { DARKGRAY, GRAY, orange, WHITE } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Button from './Button'
const { height, width } = Dimensions.get('window')
const Banner1 = ({ item,solution=false,setSolution=()=>{},setCompare=()=>{} }) => {
    const [isSolutionShow, setSolutionShow] = useState(solution)
    const[selecteoptionid,setSelectedoptionid]=useState(item.option[0].id)
    return (
        <View style={[styles.maincontainer,{paddingBottom:isSolutionShow?height*0.04:height*0.03}]}>
            <ImageBackground source={ImagePath?.starbackground} resizeMode="cover" imageStyle={styles.image} >
            <View style={styles.textcontainer}>
                <Text style={styles.head}>{item?.head}</Text>
                <Text style={styles.head2}>{item?.head2}</Text>
                <View style={styles.attemptbox}>
                    <Text style={styles.date}>Attempt {item?.attempt}{' '}</Text>
                    <View style={styles.dot}></View>
                    <Text style={styles.date}>{' '}{item?.date}</Text>
                    <Text style={styles.date}>{' '}{item?.time}</Text>
                </View>
                <View>
                {
                    solution || isSolutionShow ? (
                        <View style={styles.showsolbox}>
                            <TouchableOpacity style={styles.reversebtn} onPress={() => {
                                setSolutionShow(false)
                                setSolution(false);
                                setCompare(false)}}>
                                <AntDesign name='arrowleft' size={12} color={GRAY} />
                            </TouchableOpacity>
                            <View style={styles.scrollbox}>
                            <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                                {item?.option.map((opt,ind)=>{
                                    
                                    return(<TouchableOpacity style={[styles.optioncontainer,{backgroundColor:opt.id==selecteoptionid?orange:WHITE,borderWidth:opt.id==selecteoptionid?0:0.5}]}
                                    onPress={()=>setSelectedoptionid(opt.id)}>
                                        <Text style={[styles.optiontext,{color:opt.id==selecteoptionid ?WHITE:DARKGRAY}]}>{opt.text}</Text>
                                    </TouchableOpacity>

                                    )
                                })}

                            </ScrollView>
                            </View>
                            <Text style={styles.soltext}>Solutions</Text>
                        </View>

                    ) : (

                        <Button
                            text={'View Solutions'}
                            customStyles={styles.button}
                            textStyle={styles.btntext}
                            onPress={() => setSolutionShow(true)} />
                    )
                }
                </View>

            </View>
            {/* <Image source={ImagePath?.starbackground} style={styles.image} /> */}
            </ImageBackground>
        </View>
    )
}

export default Banner1

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: width * 0.38,
        width: width * 0.62,
        marginLeft:width/3.5,
        marginTop:width/17
    },
    maincontainer: {
        backgroundColor: WHITE,
        paddingTop: height * 0.03,
        width: width/1.1,
        height:width/2,
        elevation: 2,
        borderRadius: 5,
    },
    textcontainer: {
        paddingLeft: width * 0.05,
        // paddingTop: height * 0.03
    },
    head: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.0527,
    },
    head2: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.0527,
    },
    attemptbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:'1%'
    },
    date: {
        fontFamily: IsidoraSemiBold,
        color: GRAY,
        fontSize: width * 0.0305561
    },
    dot: {
        height: width * 0.009,
        width: width * 0.009,
        borderRadius: width * 0.014 / 2,
        backgroundColor: GRAY

    },
    button: {
        backgroundColor: orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.01,
        width: width * 0.41,
        borderRadius: width*0.04,
        marginTop: '13%'


    },
    btntext: {
        fontFamily: IsidoraSemiBold,
        color: WHITE,
        fontSize: width * 0.035
    },
    reversebtn: {
        height: width * 0.055,
        width: width * 0.055,
        borderRadius: width * 0.05 / 5,
        borderWidth: 0.7,
        borderColor: GRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    showsolbox:{
        marginTop:height*0.01,
        marginBottom:height*0.06,
        // paddingBottom:height*0.05,
        // marginBottom:height*0.05
        
    },
    optiontext:{
        fontFamily:IsidoraMedium,
        fontSize:width*0.03,
        color:DARKGRAY
    },
    optioncontainer:{
        width:width*0.215,
        padding:0,
        height:height*0.03,
        borderRadius:3,
        marginRight:width*0.03,
        justifyContent:'center',
        alignItems:'center'
        
    },
    scrollbox:{
        marginRight:width*0.042,
        marginTop:height*0.015
    },
    soltext:{
        fontFamily:IsidoraBold,
        color:DARKGRAY,
        fontSize:width*0.04,
        marginTop:height*0.01,
        marginBottom:'2%',
        // backgroundColor:'red'
        
    }
})