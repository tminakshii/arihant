import {
  BackHandler,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import TriangleChart from '../../common/TriangleChart';
import {
  bannerdata1,
  cardsData,
  chapterTestData,
  Doughtsolutiondata2,
  Freetestdata,
  FreetestSubjectdata,
  FreqCategoryData,
  overviewResultData,
  pathfinderdata,
  preparationData,
  PyqSolutiondata,
  questiondata,
  solution2data,
  studentmarkdata,
  StudentResultPerformancedata,
  testseriesdata,
} from '../../values/Utility';
import StudentWeaknessOverview from '../../common/StudentWeaknessOverview';
// import ReportQuestion from '../../common/ReportQuestion';
import ThankyouCard from '../../common/ThankyouCard';
import Freetest from '../../common/Freetest';
import TestBanner from '../../common/TestBanner';
import ViewAll from '../../common/ViewAll';
import { DARKGRAY } from '../../values/Colors';
import TestSeries from '../../common/TestSeries';
import TestseriesCard from '../../common/TestseriesCard';
import Entypo from 'react-native-vector-icons/Entypo';
import RelatedVideoCard from '../../common/RelatedVideoCard';
import SuccessStory from '../../common/SuccessStory';
import ResultOverview from '../../common/ResultOverview';
import Studentmarkgraph from '../../common/Studentmarkgraph';
import Pathfinder from '../../common/Pathfinder';
import Preparation from '../../common/Preparation';
import Questionset from '../../common/Questionset';
import SolutionCard2 from '../../common/SolutionCard2';
import Banner1 from '../../common/Banner1';
import Doughtsolution from '../../common/Doughtsolution';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import FreeSubjectTest from '../../common/FreeSubjectTest';
import Filters from '../../common/Filters';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import SubmitDoubt from '../../common/SubmitDoubt';
import PracticeSet from '../../common/PracticeSet';
import FrequentlyBought from '../../common/FrequentlyBought';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const { width, height } = Dimensions.get('window');
const boxwidth = width * 0.3;
const spacing = (width - boxwidth) / 2;
const OnlineTestSeries = ({
  testseries,
  handleActiveTestSeries,
  activeTestSeries,
  setIsFilter,
  onpress  
}) => {
  const [testserieschange, setTestSeriesChange] = useState(false);
  const [currentIndexN, setCurrentIndexN] = useState(0);
  const [selectedfreqid, setSelectedfreqid] = useState([1]);

  const navigation=useNavigation()
  const handlefreqidtoggle = id => {
    
    if (selectedfreqid.includes(id)) {
      setSelectedfreqid(selectedfreqid.filter(item => item !== id));
    } else {
      setSelectedfreqid([...selectedfreqid, id]);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
     
      const onBackPress = () => {
          setIsFilter(true)
          setTestSeriesChange(false)
        return true; 
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => backHandler.remove();
    }, [])
  );

  const flatListRefN = useRef(null);
  const spacing = (width - boxwidth) / 2;

  const rendersolutionCard = ({ item, index }) => {
    return <RelatedVideoCard key={index} item={item} />;
  };
  const rendersuccesscard = ({ item, index }) => {
    return <SuccessStory key={index} item={item} />;
  };
  const renderlatestTest = ({ item, index }) => {
    return <TestseriesCard key={index} item={item} index={index} />;
  };

  const scrollToIndex = index => {
    if (index >= 0 && index < cardsData.length) {
      flatListRefN.current.scrollToIndex({ index, animated: true });

      setCurrentIndexN(index);
    }
  };

  const renderTestSeriesItems = ({ item }) => (
    <TestSeries
      item={item}
      activeTestSeries={activeTestSeries}
      handleActiveTestSeries={handleActiveTestSeries}
    />
  );
  const rendersolutionprice = ({ item, index }) => {
    return <SolutionCard2 key={index} item={item} />;
  };
  const renderdoughtsolution = ({ item, index }) => {
    return <Doughtsolution key={index} item={item} />;
  };
  const renderpathfinder = ({ item, index }) => {
    return <Pathfinder key={index} item={item} />;
  };
  const renderprepbanner = ({ item, index }) => {
    return <Preparation key={index} item={item} />;
  };
  const renderQuestionlist = ({ item, index }) => {
    return <Questionset key={index} item={item} />;
  };
  // 
  return (
    <View>
      <View style={styles.onlineBox}>
        {/*AttempFreeTest */}

        {testserieschange ? (
          <View>
            <View
              style={{
                paddingHorizontal: width * 0.03,
                
              }}>
              <View style={styles.subjectwiseheadingbox}>
              <Text style={styles.JeeHeading}>JEE Main 35 Test</Text>
              <TouchableOpacity activeOpacity={0.8} style={styles.filterButton} onPress={onpress}>
            <MaterialCommunity name='tune-variant' color={DARKGRAY} size={width*0.035}/>
            <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
              </View>
              <Text style={styles.Jeesubheading}>
                A wonderful and unique curriculum that is the best fit for every
                student.
              </Text>

              <FlatList
                data={testseriesdata}
                renderItem={renderTestSeriesItems}
              />
            </View>
            <ViewAll title={'View More'} customeStyle={styles.viewallBox} Icon2={ `angle-down`}/>

            <View style={styles.solutioncardbox}>
              <FlatList data={solution2data} renderItem={rendersolutionprice} />

              <FlatList
                data={Doughtsolutiondata2}
                renderItem={renderdoughtsolution}
              />
            </View>
            {/*Pathfinder */}
            {/* <View style={styles.pathfinderbox}>
              <FlatList data={pathfinderdata} renderItem={renderpathfinder} />
            </View> */}

           
       
            {/*QuestionsReder */}
            {/* <View style={styles.questionlistbox}>
              <FlatList
                contentContainerStyle={styles.questionbox1}
                data={questiondata}
                renderItem={renderQuestionlist}
              />
            </View> */}
            {/*SubjectWiseFreeTest */}
            {/* <View>
              <View style={styles.subjectwiseheadingbox}>
            <Text style={styles.heading2}>JEE Main <Text style={styles.testsubjectwise}>35 Tests</Text></Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.filterButton} >
            <MaterialCommunity name='tune-variant' color={DARKGRAY} size={width*0.035}/>
            <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
              </View>
              <Text style={styles.subundertext}>Arihant Plus simplifies JEE Main exam preparation by offering daily study updates and monthly PDFs, keeping you on track for success.</Text>
              {FreetestSubjectdata.map((item,index)=>{
          
              return(
              <FreeSubjectTest key={index} item={item}/>

              )
              })}
            </View> */}
{/* <PracticeSet/>         */}

            {/*Submit Doubt */}
            {/* <SubmitDoubt/> */}
       
          </View>
        ) : (
          <>
            {/* <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.chaptertestConatainer}>
                {chapterTestData.map((item, index) => {
                  return (
                    <TouchableOpacity activeOpacity={0.5}>
                      <View style={styles.chaptertestview}>
                        <Text style={[styles.quantity]}>{item.quantity}</Text>
                        <Text style={[styles.subjectName2]}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View> */}
            <View style={styles.attbox}>
              <View style={styles.attemptfreebox}>
                <Text style={styles.freeattempttext}>Attempt Free Test</Text>
                <Text style={styles.wonderfultext}>
                  A wonderful and unique curriculum that is the best fit for
                  every student.
                </Text>
              </View>
              <ScrollView horizontal overScrollMode='never' showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:width*0.05}}>
                {Freetestdata.map((item, index) => {
                  return (
                    <Freetest
                      item={item}
                      onPress={()=>{
                        setIsFilter(false)
                        setTestSeriesChange(true);
                      }
                 
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
        {/* {banner cards} */}
        {
          !testserieschange &&

        <TestBanner />
        }

        {/*TestSeriesCard */}
        <View style={styles.onlinepurplebox}>
          <View style={styles.testOfonlinebox}>
            <Text style={styles.testtext}>Test Series</Text>
            <Text style={styles.undertest}>
              In this course you will learn from basics to advance Intelligence with hands-on experience.{' '}
            </Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.latestbox}
              horizontal
              data={testseries.slice(0, 6)}
              renderItem={renderlatestTest}
            />
            <ViewAll title="View All" customeStyle={{marginTop:"2%"}} />

          </View>
          {/*TestSerisAndBookFrequentlyBought */}
          <View style={styles.frequentlyContainer}>
                <Text style={styles.frequentlyText}>
                Test Series & Books
                </Text>
                <Text style={styles.frequentlysubText}>In this course you will learn from basics to advancel Intelligence with hands-on experience. </Text>
                <FrequentlyBought
                  FreqCategory={FreqCategoryData}
                  selectedfreqid={selectedfreqid}
                  handlefreqidtoggle={handlefreqidtoggle}
                  customeStyle={true}
                  onlinetestseries={true}
                />
                <ViewAll title={'View All'} customeStyle={styles.viewallBox} />
              </View>

              <View style={styles.frequentlyContainer2}>
                <Text style={styles.frequentlyText}>
                Test Series & e-Books
                </Text>
                <Text style={styles.frequentlysubText}>In this course you will learn from basics to advancel Intelligence with hands-on experience. </Text>
                <FrequentlyBought
                  FreqCategory={FreqCategoryData}
                  selectedfreqid={selectedfreqid}
                  handlefreqidtoggle={handlefreqidtoggle}
                  customeStyle={true}

                />
                <ViewAll title={'View All'} customeStyle={styles.viewallBox} />
              </View>
        </View>
        <View style={styles.letestonlinebox}>
          <Text style={styles.testtext}>Latest Test Series</Text>
          <Text style={styles.undertest}>
            Enhance your exam readiness with our latest test series. Access
            comprehensive practice materials tailored for your success.
          </Text>

          <FlatList
            horizontal
            contentContainerStyle={styles.latestbox}
            data={testseries.slice(0, 6)}
            renderItem={renderlatestTest}
          />
          <ViewAll title="View All" />
        </View>
        {/*RELATEDVIDEO */}
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
          <ViewAll title={'View All'} customeStyle={{marginVertical:"2%"}} />
        </View>

        {/*SuccessScrolling */}
        {
          !testserieschange &&
          <View style={styles.successbox}>
          <Text style={styles.successtext}>Success Story</Text>
          <View style={styles.successinnerbox}>
            <TouchableOpacity
              onPress={() => scrollToIndex(currentIndexN - 1)}
              style={styles.successbackarrow}>
              <MaterialIcons name="arrow-back-ios-new" size={width*0.1} color={DARKGRAY} />
            </TouchableOpacity>
            <FlatList
              horizontal
              ref={flatListRefN}
              showsHorizontalScrollIndicator={false}
              data={cardsData}
              renderItem={rendersuccesscard}
            />
            <TouchableOpacity
              onPress={() => scrollToIndex(currentIndexN + 1)}
              style={styles.successfwdarrow}>
              <MaterialIcons name="arrow-forward-ios" size={width*0.1} color={DARKGRAY} />
            </TouchableOpacity>
          </View>
        </View>
        }
       {
        testserieschange&&
        <View style={styles.preparationbannerbox}>
        <FlatList data={preparationData} renderItem={renderprepbanner} />
      </View>
       }
      
        {/*end of animation scrolling */}
      </View>
    </View>
  );
};

export default OnlineTestSeries;

// const styles = StyleSheet.create({})
