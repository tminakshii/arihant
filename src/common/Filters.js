import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTGRAY2,
  orange,
  WHITE,
} from '../values/Colors';
import {ImagePath} from '../values/ImagePath';
import {IsidoraMedium, IsidoraRegular, IsidoraSemiBold} from '../values/Fonts';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
const isTablet=DeviceInfo.isTablet()
const Filters = ({filterData, filterSelected, setFilterSelected, onPress}) => {
  return (
    <View style={styles.filterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        style={styles.filterList}>
        {filterData?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setFilterSelected(index)}
              style={styles.filter}>
              <Text
                style={[
                  styles.filterText,
                  {
                    color: filterSelected === index ? orange : DARKGRAY,
                    fontFamily:
                      filterSelected === index
                        ? IsidoraSemiBold
                        : IsidoraMedium,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.filterButton}
        onPress={onPress}>
        <MaterialCommunity
          name="tune-variant"
          color={DARKGRAY}
          size={isTablet?width * 0.03:width * 0.05}
        />
        <Text style={styles.filterButtonText}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: LIGHTGRAY2,
    borderWidth: 1,
    width: width * 0.93,
    height:isTablet?height * 0.04:height * 0.050,
    alignSelf: 'center',
    borderRadius: isTablet?width*0.009:width*0.02,
    overflow:"hidden",
    // marginTop:'2%',
    marginTop: '5%',
    marginHorizontal: '5%',
    marginBottom:isFinite?"3%":"7%"
    //  backgroundColor:'red'
    // height:height*0.05
  },
  filter: {
    marginHorizontal: width * 0.016,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: isTablet?width / 5:width / 3.5,
    height:isTablet?height * 0.04:height * 0.050,


    justifyContent: 'space-around',
    backgroundColor: LIGHTGRAY2,
    borderColor: LIGHTGRAY2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // borderRightWidth: 1,
// borderColor:"red",
    borderTopRightRadius: isTablet?width * 0.001:width * 0.01,
    borderBottomRightRadius: isTablet?width * 0.001:width * 0.01,
    // padding:'2.5%'
    // paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
  },
  filterText: {
    fontSize: isTablet?width * 0.02:width * 0.033,
    color: BLACK,
  },
  filterButtonText: {
    color: DARKGRAY,
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.028:width * 0.036,

  },
});
