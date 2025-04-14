import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../common/Header';
import { styles } from './styles';
import MarqueeView from 'react-native-marquee-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  LIGHTBLUE,
  LIGHTGRAY,
  LIGHTGRAY2,
  LIGHTGRAY3,
  LIGHTPURPLE,
  LIGHTPURPLE2,
  orange,
  RED,
  WHITE,
  Yellow,
} from '../../values/Colors';
import { ImagePath } from '../../values/ImagePath';
import Productcard from '../../common/Productcard';
import { APICall } from '../../Services/ApiCall';
import UpcomingCard from '../../common/UpcomingCard';
import TestseriesCard from '../../common/TestseriesCard';
import Experts from '../../common/Experts';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Octions from 'react-native-vector-icons/Octicons';
import AnimatedExplore from '../../common/AnimatedExplore';
import ViewAll from '../../common/ViewAll';
import Filters from '../../common/Filters';
import ModalCommon from '../../common/ModalCommon';
import Button from '../../common/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

import { testseriesdata } from '../../values/Utility';

import Entypo from 'react-native-vector-icons/Entypo';

import OnlineTestSeries from './OnlineTestSeries';
import LiveClassesAndVideoClasses from './LiveClassesAndVideoClasses';
import FreeQuizes from './FreeQuizes';
import FreePyqDownload from './FreePyqDownload';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import index from '../Auth/Login';
import { IsidoraMedium } from '../../values/Fonts';
import DeviceInfo from 'react-native-device-info';
import CurrentAffairs from './CurrentAffairs';
const isTablet = DeviceInfo.isTablet()

const { width, height } = Dimensions.get('window');
const Category = ({ route }) => {
  console.log(route?.params?.data, "routesssssss")
  const Routedata = route?.params?.data
  const latestUpdates = [
    '2025 Admit Card Released',
    'JEE Main 2025 Admit Card Released',
    'BITSAT 2025 Result',
    'JEE Main 2025 Admit Card Released',
    '2025 Admit Card Released',
  ];
  const navigation = useNavigation();
  const categories = [
    {
      name: 'Study Books & Resources',
      route: 'BookList',
      icon: ImagePath.category1,
    },
    {
      name: 'Online Test Series',
      route: 'TestSeries',
      icon: ImagePath.category2,
    },
    {
      name: 'Live Classes & Video Classes',
      route: 'LiveClass',
      icon: ImagePath.category3,
    },
    {
      name: 'Free Quizzes',
      route: 'FreeQuiz',
      icon: ImagePath.category4,
    },
    {
      name: 'Free PYQs Download',
      route: 'PYQ',
      icon: ImagePath.category5,
    },
    {
      name: 'About Exam',
      route: 'AboutExam',
      icon: ImagePath.category6,
    },
    {
      name: 'Current Affairs',
      route: 'CurrentAffairs',
      icon: ImagePath.category7,
    },
  ];
  const experts = [
    {
      name: 'DC Pandey',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
    {
      name: 'Amit M Agarwal',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
    {
      name: 'DC Pandey',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
    {
      name: 'Amit M Agarwal',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
    {
      name: 'DC Pandey',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
    {
      name: 'Amit M Agarwal',
      designation: 'Author and JEE Mentor',
      about: 'Physics classes for IIT JEE/NEET Aspirants.',
      image: ImagePath.expert1,
    },
  ];
  const Filtercategory = [
    { title: 'Subjects', options: ['Physics', 'Mathematics'] },
    { title: 'Languages', options: ['English', 'Hindi'], withTopLine: true },
    {
      title: 'Type',
      options: [
        'Study Guide',
        'Practice Sets',
        'Solved Papers',
        'Practice & Solved',
        'Reference Books',
        'New Releases',
      ],
      isGrayBackground: true,
    },
    { title: 'Format', options: ['Paper Back', 'E-Book', 'Audible'] },
    {
      title: 'Review & Ratings',
      options: ['Best Seller', 'Best Rated'],
      withTopLine: true,
    },
    {
      title: 'Discount & Deals',
      options: ['20%', '30%', 'Offers', 'Free Delivery'],
    },
  ];

  const filterData = [
    'WB JEE',
    'TS EAMCET',
    'AP EAPCET',
    'KCET',
    'Manipal',
    'Kerala CET',
    'VIT',
    'JEE Advanced',
    'JEE Main',
    'BITSAT',
    'MHT-CET',
  ];
  const [filterSelected, setFilterSelected] = useState(0);
  const [selected, setSelected] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [upcomingBooks, setUpcomingBooks] = useState([]);
  const [listCount, setListCount] = useState(isTablet ? 6 : 4); //Upcoming Books Count
  const [testseries, setTestseries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showViewAllBookList, setShowViewAllBookList] = useState(true);
  // const [isfiltermodalvisible, setFiltermodalvisible] = useState(false);
  const [filters, setFilters] = useState(Filtercategory);
  const [activeTestSeries, setActiveTestSeries] = useState(null);
  const [currentindexExpert, setCurrentindexExpert] = useState(0);
  const [testserieschange, setTestSeriesChange] = useState(false);
  const [isFilter, setIsFilter] = useState(true);
  const [filter1modal, setFilter1modal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isanimationtrue, setIsanimationtrue] = useState(false);
  const scrollanimationRef = useRef(null);
  const [loader, setloader] = useState(false)
  const focus = useIsFocused
  // const scrollXN = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (Routedata) {

      setSelected(Routedata)
    }
  }, [Routedata])
  const flatListRefExpert = useRef(null);
  const boxwidth = width * 0.3;
  const toggleOption = (category, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev[category]?.[option],
      },
    }));
  };

  const scrollToanimation = yPosition => {
    if (yPosition === 1300 && !isanimationtrue) {
      setIsanimationtrue(true); // Set only if not already true
      console.log('Animation started for position 1300');
    }
  };
  const renderOption = (category, option) => {
    const isSelected = selectedFilters[category]?.[option] || false;

    return (
      <TouchableOpacity
        key={option}
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
        onPress={() => toggleOption(category, option)}>
        <Icon
          name={isSelected ? 'check-box' : 'check-box-outline-blank'}
          size={20}
          color={isSelected ? '#FFA500' : '#000'}
        />
        <Text style={{ fontSize: 14, marginLeft: 8 }}>{option}</Text>
      </TouchableOpacity>
    );
  };
  // const scaleCard = (index) => {

  //   const inputRange = [(index - 1) * (boxwidth), index * (boxwidth + spacing), (index + 1) * (boxwidth + spacing)]
  //   const scale = scrollXN.interpolate({
  //     inputRange,
  //     outputRange: [1, 1.2, 1],
  //     extrapolate: 'clamp'
  //   })
  //   return scale
  // }
  const handleActiveTestSeries = id => {
    setActiveTestSeries(id);
  };

  const scrollToindexexpert = index => {
    if (index >= 0 && index < experts.length - 1) {
      flatListRefExpert?.current.scrollToIndex({ index, animated: true });
      setCurrentindexExpert(index);
    }
  };

  const renderUpcomingbook = ({ item, index }) => {
    return <UpcomingCard key={index} item={item} isupcomingcard={true} />;
  };
  const renderlatestTest = ({ item, index }) => {
    return <TestseriesCard key={index} item={item} index={index} />;
  };

  // GET BOOK LIST DATA
  const getBookList = async () => {
    await APICall(
      'GET',
      'book/list/',
      {},
      response => {
        setBookList(response?.items);
        setUpcomingBooks(response?.upcoming_books);
        setTestseries(response?.latest_test_series);
        setLoading(false);
        console.log(response?.latest_test_series,'data')
      },
      error => {
        setLoading(false);
        console.error('API Error:', error);
      },
    );
  };


  useEffect(() => {
    getBookList();
    if (testseriesdata.length > 0) {
      setActiveTestSeries(testseriesdata[0].id);
    }
  }, [testseriesdata]);

  const handleViewAll = cat => {
    setloader(true)
    if (cat == 'BookList') {

      if (isTablet ? listCount === bookList?.length - 6 : listCount === bookList?.length - 4) {
        setShowViewAllBookList(false);
      }
      isTablet ?
        setListCount(prevState => prevState + 6)
        :
        setListCount(prevState => prevState + 4)

      setloader(false)
    }
  };
  const handelViewLess = categ => {
    if (categ == 'BookList') {
      if (listCount === bookList?.length) {
        setShowViewAllBookList(true);
      }
      isTablet ?
        setListCount(6)
        :
        setListCount(4)

    }
  };
  const Toggleoptionselection = (categoryindex, optionindex) => {
    const selectedfilters = [...filters];
    const selectedfiltercategory = selectedfilters[categoryindex];
    const selectedfilteroption = selectedfiltercategory.option[optionindex];
    selectedfilteroption.selected = !selectedfilteroption.selected;
    setFilters(selectedfilters);
  };
  const renderfilteroption = (categoryindex, optionitem, optionindex, item) => (
    <View
      key={optionindex}
      style={[
        styles.optionbox,
        {
          paddingLeft:
            item.category == 'Type' || item.category == 'Discount & Deals'
              ? '6%'
              : null,
        },
      ]}>
      <TouchableOpacity
      activeOpacity={0.5}
        onPress={() => Toggleoptionselection(categoryindex, optionindex)}>
        <FontAwesome
          name={optionitem.selected ? 'square' : 'square-o'}
          size={18}
          color={optionitem.selected ? orange : GRAY}
        />
      </TouchableOpacity>
      <Text style={styles.optionname}>{optionitem?.name}</Text>
    </View>
  );
  const renderfiltercategory = ({ item, index }) => (
    <View key={index} style={styles.filtercategorybox}>
      <Text
        style={[
          styles.categoryname,
          {
            backgroundColor: item.category == 'Type' ? LIGHTGRAY3 : null,
            paddingLeft:
              item.category == 'Type' || item.category == 'Discount & Deals'
                ? '6.5%'
                : '12%',
          },
        ]}>
        {item.category}
      </Text>
      <View
        style={{
          flexDirection: item.option.length > 3 ? 'row' : null,
          flexWrap: item.option.length > 3 ? 'wrap' : null,
          backgroundColor: item.category == 'Type' ? '#DFE1E5' : null,
          paddingHorizontal: item.option.length > 3 ? '0%' : '0%',
          // marginRight:5,
          paddingBottom: '2%',
          // paddingLeft:"5%",
          // backgroundColor:"red"
        }}>
        {item.option.map((optionitem, optionindex) =>
          renderfilteroption(index, optionitem, optionindex, item),
        )}
      </View>
    </View>
  );

  return (
    <>
        <SafeAreaView style={styles.main}>

          <Header showinitialbox={true} showback={true} showmiddlebox={true} />

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} color={orange} />
        </View>
      ) : (
        <>
          <ScrollView
            overScrollMode="never"
            onScroll={scrollToanimation(1300)}
            bounces={false}
            ref={scrollanimationRef}>

            <View>
              {/* {below header image text} */}
              {
                isTablet ?
                  <Image source={ImagePath.TabBannertop} style={styles.upperBigimageTab} />
                  :
                  <Image source={ImagePath.bigimage} style={styles.upperBigimage} />


              }
              <Text style={styles.Home}>
                Home /
                <Text style={styles.other}> Jee & Other Engg Entrances </Text>
              </Text>
              <Text style={styles.Jee}>JEE & Other Engg Entrance</Text>
            </View>
            {/* CATEGORY SELECTION */}
            <ScrollView
              overScrollMode="never"
              horizontal
              style={[
                styles.categoryContainer,
                // {paddingLeft: index == 0 ? width * 0.02 : null},
              ]}
              showsHorizontalScrollIndicator={false}>
              {categories?.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(index);
                      setIsFilter(true);
                    }}
                    style={[
                      styles.categoryButton,
                      {
                        marginLeft: index == 0 ? width * 0.03 : null,
                        borderColor: selected === index ? Yellow : LIGHTGRAY2,
                        borderWidth: selected === index ? 0.9 : 0.8,
                      },
                    ]}>
                    <Image source={item?.icon} style={styles.categoryIcon} />
                    <Text
                      style={[
                        styles.categoryText,
                        { color: selected === index ? Yellow : DARKGRAY },
                      ]}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* TOP SCROLLER */}
            <MarqueeView
              style={styles.marquee}
              marqueeOnStart={true}
              speed={0.18}
              loop={true}
              playing={true}
              autoPlay={true}>
              <View style={styles.marqueeContainer}>
                {latestUpdates.map((item, index) => (
                  <View style={styles.marqueeTextContainer}>
                    <FontAwesome name="circle-thin" color={RED} size={9} />
                    <Text key={index} style={styles.scrollText}>
                      {item}{' '}
                    </Text>
                  </View>
                ))}
              </View>
            </MarqueeView>


            {isFilter ? (
              <Filters
                filterData={filterData}
                filterSelected={filterSelected}
                setFilterSelected={setFilterSelected}
                onPress={() => setFilter1modal(true)}
              />
            ) : null}
            {/*COMMON MODAL */}
            {
              loader ?
                <ActivityIndicator size={"large"} color={orange} />
                :

                <ScrollView
                  overScrollMode="never"
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.bookListContainer}>
                  {selected === 0 &&
                    bookList?.map((item, index) => {
                      return index < listCount ? (
                        <Productcard
                          item={item}

                          customStyles={
                            isTablet ?
                              {
                                marginLeft:
                                  index % 3 == 0 ? width * 0.012 : width * 0.032,
                                width: width / 3.55,
                                // backgroundColor:"red"
                              }
                              :
                              {
                                marginLeft:

                                  index % 2 == 0 ? width * 0.012 : width * 0.032,
                                width: width / 2.25,
                              }
                          }
                          styleC={true}
                          onPress={() =>
                            navigation.navigate('Bookdetail', {
                              testseries: testseries,
                            })
                          }
                        />
                      ) : null;
                    })}
                </ScrollView>
            }
            {selected === 0 ? (
              <>
                {
                  loader ?
                    <ActivityIndicator size={"small"} color={orange} />
                    :
                    <>

                      {showViewAllBookList && bookList.length > 4 ? (
                        <ViewAll
                          customeTextStyle={{ fontFamily: IsidoraMedium }}
                          title="View More"
                          onPress={() => handleViewAll('BookList')}
                          Icon2={'angle-down'}
                        />
                      ) : (
                        <ViewAll
                          customeTextStyle={{ fontFamily: IsidoraMedium }}
                          title={'View less'}
                          onPress={() => handelViewLess('BookList')}
                          Icon2={'angle-up'}
                        />
                      )}
                    </>
                }

              </>
            ) : null}

            {/* COMMON BOTTOM COMPONENTS*/}

            {selected == 1 && (
              <OnlineTestSeries
                testseries={testseries}
                activeTestSeries={activeTestSeries}
                handleActiveTestSeries={handleActiveTestSeries}
                setIsFilter={setIsFilter}
                onpress={() => {
                  setFilter1modal(true);
                }}
              />
            )}
            {selected === 2 && (
              <LiveClassesAndVideoClasses
                testseries={testseries}
                activeTestSeries={activeTestSeries}
                handleActiveTestSeries={handleActiveTestSeries}
                settestserieschange={setTestSeriesChange}
              />
            )}
            {selected === 3 && <FreeQuizes testseries={testseries} />}
            {/*select=3 Components */}
            {selected === 4 && <FreePyqDownload testseries={testseries} />}
            {selected === 6 && <CurrentAffairs testseries={testseries} />}

            {/* UPCOMING BOOKS */}
            {selected == 0 && (
              <>
                <View style={styles.upcomingMainContainer}>
                  <View style={styles.upcomingContainer}>
                    <View style={styles.upcomingTitle}>
                      <Text style={styles.upcomingText}>Upcoming Books</Text>
                    </View>
                  </View>
                  <View style={styles.upbookbox}>
                    <FlatList
                      horizontal
                      overScrollMode="never"
                      showsHorizontalScrollIndicator={false}
                      data={upcomingBooks.slice(0, 6)}
                      renderItem={renderUpcomingbook}
                      removeClippedSubviews={true}
                      contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
                    />
                  </View>
                </View>
                <ViewAll
                  customeTextStyle={{ fontFamily: IsidoraMedium }}
                  customeStyle={{ marginBottom: '2%' }}
                  title="View All"
                />
                {/* LATEST TEST SERIES*/}

                <View style={styles.testseriesMainContainer}>
                  <Text style={styles.testseriesTitle}>Latest Test Series</Text>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.latestbox}
                    overScrollMode="never"
                    data={testseries.slice(0, 6)}
                    renderItem={renderlatestTest}
                  />
                  <ViewAll
                    customeTextStyle={{ fontFamily: IsidoraMedium }}
                    title="View All"
                  // customeStyle={{marginLeft:"5%"}}
                  />
                </View>

                {/* ANIMATED COMPONENT */}

             
                <View style={{}}>
                
                  
                {
                  isTablet ?
                  <View style={{ flexDirection: "row", width: width, backgroundColor: WHITE, marginBottom: "10%",paddingBottom:'2%' }}>
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

                </View>
                :
<View>

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

                  <AnimatedExplore isanimating={isanimationtrue} /> 
                  </View>
                  </View>

                  
                }

                  {/* EXAM COMPONENTS */}
                  <View
                    style={isTablet ? {
                      marginTop: -height * 0.02,
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      // backgroundColor: "red",
                      width: width
                    }
                      : {
                        marginTop: -height * 0.02
                      }
                    }
                  >
                    <View
                    >
                      <Image
                        source={ImagePath.banner1}
                        style={styles.bannerstyle}
                      />
                    </View>
                    <View>
                      <Image
                        source={ImagePath.banner2}
                        style={styles.bannerstyle}
                      />
                    </View>
                  </View>


                  <View style={{}}>
                    <View style={styles.ourexpertcontainer}>
                      <Text style={styles.ourexpertTitle}>Our Experts</Text>
                    </View>
                    <View style={styles.ourexpertbox}>
                      <TouchableOpacity
                        onPress={() =>
                          scrollToindexexpert(currentindexExpert - 1)
                        }
                        style={styles.backarrow}>
                        <Entypo
                          name="chevron-small-left"
                          size={20}
                          color={DARKGRAY}
                        />
                      </TouchableOpacity>
                      <FlatList
                        ref={flatListRefExpert}
                        data={experts}
                        horizontal
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                          return (
                            <View style={{}}>
                              <Experts item={item} index={index} />
                            </View>
                          );
                        }}
                      />

                      <TouchableOpacity
                        onPress={() =>
                          scrollToindexexpert(currentindexExpert + 1)
                        }
                        style={styles.nextarrow}>
                        <Entypo
                          name="chevron-small-right"
                          size={20}
                          color={DARKGRAY}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            )}
          </ScrollView>
          {/* 
          <ModalCommon
            animationType={'slide'}
            visible={isfiltermodalvisible}
            onClose={() => setFiltermodalvisible(false)}
            color={WHITE}
            CustomModalbox={styles.filtermodalbox}
            CustomStyleModal={styles.filtermodal}
            showheading={true}
            heading={'Filters'}

            showclose={true}
            customStyleforClose={styles.filterclose}

            crossbuttonStyle={styles.modalcross}>
            <View style={styles.filtercontainer}>
              <FlatList
                data={filters}
                key={(item, index) => index.toString()}
                contentContainerStyle={styles.categorylist}
                renderItem={renderfiltercategory}
              />
              <Button
                onPress={() => setFiltermodalvisible(false)}
                text={'Apply'}
                customStyles={styles.applybutton}
                textStyle={styles.applybuttontext}
              />
            </View>
          </ModalCommon> */}
          <Modal
            visible={filter1modal}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setFilter1modal(false)}>
            <View style={styles.mainfiltercontainer}>
              <View style={styles.innerfiltermodal}>
                <View style={styles.headerfilbox}>
                  <Text style={styles.filterheadtext}>Filters</Text>
                  <TouchableOpacity
                    style={styles.crossfilter}
                    onPress={() => setFilter1modal(false)}>
                    <Octions name="x" size={isTablet?width*0.03:width * 0.045} color={WHITE} />
                  </TouchableOpacity>
                </View>
                <View style={styles.filterinner1}>
                  {Filtercategory.map((item, index) => {
                    const isLine =
                      item?.title == 'Languages' ||
                      item?.title == 'Review & Ratings';
                    const isLine2 = item?.title == 'Discount & Deals';
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          backgroundColor:
                            item?.title == 'Type' ? LIGHTGRAY3 : null,
                          paddingHorizontal: width * 0.05,
                          paddingRight:
                            item?.title == 'Type' ||
                              item?.title == 'Discount & Deals'
                              ? width * 0.09
                              : null,
                          marginTop: height * 0.02,
                          paddingVertical: item?.title == 'Type' ? "4%" : null,
                          // paddingTop:
                          //   item?.title == 'Type' ? height * 0.02 : null,
                          // paddingBottom:item?.title == 'Discount & Deals'?height*0.02:null
                        }}>
                        {isLine2 && <View style={styles.line1f} />}

                        {isLine && (
                          <View
                            style={{
                              width: width * 0.003,
                              height:
                                item?.title == 'Languages'
                                  ? isTablet?height*0.09: height * 0.11
                                  : isTablet?height*0.11: height * 0.14,
                              backgroundColor: LIGHTGRAY2,
                              position: 'absolute',
                              right: width * 0.48,
                              top: height * 0.008,
                            }}
                          />
                        )}
                        <View>
                          <Text style={styles.titleF}>{item?.title}</Text>
                          <View
                            style={{
                              flexDirection:
                                item?.options.length > 3 ? 'row' : 'column',
                              justifyContent:
                                item?.options.length > 3
                                  ? 'space-between'
                                  : null,
                              flexWrap: item.options.length > 3 ? 'wrap' : null,
                            }}>
                            {item?.options.map((option, optionIndex) => {
                              const isSelected =
                                selectedFilters[item.title]?.[option] || false;
                              return (
                                <TouchableOpacity
                                  key={optionIndex}
                                  style={styles.optionFbox}
                                  onPress={() =>
                                    toggleOption(item.title, option)
                                  }>
                                  <View
                                    style={{
                                      height: isTablet?width * 0.028:width * 0.04,
                                      width:  isTablet?width * 0.028:width * 0.04,
                                      backgroundColor: isSelected
                                        ? orange
                                        : null,
                                      borderWidth: isTablet?0.6:0.7,
                                      borderRadius: width * 0.005,
                                    }}
                                    
                                  />
                                  <Text style={styles.optonF}>{option}</Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        </View>
                      </View>
                    );
                  })}

                </View>
                <Button
                  onPress={() => setFilter1modal(false)}
                  text={'Apply'}
                  customStyles={styles.applybutton}
                  textStyle={styles.applybuttontext}
                />
              </View>
            </View>
          </Modal>
          </>

      )}
        </SafeAreaView>

    </>
  );
};

export default Category;
