import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../common/Header'
import { ScrollView } from 'react-native-gesture-handler'
import ThankyouCard from '../../common/ThankyouCard'
import TestseriesCard from '../../common/TestseriesCard'
import { latest_test_series, PyqSolutiondata } from '../../values/Utility'
import ViewAll from '../../common/ViewAll'
import { IsidoraMedium, IsidoraSemiBold } from '../../values/Fonts'
import RelatedVideoCard from '../../common/RelatedVideoCard'
import { DARKGRAY, GRAY } from '../../values/Colors'
const {width, height} = Dimensions.get('window');

const ThankyouScreen = () => {


    const rendersolutionCard = ({ item, index }) => {
        return <RelatedVideoCard key={index} item={item} />;
      };
    const renderItemoftestseries = ({ item, index }) => {
        return <TestseriesCard item={item} index={index} />;
      };
  return (
    <SafeAreaView style={{flex:1}}>
<Header/>

<ScrollView bounces={false}>
<ThankyouCard/>

<View style={styles.TestseriesCard}>
              <FlatList
                horizontal
                contentContainerStyle={styles.swiperontestseries}
                data={latest_test_series}
                renderItem={renderItemoftestseries}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
              />
            </View>

            <ViewAll
              title={'View All'}
              customeTextStyle={{ fontFamily: IsidoraMedium }}
              customeStyle={styles.viewallBox1}
            />

<View style={styles.RelatedBox}>
          <Text style={styles.relatedtext}>Related Videos</Text>
          <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.solutioncontainer}
            data={PyqSolutiondata}
            renderItem={rendersolutionCard}
          />
          </View>
          <ViewAll title={'View All'} customeStyle={styles.viewallBox1} />
        </View>

</ScrollView>
    </SafeAreaView>
  )
}

export default ThankyouScreen

const styles = StyleSheet.create({

    swiperontestseries: {
        // paddingRight:width*0.04,
        paddingHorizontal: "2.2%",
      },
      TestseriesCard:{
        marginTop:"10%"
      },
      viewallBox1: {
        marginTop: '5%',
        marginBottom: '9%',
        marginLeft:"5%"
      },
      relatedtext: {
        fontFamily: IsidoraSemiBold,
        fontSize: width * 0.05,
        color: DARKGRAY,
        marginLeft: width * 0.045,
      },
      RelatedBox: {
        // marginVertical:height*0.02
        // marginBottom: height * 0.03,
        marginTop: height * 0.02
      },
      solutioncontainer: {
        marginTop: height * 0.025,
        marginBottom: height * 0.03,
        paddingHorizontal: width * 0.02,
        shadowColor: GRAY , // Shadow color
        shadowOffset: { width: 0, height: 5 }, // Offset for shadow
        shadowOpacity: 0.2, // Opacity of shadow
      },
    
     

})