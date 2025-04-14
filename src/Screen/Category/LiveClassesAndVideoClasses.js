import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import {
  BestSeller,
  Crackexamdata,
  DoubtSolvingdata,
  subjectCategoryData,
  StudyMaterialData,
  Live_Classes_Video2,
  FreeLive2data,
  data,
  pathfinderdata,
  cardsData,
  testseriesdata,

} from '../../values/Utility';
import LiveVideoclass from '../../common/LiveVideoclass';
import {
  Live_Classes,
  Live_Classes_Video,
  MentorData,
} from '../../values/Utility';
import CrackExam from '../../common/CrackExam';
import OurMentor from '../../common/OurMentor';

import VideoCardwithExpert from '../../common/VideoCardwithExpert';
import StudyMaterial from '../../common/StudyMaterial';
import { RivisionclassData } from '../../values/Utility';
import { styles } from './styles';
import { BLACK, DARKGRAY, GRAY, orange, WHITE } from '../../values/Colors';
import { FlatList } from 'react-native';
import RivisionClass from '../../common/RivisionClass';
import DoubtSolving from '../../common/DoubtSolving';
import Entypo from 'react-native-vector-icons/Entypo';
import ViewAll from '../../common/ViewAll';
import UpcomingCard from '../../common/UpcomingCard';
import LiveVideoclass2 from '../../common/LiveVideoClasses2';
import CrackExambanner from '../../common/CrackExambanner';
import FreeLive2 from '../../common/FreeLive2';
import AnimatedExplore from '../../common/AnimatedExplore';
import TestseriesCard from '../../common/TestseriesCard';
import DetailofMentor from '../../common/DetailofMentor';
import Productcard2 from '../../common/ProducCard2';
import Pathfinder from '../../common/Pathfinder';
import SuccessStory from '../../common/SuccessStory';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import index from '../Auth/Login';
import TestSeries from '../../common/TestSeries';
const crackbannerdata = [1, 2, 3]
const { width, height } = Dimensions.get('window')
const typeofclass = ['UPCOMING CLASSES', 'PAST CLASSES']
const LiveClassesAndVideoClasses = ({
  testseries,
  handleActiveTestSeries,
  activeTestSeries,
  settestserieschange
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndexmentor, setCurrentIndexmentor] = useState(0);
  const [currentIndexbest, setCurrentIndexbest] = useState(0);
  const [currentIndexcrackbanner, setCurrentIndexcrackbanner] = useState(0);
  const [testserieschange, setTestSeriesChange] = useState(false);
  const [isviewseries, setIsviewseries] = useState(false)
  const [exploreCourses, setExplorCourses] = useState(false)
  const [currentIndexN, setCurrentIndexN] = useState(0);
  const[isanimationtrue,setIsanimationtrue]=useState(false)

  const flatListRefcrackbanner = useRef(null)
  const flatListRefMentor = useRef(null);
  const flatListRefBest = useRef(null);
  const flatListRefN = useRef(null);
  const scrollViewRef = useRef(null);

  const scrollToanimation=(yPosition)=>{
    if (yPosition === 1300 && !isanimationtrue) {
       setIsanimationtrue(true); // Set only if not already true
       console.log('Animation started for position 1300');
   }}
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
  const renderRivisionClass = ({ item, index }) => {
    return <RivisionClass key={index} item={item} index={index} />;
  };
  const renderDoubtSolving = ({ item, index }) => {
    return <DoubtSolving key={index} item={item} />;
  };
  const rendercrackexambanner = ({ item, index }) => {
    return <CrackExambanner key={index} />
  }
  const renderlatestTest = ({ item, index }) => {
    return <TestseriesCard key={index} item={item} index={index} />;
  };
  const renderPopularbook = ({ item, index }) => {
    return <Productcard2 item={item}/>;
  };
  const handlementorscroll = index => {
    if (index >= 0 && index < MentorData.length - 1) {
      flatListRefMentor?.current?.scrollToIndex({ index, animated: true });
      setCurrentIndexmentor(index);
    }
  };

  const handlebestscroll = index => {
    if (index >= 0 && index < BestSeller.length) {
      flatListRefBest?.current?.scrollToIndex({ index, animated: true });
      setCurrentIndexbest(index);
    }
  };
  const handlecrackscroll = index => {
    if (index >= 0 && index < crackbannerdata.length) {
      flatListRefcrackbanner?.current?.scrollToIndex({ index, animated: true });
      setCurrentIndexcrackbanner(index)
    }
  }
  const renderpathfinder = ({ item, index }) => {
    return <Pathfinder key={index} item={item} />;
  };
  const rendersuccesscard = ({ item, index }) => {
    return <SuccessStory key={index} item={item} />;
  };


  return (
    <View>
      {
        exploreCourses ?
        <ScrollView contentContainerStyle={styles.exploreCourses}>
       <View style={styles.crackcontainer}>
            <CrackExam item={Crackexamdata} onPress={()=>setExplorCourses(true)} exploreCourses={true}/>
          </View>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.subjectCategory}>
          {subjectCategoryData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setActiveIndex(index)}>
                <Text
                  style={[
                    styles.subjectName,
                    { color: activeIndex === index ? orange : BLACK },
                    { borderColor: activeIndex === index ? orange : GRAY },

                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {activeIndex == 5 && (
            <>
              {StudyMaterialData.map((item, index) => {
                return <StudyMaterial item={item} />;
              })}

              <ViewAll
                title={'View More'}
                customeStyle={{ marginVertical: '5%',marginBottom:"10%" }}
                Icon2={'angle-down'}
              />
            </>
          )}

          {activeIndex == 3 && (
            <>
           <View style={styles.doubtsolvingviewRow}>
            <View style={styles.newdoubt}>
            <Text style={styles.newdoubttext}>New Doubt</Text>

            </View>
            <View style={styles.allsubject}>

              <Text style={styles.allsubjecttext}>All Subjects</Text>
              <Entypo name="chevron-thin-down" color={BLACK}/>

            </View>

              </View>

              <FlatList
                data={DoubtSolvingdata}
                keyExtractor={item => item.id}
                renderItem={renderDoubtSolving}
                exploreCourses={true}
                contentContainerStyle={styles.listContent}
              />

              <ViewAll
                title={'View More'}
                customeStyle={{ marginBottom: '8%' }}
                Icon2={'angle-down'}
              />
            </>
          )}
{
  activeIndex==4 &&
  <View style={{marginTop:"5%"}}>

  <FlatList
  data={testseriesdata}
  renderItem={renderTestSeriesItems}
  contentContainerStyle={{paddingHorizontal:width*0.03}}
/>

<ViewAll title={'View More'} customeStyle={{ marginVertical: '6%' }} 
                Icon2={'angle-down'}
                />
  </View>

  
}

          {
            activeIndex==0 &&
<>
            <FlatList
            data={RivisionclassData}
            renderItem={renderRivisionClass}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent2}
          />
              <ViewAll title={'View More'} customeStyle={{ marginBottom: '10%' }} 
                Icon2={'angle-down'}
                />
</>

          }
       

    {/*Pathfinder */}
    <View style={styles.pathfinderbox}>
              <FlatList data={pathfinderdata} renderItem={renderpathfinder} />
            </View>
            <VideoCardwithExpert />
            <View style={styles.Mentorbox2}>
            <Text style={styles.topmentortext5}>Top Mentors to learn from</Text>
            <Text style={styles.strptext2}>
              Our step-by-step guides and detailed explanations have your back
            </Text>
            {/* {mentorbox} */}
            <View style={styles.mentorbutton}>
              <TouchableOpacity
                onPress={() => handlementorscroll(currentIndexmentor - 1)}
                style={styles.backarrowmentor}>
                <Entypo name="chevron-small-left" size={width*0.055} color={DARKGRAY} />
              </TouchableOpacity>
              <FlatList
                horizontal
                ref={flatListRefMentor}
                data={MentorData}
                contentContainerStyle={styles.mentorscroll}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return <OurMentor item={item} index={index} />;
                }}
              />
              <TouchableOpacity
                onPress={() => handlementorscroll(currentIndexmentor + 1)}
                style={styles.nextarrowmentor}>
                <Entypo name="chevron-small-right" size={20} color={DARKGRAY} />
              </TouchableOpacity>
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginTop:'8%',marginLeft:"2.5%" ,marginBottom:"5%"}} />
          </View>
  {/*BestSellerIN upcomingbookCommon component */}
  <View style={styles.bestbox}>
            <Text style={styles.topmentortext2}>Best Seller</Text>
            <Text style={styles.discovertext1}>
              Discover our release, designed to elevate your learning experience.
              Dive into fresh content for enhanced understanding and mastery.
            </Text>
            <View style={styles.mentorbutton}>
              {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest - 1)}
                style={styles.backarrowmentor}>
                <Entypo name="chevron-small-left" size={width*0.055} color={DARKGRAY} />
              </TouchableOpacity> */}
              <FlatList
                overScrollMode="never"
                horizontal
                data={BestSeller}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                ref={flatListRefBest}
                contentContainerStyle={styles.bestsellerscroll}
                renderItem={({ item, index }) => {
                  return <UpcomingCard item={item} isbestseller={true} />;
                }}
              />

              {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest + 1)}
                style={styles.nextarrowmentor}>
                <Entypo name="chevron-small-right" size={20} color={DARKGRAY} />
              </TouchableOpacity> */}
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginTop: '3%', marginBottom: '10%' }} />

          </View>
          <Text style={styles.live}>Live Classes</Text>
          <Text style={styles.wonderful}>
            A wonderful and unique curriculum that is the best fit for every
            student.
          </Text>
          <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
          <ViewAll title={'View All'} customeStyle={{ marginVertical: '4%' }} />

          <View style={styles.popularcontainer2}>
            <Text style={styles.populartext}>Latest Test Series</Text>
            <Text style={styles.accesspoptext}>Enhance your exam readiness with our latest test series. Access comprehensive practice materials tailored for your success.</Text>
            <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
            <ViewAll title={'View All'} customeStyle={{ marginVertical: '4%' }} />
</View>

<View style={styles.testOfonlinebox}>
            <Text style={styles.testtext}>Latest Test Series</Text>
            <Text style={styles.undertest}>
              Enhance your exam readiness with our latest test series. Access comprehensive practice materials tailored for your success..{' '}
            </Text>
            <FlatList
              contentContainerStyle={styles.latestbox}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={testseries.slice(0, 6)}
              renderItem={renderlatestTest}
            />
            <ViewAll title="View All" customeStyle={styles.viewallBox}/>

          </View>

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
        
        <View style={styles.popularbookcontainer2}>
            <Text style={styles.poplulartext}>Popular books related to the Exams</Text>
                <FlatList
                horizontal
                  overScrollMode="never"
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderPopularbook}
                  contentContainerStyle={{paddingHorizontal:width*0.02}}
                 
                />
        <ViewAll title={'View All'} customeStyle={{ marginVertical: '3%' }} />

              </View>






        </ScrollView>

        :
        <>
          {!isviewseries && 
        <ScrollView onScroll={scrollToanimation(1300)} ref={scrollViewRef} style={styles.mainLivepage}>
          <Text style={styles.live}>Live Classes</Text>
          <Text style={styles.wonderful}>
            A wonderful and unique curriculum that is the best fit for every
            student.
          </Text>
          <LiveVideoclass item={Live_Classes} solution={true} onpressisviewSeries={() => setIsviewseries(true)} />

          <View style={styles.crackcontainer}>
            <CrackExam item={Crackexamdata} onPress={()=>{setExplorCourses(true)}}/>
          </View>
          {/* <Text style={styles.live}>Live Classes</Text>
        <Text style={styles.wonderful}>
        A wonderful and unique curriculum that is the best fit for every student.
        </Text> */}

        <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
         




          {/* <LiveVideoclass item={Live_Classes_Video} classVideo={true} /> */}


         

        

          {/* <LiveClassesAndVideoClasses/> */}

          {/* <FlatList
          data={RivisionclassData}
          renderItem={renderRivisionClass}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        /> */}
          {/* <FreeLive2 item={FreeLive2data}/> */}
          {/* <VideoCardwithExpert /> */}



          {/*LiveVideoComponent */}

          {/*LIVECLASSESContainer */}
          <View style={styles.liveclasses2container}>
            <Text style={styles.live}>Free Video Course</Text>
            <Text style={styles.wonderful2}>
              Our step-bystep guides and detailed explanations have your back.
            </Text>
            <LiveVideoclass2 item={Live_Classes_Video2} classVideo={true} />
            <ViewAll
              title={'View All'}
              customeStyle={{marginLeft:"4.5%",marginTop:"4%",marginBottom:"8%"}}
              Icon2={'angle-down'}
            />
          </View>
          {/*CrackExambanner */}
          {/* <View style={styles.crackbannercontainer}>
          <Text style={styles.freetext2}>Free online Classes</Text>
          <Text style={styles.underfreetext2}>Watch our free online classes for interactive learning! Chat live  and clarify doubts in real-time.</Text>
          <FlatList
          ref={flatListRefcrackbanner}
            data={crackbannerdata}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={rendercrackexambanner}
            overScrollMode='never' />
         <View style={styles.crackbannerarrowbox}>
         <TouchableOpacity
            onPress={() => handlecrackscroll(currentIndexcrackbanner - 1)}
            style={styles.backarrowcrackbanner}>
            <Entypo name="chevron-small-left" size={width*0.1} color={DARKGRAY} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlecrackscroll(currentIndexcrackbanner + 1)}
            style={styles.nextarrowcrackbanner}>
            <Entypo name="chevron-small-right" size={width*0.1} color={DARKGRAY} />
          </TouchableOpacity>
         </View>
        </View> */}

          {/*CrackexamComponent */}

          {/*MentorComponent */}
          <View style={styles.Mentorbox}>
            <Text style={styles.topmentortext3}>Top Mentors to learn from</Text>
            <Text style={styles.strptext}>
              Our step-by-step guides and detailed explanations have your back
            </Text>
            <View style={styles.mentorbutton}>
              <TouchableOpacity
                onPress={() => handlementorscroll(currentIndexmentor - 1)}
                style={styles.backarrowmentor1}>
                <Entypo name="chevron-small-left" size={width*0.06} color={DARKGRAY} />
              </TouchableOpacity>
              <FlatList
                horizontal
                ref={flatListRefMentor}
                data={MentorData}
                contentContainerStyle={styles.mentorscroll2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return <OurMentor item={item} index={index} />;
                }}
              />
              <TouchableOpacity
                onPress={() => handlementorscroll(currentIndexmentor + 1)}
                style={styles.nextarrowmentor1}>
                <Entypo name="chevron-small-right" size={width*0.06} color={DARKGRAY} />
              </TouchableOpacity>
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginVertical:'8%' }} />
          </View>
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

          <AnimatedExplore  isanimating={isanimationtrue}/>
          <View style={styles.popularcontainer}>
            <Text style={styles.populartext1}>Popular trending Courses</Text>
            <Text style={styles.accesspoptext}>Access the latest test series on Exam With Arihant for comprehensive
              exam preparation. Stay ahead with practice and mock tests</Text>
            <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
            <ViewAll title={'View All'} customeStyle={{ marginTop: '3%',marginBottom:"5%" }} />


          </View>
          <View style={styles.testOfonlinebox}>
            <Text style={styles.testtext}>Latest Test Series</Text>
            <Text style={styles.undertest}>
              Enhance your exam readiness with our latest test series. Access comprehensive practice materials tailored for your success..{' '}
            </Text>
            <FlatList
              contentContainerStyle={styles.latestbox}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={testseries.slice(0, 6)}
              renderItem={renderlatestTest}
            />
            <ViewAll title="View All" customeStyle={{marginTop:"1%",marginBottom:"5%"}}/>

          </View>
          {/*BestSellerIN upcomingbookCommon component */}
          <View style={styles.bestbox}>
            <Text style={styles.bestsellertext}>Best Seller</Text>
            <Text style={styles.bestsellertext2}>
              Discover our release, designed to elevate your learning experience.
              Dive into fresh content for enhanced understanding and mastery.
            </Text>
            <View style={styles.mentorbutton}>
              {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest - 1)}
                style={styles.backarrowmentor}>
                <Entypo name="chevron-small-left" size={20} color={DARKGRAY} />
              </TouchableOpacity> */}
              <FlatList
                overScrollMode="never"
                horizontal
                data={BestSeller}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                ref={flatListRefBest}
                contentContainerStyle={styles.bestsellerscroll}
                renderItem={({ item, index }) => {
                  return <UpcomingCard item={item} isbestseller={true} />;
                }}
              />

              {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest + 1)}
                style={styles.nextarrowmentor}>
                <Entypo name="chevron-small-right" size={20} color={DARKGRAY} />
              </TouchableOpacity> */}
            </View>
            <ViewAll title={'View All'} customeStyle={{ marginTop: '3%', marginBottom: '10%',marginLeft:"3%" }} />

          </View>
        </ScrollView>}
      {isviewseries && <View style={styles.isviewseriesbox}>
        <FreeLive2 item={FreeLive2data} />
        <FlatList
          horizontal
          ref={flatListRefMentor}
          data={MentorData.slice(0, 2)}
          contentContainerStyle={styles.mentoristest2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return <OurMentor item={item} index={index} livevideoprop={true}/>;
          }}
        />
        <View style={styles.boxoftypeofclasses}>
          {typeofclass.map((item, index) => {
            return (<TouchableOpacity key={index}>
              <Text style={[styles.textoftypeofsub, { color: index == 0 ? orange : DARKGRAY, marginLeft: index == 1 && width * 0.1 }]}>{item}</Text>
            </TouchableOpacity>)
          })}
        </View>
        <FlatList
          data={RivisionclassData}
          renderItem={renderRivisionClass}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
            <ViewAll title={'View More'} Icon2={"angle-down"} customeStyle={{ marginBottom: '12%' }} />

        <CrackExam item={Crackexamdata}  onPress={()=>{setExplorCourses(true)}}/>
        <View style={styles.videocardisseries}>
          <VideoCardwithExpert livevideoprop={true}/>
        </View>
         <View style={styles.live2}>
          <Text style={styles.comptext}>Complete Video Course</Text>
          <Text  style={styles.comptext2}>Our step-by-step guides and detailed explanations have your back.</Text>
        <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
        <ViewAll title={'View All'} customeStyle={{ marginTop: '3%' }} />

         </View>
         {/*LIVECLASSESContainer */}
         <View style={styles.liveclasses2container2}> 
            <Text style={styles.live}>Free Video Course</Text>
            <Text style={styles.wonderful2}>
              Our step-bystep guides and detailed explanations have your back.
            </Text>
            <LiveVideoclass2 item={Live_Classes_Video2} classVideo={true} />
            <ViewAll
              title={'View All'}
              customeStyle={{ marginTop: '4%' }}
              Icon2={'angle-down'}
            />
          </View>
          <View style={styles.popularbookcontainers}>
            <Text style={styles.poplulartexts}>Popular books related to the Exams</Text>
                <FlatList
                horizontal
                  overScrollMode="never"
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderPopularbook}
                 contentContainerStyle={{paddingHorizontal:width*0.02}}
                />
        <ViewAll title={'View All'} customeStyle={{ marginVertical: '3%' ,marginLeft:"4%"}} />

              </View>
           <View style={styles.popularcontainer}>
            <Text style={styles.populartext}>Popular trending Courses</Text>
            <Text style={styles.accesspoptext}>Access the latest test series on Exam With Arihant for comprehensive
              exam preparation. Stay ahead with practice and mock tests</Text>
            <LiveVideoclass item={Live_Classes_Video} classVideo={true} />
            <ViewAll title={'View All'} customeStyle={{ marginVertical: '4%' }} />


          </View>
          <View style={styles.testOfonlinebox2}>
            <Text style={styles.testtext}>Latest Test Series</Text>
            <Text style={styles.undertest}>
              Enhance your exam readiness with our latest test series. Access comprehensive practice materials tailored for your success..{' '}
            </Text>
            <FlatList
              contentContainerStyle={styles.latestbox}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={testseries.slice(0, 6)}
              renderItem={renderlatestTest}
            />
            <ViewAll title="View All" />

          </View> 
          <View style={styles.bestbox}>
            <Text style={styles.topmentortext}>Best Seller</Text>
            <Text style={styles.discovertext1}>
              Discover our release, designed to elevate your learning experience.{' '}
           
              Dive into fresh content for enhanced understanding and mastery.{' '}
            </Text>
            <View style={styles.mentorbutton}>
              
              <FlatList
                overScrollMode="never"
                horizontal
                data={BestSeller}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                ref={flatListRefBest}
                contentContainerStyle={styles.bestsellerscroll}
                renderItem={({ item, index }) => {
                  return <UpcomingCard item={item} isbestseller={true} />;
                }}
              />

            </View>
            <ViewAll title={'View All'} customeStyle={{ marginTop: '3%', marginBottom: '10%' }} />

          </View>
          
      </View>}
        </>
      }
    
    </View>
  );
};

export default LiveClassesAndVideoClasses;
