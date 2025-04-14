import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from './Header';
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY3 } from '../values/Colors';
import Banner1 from './Banner1';
import ResultOverview from './ResultOverview';
import TriangleChart from './TriangleChart';
import Studentmarkgraph from './Studentmarkgraph';
import StudentWeaknessOverview from './StudentWeaknessOverview';
import ThankyouCard from './ThankyouCard';
import { bannerdata1, overviewResultData, questiondata, studentmarkdata, StudentResultPerformancedata } from '../values/Utility';
import { ImagePath } from '../values/ImagePath';
import Questionset from './Questionset';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const AfterTestSubmit = () => {
  const [buttonText, setButtonText] = useState('COMPARE WITH TOPPER');
  const [compare,setCompare]=useState(false)
  const [solution,setSolution]=useState(false);
  const scrollRef=useRef(0);
 
  const renderQuestionlist = ({ item, index }) => {
    return <Questionset key={index} item={item} />;
  };



  return (
    <>
    <SafeAreaView style={{flex:1}}>
      <Header />
      <ScrollView ref={scrollRef} style={styles.mainContainer}>
        <Text style={styles.Home}>
          Home /
          <Text style={styles.other}> Jee & Other Engg Entrances </Text>
        </Text>
        <View style={styles.bannerbox1}>
          {bannerdata1.map((item, index) => {
            return <Banner1 key={index} item={item} solution={solution} setSolution={setSolution} setCompare={setCompare} />;
          })}
        </View>
        {compare===false?
      <>
      <ResultOverview item={overviewResultData} />
        <TriangleChart />
        <View style={styles.studentmark}>
          <Studentmarkgraph item={studentmarkdata} />
          <Studentmarkgraph item={studentmarkdata} />
          <Studentmarkgraph item={studentmarkdata} />
        </View>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity onPress={()=>{
            setCompare(true);
            setSolution(true);
            scrollRef.current.scrollTo({ y: 0, animated: true });
            }} style={styles.dropdown} >
            <Text style={styles.placeholderStyle}>{buttonText}</Text>
            <Image source={ImagePath.arrowDown} style={styles.iconText} />
          </TouchableOpacity>
        </View>
        <View style={styles.studentstrengthChartcontainer}>
          <Text style={styles.studentstrength}>
            Your Weakness & Strength
          </Text>
          <Text style={styles.studentstrengthunder}>
            "Identify, enhance, and conquer with your strengths and weaknesses.
          </Text>
          {StudentResultPerformancedata.map((item, index) => {
            return <StudentWeaknessOverview key={index} item={item} />;
          })}
        </View>
      </>:
      <View style={styles.questionlistbox}>
              <FlatList
                contentContainerStyle={styles.questionbox1}
                data={questiondata}
                renderItem={renderQuestionlist}
              />
            </View> 
             }
        
        {/* <View style={styles.thankyoucard}>
          <ThankyouCard />
        </View> */}
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AfterTestSubmit;

const styles = StyleSheet.create({
  Home: {
    marginLeft: '5%',
    marginVertical: '7%',
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.03,
  },
  other: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: width * 0.0305,
  },
  mainContainer: {
    flexGrow: 1,
    // paddingBottom :height*0.7
  },
  bannerbox1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  studentmark: {
    marginBottom: '4%',
    paddingVertical: '7%',
    paddingBottom: '12%',
    backgroundColor: LIGHTGRAY3,
  },
  studentstrength: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize:width * 0.06,
    marginLeft: width * 0.05,
  },
  studentstrengthunder: {
    fontFamily: IsidoraMedium,
    color: GRAY,
    fontSize: width * 0.029,
    marginLeft: width * 0.05,
    marginRight:width * 0.03,
    lineHeight:width * 0.035,
    marginTop: height * 0.005,
    marginBottom: height * 0.023,
  },
  questionlistbox:{
    alignSelf:'center'
  },
  studentstrengthChartcontainer: {
    marginVertical: height * 0.02,
  },
  thankyoucard: {
    marginTop: '5%',
  },
  dropDownContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dropdown: {
    height: height * 0.06,

    alignItems:'center',
    borderRadius: width * 0.01,
    width:width/1.11,
    alignSelf:'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: BLACK,
    marginVertical:'7%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: width * 0.036,
    fontFamily: IsidoraSemiBold,
    color: '#353C41',
    marginLeft: "3%"
  },
  selectedTextStyle: {
    fontSize: width * 0.036,
    fontFamily: IsidoraSemiBold,
    color: '#353C41',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: width * 0.122,
    height: width * 0.03,
    resizeMode: 'contain'
  },
});
