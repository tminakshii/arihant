import { View, Text, FlatList, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from '../Dashboard/style';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Barchartdata, DashboardData, dashboardTestseriesData, data, FreqCategoryData, PyqSolutiondata } from '../../values/Utility'
import DashboardPackages from '../../common/DashboardPackages'
import index from '../Auth/Login'
import Barchart from '../../common/Barchart'
import Productcard2 from '../../common/ProducCard2';
import ViewAll from '../../common/ViewAll';
import AnimatedExplore from '../../common/AnimatedExplore';
import { ImagePath } from '../../values/ImagePath';
import { isTablet } from 'react-native-device-info';
import { WHITE } from '../../values/Colors';
import DeviceInfo from 'react-native-device-info';
import FrequentlyBought from '../../common/FrequentlyBought';
import RelatedVideoCard from '../../common/RelatedVideoCard';
import TestseriesCard from '../../common/TestseriesCard';
import Dashboardheader from '../../common/Dashboardheader';
import TestPerformance from '../../common/Testperfromance';
const { width, height } = Dimensions.get('window')

const dashboard = ({
  testseries,
  handleActiveTestSeries,
  activeTestSeries,
}) => {
  const [isanimationtrue, setIsanimationtrue] = useState(false)
  const scrollViewRef = useRef(null);
  const [selectedfreqid, setSelectedfreqid] = useState([1]);
  const [testserieschange, setTestSeriesChange] = useState(false);
  // const [basicDetail, setBesicDetail] = useState(true)
  const isTablet = DeviceInfo.isTablet()

  const scrollToanimation = (yPosition) => {
    // console.log( event.nativeEvent.contentOffset.y, 'position')
    if (yPosition === 775 && !isanimationtrue) {
      setIsanimationtrue(true); // Set only if not already true
      console.log('Animation started for position 1300');
    }
  }
  const handlefreqidtoggle = id => {

    if (selectedfreqid.includes(id)) {
      setSelectedfreqid(selectedfreqid.filter(item => item !== id));
    } else {
      setSelectedfreqid([...selectedfreqid, id]);
    }
  };
  const renderpackagebox = ({ item }) => {
    return (<DashboardPackages item={item} />)
  }
  const renderPopularbook = ({ item, index }) => {
    return <Productcard2 item={item} />;
  };
  const rendersolutionCard = ({ item, index }) => {
    return <RelatedVideoCard key={index} item={item} />;
  };
  const renderlatestTest = ({ item, index }) => {
    return <TestseriesCard key={index} item={item} index={index}
      activeTestSeries={activeTestSeries}
      handleActiveTestSeries={handleActiveTestSeries} />;
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Dashboardheader />
      <ScrollView onScroll={scrollToanimation(775)} ref={scrollViewRef} scrollEventThrottle={16}>

        <FlatList
          contentContainerStyle={{
            marginLeft: width * 0.04,
            marginBottom: '3%'
          }}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          overScrollMode='never'
          // horizontal={true}
          data={DashboardData}
          renderItem={renderpackagebox} />
        <View style={{ marginBottom: '3.2%' }}>
          <TestPerformance />
        </View>
        <View style={{ marginBottom: '8%' }} >
        <Barchart />
        </View>
       
        {/* <Barchart item={Barchartdata}/> */}
        <View style={styles.popularbookcontainer2}>
          <Text style={styles.poplulartext}>Popular titles by this Author</Text>
          <FlatList
            horizontal
            overScrollMode="never"
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={renderPopularbook}
            contentContainerStyle={{ paddingHorizontal: width * 0.02 }}

          />
          <ViewAll title={'View All'} customeStyle={{ marginVertical: '3%' }} />

        </View>
        <View >
          {isTablet ?
            (<View style={{ flexDirection: "row", width: width, backgroundColor: WHITE, marginBottom: "10%" }}>
              <View style={styles.animationtextTab}>
                <Text style={styles.heading}>
                  Excel Exams with
                  <Text style={styles.headingArihant}> Arihant Plus</Text>{' '}
                  Online Masterclass
                </Text>
                <Text style={styles.subHeading}>
                  Gain access to expert-led sesssions, comprehensive study
                  materials, and personalized guidance designed to help you
                  master every subject and achieve top scores. Join now and
                  unlock your potential with Arihant
                </Text>
                <TouchableOpacity style={{}} activeOpacity={0.8}>
                  <Image source={ImagePath.explorebtn} style={styles.exploreimg} />
                </TouchableOpacity>
              </View>


              <AnimatedExplore isanimating={isanimationtrue} />
            </View>) :
            (<View >
              <View style={styles.animationtext}>
                <Text style={styles.heading}>
                  Excel Exams with
                  <Text style={styles.headingArihant}>
                    {' '}
                    Arihant Plus
                  </Text>{' '}
                  Online Masterclass
                </Text>
                <Text style={styles.subHeading}>
                  Gain access to expert-led sesssions, comprehensive study
                  materials, and personalized guidance designed to help you
                  master every subject and achieve top scores. Join now and
                  unlock your potential with Arihant
                </Text>
              </View>

              <AnimatedExplore isanimating={isanimationtrue} />
            </View>)}

          {/*TestSerisAndBookFrequentlyBought */}
          <View style={styles.frequentlyContainer}>
            <Text style={styles.frequentlyText}>
              Suggestive Books & e-Books
            </Text>
            <FrequentlyBought
              FreqCategory={FreqCategoryData}
              selectedfreqid={selectedfreqid}
              handlefreqidtoggle={handlefreqidtoggle}
              customeStyle={true}
              onlinetestseries={true}
            />
            <ViewAll title={'View All'} customeStyle={styles.viewallBox} />
          </View>
          {/*RELATEDVIDEO */}
          <View style={styles.RelatedBox1}>
            <Text style={styles.relatedtext}>Suggestive Video Courses</Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.solutioncontainer}
                data={PyqSolutiondata}
                renderItem={rendersolutionCard}
              />
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginVertical: "2%" }} />
          </View>
          <View style={styles.RelatedBox}>
            <Text style={styles.relatedtext}>Suggestive Learning Video</Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.solutioncontainer}
                data={PyqSolutiondata}
                renderItem={rendersolutionCard}
              />
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginVertical: "2%" }} />
          </View>
          <View style={styles.testOfonlinebox}>
            <Text style={styles.testtext}>Suggestive Test Series</Text>

            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.latestbox}
              horizontal
              data={dashboardTestseriesData.slice(0, 6)}
              renderItem={renderlatestTest}
            />
            <ViewAll title="View All" customeStyle={{ marginTop: "2%" }} />

          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default dashboard