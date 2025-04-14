import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DARKGRAY, GRAY, LIGHTPURPLE, orange, RED, WHITE } from '../values/Colors'
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts'
import { ImagePath } from '../values/ImagePath'
import Button from './Button'
const { width, height } = Dimensions.get('window')
const TestPackages = ({ testpackage, videopackage }) => {
    return (
        <View style={styles.mainbox}>
            <View style={styles.upperbox}>
                <View>
                    <Text style={styles.headertext}>Order Placed: {testpackage?.orderDate}</Text>
                    <Text style={styles.headertext}>Total: Rs.{testpackage?.price}</Text>
                    <Text style={styles.headertext}>Valid Till: {testpackage?.validtill}</Text>
                </View>
                <TouchableOpacity style={{ marginBottom: '2%' }} >
                    <Text style={styles.viewinvoice}>
                        View Invoice
                    </Text>
                    <View style={styles.underlineinheader} />
                </TouchableOpacity>
            </View>
            <View style={styles.underlineinheader} />
            <View style={styles.bookcontainer}>
                <Image source={testpackage?.imageUrl} style={styles.book} />
                <View style={styles.sidecontainer}>
                    <Text style={styles.title}>{testpackage?.productTitle}</Text>
                    <View style={styles.activebox}>
                        {videopackage ?
                            (<View>
                                <Text style={styles.listtext}> {testpackage?.time} Hours</Text>
                                <Text style={styles.listtext}> {testpackage?.lesson} Lessons</Text>
                            </View>) : (
                                <View style={styles.testbox}>
                                    <Image source={ImagePath.list3} style={styles.listicon} />
                                    <Text style={styles.listtext}> {testpackage?.quantity} Tests</Text>
                                </View>
                            )}

                        <View style={styles.activeinner}>
                            <View style={styles.dot} />
                            {
                                testpackage?.active == true &&
                                <Text style={styles.activetext}>Active</Text>
                            }
                        </View>
                    </View>
                </View>
            </View>
            {
                testpackage?.removeorder == true ?
                    (<View>
                        <Button
                            text={'Remove from orders'}
                            customStyles={styles.reviewbtn}
                            textStyle={styles.reviewtext} />
                        <View style={styles.underremovebox}>
                            <Button
                                text={'Write a Review'}
                                customStyles={styles.progressbtn}
                                textStyle={styles.reviewtext} />
                            <Button
                                text={'Your Progress'}
                                customStyles={styles.progressbtn}
                                textStyle={styles.reviewtext} />

                        </View>
                        <Button
                            text={videopackage ? 'Watch Now' : 'Attempt Now'}
                            customStyles={styles.attemptbtn}
                            textStyle={styles.attempttext}
                        />
                    </View>) :
                    (<View>
                        <Button
                            text={'Write a review'}
                            customStyles={styles.reviewbtn}
                            textStyle={styles.reviewtext} />
                        <Button
                            text={'Your Progress'}
                            customStyles={styles.reviewbtn}
                            textStyle={styles.reviewtext} />
                        <Button
                            text={videopackage ? 'Watch Now' : 'Attempt Now'}
                            customStyles={styles.attemptbtn}
                            textStyle={styles.attempttext}

                        />
                    </View>)
            }
        </View>
    )
}

export default TestPackages

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
        marginBottom: '2.5%'
    },
    underlineinheader: {
        height: 1,
        backgroundColor: GRAY,
        // width:width*0.2

    },
    headertext: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.027,
        marginBottom: '2%'
        // alignSelf:'flex-end'
    },
    viewinvoice: {
        color: GRAY,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        // marginBottom:'2%'
        // alignSelf:'flex-end'
    },
    bookcontainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between",
        marginTop: '5%',
        marginBottom: '2%'
    },
    book: {
        width: width * 0.172,
        height: height * 0.11,
        resizeMode: 'contain',
        // backgroundColor:'red'
    },
    sidecontainer: {
        // backgroundColor:'red',
        width: width * 0.64,
        height: height * 0.1,
        // alignContent:'space-between'

    },
    title: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031,
        color: DARKGRAY
    },
    listicon: {
        width: width * 0.04,
        height: height * 0.02,
        // backgroundColor:'red',
        resizeMode: 'contain'
    },
    testbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listtext: {
        fontFamily: IsidoraMedium,
        fontSize: width * 0.031,
        color: DARKGRAY,
        marginLeft: '2%'

    },
    activebox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.64,
        justifyContent: 'space-between',
        // alignSelf:'flex-end'
        position: "absolute",
        bottom: 0
    },
    activeinner: {
        width: width * 0.28,
        height: height * 0.032,
        backgroundColor: RED,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: width * 0.032

    },
    activetext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.027,
        color: WHITE,
        marginLeft: width * 0.02
    },
    dot: {
        width: width * 0.01,
        height: width * 0.01,
        borderRadius: width * 0.01 / 2,
        backgroundColor: WHITE
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
    },
    attempttext: {
        color: WHITE,
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.031
    },
    attemptbtn: {
        backgroundColor: orange,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: width * 0.05,
        // borderWidth: 0.5,
        // borderColor: GRAY,
        padding: 0,
        height: height * 0.05,
        marginTop: 0,
        marginBottom: '4%'
    },
    underremovebox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: '2%'
    },
    progressbtn: {
        width: width * 0.4,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: width * 0.05,
        borderWidth: 0.5,
        borderColor: GRAY,
        padding: 0,
        height: height * 0.05,
        marginTop: 0,
        marginBottom: '4%',
        backgroundColor: LIGHTPURPLE
    }
})