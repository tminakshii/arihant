import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign"
import { BLACK, DARKGRAY, GRAY, LIGHTORANGE, orange, WHITE } from '../values/Colors';
import moment from 'moment';
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';

const { width,height } = Dimensions.get('window');

// The main component
const RivisionClass = ({item}) => {

  const formattedDate = moment(item?.date).format('DD MMM YYYY'); // Format date
  const todayDate = moment().format('DD MMM YYYY'); // Get today's date

  // Check if the item's date matches today's date
  if (formattedDate === todayDate) {
    return null; // If today's date, do not render the component
  }

  return (
    <View style={[styles.mainContainer,{borderWidth:item?.open ?1:0,borderColor:item?.open && orange}]}>
      <View style={styles.leftContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{formattedDate.split(' ')[0]}</Text>
          <View style={styles.date}>
            <Text style={styles.month}>{formattedDate.split(' ')[1]}</Text>
            <Text style={styles.month}>{formattedDate.split(' ')[2]}</Text>
          </View>
        </View>
        <View style={styles.detailMainContainer}>
          <Text style={styles.classText}>{item?.classTitle}</Text>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{item?.instructor}</Text>
            <TouchableOpacity style={styles.startedview}>
              <Antdesign name='clockcircleo' size={width*0.025}  color={BLACK}/>
              <Text style={styles.timeText}>Started at {item?.startTime}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


{
    item?.open ?
    <TouchableOpacity style={styles.iconContainer}>
    <Ionicons name="play-circle" size={width*0.1} color={orange} />
  </TouchableOpacity>
  :
  <TouchableOpacity style={styles.iconContainer2}>
  <Antdesign name="lock" size={width*0.06} color={WHITE} />
</TouchableOpacity>

}
    
    
    </View>
  );
};

export default RivisionClass;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
    padding: '2%',
    borderRadius: width*0.017,
    marginHorizontal:width*0.035,
    alignSelf: 'center',
    marginVertical: height*0.012,
    elevation: 3,
  },
  startedview: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Take up remaining space on the left side
  },
  dateContainer: {
    backgroundColor: LIGHTORANGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: "5%",
    borderTopLeftRadius: width*0.01,
    borderBottomLeftRadius: width*0.01,
    marginRight: 10, // Space between date and details
  },
  dateText: {
    fontSize: width / 15,
    marginRight: 10,
    fontFamily: IsidoraBold,
    color:DARKGRAY
  },
  date: {
    alignItems: 'flex-start',
    fontFamily: IsidoraSemiBold,
  },
  month: {
    fontFamily: IsidoraSemiBold,
    fontSize:width*0.03,
    marginVertical:"5%",
    color:DARKGRAY

  },
  detailMainContainer: {
    justifyContent: 'center',
  },
  classText: {
    fontSize:width*0.036,
    fontWeight: '600',
    fontFamily: IsidoraSemiBold,
    color:BLACK
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  nameText: {
    color: BLACK,
    marginRight: 10,
    fontSize: width *0.027,
    fontFamily: IsidoraSemiBold,
  },
  timeText: {
    color: DARKGRAY,
    fontSize: width *0.027,

    fontFamily: IsidoraMedium,
    marginLeft: 5,
  },
  iconContainer: {
    position:"absolute",
    right:width*0.015
  },
  iconContainer2: {
    width:width*0.08,
    height:width*0.08,
    borderRadius:width*0.08/2,
    position:"absolute",
    right:width*0.03,
   
    backgroundColor:orange,
    borderRadius:width*0.08,
    // borderWidth:0.5,

    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:"red"
    // padding:"1.5%"
    
  },
});
