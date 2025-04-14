import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BLACK, DARKGRAY, GRAY, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';
// import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

const Studentmarkgraph = ({ item }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headerbox}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.namebox}>
                    <Text style={styles.name}>{item?.name}</Text>
                    <Text style={styles.mocktest}>(Live mock test)</Text>
                </View>
                <Text style={styles.score}>
                    Score{'  '}<Text style={styles.gain}>{item?.markgain}</Text>
                    <Text>/{item?.totalmark}</Text>
                </Text>
            </View>

            {/* Performance Data Section */}
            <View style={styles.performanceDataContainer}>
                {item?.performanceData.map((metric, index) => (
                    <View key={index} style={styles.progressContainer}>
                        <View style={styles.percenttextcontainer}>
                            <Text style={styles.label}>{metric.label}</Text>
                            <Text style={styles.metricValue}>
                                {metric?.label === 'Accuracy' || metric?.label === 'Percentile'
                                    ? `${metric?.value}%`
                                    : `${metric?.value}`}
                            </Text>
                        </View>
                        <View style={[styles.backgroundBar, { backgroundColor: metric?.color }]}>
                            {/* <Progress.Bar
                                progress={metric.value / metric.max}
                                width={width * 0.84}
                                height={height * 0.015}
                                color={metric.color}
                                borderRadius={height * 0.015 / 2}
                                borderWidth={0}
                            /> */}
                            <View style={[styles.progressFill,{backgroundColor:metric?.color,width: `${(metric.value / metric.max) * 100}%`}]}></View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Studentmarkgraph;

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: WHITE,
        elevation: 5,
        borderColor:'#6F757C',
        borderWidth:0.7,
        borderRadius: width * 0.028,
        width: width * 0.9,
        alignSelf: 'center',
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.03,
        marginTop:'6%',
    },
    icon: {
        resizeMode: 'contain',
        height: height * 0.06,
        width: width * 0.14,
    },
    name: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.035,
        color: DARKGRAY,
        marginBottom:'2%'
    },
    mocktest: {
        fontFamily: IsidoraMedium,
        color: DARKGRAY,
        fontSize: width * 0.036,
    },
    headerbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    score: {
        fontFamily: IsidoraMedium,
        color: BLACK,
        fontSize: width * 0.038,
        marginLeft: 'auto',
    },
    gain: {
        fontSize: width * 0.04,
        fontFamily:IsidoraSemiBold
    },
    namebox: {
        marginLeft: width * 0.02,
    },
    performanceDataContainer: {
        marginVertical: height * 0.02,
    },
    progressContainer: {
        marginVertical: height * 0.005,
    },
    percenttextcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginVertical: height * 0.005,
    },
    label: {
        width: width * 0.3,
        fontSize: width * 0.031,
        fontFamily: IsidoraSemiBold,
        color: DARKGRAY,
        marginVertical: height * 0.012
    },
    backgroundBar: {
        height: 2,
        borderRadius: 5,
        width:width*0.84,
        // overflow: 'hidden',
        justifyContent: 'center',
    },
    progressFill:{
        backgroundColor:"black",
        height:height * 0.0143,
        borderRadius:height * 0.0285
    },
    metricValue: {
        // width: width * 0.15,
        fontSize: width*0.035,
        textAlign: 'right',
        color: DARKGRAY,
        fontFamily:IsidoraSemiBold
    },
});
