import {View, Text, FlatList, TouchableOpacity, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import FreeLiveQuizeCard from '../../common/FreeLiveQuizeCard';
import {
  BestSeller,
  data,
  FreeLivedata,
  freequizdata,
  preparationData,
  testseriesdata,
} from '../../values/Utility';
import ViewAll from '../../common/ViewAll';
import FreeLiveQuiz from '../../common/FreeLiveQuiz';
import Productcard2 from '../../common/ProducCard2';
import TestseriesCard from '../../common/TestseriesCard';
import UpcomingCard from '../../common/UpcomingCard';
import Entypo from 'react-native-vector-icons/Entypo';
import CrackExambanner from '../../common/CrackExambanner';
import { DARKGRAY } from '../../values/Colors';
import { ImagePath } from '../../values/ImagePath';
import Preparation from '../../common/Preparation';
const{width,height}=Dimensions.get('window')

const FreeQuizes = ({testseries}) => {
  const [freequizcount, setFreequizcount] = useState(4);
  const [showViewAllFreequiz, setShowViewAllFreequiz] = useState(true);
  const [currentIndexcrackbanner, setCurrentIndexcrackbanner] = useState(0);

  const flatListRefBest = useRef(null);
  const flatListRefcrackbanner = useRef(null)
  const crackbannerdata = [1, 2, 3]
  const renderprepbanner = ({ item, index }) => {
    return <Preparation key={index} item={item} />;
  };
 
  const handlecrackscroll = index => {
    if (index >= 0 && index < crackbannerdata.length) {
      flatListRefcrackbanner?.current?.scrollToIndex({ index, animated: true });
      setCurrentIndexcrackbanner(index)
    }}
  const handleViewAllfreequiz = cat => {
    if (cat == 'Freequiz') {
      if (freequizcount === FreeLivedata?.length - 4) {
        setShowViewAllFreequiz(false);
      }
      setFreequizcount(prev => prev + 4);
    }
  };
  const rendercrackexambanner = ({ item, index }) => {
    return <CrackExambanner key={index} />
  }
  const handelViewLessfreequiz = categ => {
    if (categ == 'Freequiz') {
      if (freequizcount === FreeLivedata?.length) {
        setShowViewAllFreequiz(true);
      }
      setFreequizcount(4);
    }
  };

  const renderfreelivequiz = ({item, index}) => {
    return <FreeLiveQuiz key={index} item={item} index={index} />;
  };
  const renderlivefreequize = ({item, index}) => {
    return (
      index < freequizcount && <FreeLiveQuizeCard key={index} item={item} />
    );
  };
  const renderPopularbook = ({item, index}) => {
    return <Productcard2 item={item} />;
  };
  const renderlatestTest = ({item, index}) => {
    return <TestseriesCard key={index} item={item} index={index} />;
  };
  return (
    <View>
      <View>
        <Text style={styles.Attemptext}>
          Attempt
          <Text style={styles.freetext}> FREE LIVE{''} </Text>Quiz
        </Text>
        <Text style={styles.wondertext}>
          A wonderful and unique curriculum that is the best fit for every
          student.
        </Text>
        <FlatList data={freequizdata} renderItem={renderfreelivequiz} />

        <ViewAll
          title={'View More'}
          Icon2={'angle-down'}
          customeStyle={styles.viewmorebox}
        />
        {/*FREELIVEQUIZ */}
        <View style={styles.Freequizbox}>
          <Text style={styles.Attemptext}>
            Attempt
            <Text style={styles.freetext}> FREE LIVE{''} </Text>Quiz
          </Text>
          <Text style={styles.wondertext}>
            A wonderful and unique curriculum that is the best fit for every
            student.
          </Text>
          <FlatList
            data={FreeLivedata}
            numColumns={2}
            contentContainerStyle={styles.livefreequizelist}
            renderItem={renderlivefreequize}
          />
          {showViewAllFreequiz && FreeLivedata?.length > 4 ? (
            <View>
              <ViewAll
                title="View All"
                onPress={() => handleViewAllfreequiz('Freequiz')}
                customeStyle={{marginLeft:"4%",marginTop:"3%"}}
                // Icon2={'angle-down'}
              />
            </View>
          ) : (
            <View>
              <ViewAll
                title={'View less'}
                onPress={() => handelViewLessfreequiz('Freequiz')}
                Icon2={'angle-up'}
                customeStyle={{marginLeft:"4%",marginTop:"3%"}}
              />
            </View>
          )}
          <View
            style={[
              styles.popularbookcontainer3,
              {marginTop: '3%', },
            ]}>
            <Text style={styles.poplulartext}>
              Popular books related to the Exams
            </Text>
            <FlatList
              horizontal
              overScrollMode="never"
              data={data}
              renderItem={renderPopularbook}
              contentContainerStyle={{paddingHorizontal:width*0.017}}
            />
            <ViewAll title={'View All'} customeStyle={{marginTop:"2%",marginLeft:"4.3%"}} />
          </View>
        </View>

        <View style={[styles.testOfonlinebox, {marginTop: '13%'}]}>
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
          <ViewAll title="View All" customeStyle={{marginBottom:"8%"}} />
        </View>
        <View style={{}}>
            <Text style={styles.topmentortext2}>Best Seller</Text>
            <Text style={styles.discovertext1}>
              Discover our release, designed to elevate your learning experience.
              Dive into fresh content for enhanced understanding and mastery.
            </Text>
            <View >
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
            <ViewAll title={'View All'} customeStyle={{ marginTop: '4%', marginBottom: '10%',marginLeft:"4%" }} />

          </View>

              {/* CrackExambanner */}
          <View style={styles.crackbannercontainer}>
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
        </View>
        <View style={{marginTop:"12%"}}>
                  <Image
                    source={ImagePath.banner1}
                    style={styles.bannerstyle}
                  />
              
                  <Image
                    source={ImagePath.banner2}
                    style={styles.bannerstyle}
                  />
                </View>

                <View style={styles.preparationbannerbox}>
        <FlatList data={preparationData} renderItem={renderprepbanner} />
      </View>



      </View>
    </View>
  );
  
};

export default FreeQuizes;
