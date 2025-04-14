import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BestSeller, data, pyqdata} from '../../values/Utility';
import Freepyq from '../../common/Freepyq';
import {styles} from './styles';
import ViewAll from '../../common/ViewAll';
import TestseriesCard from '../../common/TestseriesCard';
import {LIGHTPURPLE} from '../../values/Colors';
import Productcard2 from '../../common/ProducCard2';
import UpcomingCard from '../../common/UpcomingCard';
import {ImagePath} from '../../values/ImagePath';
import AnimatedExplore from '../../common/AnimatedExplore';
import Button from '../../common/Button';
const {width, height} = Dimensions.get('window');

const FreePyqDownload = ({testseries}) => {
  const [isanimationtrue, setIsanimationtrue] = useState(false);

  const scrollanimationRef = useRef(null);

  const flatListRefBest = useRef(null);

  const renderlatestTest = ({item, index}) => {
    return <TestseriesCard key={index} item={item} index={index} />;
  };
  const scrollToanimation = yPosition => {
    if (yPosition === 1300 && !isanimationtrue) {
      setIsanimationtrue(true); // Set only if not already true
      console.log('Animation started for position 1300');
    }
  };
  const renderPopularbook = ({item, index}) => {
    return <Productcard2 item={item} />;
  };
  const renderpyq = ({item, index}) => {
    return <Freepyq key={index} item={item} index={index} />;
  };

  return (
    <ScrollView onScroll={scrollToanimation(1300)} ref={scrollanimationRef}>
      <View>
        <View style={styles.pyqhedingcontainer}>
          <View style={styles.pyqhedingcontainer}>
            <Text style={styles.pyqtitle}>
              JEE Main 2024 <Text style={styles.innerfreetext}>Free PYQs</Text>
            </Text>
            <Text style={styles.wondertext2}>
              A wonderful and unique curriculum that is the best fit for every
              student.
            </Text>
          </View>
          <FlatList data={pyqdata} renderItem={renderpyq} />
        </View>

        <ViewAll
          title={'View More'}
          customeStyle={{marginBottom:"8%",marginTop:"2%"}}
          Icon2={'angle-down'}
        />
        <View
          style={[
            styles.testOfonlinebox,
            {paddingTop: '10%',marginTop:"5%", backgroundColor: LIGHTPURPLE},
          ]}>
          <Text style={styles.testtext}>Test Series</Text>
          <Text style={styles.undertest}>
            In this course you will learn from basics to advancel Intelligence
            with hands-on experience.{' '}
          </Text>
          <FlatList
            contentContainerStyle={styles.latestbox}
            horizontal
            data={testseries.slice(0, 6)}
            renderItem={renderlatestTest}
          />
          <ViewAll title="View All" customeStyle={{marginBottom:height*0.02}} />
          <View style={[styles.popularbookcontainer2, {paddingBottom: 0}]}>
            <Text style={styles.poplulartext}>
              Popular books related to the Exams
            </Text>
            <FlatList
              horizontal
              overScrollMode="never"
              data={data}
              renderItem={renderPopularbook}
              contentContainerStyle={{paddingHorizontal:width*0.02}}
            />
            <ViewAll title={'View All'} customeStyle={{marginTop:"3%",marginBottom:"10%",marginLeft:width*0.045}} />
          </View>
        </View>

        <View style={styles.bestbox}>
          <Text style={styles.topmentortext2}>Best Seller</Text>
          <Text style={styles.bestsellerlowertext}>
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
              renderItem={({item, index}) => {
                return <UpcomingCard item={item} isbestseller={true} />;
              }}
            />

            {/* <TouchableOpacity
                onPress={() => handlebestscroll(currentIndexbest + 1)}
                style={styles.nextarrowmentor}>
                <Entypo name="chevron-small-right" size={20} color={DARKGRAY} />
              </TouchableOpacity> */}
          </View>
          <ViewAll
            title={'View All'}
            customeStyle={{marginTop: '3%', marginBottom: '10%',marginLeft:"4%"}}
          />
        </View>

        <View style={styles.animationtext}>
          <Text style={styles.heading}>
            Excel Exams with
            <Text style={styles.headingArihant}> Arihant Plus</Text> Online
            Masterclass
          </Text>
          <Text style={styles.subHeading}>
            Gain access to expert-led sesssions, comprehensive study materials,
            and personalized guidance designed to help you master every subject
            and achieve top scores. Join now and unlock your potential with
            Arihant
          </Text>
        </View>

        <AnimatedExplore isanimating={isanimationtrue} />

        {/* EXAM COMPONENTS */}
        <View
          style={{
            marginTop: -height * 0.015,
          }}>
          <Image source={ImagePath.banner1} style={styles.bannerstyle} />
        </View>
        <View>
          <Image source={ImagePath.banner2} style={styles.bannerstyle} />
        </View>

        <View style={styles.newslatter1}>
          <View style={styles.newslatter}>
            <Text style={styles.newslattertext}>
              Our Monthly Newsletter for Exclusive Content, Exams Tips, New
              Releases and more...
            </Text>
            <Button
          
              customStyles={styles.subscribebutton}
              text={'Subscribe'}
              textStyle={styles.subscribetext}
              icon2={ImagePath.subscribeArrow}
              iconStyle2={styles.rightarrowimage}
              // vector2color={WHITE}
            />
          </View>
          <Image
            style={styles.newsletterImage}
            source={ImagePath.newsletterImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FreePyqDownload;
