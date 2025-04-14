import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK, DARKGRAY, GRAY, inputBordercolor, LIGHTGRAY2, LIGHTPURPLE, orange, RED, WHITE } from '../values/Colors'
import { IsidoraBlack, IsidoraBold, IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import Button from './Button'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('window')

const BookMagazineCard2 = ({ magazindata }) => {
    console.log(magazindata, 'magazin')
    return (
        <View style={styles.mainbox}>
            <View style={styles.upperbox}>
                <View>
                    <Text style={styles.headertext}>Order Placed: {magazindata?.orderDate}</Text>
                    <Text style={styles.headertexttotal}>TOTAL: Rs.{magazindata?.total}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom:'2%'}}>
                    <TouchableOpacity style={{ marginBottom: '4%' }}>
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
            <View style={styles.bookcontainer}>
                <Image source={magazindata?.imageUrl} style={styles.book} />
                <View style={{ height: height * 0.11 }}>
                    <Text style={styles.booktitle}>{magazindata?.productTitle}</Text>
                    <Text style={styles.booktitle}>{magazindata?.productSubtitle}</Text>
                    <View style={styles.device}>
                        <Text style={styles.price}>In<Text style={{ color: RED }}>{'    '}2 Device{'  '}</Text></Text>
                        <AntDesign name={'caretdown'} size={12} color={RED} />
                    </View>
                </View>
            </View>
            <Text style={styles.unavilable}>This title is unavailable for download and transfer</Text>
            <Button
                text={'Write a product review'}
                customStyles={styles.reviewbtn}
                textStyle={styles.reviewtext} />
            <Button
                text={'Delete or Remove from Device'}
                customStyles={styles.reviewbtn}
                textStyle={styles.reviewtext} />
            <Button
                text={'More Action'}
                customStyles={styles.reviewbtn}
                textStyle={styles.reviewtext}
                vectorIcon3={'chevron-thin-right'}
                vector2color={BLACK}
                icon2size={15} />

        </View>
    )
}

export default BookMagazineCard2

const styles = StyleSheet.create({
    mainbox: {
        backgroundColor: WHITE,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        borderRadius: 5,
        width: width / 1.085,
        alignSelf: 'center',
        marginVertical: "3.5%",
        paddingVertical: '5%',
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
        marginTop: '1%'
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
    headertexttotal: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.027,
        marginBottom: '2%',
        marginTop:'2%'
        // alignSelf:'flex-end'
    },
    bookcontainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between",
        marginTop: '5%'
    },
    book: {
        width: width * 0.172,
        height: height * 0.11,
        resizeMode: 'contain',

        // backgroundColor:'red'
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
        color: DARKGRAY,
        fontSize: width * 0.031,
    },
    device: {
        flexDirection: "row",
        alignItems: 'center',
        position: "absolute",
        bottom: 0
    },
    unavilable: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.027,
        color: DARKGRAY,
        marginTop: '2%',
        marginBottom: '3.5%'
    },
    reviewbtn: {
        backgroundColor: LIGHTPURPLE,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: width * 0.05,
        borderWidth: 0.5,
        borderColor: GRAY,
        padding: 0,
        height: height * 0.05,
        marginTop: 0,
        marginBottom: '4%'
    },
    reviewtext: {
        color: DARKGRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031
    }
})