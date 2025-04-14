import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTGRAY2, LIGHTGREYTEXT, LIGHTPURPLE, orange } from '../values/Colors'
import { IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DeviceInfo from 'react-native-device-info'
let isTablet = DeviceInfo.isTablet();

const { width, height } = Dimensions.get('window')
const data = [
    { label: 'Qty: 1', value: '1' },
    { label: 'Qty: 2 ', value: '2' },
    { label: 'Qty: 3', value: '3' },
    { label: 'Qty: 4', value: '4' },
    { label: 'Qty: 5', value: '5' },
    { label: 'Qty: 6', value: '6' },
    { label: 'Qty: 7', value: '7' },
    { label: 'Qty: 8', value: '8' },
    { label: 'Qty: 9', value: '9' },
    { label: 'Qty: 10', value: '10' },
];
const Arriving = ({ item }) => {
    const [value, setValue] = useState('1');
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            {item?.map((itemdata, index) => {
                return (
                    <View style={styles.maincontainer} key={index}>
                        <Text style={styles.arriving}>Arriving {itemdata?.date}</Text>
                        <View style={styles.innercontainer}>
                            <Image source={itemdata?.image} style={styles.image} />
                            <View style={styles.writtencontaint}>
                                <Text style={styles.ordername} numberOfLines={2}>{itemdata.orderName}</Text>
                                <View style={isTablet?{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:width*0.6}:{}}>
                                    <View>
                                <Text style={styles.writer}>by {itemdata.writtenBy}</Text>

                                {itemdata?.Instock ? (
                                    <Text style={styles.stock}>In Stock</Text>
                                ) : (
                                    <Text style={styles.stock}>Not In Stock</Text>
                                )}
                                </View>
 {
                        isTablet &&
                        <View style={styles.downbox}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={ ` Qty: ${value}` }
                            searchPlaceholder="Qty"
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                // console.log(item.value,'selected')
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderItem={(item) => (
                                <Text style={styles.searchvalues}>{item.value}</Text>
                            )}
                            
                        />
                     
                    </View>
                       }

</View>
                                <Text style={styles.gst}>(GST invoice)</Text>
                                <View style={isTablet?{ 

flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:width*0.64
                                }:{}}>

                                <Text style={styles.sold}>Sold by: Arihant Publications Limited</Text>
                            {
                                isTablet &&
                                <View style={styles.pricebox}>
                                <Text style={styles.price}>Rs. {itemdata?.Price}</Text>
                                <Text style={styles?.discount}>Rs. {itemdata?.discountedPrice}</Text>
                            </View>
                            }
                                </View>
                            </View>
                        </View>
                       {
                        !isTablet &&
                        <View style={styles.downbox}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={ ` Qty: ${value}` }
                            searchPlaceholder="Qty"
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                // console.log(item.value,'selected')
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderItem={(item) => (
                                <Text style={styles.searchvalues}>{item.value}</Text>
                            )}
                            
                        />
                        <View style={styles.pricebox}>
                            <Text style={styles.price}>Rs. {itemdata?.Price}</Text>
                            <Text style={styles?.discount}>Rs. {itemdata?.discountedPrice}</Text>
                        </View>
                    </View>
                       }
                    </View>
                )
            })}
        </View>
    )
}

export default Arriving

const styles = StyleSheet.create({
    maincontainer: {
        width: width * 0.90,
        borderWidth: 1,
        borderColor: '#6F757C80',
        alignSelf: 'center',
        borderRadius: width * 0.02,
        paddingLeft: isTablet?width * 0.03:width * 0.05,
        paddingVertical: height * 0.018,
    },
    arriving: {
        color: orange,
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.028:width * 0.041,
        marginBottom:isTablet?'4%':"2%",
        marginLeft:isTablet?'0.5%':null
    },
    innercontainer: {
        flexDirection: 'row',
        // alignItems:'center',
        
      
    },
    image: {
        height: isTablet?height * 0.185:height * 0.18,
        width: isTablet?width * 0.2:width * 0.25,
        resizeMode: 'contain',
        // backgroundColor:"red"
    },
    writtencontaint: {
        width: width * 0.5,
        height:isTablet?height * 0.185:null,
        marginLeft: width * 0.03,
        marginBottom:height*0.012,
        marginTop:isTablet?0:height*0.005
    },
    ordername: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.025:width * 0.035,
        color: LIGHTGREYTEXT,
        lineHeight: height * 0.025
    },
    writer: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.02:width * 0.03,
        color: inputBordercolor,
        marginTop: height * 0.004
    },
    stock: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.023:width * 0.031,
        color: inputBordercolor,
    },
    gst: {
        fontFamily: IsidoraSemiBold,
        fontSize:isTablet? width * 0.02: width * 0.03,
        color: LIGHTGREYTEXT,
        marginTop: isTablet?height * 0.04:height * 0.01
    },
    sold: {
        fontFamily: IsidoraSemiBold,
        fontSize: isTablet?width * 0.018:width * 0.028,
        color: inputBordercolor,
    },
    downbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop:"2%"
        
        
    },
    pricebox: {
        flexDirection: 'row',
        alignContent: 'center',
        marginRight:width*0.05
    },
    price: {
        textDecorationLine: 'line-through',
        fontFamily: IsidoraMedium,
        fontSize: isTablet?width * 0.021:width * 0.041,
        color: LIGHTGREYTEXT,
        marginRight:width*0.04,
        marginTop:'1%'
    },
    discount: {
        color: '#FF5300',
        fontFamily: IsidoraBold,
        fontSize: isTablet?width * 0.024:width * 0.044,
    },
    dropdown: {
        height: isTablet?height * 0.03:height * 0.045,
        // marginRight:5,
        // marginTop: '2%',
        width: isTablet?width * 0.14:width * 0.25,
        backgroundColor:"rgba(230, 222, 226, 1)" ,
        alignItems:'center',
        borderRadius:width*0.01
        // justifyContent:'space-evenly'
    },
   
    placeholderStyle: {
        fontSize:isTablet? width * 0.02: width * 0.03,
        // lineHeight:height*0.05
        // color:'red'
        
    },
    selectedTextStyle: {
        fontFamily:IsidoraMedium,
        fontSize: isTablet?width * 0.02:width * 0.035,
        color:BLACK,
        marginLeft:width*0.04
      
    },
    iconStyle: {
        width: isTablet?width*0.027:width*0.07,
        height: isTablet?height*0.015:height*0.03,
        marginRight:width*0.02,
    },
    inputSearchStyle: {
        fontSize: width * 0.035,
        
    },
    searchvalues:{
        fontFamily:IsidoraSemiBold,
        fontSize:isTablet?width*0.02:width*0.05,
        // alignSelf:'center',
        marginVertical:'4%',
        paddingVertical:'3%',
        borderBottomWidth:0.2,
        borderBottomColor:GRAY,
        textAlign:'center',
        color:BLACK,
        fontFamily:IsidoraMedium,
        // lineHeight:height*0.04
        // fontSize:width*0.04
    }
})
