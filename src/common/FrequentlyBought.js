import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTBLUE,
  LIGHTGRAY2,
  LIGHTGREYTEXT,
  Lightpink,
  orange,
  WHITE,
} from '../values/Colors';
import {
  IsidoraBold,
  IsidoraMedium,
  IsidoraRegular,
  IsidoraSemiBold,
} from '../values/Fonts';
const { height, width } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImagePath } from '../values/ImagePath';
import Button from './Button';
import { RFValue } from '../values/Ratio';
import DeviceInfo from 'react-native-device-info';
const isTablet=DeviceInfo.isTablet()

const FrequentlyBought = ({
  FreqCategory,
  selectedfreqid,
  handlefreqidtoggle,
  customeStyle,
  onlinetestseries = false,
}) => {

  const selectedItem = FreqCategory.filter(item =>
    selectedfreqid.includes(item.id),
  );
  const totalAmount = selectedItem.reduce((sum, item) => sum + item.price, 0);
  // Calculate discount based on the number of selected items
  const itemCount = selectedfreqid.length;
  const discountPercentage = 10;
  const discount = (totalAmount * discountPercentage) / 100;
  const finalAmount = totalAmount - discount;
  const formatAmount = amount => amount.toFixed(2);
  return (
    <View style={isTablet?styles.cardTab:styles.card}>
      <View style={isTablet?{width:width*0.45,borderRightWidth:1,borderColor:LIGHTGRAY2,marginTop:"3%"}:{}}>
      {FreqCategory.map((item, index) => {
        return (
          <View style={customeStyle ? styles.incard2 :index==2 ? styles.incardTab:styles.incard}>
            <View style={isTablet?styles.imageviewTab:styles.imageview}>

              <Image source={item?.image} style={isTablet?styles.imageTab:styles.image} />
            </View>
            <View style={styles.aboutbook}>
              <Text style={styles.contains} numberOfLines={2}>{item?.contains}</Text>
              {!customeStyle ?
                <>
                  <Text style={[Platform.OS=="android"? styles.newedition:styles.neweditionios, selectedfreqid.includes(item.id) && styles.selectednewedition, {  paddingVertical: '1%', }]}>New Edition</Text>
                  <View style={styles.checkpricecontainer}>
                    <Text style={styles.price}>Rs.{item.price}</Text>
                    <TouchableOpacity activeOpacity={0.5}
                      onPress={() => handlefreqidtoggle(item.id)}
                      style={[
                        styles.checkbox2,
                        {
                          backgroundColor: selectedfreqid.includes(item.id)
                            ? '#FCDE93'
                            : null,
                        },
                      ]}>
                      {selectedfreqid.includes(item.id) && (
                        <AntDesign name="check" size={isTablet?width * 0.02:width * 0.035} color={'#353C41'} />
                      )}
                    </TouchableOpacity>
                  </View>
                </> : <View style={styles.secondbox}>
                  <Text style={styles.price}>Rs.{item.price}</Text>
                  <Text style={[Platform.OS=="android"? styles.newedition:styles.neweditionios, selectedfreqid.includes(item.id) && styles.selectednewedition, { marginLeft: width * 0.07, paddingVertical: '2.5%', }]}>New Edition</Text>
                  <TouchableOpacity activeOpacity={0.5}
                    onPress={() => handlefreqidtoggle(item.id)}
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: selectedfreqid.includes(item.id)
                          ? Lightpink
                          : null,
                      },
                    ]}>
                    {selectedfreqid.includes(item.id) && (
                      <AntDesign name="check" size={width * 0.044} color={GRAY} />
                    )}
                  </TouchableOpacity>
                </View>}
            </View>
          </View>
        );
      })}
      </View>
   <View style={isTablet?{width:width*0.35,justifyContent:"center",marginLeft:"4%"}:{}}>
   {selectedfreqid.length > 0 && (
        <View style={styles.pricecontainer}>
          {!customeStyle ? <>
            <Text style={styles.selectedbook}>
              Total {selectedfreqid.length} Book Selected
            </Text>
          </> : <View style={styles.combobox}>
            <Text style={styles.combotext}>Combo Price</Text>
          </View>}
          <View style={styles.totalamount}>
            <Text style={styles.totlamounttext}>
              Total Amount ({selectedfreqid.length} item)
            </Text>
            <Text style={styles.totlamountno}>{totalAmount}</Text>
          </View>
          <View style={styles.discountbox}>
            <Text style={styles.discountedamount}>
              Special Discount ({discountPercentage}%)
            </Text>
            <Text style={styles.discountno}>{formatAmount(discount)}</Text>
          </View>
          <View style={styles.totalcontainer}>
            <Text style={styles.totaltext}>Total:</Text>
            <Text style={styles.finalamount}>{formatAmount(finalAmount)}</Text>
          </View>
          <Button
            text={'Confirm Order'}
            customStyles={styles.confirmo}
            textStyle={styles.confirmtext}
          />
          <Button
            text={'Continue Shopping'}
            customStyles={styles.continue}
            textStyle={styles.continuetext}
          />
        </View>
      )}
   </View>
   
    </View>
  );
};

export default FrequentlyBought;

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,

    marginBottom: '2%',
    borderRadius: width * 0.03,
    shadowColor: GRAY,
    elevation: 10,
    backgroundColor: WHITE,
    borderColor: DARKGRAY,
    borderWidth: 0.8,
    alignSelf: 'center',
    marginTop: '6%',
    paddingHorizontal: isTablet?'3%':'6%',
    paddingBottom: '4.5%',
  },
  cardTab: {
    width: width / 1.09,
    flexDirection:"row",
    marginBottom: '2%',
    borderRadius: isTablet?width*0.015:width*0.03,
    shadowColor: GRAY,
    elevation: 10,
    backgroundColor: WHITE,
    borderColor: DARKGRAY,
    borderWidth: 0.8,
    alignSelf: 'center',
    marginTop: '6%',
    paddingHorizontal:'3%',
    paddingBottom: '1.3%',
  },
  incardTab: {
    flexDirection: 'row',
    alignItems:'flex-start',
    marginTop:isTablet? '5%': '7%',
    borderBottomWidth: isTablet?0:1,
    paddingBottom: isTablet?'4%':'7%',
    borderBottomColor: LIGHTGRAY2,
  },
  incard: {
    flexDirection: 'row',
    alignItems:'flex-start',
    marginTop:isTablet?'5%':'7%',
    borderBottomWidth: 1,
    paddingBottom: isTablet?'4%':'7%',
    borderBottomColor: LIGHTGRAY2,
  },
  incard2: {
    flexDirection: 'row',
    marginTop: '7%',
    borderBottomWidth: 1,
    paddingBottom: '6%',
    paddingTop: '3%',

    borderBottomColor: LIGHTGRAY2,
  },
  imageview: {
    height: undefined,
    aspectRatio: 6.3 / 8.2,

    width: width * 0.18,
    backgroundColor:"green",

    overflow: "hidden",
    elevation: 10,
    // shadowOffset: { width: 10, height: 0 },
    // shadowColor: BLACK
  },
  imageviewTab: {
    height: height*0.085,
    width: width * 0.1,
    // backgroundColor:"green",

    overflow: "hidden",
    elevation: 10,
    // shadowOffset: { width: 10, height: 0 },
    // shadowColor: BLACK
  },
  image: {
    height: undefined,
    aspectRatio: 6.3 / 8.2,
    width: width * 0.18,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: GRAY,
    // borderWidth:1,borderColor:GRAY,
    // elevation:10,
  },
  imageTab: {
    height: height*0.085,
    width: width * 0.1,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderColor: GRAY,
    // backgroundColor:"red"
    // borderWidth:1,borderColor:GRAY,
    // elevation:10,
  },
  aboutbook: {
    // width: width / 1.8,
    height:isTablet?height*0.09:null,
    paddingLeft: '3%',
    overflow: "hidden"

  },
  contains: {
    fontFamily: IsidoraSemiBold,
    fontSize: RFValue(isTablet?5:13),
    color: DARKGRAY,
    lineHeight: RFValue(isTablet?7:14),
    width: isTablet?width / 3:width / 1.8,
    // backgroundColor:"red"
  },
  newedition: {
    backgroundColor: "rgba(255, 237, 201, 1)",
    // background: ;

    width:isTablet? width / 8: width / 4.2,
    textAlign: 'center',
    fontSize: isTablet?width * 0.018:width * 0.032,
    // paddingVertical: '0.5%',
    borderRadius: isTablet?width * 0.005:width * 0.01,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    // overflow: "hidden",

    marginVertical:isTablet?"2%": '4%',
    
  },
  neweditionios: {
    backgroundColor: "rgba(255, 237, 201, 1)",
    // background: ;

    width:isTablet? width / 8: width / 4.2,

    textAlign: 'center',
    fontSize: isTablet?width * 0.018:width * 0.032,
    // paddingVertical: '0.5%',
    borderRadius: isTablet?width * 0.005:width * 0.01,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    overflow: "hidden",

    marginVertical: '3%',
    // textAlignVertical:"center"
  },
  selectednewedition: {
    // elevation:8,
    // borderWidth:1
  },
  checkpricecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    position:isTablet?'absolute':null,
    bottom:isTablet?'2%':null,
    marginLeft:isTablet?'5%':null,
    width:isTablet?'95%': width / 1.74,
    // justifyContent: isTablet?"flex-start":'space-between',
    // backgroundColor:"red"
  },
  price: {
    fontFamily: IsidoraBold,
    fontSize: isTablet?width * 0.02:width * 0.033,
    color: DARKGRAY,
    // marginTop: '2%',
  },
  checkbox: {
    height: height * 0.025,
    width: height * 0.025,
    borderWidth: width * 0.00139,
    alignItems:"center",
    marginLeft: '18%',
    justifyContent: "center",
    borderRadius: width * 0.005,
    borderColor: '#353C41'
  },
  checkbox2: {
    height:isTablet? height * 0.018: height * 0.025,
    width: isTablet?height * 0.018:height * 0.025,
    borderWidth: width * 0.00139,
    alignItems: 'center',
    // marginRight: '1.8%',
    justifyContent: 'center',
    borderRadius: width * 0.005,
    borderColor: '#353C41',
    marginLeft:isTablet?null:null
  },
  totalamount: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  discountbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    paddingBottom: '4%',
    marginTop: "4%",
    // justifyContent:'flex-end',
    // backgroundColor:'yellow'
  },
  selectedbook: {
    color: DARKGRAY,
    fontSize: isTablet?width * 0.028:width * 0.0435,
    marginBottom: '4%',
    marginTop: "5%",
    fontFamily: IsidoraSemiBold,
  },
  combobox: {
    backgroundColor: LIGHTBLUE,
    borderRadius: width * 0.015,
    paddingVertical: '3%',
    paddingHorizontal: width * 0.05,
    marginVertical: '8%'
  },
  combotext: {
    color: DARKGRAY,
    fontSize: width * 0.0435,
    fontFamily: IsidoraSemiBold,
  },
  totlamounttext: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.02:width * 0.033,
  },
  totlamountno: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.023:width * 0.033,

    marginLeft: 'auto',
  },
  discountedamount: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.02:width * 0.033,

    // marginTop:"5%"
  },
  discountno: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.023:width * 0.033,

    marginLeft: 'auto',
    // marginTop:"5%"

  },
  totaltext: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.02:width * 0.038,
  },
  totalcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: "2%"
  },
  finalamount: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet?width * 0.023:width * 0.038,
    marginLeft: 'auto',
    // marginTop: '5%',
  },
  confirmo: {
    backgroundColor: orange,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: orange,
    marginBottom: 0,
    marginTop: height * 0.03,
    paddingVertical: "3%"
  },
  continue: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: BLACK,
    marginTop: '3.6%',
    paddingVertical: "3%"

  },
  continuetext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.02:width * 0.0365,
    // fontSize:13,
    color: BLACK,
  },
  confirmtext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet?width * 0.02:width * 0.0365,


    color: WHITE,
  },
  secondbox: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: height * 0.027,
    width: width * 0.6,
    // borderBottomWidth:1
    // backgroundColor:'red'
  }
});
