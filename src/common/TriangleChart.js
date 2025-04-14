import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../values/ImagePath'
import Button from './Button';
import { BLACK, GRAY, orange, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
import TriangleChart1 from './TriangleChart1';
const {width, height} = Dimensions.get('window');


const TriangleChart = () => {
  return (
    <View>
      <Text style={styles.headingtext} >Statistics</Text>
      <Text style={styles.description}>
      Statistics Comparision of your performance with other learners and the topper in the mock test for competitive exams on Arihant Plus.
      </Text>
      <TriangleChart1/>

      <Text style={[styles.description,{marginTop:'5%'}]}>Hi, Anish
      </Text>
      <Text style={styles.description2}>Congratulations on your progress! </Text>
      <Text style={styles.description}>You ranked 6534 out of 9280 learners 
in this competitive mock test. You have 
outperformed 25% of the learners who appeared. 
Keep pushing forward to improve 
your ranking and <Text style={styles.description2}>crack it</Text></Text>

<Button text={"View Rank"} customStyles={styles.buttonstyles}
textStyle={styles.textbtn}/>
    </View>
  )
}

export default TriangleChart

const styles = StyleSheet.create({
    trianglechart:{
        resizeMode:"contain",
        width:width/1.1,
        alignSelf:"center",
backgroundColor:WHITE,
height:height/3.5,
marginVertical:"5%"
    },
    textbtn:{
        color:WHITE,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.036,
    },
    buttonstyles:{
backgroundColor:orange,
justifyContent:"center",
alignItems:"center",
// width:width/5,
width:width*0.33,
borderRadius:20,
marginTop:'5%',
marginBottom:'15%',
paddingVertical:7,
paddingHorizontal:0,
marginLeft:"5%"
    },
    headingtext:{
        fontFamily:IsidoraSemiBold,
        color:BLACK,
        marginHorizontal:"5%",
        marginTop:'10%',
        fontSize:width * 0.0528
    },
    description:{
        fontFamily:IsidoraMedium,
        color:GRAY,
        marginLeft:"5%",
        marginRight:'3%',
        marginVertical:2,
        lineHeight:height*0.02,
        fontSize:width*0.035,
    },
    description2:{
        fontFamily:IsidoraSemiBold,
        color:GRAY,
        marginHorizontal:"5%",
        marginVertical:"5%",
        fontSize:width*0.036,
    }
})