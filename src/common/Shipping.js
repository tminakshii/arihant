import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RED } from '../values/Colors';
import { ImagePath } from '../values/ImagePath';
import { IsidoraMedium } from '../values/Fonts';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const isTablet=DeviceInfo.isTablet()

const Shipping = () => {
 

    return (
        <View style={styles.container}>
            <View style={[styles.item, dynamicStyles.itemWidth]}>
                <Image
                    source={ImagePath.freeshipping}
                    style={[styles.image, dynamicStyles.imageSize]}
                />
                <Text style={[styles.text, dynamicStyles.textStyle]}>
                    Free Delivery
                </Text>
            </View>
            <View style={[styles.item, dynamicStyles.itemWidth]}>
                <Image
                    source={ImagePath.securepayment}
                    style={[styles.image, dynamicStyles.imageSize]}
                />
                <Text style={[styles.text, dynamicStyles.textStyle]}>
                    Secure Payment
                </Text>
            </View>
            <View style={[styles.item, dynamicStyles.itemWidth]}>
                <Image
                    source={ImagePath.cashondelivery}
                    style={[styles.image, dynamicStyles.imageSize]}
                />
                <Text style={[styles.text, dynamicStyles.textStyle]}>
                    Pay On Delivery
                </Text>
            </View>
            <View style={[styles.item, dynamicStyles.itemWidth]}>
                <Image
                    source={ImagePath.replace}
                    style={[styles.image, dynamicStyles.imageSize]}
                />
               {
                isTablet?
                <Text style={[styles.text, dynamicStyles.replacementText]}>Easy Replacement
            </Text>
            : <Text style={[styles.text, dynamicStyles.replacementText]}>
            Easy{'\n'}Replacement
        </Text>
               }
            </View>
        </View>
    );
};

export default Shipping;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    },
    text: {
        marginTop:'5%',
        color: RED,
        fontSize:isTablet?width * 0.02:width * 0.028,
        fontFamily: IsidoraMedium,
        textAlign: 'center',
    },
});
const dynamicStyles = StyleSheet.create({
    itemWidth: {
        width: isTablet?width * 0.13:width * 0.15,
        // backgroundColor:"green"
    },
    imageSize: {
        height: isTablet?height / 40:height / 25,
        width: isTablet?width / 14:width / 10,
        // backgroundColor:"red"
    },
    textStyle: {
        fontSize: isTablet?width * 0.0155:width * 0.028,
        lineHeight: isTablet?height * 0.017:height * 0.017,
        fontFamily:IsidoraMedium,
        height:isTablet?height*0.03:null

    },
    replacementText: {
        fontSize: isTablet?width * 0.015:width * 0.028,

        lineHeight: isTablet?height * 0.015:height * 0.017,
        fontFamily:IsidoraMedium,
        // backgroundColor:"red",
        width: isTablet?null:width * 0.2,
        height:isTablet?height*0.03:null

    },
});