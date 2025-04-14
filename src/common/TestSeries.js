import { Dimensions, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import React from 'react';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY2, LIGHTORANGE, RED, WHITE,orange } from '../values/Colors';
import { IsidoraBold, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { GHContext } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';
import { ImagePath } from '../values/ImagePath';

const { width } = Dimensions.get('window');

const TestSeries = ({ item, activeTestSeries, handleActiveTestSeries }) => {
  const navigation=useNavigation()
  const handlePress = (id) => {
    handleActiveTestSeries(id);
    navigation.navigate('ExamPage',{test:item})
     // Notify parent about the active test series
  };

  return (
    <TouchableOpacity activeOpacity={0.5}
      style={[styles.main, activeTestSeries === item.id ? styles.activeTab : null]} 
      onPress={() => handlePress(item.id)} 
    >
      {/* <FontAwesome name="clipboard-list" size={30} color={orange} /> */}
      <Image source={ImagePath.listicon2} style={styles.listicon2}/>

      <View style={styles.detailsContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{item?.heading}</Text>
          <View style={styles.idView}>
            <Text style={styles.id}>Full Test {item.id}</Text>
          </View>
        </View>
        <View style={styles.contentdetailsContainer}>
          <View style={styles.contentdetails}>
            <Image source={ImagePath.listicon} style={styles.listicon}/>
            <Text style={styles.contenttext}>
              {item.totalquetion} <Text style={styles.contenttext} >Questions</Text>
            </Text>
          </View>
          <View style={styles.contentdetails}>
            <Antdesign name="checkcircleo" size={width*0.025} color={BLACK} />
            <Text style={styles.contenttext}>
              {item.totalmarks} marks
            </Text>
          </View>
          <View style={styles.contentdetails}>
            <Antdesign name="clockcircleo" size={width*0.025} color={BLACK} />
            <Text style={styles.contenttext}>{item.duretion} mins</Text>
          </View>
        </View>
      </View>
      {item.open ? (
        <Text style={styles.attemptNow}>Attempt Now</Text>
      ) : (
        <View style={styles.lock}>
          <MaterialIcons name="lock-outline" size={width*0.05} color={orange} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TestSeries;

const styles = StyleSheet.create({
  main: {
    borderWidth: 0, 
    borderRadius: width*0.015,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    marginVertical: '2%',
    width: '98%',
    alignSelf:'center',
    backgroundColor: WHITE,
    shadowColor: BLACK,
    elevation: 3,
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Offset for shadow
    shadowOpacity: 0.15, // Opacity of shadow
    // shadowRadius: width / 20, 
  },
  activeTab: {
    borderWidth: 1,
    borderColor: orange, 
  },
  detailsContainer: {
    flex: 1,
    marginLeft: '3%',
  },
  heading: {
    color: BLACK,
    fontFamily: IsidoraSemiBold,
    fontSize: width / 28,
    // fontSize:13,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:"3%"
  },
  id: {
    fontFamily: IsidoraSemiBold,
    color: RED,
    fontSize: width / 36,
  },
  idView: {
    backgroundColor: LIGHTGRAY2,
    borderRadius: width*0.01,
    marginLeft: '6%',
    paddingVertical: '1%',
    paddingHorizontal: '2.4%',
  },
  contentdetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:"3%",
    width:width*0.57
  },
  contentdetails: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  contenttext: {
    fontFamily:IsidoraMedium,
    marginLeft: '8%',
    fontSize: width / 40 ,
    // fontSize:9,
    color:DARKGRAY,
  },
  attemptNow: {
    color: orange,
    fontSize: width / 28,
    // fontSize:13,
    width:"20%",
    textAlign:'right',
    fontFamily:IsidoraSemiBold,
    textDecorationLine:'underline'

  },
  lock: {
    padding: "2%",
    backgroundColor: LIGHTORANGE,
    borderRadius: width*0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  listicon2:{
    resizeMode:'contain',
    height:width*0.07,width:width*0.07,
    // backgroundColor:'red',
    
  },
  listicon:{
    resizeMode:"contain",
    height:width*0.03,
    
    width:width*0.025,
  }
});
