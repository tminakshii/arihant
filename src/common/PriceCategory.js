import {
  Dimensions,
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
  inputBordercolor,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTGREYTEXT,
  LIGHTORANGE,
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
import Button from './Button';
import DeviceInfo from 'react-native-device-info';
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()

const PriceCategory = ({
  Paperpricecategory,
  selectedPaperbox,
  handleselectedpaper,
  onPress,
}) => {
  const selectedpaper = Paperpricecategory.find(
    item => item.id == selectedPaperbox,
  );
  const discount = selectedpaper.MRP * 0.3;
  const discountedPrice = selectedpaper.MRP - discount;
  if (!isTablet) {
    return (
      <View style={styles.card}>
        {Paperpricecategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.papertypebox,
                selectedPaperbox == item.id && styles.selectedpaper,
              ]}
              onPress={() => handleselectedpaper(item.id)}>
              {item?.id == 2 ? (
                <Text style={styles.paperback1}>{item.papername}</Text>
              ) : (
                <Text style={styles.paperback}>{item.papername}</Text>
              )}
              <Text style={styles.MRP}>MRP: {item.MRP}</Text>
            </TouchableOpacity>
          );
        })}
        <View style={styles.buycontainer}>
          <Text style={styles.Buytext}>Buy new:</Text>
          <Text style={styles.price}>₹ {discountedPrice}</Text>
        </View>
        <Text style={styles.gst}>({discountedPrice} incl. GST)</Text>
        <Text style={styles.totalprice}>M.R.P.: ₹ {selectedpaper.MRP} </Text>
        <Text style={styles.save}>Save: ₹ {discount} (30%)</Text>
        <View style={styles.buttonbox}>
          <Button
            customStyles={styles.addcart}
            text={'ADD TO CART'}
            textStyle={styles.carttext}
          />
          <Button
            onPress={onPress}
            customStyles={styles.buy}
            text={'BUY NOW'}
            textStyle={styles.buytext}
          />
        </View>
      </View>
    )
  }
  else {
    return (
      <View style={styles.cardTab}>
        <View style={{ width: width / 2.4 }}>
          {Paperpricecategory.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.papertypeboxTab,
                  selectedPaperbox == item.id && styles.selectedpaper,
                ]}
                onPress={() => handleselectedpaper(item.id)}>
                {item?.id == 2 ? (
                  <Text style={styles.paperback1}>{item.papername}</Text>
                ) : (
                  <Text style={styles.paperback}>{item.papername}</Text>
                )}
                <Text style={styles.MRP}>MRP: {item.MRP}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ width: width / 2.2 }}>
          <View style={styles.buycontainer}>
            <Text style={styles.Buytext}>Buy new:</Text>
            <Text style={styles.price}>₹ {discountedPrice}</Text>
          </View>
          <Text style={styles.gst}>({discountedPrice} incl. GST)</Text>
          <Text style={styles.totalprice}>M.R.P.: ₹ {selectedpaper.MRP} </Text>
          <Text style={styles.save}>Save: ₹ {discount} (30%)</Text>
          <View style={styles.buttonboxTab}>
            <Button
              customStyles={styles.addcart}
              text={'ADD TO CART'}
              textStyle={styles.carttext}
            />
            <Button
              onPress={onPress}
              customStyles={styles.buy}
              text={'BUY NOW'}
              textStyle={styles.buytext}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default PriceCategory;

const styles = StyleSheet.create({
  card: {
    width: width / 1.11,
    marginBottom: '6%',
    marginTop: '2%',
    borderRadius: width / 25,

    paddingHorizontal: '3%',
    alignSelf: 'center',
    shadowRadius: width / 20,
    backgroundColor: 'rgba(247,247,247,1)',
    shadowColor: BLACK,
    elevation: 5,
    paddingTop: height * 0.010,
    //ios
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset for shadow
    shadowOpacity: 0.15, // Opacity of shadow
    shadowRadius: width / 20,
  },
  cardTab: {
    width: width / 1.09,
    marginBottom: '6%',
    marginTop: '2%',
    borderRadius: width * 0.02,
    borderWidth: 1,
    borderColor: GRAY,
    alignSelf: 'center',
    backgroundColor: 'rgba(247,247,247,1)',
    paddingVertical:isTablet?height * 0.01:height * 0.020,
    flexDirection: "row"
  },
  papertypebox: {
    width: width / 1.2,
    // height: 40,
    paddingVertical: '3.8%',

    marginVertical: '2%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3.5%',
    backgroundColor: WHITE,
  },
  papertypeboxTab: {
    width: width / 2.7,
    marginVertical: '3.2%',
    borderRadius: isTablet ? width * 0.01 : 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    backgroundColor: WHITE,
    marginLeft: "5%",
    borderWidth: 1,
    borderColor: GRAY,
    height:isTablet?height * 0.038:height * 0.032
  },
  buycontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:isTablet?'3.5%':'2%',
    paddingHorizontal: '1.5%',
  },
  paperback: {
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
    fontSize: isTablet ? width * 0.019 : width * 0.035,

  },
  paperback1: {
    fontFamily: IsidoraSemiBold,
    color: BLACK,
    fontSize: isTablet ? width * 0.019 : width * 0.035,
  },
  MRP: {
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    fontSize: isTablet ? width * 0.02 : width * 0.035,
  },
  Buytext: {
    fontFamily: IsidoraBold,
    color: BLACK,
    right: '0.5%',
    fontSize: isTablet ? width * 0.023 : width * 0.035,

  },
  price: {
    fontFamily: IsidoraBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet ? width * 0.023 : width * 0.035,
    marginBottom:isTablet?'2.5%':0
  },
  gst: {
    fontFamily: IsidoraSemiBold,
    color: LIGHTGREYTEXT,
    fontSize: isTablet ? width * 0.023 : width * 0.028,

    marginLeft: 'auto',
    marginVertical: isTablet ? '0%' : '1%',
    marginRight: '1.5%',
  },
  totalprice: {
    fontFamily: IsidoraSemiBold,
    color: inputBordercolor,
    fontSize: isTablet ? width * 0.023 : width * 0.028,
    marginLeft: 'auto',
    marginBottom: isTablet ? '1%' : '2%',
    marginRight: '0.8%',
  },
  save: {
    fontFamily: IsidoraSemiBold,
    color: inputBordercolor,
    fontSize: isTablet ? width * 0.023 : width * 0.028,
    marginLeft: 'auto',
    marginRight: '1.5%',
  },
  addcart: {
    backgroundColor: orange,
    borderRadius: width / 7,
    width: isTablet ? width / 4.9 : width / 2.6,
    justifyContent: 'center',
    paddingVertical: isTablet ? null : '5.4%',
    height: isTablet ? height * 0.038 : null,
    borderWidth: 1,
    borderColor: orange,
  },
  buy: {
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: width / 7,

    width: isTablet ? width / 4.9 : width / 2.6,

    justifyContent: 'center',
    paddingVertical: isTablet ? null : '5.4%',
    height: isTablet ? height * 0.038 : null,

    backgroundColor: WHITE,
  },
  buttonbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    paddingHorizontal: "0.5%",
    // backgroundColor:"red"

    // marginRight: '2.5%',
    // marginLeft: '1%',
  },
  buttonboxTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: "0.5%",
    position: 'absolute',
    width: '100%',
    bottom: '0%'
  },
  carttext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet ? width * 0.018 : width * 0.033,
  },
  buytext: {
    fontFamily: IsidoraSemiBold,
    fontSize: isTablet ? width * 0.018 : width * 0.033,

    color: DARKGRAY,
  },
  selectedpaper: {
    backgroundColor: LIGHTORANGE,
  },
});
