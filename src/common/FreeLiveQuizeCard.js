import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTPURPLE2, orange, WHITE } from '../values/Colors'
import { ImagePath } from '../values/ImagePath'
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts'
import { green } from 'react-native-reanimated/lib/typescript/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Button from './Button'
const{width,height}=Dimensions.get('window')
const boxwidth=width*0.31
const FreeLiveQuizeCard = ({item}) => {
  return (
    <View style={styles.maincontainer}>
        <View style={styles.headerbox}>
            <View style={styles.headertextbox}>
            <Text style={styles.subject}>{item?.subject}</Text>
            <Text style={styles.quizno}>Quiz {item?.quizno}</Text>
            </View>
        <View style={styles.clocklistbackground}>
            <Image source={ImagePath.clocklist} style={styles.clocklist}/>
        </View>
        </View>
        <View style={styles.questionbox}>
            <Image source={item.listicon} style={styles.listicon}/>

            <Text style={styles.totalques}>{item?.questions} <Text style={styles.ques}>Questions</Text></Text>
        </View>
        <View style={styles.questionbox}>
            <AntDesign name='clockcircleo' size={width*0.025} color={BLACK} style={styles.clock}/>
            <Text style={styles.mintext}>{item.min} Mins</Text>
        </View>
        <Text style={styles.distext}>{item.discription}</Text>
        <Button
        text={'Start Now'}
        customStyles={styles.button}
        textStyle={styles.buttontext}/>
      {/* <Text style={styles.freetext}>FreeLiveQuizeCard</Text> */}
    </View>
  )
}

export default FreeLiveQuizeCard

const styles = StyleSheet.create({
    maincontainer:{
        width:width*0.45,
        marginHorizontal:width*0.016,
        backgroundColor: WHITE,
        // marginBottom: height * 0.013,
        paddingBottom:height*0.015,
        borderRadius:boxwidth*0.05,
        marginBottom:height*0.025,
       
        overflow:'hidden',
        elevation:3,
        shadowColor:GRAY,
        shadowOffset:{width:0,height:5},
        shadowOpacity: 0.15, 
       
    },
    clocklist:{
        height: height * 0.038,
        width: width * 0.1,
        resizeMode: 'contain',
        marginTop:"10%"
    },
    clocklistbackground:{
        backgroundColor: LIGHTPURPLE2,
        // backgroundColor: "black",

        height: boxwidth * 0.62,
        width: boxwidth * 0.65,
        borderRadius: boxwidth * 0.9 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        alignSelf: 'flex-end',
        bottom: height * 0.01,
        left: boxwidth * 0.23,
        // borderTopRightRadius:width*0.02
       
    },
    headerbox:{
        flexDirection: 'row',
        // alignItems: 'center',
        overflow: 'hidden',

        
    },
    headertextbox: {
         // Set a fixed or relative width for the text container
        flexShrink: 0, // Prevents shrinking of the text box
        // backgroundColor:'red',
        // textAlignVertical:'top'
        marginLeft:boxwidth*0.09,
        marginTop:"12%"

        
      },
    subject:{
        fontFamily: IsidoraRegular,
        fontSize: width * 0.028,
        color: GRAY,
        // backgroundColor:"red"
    },
    quizno:{
        color: BLACK,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.041
    },
    listicon:{
        resizeMode:'contain',
        // backgroundColor:'red',
        height:height*0.015,
        width:width*0.03,
        marginLeft:boxwidth*0.08
    },
    totalques:{
        color:GRAY,
        fontFamily:IsidoraSemiBold,
        fontSize:boxwidth*0.08,
        marginLeft:boxwidth*0.04
        
    },
    ques:{
      color:DARKGRAY,
      fontFamily:IsidoraMedium,
      fontSize:boxwidth*0.085,

    },
    questionbox:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:height*0.010,
        // backgroundColor:"red",
        
    },
    mintext:{
        fontFamily:IsidoraMedium,
        color:DARKGRAY,
        fontSize:boxwidth*0.085,
        marginLeft:boxwidth*0.05
    },
    clock:{
        marginLeft:boxwidth*0.09
    },
    distext:{
        fontFamily:IsidoraMedium,
        color:GRAY,
        fontSize:boxwidth*0.099,
        width:boxwidth*1.3,
        marginLeft:boxwidth*0.09,
        marginTop:height*0.02,
       lineHeight:height*0.018,
       marginBottom:height*0.005,

    },
    buttontext:{
        color:WHITE,
        marginHorizontal:boxwidth*0.08,
        fontSize:boxwidth*0.1,
        fontFamily:IsidoraSemiBold

    }
    ,
    button:{
        backgroundColor:orange,
        alignSelf:"flex-start",
        // alignItems:'center',
        // justifyContent:'center',
        paddingVertical:height*0.01,
        borderRadius:height*0.005,
        marginLeft:boxwidth*0.09,
        paddingHorizontal:width*0.05,
        marginBottom:"6%"

    }
    
   
});
