import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, LIGHTORANGE, Lightpink, LIGHTPURPLE, LIGHTPURPLE2, orange, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const{width,height}=Dimensions.get('window')
const boxwidth=width*0.5
const Freetest = ({item,onPress=()=>{}}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.maincontainer}>
        <View style={styles.headingbox}>
            <Image source={item.listicon} style={styles.listicon}/>
            <View style={styles.headingtextbox}>
                <Text style={styles.headingtext}>{item.heading}</Text>
                <Text style={styles.fulltext}>Full Test {item.id}</Text>
            </View>

        </View>
        <Text style={styles.discriptiontext}>{item.discription}</Text>
        <View style={styles.questioncontianer}>
        <View style={styles.questionbox}>
            <Text style={styles.totalquestext}>{item.totalquestion}</Text>
            <Text style={styles.questext}>Questions</Text>
        </View>
        <View style={styles.questionbox}>
        <Text style={styles.totalquestext}>{item.totalmarks}</Text>
        <Text style={styles.questext}>Marks</Text>
        </View>
        <View style={styles.questionbox}>
        <Text style={styles.totalquestext}>{item.duretion}</Text>
        <Text style={styles.questext}>Mins</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.attemptnowbox}>
            <Text style={styles.attempt}>Attempt Now</Text>
            <View style={styles.arrow}>
            <MaterialCommunityIcons name='arrow-top-right' size={width*0.04} color={WHITE}/>
            </View>
        </TouchableOpacity>
      
    </TouchableOpacity>
  )
}

export default Freetest

const styles = StyleSheet.create({
    maincontainer:{
        width:width*0.58,
        backgroundColor:WHITE,
        paddingHorizontal:boxwidth*0.08,
        paddingVertical:height*0.02,
        marginLeft:boxwidth*0.08,
        borderRadius:width*0.025,
        elevation:5,
        marginVertical:height*0.015,
        shadowColor: GRAY, // Shadow color
        shadowOffset: { width: 0, height: 5 }, // Offset for shadow
        shadowOpacity: 0.15, // Opacity of shadow
        // shadowRadius: width / 20, 

    },
    headingbox:{
        flexDirection:'row',
        
        alignItems:'center'
    },
    listicon:{
        resizeMode:'contain',
        height:height*0.039,
        width:boxwidth*0.13,
        // backgroundColor:'red'
    },
    headingtextbox:{
        marginLeft:boxwidth*0.06,
        // justifyContent:'space-evenly'
    },
    headingtext:{
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.04,
        color:BLACK,
        flexWrap:'wrap'
    },
    fulltext:{
        fontFamily:IsidoraMedium,
        fontSize:width*0.036,
        color:DARKGRAY
    },
    discriptiontext:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        fontSize:width*0.027,
        lineHeight:height*0.018,
        marginVertical:height*0.02
    },
    questioncontianer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    questionbox:{
        backgroundColor:LIGHTPURPLE2,
        padding:boxwidth*0.04,
        paddingHorizontal:boxwidth*0.05,
        borderRadius:width*0.01
    },
    totalquestext:{
        fontFamily:IsidoraSemiBold,
        fontSize:boxwidth*0.07,
        color:DARKGRAY
    },
    questext:{
        fontFamily:IsidoraMedium,
        fontSize:boxwidth*0.06,
        color:GRAY
    },
    attempt:{
        color:orange,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.035,
        lineHeight:15
    },
    attemptnowbox:{
        marginTop:height*0.035,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    arrow:{
        backgroundColor:orange,
        height:width*0.055,
        width:width*0.055,
        borderRadius:width*0.055/2,
     
        overflow:"hidden",
        alignItems:"center",
        justifyContent:"center"
    }
})