import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImagePath } from '../../values/ImagePath';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  BLACK,
  DARKGRAY,
  GRAY,
  inputBordercolor,
  LIGHTGRAY2,
  orange,
  ratingcolor,
  WHITE,
} from '../../values/Colors';
import Shipping from '../../common/Shipping';
import Publish from '../../common/Publish';
import Header from '../../common/Header';
import HTMLView from 'react-native-htmlview';
import { IsidoraBold, IsidoraRegular, IsidoraSemiBold } from '../../values/Fonts';
import HtmlrenderDetailpage from '../../common/HtmlrenderDetailpage';
import Reviewscard from '../../common/Reviewscard';
import { APICall } from '../../Services/ApiCall';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import PublisherDetail from '../../common/PublisherDetail';
import Topreview from '../../common/Topreview';
import PriceCategorycard from '../../common/PriceCategory';
import Oldissue from '../../common/Oldissue';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FrequentlyBought from '../../common/FrequentlyBought';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TestseriesCard from '../../common/TestseriesCard';
import AnimatedExplore from '../../common/AnimatedExplore';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Reviews from '../../common/Reviews';
import ModalCommon from '../../common/ModalCommon';
import Button from '../../common/Button';
import Productcard from '../../common/Productcard';
import { data, FreqCategory, readsampleheaddata } from '../../values/Utility';
import ViewAll from '../../common/ViewAll';
import Video from 'react-native-video';
import VideoPlayer from '../../common/VideoPlayer';
import sampleVideo from '../../assets/images/nature.mp4';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Productcard2 from '../../common/ProducCard2';
import GuideCard from '../../common/GuideCard';
import Pdf from 'react-native-pdf';
import { ScreenRatio } from '../../values/Ratio';
import DeviceInfo from 'react-native-device-info';
const pdflink = 'https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf';
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()
const Paperpricecategory = [
  { papername: 'Paperback', MRP: 770, id: 1 },
  { papername: 'eBook', MRP: 175, id: 2 },
  { papername: 'Paperback + eBook', MRP: 900, id: 3 },
];
const publisDetail = [
  { name: 'Print length', image: ImagePath.page1, detail: '488 Pages' },
  { name: 'Language', image: ImagePath.language, detail: 'English' },
  { name: 'Publisher', image: ImagePath.publisher, detail: 'Arihant' },
  {
    name: 'Publication Date',
    image: ImagePath.calender,
    detail: '20 January 2020',
  },
  { name: 'File Size', image: ImagePath.file, detail: '20050 KB' },
  { name: 'ISBN - 13', image: ImagePath.sbn, detail: '978-93-59989-433' },
];
const Topper = [
  {
    topperin: 'JEE Main Toppers',
    name: 'Anish Kr. Singh',
    image: ImagePath.topper,
    background: ImagePath.background2,
  },

  {
    topperin: 'Recommended by Teachers, Trusted by Toppers',
    image: ImagePath.toppergirl,
    // background:ImagePath.background1
  },
  {
    topperin: 'JEE Main Toppers',
    name: 'kasish Kr. Singh',
    image: ImagePath.topper,
    background: ImagePath.background2,
  },
];

const Bookdetail = () => {
  const route = useRoute();
  const { testseries } = route.params;
  const [bookDetaildata, setbookDetaildata] = useState('');
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [htmlContent, setHtmlContent] = useState('');
  const [topreview, setTopreview] = useState([]);
  const [selectedfreqid, setSelectedfreqid] = useState([1]);
  const [selectedPaperbox, setSelectedPaperbox] = useState(
    Paperpricecategory[0].id,
  );
  const [isreviewModalVisible, setreviewModalVisible] = useState(false);
  const [isquickviewModalVisible, setQuickviewModalVisible] = useState(false);
  const [selectedquickViewimage, setSelectedquickViewimage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sharemodalVisible, setShareModalVisible] = useState(false);
  const [openReadsampleModal, setOpenReadsampleModal] = useState(false);
  const [DisableScroll, setDisableScroll] = useState(true);
  const [currentoffset, setCurrentoffset] = useState(0);
  const [ratingText, setRatingText] = useState();
  const scrollref = useRef(null);
  const navigation = useNavigation();
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 6 reviews
  const [modalofpdf, setModalofpdf] = useState(false);
  const [isanimationtrue, setIsanimationtrue] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [loader, setloader] = useState(true);
  
  const scrollViewRef = useRef(null);
  const scrollToanimation = yPosition => {
    if (yPosition === 4550 && !isanimationtrue) {
      setIsanimationtrue(true); // Set only if not already true
      // console.log('Animation started for position 1300');
    }
  };
  const scrollToSection = yPosition => {
    scrollViewRef.current?.scrollTo({
      y: yPosition, // Vertical offset
      animated: true, // Scroll animation
    });
  };
  // Function to handle "View More" or "View Less"
  const handleToggleView = () => {
    if (visibleCount >= topreview.length) {
      setVisibleCount(5); // Collapse back to the first 6 items
    } else {
      setVisibleCount(prev => prev + 5); // Show 6 more items
    }
  };

  const handlenext = () => {
    const maxOffset = (publisDetail.length * width) / 4.5; // Total width of all items
    const newoffset = isTablet?currentoffset + width / 2:currentoffset + width / 1.1;
    console.log(newoffset, 'new========');
    console.log(maxOffset, 'max======');
    if (newoffset < maxOffset) {
      // Check if next scroll stays within bounds
      scrollref?.current?.scrollTo({
        x: newoffset,
        animated: true,
      });
      setisVisible(true);
      setCurrentoffset(newoffset);
    }
  };
  const handleprev = () => {
    const newoffset = isTablet?currentoffset - width / 2:currentoffset - width / 1.1;
    console.log(newoffset, 'new============');
    if (newoffset >= 0) {
      // Prevent scrolling past the start
      scrollref?.current?.scrollTo({
        x: newoffset,
        animated: true,
      });
      setisVisible(false);
      setCurrentoffset(newoffset);
    }
  };

  const openModal = () => {
    setModalVisible(true);
    setDisableScroll(false);
  };

  const { width, height } = Dimensions.get('window');
  const imagebaseurl = 'https://examwitharihant.com';

  const swiperData = testseries.slice(0, 6);
  // const htmlContent = `<p><ul><li>Only PYQ book with difficulty level wise solved questions.</li><li>Segregation of question papers in Chapterwise-Topicwise  manner.</li><li>Practice MCQs are based on frequently asked concepts.</li><li>Solutions to all the questions are kept in detailed and accurate &nbsp;&nbsp;&nbsp;&nbsp;manner.</li><li>Key Idea, Concept Enhancer & Alternate/Time Saver Techniques &nbsp;&nbsp;&nbsp;&nbsp;given in solutions.</li></ul></p><h1>WHY THIS BOOK?</h1><P><ul><Li>Designed with last 23 years (2002-2024) solved papers for  &nbsp;&nbsp;&nbsp;&nbsp;Mathematics.</li><li>The most authentic collection of online & offline papers of JEE Main &nbsp;&nbsp;&nbsp;& AIEEE</li></ul></P>`;

  const ReviewData = [
    { rating: 5, ratingNumber: 0.52, ratingpercentage: 52 },
    { rating: 4, ratingNumber: 0.24, ratingpercentage: 24 },
    { rating: 3, ratingNumber: 0.12, ratingpercentage: 12 },
    { rating: 2, ratingNumber: 0.04, ratingpercentage: 4 },
    { rating: 1, ratingNumber: 0.08, ratingpercentage: 8 },
  ];
  const Quickimages = [
    { id: 1, image: ImagePath.frontpage },
    { id: 2, image: ImagePath.backpage },
    { id: 3, image: ImagePath.quickpage },
    { id: 4, image: ImagePath.quickpage },
  ];
  const handleOpenquickview = image => {
    setSelectedquickViewimage(image);
    setQuickviewModalVisible(true);
  };

  const handlefreqidtoggle = id => {
    console.log(id, 'iddddddddddddddddddddd');

    if (selectedfreqid.includes(id)) {
      setSelectedfreqid(selectedfreqid.filter(item => item !== id));
    } else {
      setSelectedfreqid([...selectedfreqid, id]);
    }
  };

  const handleselectedpaper = id => {
    setSelectedPaperbox(id);
  };
  // setRatingText(Number())
  const formatednumber = Number(bookDetaildata?.rating);
  // console.log(,"sss");

  const getbookdetail = async () => {
    await APICall(
      'GET',
      'book/details/sanklap-series-for-railway-exam-2024-complete-study-guide-for-samanya-jagrukta-ga-useful-for-group-d-ntpc-alp-rfsi-constable-with-online-suppor-9789364376945/',
      {},
      response => {
        setLoading(false);
        if (response.status !== 200) {
          setIsActive(false);
        } else {
          setLoading(false);
          setbookDetaildata(response?.item_details);
          setTopreview(response?.item_details?.reviews);
          setHtmlContent(response?.item_details?.description);
          setIsActive(true);
        }
      },
      error => {
        console.log(error, 'error bookdetail');
        setLoading(false);
      },
    );

  };

  useFocusEffect(
    useCallback(() => {
      getbookdetail();
    }, []),
  );
  const renderPopularbook = ({ item, index }) => {
    return (
      <Productcard2
        item={item}
        customStyles={{ marginTop: '2%' }}
        index={index}
      />
    );
  };
  const renderItem = ({ item, index }) => {
    return <TestseriesCard item={item} index={index} />;
  };
  
  const handleOnLoad=() => {
    setloader(false)
  }

  return (
    <SafeAreaView style={styles.Detailpage}>

      <Header
        showinitialbox={true}
        showback={true}
        showmiddlebox={true}
        showlastbox={true}
        title={'BookDetail'}
        textStyle={styles.title}
      />
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={orange} />
        </View>
      ) : (
        <ScrollView
          ref={scrollViewRef}
          scrollEnabled={DisableScroll}
          bounces={false}
          overScrollMode='never'
          onScroll={scrollToanimation(4550)}>
          {isActive === true ? (
            <>
              {
                isTablet ?
                  <Image source={ImagePath.TabBannertop} style={styles.upperBigimageTab} />
                  :
                  <Image source={ImagePath.bigimage} style={styles.upperBigimage} />


              }
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.homejee}>
                Home / Jee & Other Engg Entrances /
                <Text style={styles.years}> 23 Years(2024-2002) JEE Main</Text>
              </Text>
              {
                !isTablet ?
                  <View style={styles.aboutbook}>
                    <View style={styles.headingbox}>
                      <Text style={styles.heading}>{bookDetaildata?.heading}</Text>
                      <TouchableOpacity onPress={() => setShareModalVisible(true)}>
                        <Image
                          source={ImagePath?.share}
                          style={styles.shareicon}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.subheading}>
                      ({bookDetaildata?.subheading})
                    </Text>

                    <View style={styles.imagecontainer}>
                      {bookDetaildata?.images?.[0] && (
                        <View style={{ elevation: 4 }}>
                          <Image
                            key={0}
                            source={{
                              uri: `${imagebaseurl}${bookDetaildata.images[0]}`,
                            }}
                            style={styles.book}
                          />
                        </View>
                      )}
                      <View style={styles.imagesider}>
                        <Text style={styles.paperback}>
                          Paperback - 8 April 2024
                        </Text>

                        <Text style={styles.by}>
                          by
                          <Text style={styles.name}>
                            {' '}
                            {bookDetaildata?.author}{' '}
                          </Text>
                          <Text>(Author)</Text>
                        </Text>
                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.rating}
                          onPress={() => setreviewModalVisible(true)}>
                          <Text style={styles.ratingText}>
                            {formatednumber.toFixed(2)}
                          </Text>
                          <Stars
                            default={bookDetaildata?.rating}
                            count={5}
                            half={true}
                            disabled
                            fullStar={
                              <Icon
                                name={'star'}
                                size={14}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                              />
                            }
                            emptyStar={
                              <Icon
                                name={'star-outline'}
                                size={14}
                                color={ratingcolor}
                                style={[
                                  styles.myStarStyle,
                                  styles.myEmptyStarStyle,
                                ]}
                              />
                            }
                            halfStar={
                              <Icon
                                name={'star-half-full'}
                                size={14}
                                color={ratingcolor}
                                style={[styles.myStarStyle]}
                              />
                            }
                          />
                          <TouchableOpacity
                            style={{ paddingHorizontal: '2%' }}
                            onPress={() =>
                              scrollToSection(width > 500 ? 11500 : 6050)
                            }>
                            <Entypo
                              name="chevron-thin-down"
                              size={15}
                              color={BLACK}
                            />
                          </TouchableOpacity>
                          {/*COMMON MODAL COMPONENT */}

                          <Text
                            onPress={() =>
                              scrollToSection(width > 500 ? 11500 : 5800)
                            }
                            style={styles.rate}>
                            {bookDetaildata?.no_of_ratings} ratings
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.bestbox}>
                          <View style={styles.bestsellerbox}>
                            <Text style={styles.seller}># 1 Best Seller</Text>
                          </View>

                          <Text style={styles.exam}>in Competitive Exam</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.BookbottomContainer}>
                      <TouchableOpacity
                        onPress={openModal}
                        style={styles.youtubecontainer}>
                        <View style={styles.red}>
                          <AntDesign
                            name="caretright"
                            size={ScreenRatio(2)}
                            color={WHITE}
                          />
                        </View>
                     
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.quickView}
                  onPress={() => handleOpenquickview(Quickimages[0])}>
                  <Text style={styles.quick}>Quick View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graybox}>
                  <Text style={styles.Iit}>Be an IITian </Text>
                  <Text style={styles.go}>Go</Text>
                  <Text style={styles.crack}>Crack it!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readsamplebox}
                  onPress={() => {
                    setOpenReadsampleModal(true);
                    setloader(true);
                    // setTimeout(()=>{
                    //   setloader(false)
                    // },3000)
                  }}>
                  <Text style={styles.readsampletext}>Read Sample </Text>
                </TouchableOpacity>
              
              </View>
            </View>
            :

             <View style={styles.aboutbookTab}>
<View style={{flexDirection:"row",marginBottom:"5%"}}>

             <View style={styles.imagecontainerTab}>
               {bookDetaildata?.images?.[0] && (
                 <View style={{ elevation: 4 }}>
                   <Image
                     key={0}
                     source={{
                       uri: `${imagebaseurl}${bookDetaildata.images[0]}`,
                     }}
                     style={styles.bookTab}
                   />
                 </View>
               )}
             
             </View>
<View style={{paddingHorizontal:"4%"}}>
<Text numberOfLines={1} style={styles.heading}>{bookDetaildata?.heading}</Text>
            
            <Text numberOfLines={1}  style={styles.subheading}>
              ({bookDetaildata?.subheading})
            </Text>


            <View style={styles.imagesider}>
                 <Text style={styles.paperback}>
                   Paperback - 8 April 2024
                 </Text>

                 <Text style={styles.by}>
                   by
                   <Text style={styles.name}>
                     {' '}
                     {bookDetaildata?.author}{' '}
                   </Text>
                   <Text>(Author)</Text>
                 </Text>
                 <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.rating}
                   onPress={() => setreviewModalVisible(true)}>
                   <Text style={styles.ratingText}>
                     {formatednumber.toFixed(2)}
                   </Text>
                   <Stars
                     default={bookDetaildata?.rating}
                     count={5}
                     half={true}
                     disabled
                     fullStar={
                       <Icon
                         name={'star'}
                         size={isTablet?width*0.025:14}
                         color={ratingcolor}
                         style={[styles.myStarStyle]}
                       />
                     }
                     emptyStar={
                       <Icon
                         name={'star-outline'}
                         size={isTablet?width*0.025:14}
                         color={ratingcolor}
                         style={[
                           styles.myStarStyle,
                           styles.myEmptyStarStyle,
                         ]}
                       />
                     }
                     halfStar={
                       <Icon
                         name={'star-half-full'}
                         size={isTablet?width*0.025:14}
                         color={ratingcolor}
                         style={[styles.myStarStyle]}
                       />
                     }
                   />
                   <TouchableOpacity
                     style={{ paddingHorizontal: '2%' }}
                     onPress={() =>
                       scrollToSection(width > 500 ? 11500 : 6050)
                     }>
                     <Entypo
                       name="chevron-thin-down"
                       size={isTablet?width*0.022:15}
                       color={BLACK}
                     />
                   </TouchableOpacity>
                   {/*COMMON MODAL COMPONENT */}

                   <Text
                     onPress={() =>
                       scrollToSection(width > 500 ? 11500 : 5800)
                     }
                     style={styles.rate}>
                     {bookDetaildata?.no_of_ratings} ratings
                   </Text>
                 </TouchableOpacity>
                 <View style={styles.bestbox}>
                   <View style={styles.bestsellerbox}>
                     <Text style={styles.seller}># 1 Best Seller</Text>
                   </View>

                   <Text style={styles.exam}>in Competitive Exam</Text>
                 </View>
               </View>

               <View style={styles.shippingTab}>
              <Shipping />
            </View>
</View>
</View>

             <View style={styles.BookbottomContainer}>
               <TouchableOpacity
                 onPress={openModal}
                 style={styles.youtubecontainer}>
                 <View style={styles.red}>
                   <AntDesign
                     name="caretright"
                     size={ScreenRatio(isTablet?1.5:2)}
                     color={WHITE}
                   />
                 </View>
               </TouchableOpacity>

               <TouchableOpacity
                 style={styles.quickView}
                 onPress={() => handleOpenquickview(Quickimages[0])}>
                 <Text style={styles.quick}>Quick View</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.graybox}>
                 <Text style={styles.Iit}>Be an IITian </Text>
                 <Text style={styles.go}>Go</Text>
                 <Text style={styles.crack}>Crack it!</Text>
               </TouchableOpacity>
               <TouchableOpacity
              style={styles.readsampleboxTab}
              onPress={() => {
                setOpenReadsampleModal(true);
                setloader(true);
                // setTimeout(()=>{
                //   setloader(false)
                // },3000)
              }}>
              <Text style={styles.readsampletext}>Read Sample </Text>
            </TouchableOpacity>
             </View>
           </View>
             }

              {/*Price Category Component */}
              <PriceCategorycard
                Paperpricecategory={Paperpricecategory}
                selectedPaperbox={selectedPaperbox}
                handleselectedpaper={handleselectedpaper}
                onPress={() => {
                  navigation.navigate('Buynow');
                }}
              />
              {
                !isTablet && <View style={styles.shipping}>
                  <Shipping />
                </View>
              }
              {/*HTML RENDER COMPONENT */}
              <HtmlrenderDetailpage item={htmlContent} />

              <View style={{
                backgroundColor: inputBordercolor,
                marginHorizontal: ScreenRatio(2.5),
                marginTop: ScreenRatio(2),
                marginBottom: ScreenRatio(0.5),
                height: ScreenRatio(0.06)
              }}
              />

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: '1%',
                  borderColor: inputBordercolor,
                }}>
                {isVisible && (
                  <TouchableOpacity
                    onPress={handleprev}
                    style={styles.backarrow}>
                    <Entypo
                      name="chevron-with-circle-left"
                      size={ScreenRatio(isTablet?3:2)}
                      color={isTablet?DARKGRAY:GRAY}
                    />
                  </TouchableOpacity>
                )}
                <ScrollView
                  overScrollMode="never"
                  horizontal
                  ref={scrollref}
                  style={{ left: '1%' }}
                  pagingEnabled={true}
                  contentContainerStyle={styles.publisherscroll}
                  showsHorizontalScrollIndicator={false}>
                  {publisDetail?.map((item, index) => {
                    return <Publish item={item} />;
                  })}
                  <TouchableOpacity

                    onPress={() =>
                      scrollToSection(height * 7.3)
                    }>
                    <Text style={styles.alldetail}>{`See all\ndetails`}</Text>
                  </TouchableOpacity>
                </ScrollView>
                {!isVisible && (
                  <TouchableOpacity
                    onPress={handlenext}
                    style={styles.nextarrow}>
                    <Entypo
                      name="chevron-with-circle-right"
                      size={ScreenRatio(isTablet?3:2)}
                      color={isTablet?DARKGRAY:GRAY}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={{
                marginTop: ScreenRatio(0.5),
                backgroundColor: inputBordercolor,
                marginHorizontal: ScreenRatio(2.5),
                marginBottom: ScreenRatio(isTablet ? 3.3 : 5),
                height: ScreenRatio(0.01)
              }}

              />
            {
              !isTablet?
              <View style={styles.oldissuecontainer}>
              <View style={styles.oldissuebox}>
                <Text style={styles.oldissuetext}>Old Issue</Text>
              </View>
              <Oldissue item={bookDetaildata} />
            </View>
            :  <View style={{}}>
            <Oldissue item={bookDetaildata} />
          </View>
            }

              {/*REVIEW COMPONENT*/}
              <View style={styles.reviewContainer}>
                <Text style={styles.reviewtitle}>
                  Recommended/Review by Topper's & Teacher's
                </Text>

                <ScrollView
                  overScrollMode="never"
                  horizontal={isTablet ? true : false}
                  contentContainerStyle={styles.reviewscroll}
                  showsHorizontalScrollIndicator={false}>
                  {Topper.map((item, index) => {
                    return <Reviewscard item={item} index={index} />;
                  })}
                </ScrollView>
              </View>
              {/*FrequentlyBought Component */}
              <View style={styles.frequentlyContainer}>
                <Text style={styles.frequentlyText}>
                  Frequently Bought Together
                </Text>
                <FrequentlyBought
                  FreqCategory={FreqCategory}
                  selectedfreqid={selectedfreqid}
                  handlefreqidtoggle={handlefreqidtoggle}
                />
                <ViewAll title={'View All'} customeStyle={styles.viewallbox} />
              </View>
              {/*POPULAR BOOK */}
              <Text style={styles.popularTitle2}>
                Popular books related to the Exams
              </Text>
              <View style={styles.popularbookcontainer}>
                <FlatList
                  horizontal
                  overScrollMode="never"
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderPopularbook}
                  contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
                />
              </View>
              <ViewAll
                title={'View All'}
                customeStyle={{
                  marginLeft:isTablet?'4':'5%',
                  marginTop: '2%',
                  marginBottom: isTablet?'4%':'9%',
                }}
              />
              {/*POPULAR TITLE BY AUTHOR */}
              <Text style={styles.popularTitle}>
                Popular titles by this Author
              </Text>
              <View style={styles.popularbookcontainer}>
                <FlatList
                  horizontal
                  overScrollMode="never"
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderPopularbook}
                  contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
                />
              </View>
              {/*View All */}
              <ViewAll
                title={'View All'}
                customeStyle={{ marginVertical: '3%', marginLeft:isTablet?"4%":'5%' }}
              />

              {/*Test Series Component */}

              <Text style={styles.latest}>Latest Test Series</Text>
              <Text style={styles.enhance}>
                Enhance your exam readiness with our latest test series. Access
                comprehensive practice materials tailored for your success.
              </Text>
              <View style={styles.swiperontestseries}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  overScrollMode="never"
                  data={swiperData}
                  renderItem={renderItem}
                  contentContainerStyle={{ paddingHorizontal: '2%' }}
                />
              </View>
              {/*View All */}
              <ViewAll
                title={'View All'}
                customeStyle={{ marginTop: '3%', marginBottom: isTablet?'7%':'10%', marginLeft: "5%" }}
              />


{
                  isTablet ?
                //   <View style={{ flexDirection: "row", width: width, backgroundColor: WHITE, marginBottom: "10%" }}>
                //   <View style={styles.animationtextTab}>
                //     <Text style={styles.heading}>
                //       Excel Exams with
                //       <Text style={styles.headingArihant}> Arihant Plus</Text>{' '}
                //       Online Masterclass
                //     </Text>
                //     <Text style={styles.subHeading}>
                //       Gain access to expert-led sesssions, comprehensive study
                //       materials, and personalized guidance designed to help you
                //       master every subject and achieve top scores. Join now and
                //       unlock your potential with Arihant
                //     </Text>
                //     <TouchableOpacity style={{}} activeOpacity={0.8}>
                //       <Image source={ImagePath.explorebtn} style={styles.exploreimg} />
                //     </TouchableOpacity>
                //   </View>


                //   <AnimatedExplore isanimating={isanimationtrue} />

                // </View>
                null
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



              {/* <View style={{flexDirection:"row",width:width,backgroundColor:WHITE,marginBottom:"5%"}}>
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
          <Image source={ImagePath.explorebtn} style={styles.exploreimg}/>
        </TouchableOpacity>
              </View>
              <AnimatedExplore isanimating={isanimationtrue} /> 

</View> */}
              {/*Animated Component*/}
              {/* <View style={styles.animationtext}>
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
              </View>
              <AnimatedExplore isanimating={isanimationtrue} /> */}
              {/*Publisher Detailed Information */}

              <PublisherDetail item={bookDetaildata?.specifications} />
              {/*OverAllReviwChart */}
              {!isTablet?
              <View>
              <Text style={styles.reviewcardtext}>Reviews</Text>
              <Reviews
                ReviewData={ReviewData}
                inModal={false}
                customStyle={styles.reviewmodalBotttom}
              />
              <Text style={styles.reviewthis}>Review this product</Text>
              <Text style={styles.sharethought}>
                Share your thoughts with other customers
              </Text>
              {/*Button Component */}
              <Button
                text={'Write a product review'}
                customStyles={styles.writereviewButton}
                textStyle={styles.reviewbuttontext}
              />
              {/*Top reviews By Customers */}
              <View style={styles.topreviewTitle}>
                <Text style={styles.topreviewText}>Top review</Text>
              </View>
              <Text style={styles.indiatopreviewstext}>
                Top reviews from India
              </Text>
              {/* <ScrollView
                overScrollMode="never"
                contentContainerStyle={styles.topreviewScroll}
                showsHorizontalScrollIndicator={false}>
                {topreview?.map((item, index) => {
                  return <Topreview item={item} index={index} />;
                })}
              </ScrollView> */}
              <ScrollView
                overScrollMode="never"
                contentContainerStyle={styles.topreviewScroll}
                showsHorizontalScrollIndicator={false}>
                {topreview?.slice(0, visibleCount).map((item, index) => {
                  return <Topreview item={item} index={index} key={index} />;
                })}
              </ScrollView>
              {visibleCount >= topreview.length ? (
                <ViewAll
                  title={'View Less'}
                  Icon2={'angle-up'}
                  onPress={handleToggleView}
                  customeStyle={styles.reviewviewmorebutton}
                />
              ) : (
                <ViewAll
                  title={'View More'}
                  Icon2={'angle-down'}
                  onPress={handleToggleView}
                  customeStyle={styles.reviewviewmorebutton}
                />
              )}
           </View>
           :
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:width}}>
            <View style={{marginLeft:isTablet?'2.5%':0,width:width/2.4}}>
           <Reviews
             ReviewData={ReviewData}
             inModal={false}
             customStyle={styles.reviewmodalBotttom}
           />
           <Text style={styles.reviewthis}>Review this product</Text>
           <Text style={styles.sharethought}>
             Share your thoughts with other customers
           </Text>
           {/*Button Component */}
           <Button
             text={'Write a product review'}
             customStyles={styles.writereviewButton}
             textStyle={styles.reviewbuttontext}
           />
           </View>

           
           <View>

           {/*Top reviews By Customers */}
           <View style={styles.topreviewTitle}>
             <Text style={styles.topreviewText}>Top review</Text>
           </View>
           <Text style={styles.indiatopreviewstext}>
             Top reviews from India
           </Text>
           {/* <ScrollView
             overScrollMode="never"
             contentContainerStyle={styles.topreviewScroll}
             showsHorizontalScrollIndicator={false}>
             {topreview?.map((item, index) => {
               return <Topreview item={item} index={index} />;
             })}
           </ScrollView> */}
           <ScrollView
             overScrollMode="never"
             contentContainerStyle={styles.topreviewScroll}
             showsHorizontalScrollIndicator={false}>
             {topreview?.slice(0, 2).map((item, index) => {
               return <Topreview item={item} index={index} key={index} />;
             })}
           </ScrollView>
           {/* {visibleCount >= topreview.length ? (
             <ViewAll
               title={'View Less'}
               Icon2={'angle-up'}
               onPress={handleToggleView}
               customeStyle={styles.reviewviewmorebutton}
             />
           ) : (
             <ViewAll
               title={'View More'}
               Icon2={'angle-down'}
               onPress={handleToggleView}
               customeStyle={styles.reviewviewmorebutton}
             />
           )} */}
           </View>
        </View>
           }
            </>
          ) : (
            <View style={styles.datanotfound}>
              <Text style={styles.notfoundtext}>Data not found!!</Text>
            </View>
          )}
        </ScrollView>
      )}

      <ModalCommon
        visible={sharemodalVisible}
        animationType={'slide'}
        onClose={() => setreviewModalVisible(false)}
        CustomModalbox={styles.reviwmodalbox2}
        showclose={false}
        showheading={true}
        color={DARKGRAY}>
        <View>
          <Text style={styles.shareText}>Share</Text>
          <View style={styles.sharecontent}>
            <Feather name="copy" size={25} color="skyblue" />
            <Fontawesome name="whatsapp" size={25} color="green" />
            <Fontawesome name="twitter" size={25} color="skyblue" />
            <Entypo name="facebook-with-circle" size={25} color="skyblue" />
            <Fontawesome name="linkedin-square" size={25} color="skyblue" />
          </View>
          <Button
            text={'Close'}
            customStyles={styles.shareCloseButton}
            onPress={() => setShareModalVisible(false)}
          />
        </View>
      </ModalCommon>

      {/*COMMON MODAL */}
      <ModalCommon
        visible={isquickviewModalVisible}
        animationType={'slide'}
        onClose={() => setQuickviewModalVisible(false)}
        CustomModalbox={styles.quickviewmodalbox}
        showclose={true}
        color={DARKGRAY}
        customStyleforClose={styles.quickmodalheading}
        crossbuttonStyle={{
          height: height * 0.038,
          width: height * 0.038,
        }}>
        <ScrollView>
          <View style={styles.viewimagecontainer}>
            <Image
              source={selectedquickViewimage.image}
              style={styles.quickimage}
            />
          </View>
          <ScrollView
            // overScrollMode="never"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageviewscroll}>
            {Quickimages.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.imageouterbox}
                  onPress={() => setSelectedquickViewimage(item)}>
                  <Image
                    key={index}
                    source={item.image}
                    style={selectedquickViewimage?.id === item?.id ?
                      styles.quickViewscrollimage1
                      : styles.quickViewscrollimage}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </ScrollView>
      </ModalCommon>
      <ModalCommon
        visible={isreviewModalVisible}
        animationType={'slide'}
        onClose={() => setreviewModalVisible(false)}
        CustomModalbox={styles.reviwmodalbox}
        // crossbuttonStyle={{}}
        showclose={true}
        showheading={true}
        heading={'Reviews'}
        color={DARKGRAY}
        customStyleforClose={styles.modalheading}>
        <Reviews
          Modelwidth={true}
          ReviewData={ReviewData}
          customStyle={styles.reviewmodal}
        />
        <Button
          vectorIcon2={'angle-right'}
          text={'See Customer Reviews'}
          vector2color={GRAY}
          onPress={() => {
            setreviewModalVisible(false);
            scrollToSection(width > 500 ? 11500 : 5800);
          }}
          customStyles={styles.seeCustomerbutton}
          textStyle={styles.seeCustomerbuttontext}
        />
      </ModalCommon>
      <ModalCommon
        visible={openReadsampleModal}
        animationType={'slide'}
        onClose={() => setOpenReadsampleModal(false)}
        CustomModalbox={styles.customreadsamplebox}
        showclose={true}
        color={true}
        crossbuttonStyle={{
          height: height * 0.035,
          width: height * 0.035,
          position:isTablet?'relative':null,
          top:isTablet?'100%':null
        }}
        customStyleforClose={styles.readsampleclose}>
        <View style={styles.modalContainer}>
          {readsampleheaddata.map(item => {
            return <GuideCard item={item} />;
          })}

                      {loader ? (
                        <View style={styles.loaderContainer}>
                          <ActivityIndicator size="large" color="orange" />
                          <Text>Loading PDF...</Text>
                        </View>
                      ):null}

          <Pdf
            trustAllCerts={false}
            onLoadComplete={handleOnLoad}
            source={{ uri: pdflink, cache: true,method:'GET' }} // Use the saved link
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
              setloader(false)
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
      </ModalCommon>
      {modalVisible ? (
        <VideoPlayer
          SETModalVisible={setModalVisible}
          setDisableScroll={setDisableScroll}
          videoSource={{ uri: sampleVideo }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Bookdetail;
