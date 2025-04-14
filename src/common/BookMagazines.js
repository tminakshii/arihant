import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTGRAY2, LIGHTPURPLE, orange, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
const { width, height } = Dimensions.get('window')
const BookMagazines = ({ bookmagazines, arriving, delivering }) => {
    console.log(bookmagazines,'book')
    return (
        <View style={styles.mainbox}>
            <View style={styles.upperbox}>
                <View>
                    <Text style={styles.headertext}>Order Placed: {bookmagazines?.orderDate}</Text>
                    <Text style={styles.headertext}>Quantity: {bookmagazines?.quantity}</Text>
                    <Text style={styles.headertext}>Total: Rs.{bookmagazines?.total}</Text>
                </View>
                <View style={styles.invoiceboxes}>
                    <TouchableOpacity style={{ marginBottom: '5%' }}>
                        <Text style={styles.viewinvoice}>
                            View Invoice
                        </Text>
                        <View style={styles.underlineinheader} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.viewinvoice}>
                            View Product Details
                        </Text>
                        <View style={styles.underlineinheader} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.underlineinheader2} />
            <View>
              {
                arriving&&
                <Text style={styles.arriving}>
                Arriving {bookmagazines?.arrivalDate}
            </Text>
              }
              {
                delivering&&
                <Text style={styles.arriving}>
                Delivered {bookmagazines?.deliverDate}
            </Text>
              }
                <View style={styles.bookcontainer}>
                    <Image source={bookmagazines?.imageUrl} style={styles.book} />
                    <View style={{ height: height * 0.11 }}>
                        <Text style={styles.booktitle}>{bookmagazines?.productTitle}</Text>
                        <Text style={styles.booktitle}>{bookmagazines?.productSubtitle}</Text>
                        <Text style={styles.price}>Rs. {bookmagazines?.price}</Text>
                    </View>
                </View>
                {
                    arriving ?
                        (<View style={styles.buttonbox}>
                            <Button
                                text={'Track Package'}
                                customStyles={styles.trackbtn}
                                textStyle={styles.tracktext} />
                            <Button
                                text={'Cancel item'}
                                customStyles={styles.cancelbtn}
                                textStyle={styles.canceltext} />
                        </View>) :
                        (
                            <View style={styles.buttonbox}>
                                <Button
                                    text={'Buy it again'}
                                    customStyles={styles.trackbtn}
                                    textStyle={styles.tracktext} />
                                <Button
                                    text={'Track Package'}
                                    customStyles={styles.cancelbtn}
                                    textStyle={styles.canceltext} />

                            </View>
                        )
                }
                {
                    delivering &&
                    (
                        <View>
                            <Button
                            text={'Write a product review'}
                            customStyles={styles.reviewbtn}
                            textStyle={styles.reviewtext}/>
                            <Button
                            text={'Return or Replace item'}
                            customStyles={styles.reviewbtn}
                            textStyle={styles.reviewtext}/>
                            </View>
                    )
                }




            </View>
        </View>
    )
}

export default BookMagazines

const styles = StyleSheet.create({
    mainbox: {
        backgroundColor: WHITE,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        borderRadius: 5,
        width: width / 1.085,
        alignSelf: 'center',
        marginVertical: "3.5%",
        paddingVertical: '2%',
        paddingHorizontal: '4%'
    },
    upperbox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '2%'
    },
    underlineinheader: {
        height: 1,
        backgroundColor: GRAY,
        // width:width*0.2

    },
    underlineinheader2: {
        height: 0.8,
        backgroundColor: GRAY,
        // width:width*0.2

    },

    viewinvoice: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        // marginBottom:'2%'
        // alignSelf:'flex-end'
    },
    headertext: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.027,
        marginBottom: '2%'
        // alignSelf:'flex-end'
    },
    arriving: {
        fontFamily: IsidoraBold,
        fontSize: width * 0.031,
        color: DARKGRAY,
        marginVertical: '3%'
    },
    book: {
        width: width * 0.172,
        height: height * 0.11,
        resizeMode: 'contain',

        // backgroundColor:'red'
    },
    bookcontainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between"
    },
    booktitle: {
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        fontSize: width * 0.031,
        width: width * 0.63,
        // backgroundColor:'red'
    },
    price: {
        fontFamily: IsidoraSemiBold,
        color: orange,
        fontSize: width * 0.031,
        bottom: 0,
        position: 'absolute'

    },
    buttonbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "4%"
    },
    trackbtn: {
        backgroundColor: orange,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.038,
        // paddingVertical:'4%',
        width: width * 0.4
    },
    cancelbtn: {
        backgroundColor: WHITE,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: inputBordercolor,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.038,
        // paddingVertical:'4%',
        width: width * 0.4
    },
    tracktext: {
        color: WHITE,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031
    },
    canceltext: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031
    },
    reviewbtn:{
        backgroundColor:LIGHTPURPLE,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:width*0.05,
        borderWidth:0.5,
        borderColor:GRAY,
        padding:0,
        height:height*0.05,
        marginBottom:'3%',
        marginTop:'2%'
    },
    reviewtext:{
        color:DARKGRAY,
        fontFamily:IsidoraSemiBold,
        fontSize:width*0.031
    },
    invoiceboxes:{
        marginBottom:'2%',
        alignItems:'flex-end'
    }
})